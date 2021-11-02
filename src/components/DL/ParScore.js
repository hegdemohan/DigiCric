import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  Card,
  CardBody
} from "reactstrap";
import { Form } from "semantic-ui-react";
import { parScore, resetParScore } from "../actions/ParScorePrediction";
import { resetTargetScore } from "../actions/DLTargetScorePrediction";

import "./ParScore.css";
class ParScore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.getParScore = this.getParScore.bind(this);
  }

  componentWillMount() {
    this.props.resetTargetScore()
    this.props.resetParScore();
  }

  toggleModal() {
    this.setState({ visible: !this.state.visible });
  }
  handleFormChange(e) {
    if (this.props.payload !== undefined) {
      this.props.payload[1][e.target.id] = e.target.value;
    }
  }
  getParScore() {
    this.props.parScore(this.props.payload);
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <>
        {this.props.score !== undefined && this.props.payload !== undefined ? (
          <Card>
            <CardBody>
              {this.props.payload[1].runsScored_2 > this.props.score.value ? (
                <>
                  <b>PAR SCORE: {this.props.score.value}</b>
                  <br />
                  <b>CURRENT SCORE: {this.props.payload[1].runsScored_2}</b>
                  <br />
                  <b>
                    Since Team B scored more than the predicted Par Score which
                    means,{" "}
                  </b>
                  <b>
                    <mark>TEAM B WON THE MATCH</mark>
                  </b>
                  <div className="pyro">
                    <div className="before"></div>
                    <div className="after"></div>
                  </div>
                </>
              ) : (
                  <>
                    <b>PAR SCORE: {this.props.score.value}</b>
                    <br />
                    <b>CURRENT SCORE: {this.props.payload[1].runsScored_2}</b>
                    <br />
                    <b>
                      Since Team B scored less than the predicted Par Score which
                      means,
                  </b>
                    <b>
                      <mark>TEAM A WON THE MATCH</mark>
                    </b>
                    <div className="pyro">
                      <div className="before"></div>
                      <div className="after"></div>
                    </div>
                  </>
                )}
            </CardBody>
          </Card>
        ) : (
            ""
          )}

        <Modal
          isOpen={this.state.visible}
          className="modal-size"
        >
          <ModalHeader toggle={this.toggleModal}>
            Who win the Match ???
          </ModalHeader>
          <ModalBody>
            <Form.Group>
              <div className="mb-2">
                <Form.Field>
                  <Label for="oversLeftAtTermination_2">
                    Overs Left at Termination
                  </Label>
                  <Input
                    type="number"
                    name="oversLeftAtTermination_2"
                    onChange={this.handleFormChange}
                    //   value={values.suspension[0].initialOvers}
                    id="oversLeftAtTermination_2"
                    placeholder="e.g. 8"
                  />
                </Form.Field>
              </div>
              <div className="mb-2">
                <Form.Field>
                  <Label for="wicketsLostAtTermination_2">
                    Wickets Lost at Termination
                  </Label>
                  <Input
                    type="number"
                    name="wicketsLostAtTermination_2"
                    onChange={this.handleFormChange}
                    //   value={values.suspension[0].initialOvers}
                    id="wicketsLostAtTermination_2"
                    placeholder="e.g. 2"
                  />
                </Form.Field>
              </div>
              <div className="mb-2">
                <Form.Field>
                  <Label for="runsScored_2">
                    Runs Scored
                  </Label>
                  <Input
                    type="number"
                    name="runsScored_2"
                    onChange={this.handleFormChange}
                    //   value={values.suspension[0].initialOvers}
                    id="runsScored_2"
                    placeholder="e.g. 170"
                  />
                </Form.Field>
              </div>
            </Form.Group>
            <button
              className="btn btn-ghost-success btn-md"
              onClick={this.getParScore}
            >
              <i className="fa fa-lightbulb-o"></i> Get the Result
            </button>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = state => ({
  payload: state.innings.ing_detail,
  score: state.parScoreDetails.parScore
});
export default connect(mapStateToProps, { parScore, resetParScore, resetTargetScore })(ParScore);
