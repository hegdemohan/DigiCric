import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPrediction } from '../actions/scorePredictorActions';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import _ from "lodash";

class ScorePredictor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accuracy: null,
            predictedScore: null,
            isTest: false,
            isRun: false
        }
    }

    componentDidMount() {
        let payLoad = undefined;
        if (this.props.currentScore.matchDetail !== undefined) {
            // console.log(this.props, "PROPS_INSIDE")
            // this.setState({ predictionDetails: this.props.predictionDetails })
            let innings = _.find(this.props.currentScore.matchDetail.innings, (object) => {
                return object.teamId === this.props.currentScore.matchDetail.teamBatting.id
            });

            payLoad = {
                "runs": innings.runs,
                "wickets": innings.wickets,
                "overs": innings.overs,
                "maxStrikerScore": this.props.currentScore.matchDetail.currentBatters[0] ? this.props.currentScore.matchDetail.currentBatters[0].runs : '0',
                "minStrikerScore": this.props.currentScore.matchDetail.currentBatters[1] ? this.props.currentScore.matchDetail.currentBatters[1].runs : '0'
            }
        }

        if (Object.keys(this.props.predictionDetails).length === 0) {
            this.props.fetchPrediction(this.props.matchDetail.match.cmsMatchType.toLowerCase(), payLoad);
        }
    }


    // componentDidUpdate = (prevState) => {
    //     let payLoad = undefined;
    //     // console.log(prevProps, "PREVPROPS")
    //     console.log(this.props, "current")
    //     this.setState({ predictionDetails: this.props.predictionDetails })
    //     if (prevState !== this.state) {

    //         // this.setState({
    //         //     accuracy: this.props.predictionDetails.accuracy,
    //         //     predictedScore: Math.ceil(parseFloat(this.props.predictionDetails.predictionScore))
    //         // });



    //     }
    // }

    render() {
        return (
            this.props.matchDetail.match.status === "LIVE" ? this.props.matchDetail.match.cmsMatchType.toLowerCase() !== "test" ? <div>
                <div className="m-2 text-info" style={{ fontSize: "20px", float: "left" }}>
                    <strong style={{ marginLeft: "90px" }}>Predicted Innings Score: {Math.ceil(parseFloat(this.props.predictionDetails.predictionScore))}<br /></strong>
                </div>
                <CircularProgressbarWithChildren value={this.props.predictionDetails.accuracy}>
                    <img
                        style={{ width: 100, marginTop: -5 }}
                        src="https://i.imgur.com/b9NyUGm.png"
                        alt="doge"

                    />
                    <div style={{ fontSize: 20, marginTop: -5 }}>
                        <strong>{this.props.predictionDetails.accuracy}%</strong> Accuracy mate!</div>
                </CircularProgressbarWithChildren>
            </div> : null : null
        )
    }
}

ScorePredictor.propTypes = {
    fetchPrediction: PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        predictionDetails: state.scorePredictor.predictionDetails,
        currentScore: state.getCurrBat_Bowl.bat_bowl,
        matchDetail: state.getMatchDetails.match_detail,
    }
}

export default connect(mapStateToProps, { fetchPrediction })(ScorePredictor);
