import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAll, fetchSeriesTeams, fetchSeriesStandings, resetSeriesStats } from '../actions/seriesDetailsActions';
import _ from 'lodash';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import SeriesDetailsModal from './seriesDetailsModal';
import CommonService from '../../commonService';
import './SeriesDetails.css'

import { Col, Card, CardBody, CardHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane, Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

class SeriesDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: new Array(4).fill('1'),
            Series: [],
            inProgressSeries: [],
            upcomingSeries: [],
            completedSeries: [],
            modal: false,
        }

        this.toggle = this.toggle.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleData = this.handleData.bind(this);
        this.commonTable = this.commonTable.bind(this);
        this.getShiledImage = this.getShiledImage.bind(this);
        this.getSeriesDetails = this.getSeriesDetails.bind(this);
        this.getSeriesStats = this.getSeriesStats.bind(this);
    }
    app = CommonService.getAppContext();


    componentDidMount = () => {
        this.props.fetchAll();
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        if (nextProps.seriesDetails != undefined && nextProps.seriesDetails.seriesList !== undefined && nextProps.seriesDetails.seriesList.series.length > 0) {
            this.handleData(nextProps.seriesDetails.seriesList.series);
        }
        // if (nextProps.seriesTeams.seriesTeams.teams.length > 0) {
        //     this.toggleModal();
        // }
    }

    handleData = (seriesList) => {
        let inProgress = [];
        let completed = [];
        let upcoming = [];
        _.forEach(seriesList, (series) => {
            switch (series.status) {
                case "INPROGRESS":
                    inProgress.push(series);
                    break;
                case "COMPLETED":
                    completed.push(series);
                    break;
                case "UPCOMING":
                    upcoming.push(series);
                    break;
                default:
                    return;
            }
        });

        this.setState({
            series: seriesList,
            completedSeries: completed,
            inProgressSeries: inProgress,
            upcomingSeries: upcoming
        });
    }


    toggle(tabPane, tab) {
        const newArray = this.state.activeTab.slice()
        newArray[tabPane] = tab
        this.setState({
            activeTab: newArray,
        });
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal,
        });
    }

    getSeriesDetails = (cell, row) => {
        return (
            <div>
                <a className="anchor" onClick={() => this.getSeriesStats(row.id)}><span><i className="fa fa-eye fa-lg"></i></span></a>
            </div>
        );
    }

    getSeriesStats = (id) => {
        this.props.fetchSeriesTeams(id);
        this.props.fetchSeriesStandings(id);
        this.toggleModal();
    }

    commonTable = (series) => {
        const columns = [
            {
                dataField: 'shieldImageUrl',
                text: '',
                sort: true,
                formatter: this.getShiledImage
            },
            {
                dataField: 'name',
                sort: true,
                text: 'Series Name'
            },
            {
                dataField: 'startDateTime',
                sort: true,
                text: 'Start Date'
            },
            {
                dataField: 'endDateTime',
                sort: true,
                text: 'End Date'
            },
            {
                dataField: '',
                text: '',
                formatter: this.getSeriesDetails
            }
        ];
        const { SearchBar } = Search;
        var options = {
            noDataText: 'No data '
        };
        return (
            <div>
                <ToolkitProvider
                    keyField="id"
                    data={series}
                    columns={columns}
                    options={options}
                    search
                >
                    {
                        props => (
                            <div>
                                <SearchBar {...props.searchProps} />
                                <hr />
                                <BootstrapTable
                                    {...props.baseProps}
                                    bootstrap4
                                    keyField="name"
                                    bordered={false}
                                    pagination={paginationFactory()}
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </div>
        )
    }

    getShiledImage = (cell, row) => {
        return (
            <span className="avatar mb-2 seriesImage">
                <img src={row.shieldImageUrl !== undefined ? row.shieldImageUrl : ""} className="img-avatar" alt="Team Image" />
            </span>
        )
    }

    tabPane() {
        return (
            <>
                <TabPane tabId="1">
                    {this.commonTable(this.state.inProgressSeries)}
                </TabPane>
                <TabPane tabId="2">
                    {this.commonTable(this.state.completedSeries)}
                </TabPane>
                <TabPane tabId="3">
                    {this.commonTable(this.state.upcomingSeries)}
                </TabPane>
            </>
        );
    }

    render = () => {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                        {!this.app.state.loader &&
                            <Modal centered size="xl" isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                                <ModalHeader toggle={this.toggleModal}>{this.props.seriesTeams.meta.seriesName}</ModalHeader>
                                <ModalBody>
                                    <SeriesDetailsModal />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                                </ModalFooter>
                            </Modal>
                        }
                        <Card>
                            <CardHeader>
                                <h3>Series Details</h3>
                            </CardHeader>
                            <CardBody>
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            active={this.state.activeTab[0] === '1'}
                                            onClick={() => { this.toggle(0, '1'); }}
                                        >In Progress</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            active={this.state.activeTab[0] === '2'}
                                            onClick={() => { this.toggle(0, '2'); }}
                                        >Completed</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            active={this.state.activeTab[0] === '3'}
                                            onClick={() => { this.toggle(0, '3'); }}
                                        >Upcomming</NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab[0]}>
                                    {this.tabPane()}
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

SeriesDetails.propTypes = {
    fetchAll: PropTypes.func.isRequired,
    fetchSeriesTeams: PropTypes.func.isRequired,
    fetchSeriesStandings: PropTypes.func.isRequired,
    resetSeriesStats: PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        seriesDetails: state.seriesDetails.seriesDetails,
        seriesTeams: state.seriesDetails.seriesTeams,
        seriesStandings: state.seriesDetails.seriesStandings
    }
}

export default connect(mapStateToProps, { fetchAll, fetchSeriesTeams, fetchSeriesStandings, resetSeriesStats })(SeriesDetails);

