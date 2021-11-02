import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPrediction } from '../actions/scorePredictorActions';
import { Col, Card, CardBody, CardHeader, Input, Row, FormGroup, Button, Label, ButtonGroup } from 'reactstrap';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import _ from "lodash";


class CustomPredictor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accuracy: null,
            predictedScore: null,
            selected: "odi",
            payload: {
                "runs": "",
                "wickets": "",
                "overs": "",
                "maxStrikerScore": "",
                "minStrikerScore": ""
            }
        }
        this.setSelected = this.setSelected.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    setSelected = (val) => {
        let payload = {
            "runs": "",
            "wickets": "",
            "overs": "",
            "maxStrikerScore": "",
            "minStrikerScore": ""
        }
        this.setState({
            selected: val,
            payload: payload,
            accuracy: null,
            predictedScore: null
        });
        this.props.predictionDetails.accuracy = undefined;
    }

    handleFormChange = (e) => {
        let payload = JSON.parse(JSON.stringify(this.state)).payload;
        payload[e.target.name] = e.target.value;
        this.setState({ payload: payload });
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps != this.props) {
            if (this.props.predictionDetails && this.props.predictionDetails.accuracy) {
                this.setState({
                    accuracy: this.props.predictionDetails.accuracy,
                    predictedScore: Math.ceil(parseFloat(this.props.predictionDetails.predictionScore))
                });
            }
        }
    }

    render() {
        const { payload } = this.state;
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                <h3>Custom Score Prediction</h3>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="8">
                                        <ButtonGroup className="mb-2">
                                            <Button color="primary" onClick={() => this.setSelected('odi')} active={this.state.selected === 'odi'}>ODI</Button>
                                            <Button color="primary" onClick={() => this.setSelected('t20')} active={this.state.selected === 't20'}>T20</Button>
                                        </ButtonGroup>
                                        <FormGroup>
                                            <div className="mb-2">
                                                <Label for="runs">Runs Scored</Label>
                                                <Input type="number" name="runs" id="runs" value={payload.runs} onChange={(e) => this.handleFormChange(e)} placeholder="e.g. 200" />
                                            </div>
                                            <div className="mb-2">
                                                <Label for="wickets">Wickets</Label>
                                                <Input type="number" name="wickets" id="wickets" value={payload.wickets} onChange={(e) => this.handleFormChange(e)} placeholder="e.g. 4" />
                                            </div>
                                            <div className="mb-2">
                                                <Label for="overs">Overs Completed</Label>
                                                <Input type="number" name="overs" id="overs" value={payload.overs} onChange={(e) => this.handleFormChange(e)} placeholder="e.g. 20" />
                                            </div>
                                            <div className="mb-2">
                                                <Label for="maxStrikerScore">Runs scored by Batsman #1</Label>
                                                <Input type="number" name="maxStrikerScore" id="maxStrikerScore" value={payload.maxStrikerScore} onChange={(e) => this.handleFormChange(e)} placeholder="e.g. 130" />
                                            </div>
                                            <div className="mb-2">
                                                <Label for="minStrikerScore">Runs scored by Batsman #2</Label>
                                                <Input type="number" name="minStrikerScore" id="minStrikerScore" value={payload.minStrikerScore} onChange={(e) => this.handleFormChange(e)} placeholder="e.g. 85" />
                                            </div>
                                        </FormGroup>
                                        <div>
                                            <button
                                                className="btn btn-ghost-success btn-md"
                                                onClick={() => this.props.fetchPrediction(this.state.selected, this.state.payload)}>
                                                <i className="fa fa-lightbulb-o"></i> Predict
                                         </button>
                                        </div>
                                    </Col>
                                    <Col xs="4">
                                        {
                                            this.state.predictedScore != null ?
                                                <div>
                                                    <div className="m-2 text-info" style={{ fontSize: "20px", textAlign: "center" }}>
                                                        <strong>Predicted Score: {this.state.predictedScore}<br /></strong>
                                                    </div>
                                                    <CircularProgressbarWithChildren value={this.state.accuracy}>
                                                        <img
                                                            style={{ width: 100, marginTop: -5 }}
                                                            src="https://i.imgur.com/b9NyUGm.png"
                                                            alt="doge"
                                                        />
                                                        <div style={{ fontSize: 20, marginTop: -5 }}>
                                                            <strong>{this.state.accuracy}%</strong> Accuracy mate!</div>
                                                    </CircularProgressbarWithChildren>
                                                </div> : null
                                        }
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </div>
        )
    }
}

CustomPredictor.propTypes = {
    fetchPrediction: PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        predictionDetails: state.scorePredictor.predictionDetails,
    }
}

export default connect(mapStateToProps, { fetchPrediction })(CustomPredictor);
