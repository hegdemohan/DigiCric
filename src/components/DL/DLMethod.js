import React from "react";
import { connect } from "react-redux";
import { Formik, Field, FieldArray } from "formik";
import { Form } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { Col, Card, CardBody, CardHeader, Input, Row, Label } from "reactstrap";
import "./DLMethod.css";
import { DLTargetScorePrediction } from "../actions/DLTargetScorePrediction";
import { updateInnings } from "../actions/UpdateInnings";

var emptySuspension = {
  oversLeft: "",
  wicketsLost: "",
  oversLost: ""
};

// var payload = [
//   {
//     initialOvers_1: 0,
//     runsScored_1: 0,
//     interruptions_1: [],
//     oversLeftAtTermination_1: 0,
//     wicketsLostAtTermination_1: 0
//   },
//   {
//     initialOvers_2: 0,
//     runsScored_2: 0,
//     interruptions_2: [],
//     oversLeftAtTermination_2: 0,
//     wicketsLostAtTermination_2: 0
//   }
// ];

// const handleFormChange_1 = e => {
//   payload[0][e.target.id] = e.target.value;
// };
// const handleFormChange_2 = e => {
//   payload[1][e.target.id] = e.target.value;
// };
const DLMethod = ({ DLTargetScorePrediction, targetScore, updateInnings }) => (
  <React.Fragment>
    <div className="animated fadeIn">
      <Row>
        <Col xs="12">
          <Card>
            <CardHeader>
              <h2>D/L Method</h2>
            </CardHeader>
            <CardBody>
              <>
                <Formik
                  initialValues={
                    [
                      {
                        initialOvers_1: "",
                        runsScored_1: "",
                        interruptions_1: [],
                        oversLeftAtTermination_1: "",
                        wicketsLostAtTermination_1: ""
                      },
                      {
                        initialOvers_2: "",
                        runsScored_2: "",
                        interruptions_2: [],
                        oversLeftAtTermination_2: "",
                        wicketsLostAtTermination_2: ""
                      }
                    ]
                  }
                  onSubmit={values => {
                    // if (values[0].interruptions_1.length > 0) {
                    //   for (var i = 0; i < values[0].interruptions_1.length; i++) {
                    //     payload[0].interruptions_1.push(
                    //       values[0].interruptions_1[i]
                    //     );
                    //   }
                    // }
                    // if (values[1].interruptions_2.length > 0) {
                    //   for (var j = 0; j < values[1].interruptions_2.length; j++) {
                    //     payload[1].interruptions_2.push(
                    //       values[1].interruptions_2[j]
                    //     );
                    //   }
                    // }
                    DLTargetScorePrediction(values);
                    updateInnings(values);
                  }}
                >
                  {props => {
                    const { values, handleSubmit } = props;
                    return (
                      <>
                        <Form onSubmit={handleSubmit}>
                          <Row>
                            <Col xs="4">
                              <h3
                                style={{
                                  fontWeight: "bold"
                                }}
                              >
                                TEAM A
                              </h3>

                              <Form.Group>
                                <div className="mb-2">
                                  {/* <Form.Field> */}
                                  <Label for={`[0].initialOvers_1`}>
                                    Available Overs
                                    </Label>
                                  <Form.Field
                                    control={Field}
                                    type="number"
                                    name={`[0].initialOvers_1`}
                                    // onChange={handleFormChange_1}
                                    id={`[0].initialOvers_1`}
                                    placeholder="e.g. 50"
                                  />
                                  {/* </Form.Field> */}
                                </div>
                              </Form.Group>
                              <FieldArray
                                name={`[0].interruptions_1`}
                                render={arrayHelpers_1 => (
                                  <div>
                                    {values[0].interruptions_1 &&
                                      values[0].interruptions_1.length > 0 ? (
                                        <>
                                          {values[0].interruptions_1.map(
                                            (suspension, index) => (
                                              <div key={index}>
                                                <b>Interruption #{index + 1}</b>
                                                <div className="mb-2">
                                                  <Label
                                                    for={`[0].interruptions_1[${index}].oversLeft`}
                                                  >
                                                    Overs Left
                                                </Label>
                                                  <Form.Field
                                                    control={Field}
                                                    type="number"
                                                    name={`[0].interruptions_1[${index}].oversLeft`}
                                                    id={`[0].interruptions_1[${index}].oversLeft`}
                                                    placeholder="e.g. 20"
                                                  />
                                                </div>
                                                <div className="mb-2">
                                                  <Label
                                                    for={`[0].interruptions_1[${index}].oversLost`}
                                                  >
                                                    Overs Lost
                                                </Label>
                                                  <Form.Field
                                                    control={Field}
                                                    type="number"
                                                    name={`[0].interruptions_1[${index}].oversLost`}
                                                    id={`[0].interruptions_1[${index}].oversLost`}
                                                    placeholder="e.g. 10"
                                                  />
                                                </div>
                                                <div className="mb-2">
                                                  <Label
                                                    for={`[0].interruptions_1[${index}].wicketsLost`}
                                                  >
                                                    Wickets Lost
                                                </Label>
                                                  <Form.Field
                                                    control={Field}
                                                    type="number"
                                                    name={`[0].interruptions_1[${index}].wicketsLost`}
                                                    id={`[0].interruptions_1[${index}].wicketsLost`}
                                                    placeholder="e.g. 5"
                                                  />
                                                </div>
                                                <Row className="mx-2 my-2">
                                                  <button
                                                    className="btn btn-ghost-danger btn-md"
                                                    type="button"
                                                    onClick={() =>
                                                      arrayHelpers_1.remove(index)
                                                    }
                                                  >
                                                    <i className="fa fa-ban"></i>{" "}
                                                    Delete
                                                </button>
                                                  {values[0].interruptions_1.length -
                                                    1 ===
                                                    index && (
                                                      <div className="form-btn-centered ml-3">
                                                        <button
                                                          className="btn btn-ghost-info btn-md"
                                                          type="button"
                                                          onClick={() =>
                                                            arrayHelpers_1.push(
                                                              emptySuspension
                                                            )
                                                          }
                                                        >
                                                          <i className="fa fa-plus"></i>{" "}
                                                          Add more
                                                    </button>
                                                      </div>
                                                    )}
                                                </Row>
                                              </div>
                                            )
                                          )}
                                        </>
                                      ) : (
                                        <div className="mb-2">
                                          <button
                                            className="btn btn-ghost-danger btn-md"
                                            type="button"
                                            onClick={() =>
                                              arrayHelpers_1.push(emptySuspension)
                                            }
                                          >
                                            Are there any Interruptions?? Click
                                            here...
                                        </button>
                                        </div>
                                      )}
                                  </div>
                                )}
                              />
                              <div className="mb-2">
                                {/* <Form.Field> */}
                                <Label for={`[0].runsScored_1`}>Runs Scored</Label>
                                <Form.Field
                                  control={Field}
                                  type="number"
                                  name={`[0].runsScored_1`}
                                  // onChange={handleFormChange_1}
                                  id={`[0].runsScored_1`}
                                  placeholder="e.g. 200"
                                />
                                {/* </Form.Field> */}
                              </div>
                            </Col>

                            <Col xs="4">
                              <h3
                                style={{
                                  fontWeight: "bold"
                                }}
                              >
                                TEAM B
                              </h3>

                              <Form.Group>
                                <div className="mb-2">
                                  {/* <Form.Field> */}
                                  <Label for={`[1].initialOvers_2`}>
                                    Available Overs
                                    </Label>
                                  <Form.Field
                                    control={Field}
                                    name={`[1].initialOvers_2`}
                                    id={`[1].initialOvers_2`}
                                    type="number"
                                    // onChange={handleFormChange_2}
                                    placeholder="e.g. 50"
                                  />
                                  {/* </Form.Field> */}
                                </div>
                              </Form.Group>
                              <FieldArray
                                name={`[1].interruptions_2`}
                                render={arrayHelpers_2 => (
                                  <div>
                                    {values[1].interruptions_2 &&
                                      values[1].interruptions_2.length > 0 ? (
                                        <>
                                          {values[1].interruptions_2.map(
                                            (suspension, index) => (
                                              <div key={index}>
                                                <b>Interruption #{index + 1}</b>
                                                <div className="mb-2">
                                                  <Label
                                                    for={`[1].interruptions_2[${index}].oversLeft`}
                                                  >
                                                    Overs Left
                                                </Label>
                                                  <Form.Field
                                                    control={Field}
                                                    type="number"
                                                    name={`[1].interruptions_2[${index}].oversLeft`}
                                                    id={`[1].interruptions_2[${index}].oversLeft`}
                                                    placeholder="e.g. 35"
                                                  />
                                                </div>
                                                <div className="mb-2">
                                                  <Label
                                                    for={`[1].interruptions_2[${index}].oversLost`}
                                                  >
                                                    Overs Lost
                                                </Label>
                                                  <Form.Field
                                                    control={Field}
                                                    type="number"
                                                    name={`[1].interruptions_2[${index}].oversLost`}
                                                    id={`[1].interruptions_2[${index}].oversLost`}
                                                    placeholder="e.g. 10"
                                                  />
                                                </div>
                                                <div className="mb-2">
                                                  <Label
                                                    for={`[1].interruptions_2[${index}].wicketsLost`}
                                                  >
                                                    Wickets Lost
                                                </Label>
                                                  <Form.Field
                                                    control={Field}
                                                    type="number"
                                                    name={`[1].interruptions_2[${index}].wicketsLost`}
                                                    id={`[1].interruptions_2[${index}].wicketsLost`}
                                                    placeholder="e.g. 3"
                                                  />
                                                </div>
                                                <Row className="mx-2 my-2">
                                                  <button
                                                    className="btn btn-ghost-danger btn-md"
                                                    type="button"
                                                    onClick={() =>
                                                      arrayHelpers_2.remove(index)
                                                    }
                                                  >
                                                    <i className="fa fa-ban"></i>{" "}
                                                    Delete
                                                </button>
                                                  {values[1].interruptions_2.length -
                                                    1 ===
                                                    index && (
                                                      <div className="form-btn-centered ml-3">
                                                        <button
                                                          className="btn btn-ghost-info btn-md"
                                                          type="button"
                                                          onClick={() =>
                                                            arrayHelpers_2.push(
                                                              emptySuspension
                                                            )
                                                          }
                                                        >
                                                          <i className="fa fa-plus"></i>{" "}
                                                          Add more
                                                    </button>
                                                      </div>
                                                    )}
                                                </Row>
                                              </div>
                                            )
                                          )}
                                        </>
                                      ) : (
                                        <div className="mt-2 mb-2">
                                          <button
                                            className="btn btn-ghost-danger btn-md"
                                            type="button"
                                            onClick={() =>
                                              arrayHelpers_2.push(emptySuspension)
                                            }
                                          >
                                            Are there any Interruptions?? Click
                                            here...
                                        </button>
                                        </div>
                                      )}
                                  </div>
                                )}
                              />
                              <div className="mb-2">
                                {/* <Form.Field> */}
                                <Label for={`[1].runsScored_2`}>Runs Scored</Label>
                                <Form.Field
                                  control={Field}
                                  name={`[1].runsScored_2`}
                                  id={`[1].runsScored_2`}
                                  type="number"
                                  // onChange={handleFormChange_2}
                                  placeholder="e.g. 150"
                                />
                                {/* </Form.Field> */}
                              </div>
                            </Col>
                            <Col xs="4">
                              <button
                                className="learn-more"
                                type="submit"
                                style={{ marginLeft: "90px" }}
                              >
                                <span class="circle">
                                  <span class="icon arrow"></span>
                                </span>
                                <span class="button-text">Calculate D/L</span>
                              </button>
                              <div
                                style={{
                                  marginLeft: "52px",
                                  marginTop: "20px"
                                }}
                              >
                                {targetScore !== undefined ? (
                                  <>
                                    <strong>
                                      <mark>
                                        TEAM B's new TargetScore:
                                        {targetScore.value}
                                      </mark>
                                    </strong>
                                  </>
                                ) : (
                                    ""
                                  )}
                              </div>
                              <Route
                                render={({ history }) => (
                                  <button
                                    className="learn-more mt-3"
                                    type="button"
                                    onClick={() => {
                                      history.push("/getResult")
                                    }}
                                    style={{ marginLeft: "90px" }}
                                  >
                                    <span class="circle">
                                      <span class="icon arrow"></span>
                                    </span>
                                    <span class="button-text">
                                      Terminate ???
                                    </span>
                                  </button>
                                )}
                              />
                            </Col>
                          </Row>
                        </Form>
                      </>
                    );
                  }}
                </Formik>
              </>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  </React.Fragment>
);

const mapStateToProps = state => {
  return {
    targetScore: state.targetScoreDetails.targetScore
  };
};

export default connect(mapStateToProps, {
  DLTargetScorePrediction,
  updateInnings
})(DLMethod);
