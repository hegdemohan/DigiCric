import React, { Component } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import './SeriesDetails.css'
import { Col, Card, CardBody, CardHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';

class SeriesDetailsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: new Array(4).fill('1'),
        }

        this.toggle = this.toggle.bind(this);
        this.getParticipants = this.getParticipants.bind(this);
        this.pointsTable = this.pointsTable.bind(this);
    }

    toggle(tabPane, tab) {
        const newArray = this.state.activeTab.slice()
        newArray[tabPane] = tab
        this.setState({
            activeTab: newArray,
        });
    }

    logo = (cell, row) => {
        return (
            <span className="avatar mb-2 seriesImage">
                <img src={row.logoUrl !== undefined ? row.logoUrl : ""} className="img-avatar" alt="Team Image" />
            </span>
        )
    }

    pointsTable = (standings) => {
        const columns = [
            {
                dataField: 'logoUrl',
                text: '',
                sort: true,
                formatter: this.logo,
                headerStyle: {
                    textAlign: "center"
                }
            },
            {
                dataField: 'name',
                sort: true,
                text: 'Name',
                headerStyle: {
                    textAlign: "center"
                }
            },
            {
                dataField: 'played',
                sort: true,
                text: 'Matches',
                headerStyle: {
                    textAlign: "center"
                }
            },
            {
                dataField: 'won',
                sort: true,
                text: 'Won',
                headerStyle: {
                    textAlign: "center"
                }
            },
            {
                dataField: 'lost',
                sort: true,
                text: 'Lost',
                headerStyle: {
                    textAlign: "center"
                }
            },
            {
                dataField: 'points',
                sort: true,
                text: 'Total Points',
                headerStyle: {
                    textAlign: "center"
                }
            },
            {
                dataField: 'netRunRate',
                sort: true,
                text: 'Net Run Rate',
                headerStyle: {
                    textAlign: "center"
                }
            },
        ];
        const { SearchBar } = Search;
        const rowStyle = { textAlign: 'center' };
        return (
            <div>
                <ToolkitProvider
                    keyField="id"
                    data={standings}
                    columns={columns}
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
                                    rowStyle={rowStyle}
                                    pagination={paginationFactory()}
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </div>
        )
    }

    getParticipants = () => {
        return (
            <div>
                <Row>
                    <Col>
                        <ListGroup>
                            {
                                this.props.seriesTeams.seriesTeams.teams.map((team) => {
                                    return (
                                        <div>
                                            {team.backgroundImageUrl !== undefined ?
                                                <ListGroupItem style={{
                                                    backgroundImage: `url(${team.backgroundImageUrl})`,
                                                    marginBottom: "20px",
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    fontSize: "18px"
                                                }}>{team.name}</ListGroupItem>
                                                :
                                                <ListGroupItem style={{
                                                    backgroundColor: "blue",
                                                    marginBottom: "20px",
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    fontSize: "18px"
                                                }}>{team.name}</ListGroupItem>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        )
    }

    tabPane() {
        return (
            <>
                <TabPane tabId="1">
                    {this.getParticipants()}
                </TabPane>
                <TabPane tabId="2">
                    {this.pointsTable(this.props.seriesStandings.teams)}
                </TabPane>
            </>
        );
    }

    render = () => {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    active={this.state.activeTab[0] === '1'}
                                    onClick={() => { this.toggle(0, '1'); }}
                                >Participants</NavLink>
                            </NavItem>
                            <NavItem>
                                {
                                    this.props.seriesStandings.teams.length > 0 ? <NavLink
                                        active={this.state.activeTab[0] === '2'}
                                        onClick={() => { this.toggle(0, '2'); }}
                                    >Points Table</NavLink> : null
                                }
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab[0]}>
                            {this.tabPane()}
                        </TabContent>
                    </Col>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        seriesTeams: state.seriesDetails.seriesTeams,
        seriesStandings: state.seriesDetails.seriesStandings
    }
}

export default connect(mapStateToProps, {})(SeriesDetailsModal);

