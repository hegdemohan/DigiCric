import React, { Component, lazy, Suspense, Fragment } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { liveScore } from '../../components/actions/LiveScores';
import { getComments } from '../../components/actions/Comments';
import { getScoreCard } from '../../components/actions/ScoreCard';
import { getMatchDetails, resetMatchDetails } from '../../components/actions/MatchDetail';
import { getPlayers } from '../../components/actions/PlayersByMatch';
import { getCurrentScore } from '../../components/actions/BatAndBowl';
import { convertToCsv } from '../../components/actions/ConvertToCsv';
import { resetPrediction } from '../../components/actions/scorePredictorActions';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ComponentSlider from "@kapost/react-component-slider";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Dashboard.css';
import CommonService from '../../commonService';

import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardImg,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Nav, NavItem, NavLink, TabContent, TabPane,
  ListGroupItem, Collapse
} from 'reactstrap';
import ScorePredictor from '../../components/scorePredictor/ScorePredictor';
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
// import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
var dateFormat = require("dateformat");
// const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));
var playerImage = require('./no-user.png')
// const brandPrimary = getStyle('--primary')
// const brandSuccess = getStyle('--success')
// const brandInfo = getStyle('--info')
// const brandWarning = getStyle('--warning')
// const brandDanger = getStyle('--danger')



class Dashboard extends Component {
  nonBallComment = [];
  // wicket_detail = [
  //   {
  //     bowler: "",
  //     wkt_det: ""
  //   }
  // ];
  constructor(props) {
    super(props);

    this.ScoreCard = this.ScoreCard.bind(this);
    this.convertCSV = this.convertCSV.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleCollapse_bat = this.toggleCollapse_bat.bind(this);
    this.toggleCollapse_bowl = this.toggleCollapse_bowl.bind(this);
    this.toggleCollapse_comment = this.toggleCollapse_comment.bind(this);


    this.state = {
      visible: false,
      activeTab: 0,
      collapse_bat: false,
      collapse_bowl: false,
      commentary: false,
      matchType: "",
      status: ""
    };
  }
  app = CommonService.getAppContext();

  UNSAFE_componentWillMount() {
    this.props.liveScore();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
  }
  ScoreCard(Mid, Sid) {
    this.props.getScoreCard(Mid, Sid);
    this.props.getMatchDetails(Mid, Sid);
    this.props.getPlayers(Mid, Sid);
    this.props.getComments(Mid, Sid);
    this.props.getCurrentScore(Mid, Sid);
    this.setState({
      visible: true
    });
    this.props.resetPrediction();

  }
  convertCSV() {
    if (this.props.matchDetail.match !== undefined && this.props.comments.commentary !== undefined && this.props.currentScore.matchDetail !== undefined) {
      let runsScored_last_5 = 0;
      let wicketsTaken_last_5 = 0;
      let strikeRate = 0;
      let non_strikeRate = 0;
      let overs_done;

      for (var i = 0; i < this.props.comments.commentary.innings[0].overs.length; i++) {
        if (i < 5) {
          if (this.props.comments.commentary.innings[0].overs[i].id !== -1) {
            runsScored_last_5 += Number(this.props.comments.commentary.innings[0].overs[i].overSummary.runsConcededinOver);
          }
        }
      }
      for (var j = 0; j < this.props.comments.commentary.innings[0].overs.length; j++) {
        if (j < 5) {
          if (this.props.comments.commentary.innings[0].overs[j].id !== -1) {
            wicketsTaken_last_5 += Number(this.props.comments.commentary.innings[0].overs[j].overSummary.wicketsTakeninOver);
          }
        }
      }
      for (i = 0; i < this.props.currentScore.matchDetail.currentBatters.length; i++) {
        if (this.props.currentScore.matchDetail.currentBatters[i].isFacing) {
          strikeRate = Number(this.props.currentScore.matchDetail.currentBatters[i].strikeRate);
        }
        else {
          non_strikeRate = Number(this.props.currentScore.matchDetail.currentBatters[i].strikeRate);
        }
      }
      if (this.props.comments.commentary.innings[0].overs[0].balls.length === 6) {
        overs_done = this.props.comments.commentary.innings[0].overs[0].number
      }
      else {
        overs_done = this.props.comments.commentary.innings[0].overs[0].id + "." + this.props.comments.commentary.innings[0].overs[0].balls.length
      }
      let csvData = {
        mid: this.props.matchDetail.match.id,
        date: this.props.matchDetail.match.localStartDate,
        venue: this.props.matchDetail.match.venue.name,
        bat_team: this.props.matchDetail.match.homeTeam.name,
        bowl_team: this.props.matchDetail.match.awayTeam.name,
        batsman: this.props.comments.commentary.innings[0].overs[0].balls[0].comments[0].batsmanName,
        bowler: this.props.comments.commentary.innings[0].overs[0].balls[0].comments[0].bowlerName,
        runs: this.props.comments.commentary.innings[0].overs[0].balls[0].comments[0].battingTeamScore,
        wickets: this.props.comments.commentary.innings[0].overs[0].balls[0].comments[0].wickets,
        overs: Number(overs_done),
        runs_last_5: runsScored_last_5,
        wickets_last_5: wicketsTaken_last_5,
        striker: strikeRate,
        non_striker: non_strikeRate,
        total: this.props.comments.commentary.innings[0].overs[0].balls[0].comments[0].battingTeamScore
      }
      console.log(csvData, "CSV_DATA");
      this.props.convertToCsv(csvData);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props != prevProps) {
      if (this.props.matchDetail !== undefined && this.props.matchDetail.match !== undefined) {
        this.setState({ matchType: this.props.matchDetail.match.cmsMatchType.toLowerCase(), status: this.props.matchDetail.match.status });
      }
    }
  }


  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  closeModal() {
    this.props.resetMatchDetails();
    this.setState({
      visible: false,
      activeTab: 0,
      collapse_bat: false,
      collapse_bowl: false,
      commentary: false
    });
  }
  toggle(id) {
    this.setState({ activeTab: id })
  }
  toggleCollapse_bat() {
    this.setState({ collapse_bat: !this.state.collapse_bat });
  }
  toggleCollapse_bowl() {
    this.setState({ collapse_bowl: !this.state.collapse_bowl });
  }
  toggleCollapse_comment() {
    this.setState({ commentary: !this.state.commentary });
  }

  render() {
    return (
      <div className="animated fadeIn">
        {this.props.score.meta !== undefined ? this.props.score.meta.inProgressMatchCount === 0 ? null : <Card>
          <CardHeader>
            <h3>LIVE</h3>
          </CardHeader>
          <CardBody>
            <div>

              <div className="wrapper">
                <div className="scrolls">
                  <Row className="card-score">
                    {this.props.score.matchList !== undefined ? this.props.score.matchList.matches.map((live) => (
                      <div key={live.id}>

                        {live.status === "LIVE" && (
                          <Fragment>
                            <Col xs="12" sm="6" lg="3">
                              <Card className="bg-info text-white fade-in" tag="a" onClick={() => this.ScoreCard(live.id, live.series.id)} style={{ cursor: "pointer" }}>
                                {/* <CardImg top width="100%" src={`data:image/png;base64,${this.props.image}`} alt="Card image cap" /> */}
                                <CardBody className="pb-0">
                                  <span className="avatar mb-2 seriesImage">
                                    <img src={live.series.shieldImageUrl !== undefined ? live.series.shieldImageUrl : ""} className="img-avatar" alt="Team Image" />
                                  </span>
                                  <span className="mb-2 text-white seriesName">
                                    {live.name !== "" && (<>{live.name},{' '}</>)} {live.series.shortName}
                                  </span>
                                  <Row className="mb-1">
                                    <span className="avatar ml-3">
                                      <img src={live.homeTeam.logoUrl !== undefined ? live.homeTeam.logoUrl : ""} className="img-avatar" alt="Team Image" />
                                    </span>
                                    <Col className="text-white">

                                      {live.homeTeam.shortName}
                                    </Col>
                                    <Col className="text-white">
                                      {live.scores.homeScore}
                                    </Col>
                                  </Row>
                                  <Row>
                                    <span className="avatar ml-3">
                                      <img src={live.awayTeam.logoUrl !== undefined ? live.awayTeam.logoUrl : ""} className="img-avatar avatar" alt="Team Image" />
                                    </span>
                                    <Col className="text-white">

                                      {live.awayTeam.shortName}
                                    </Col>
                                    <Col className="text-white">
                                      {live.scores.awayScore}
                                    </Col>
                                  </Row>
                                  <div className="mt-2 text-white">
                                    {live.matchSummaryText}
                                  </div>
                                </CardBody>
                              </Card>
                            </Col>
                          </Fragment>

                        )
                        }
                        {live.status === "INPROGRESS" && (
                          <Fragment>
                            <Col xs="12" sm="6" lg="3">
                              <Card className="bg-info text-white fade-in" tag="a" onClick={() => this.ScoreCard(live.id, live.series.id)} style={{ cursor: "pointer" }}>
                                {/* <CardImg top width="100%" src={`data:image/png;base64,${this.props.image}`} alt="Card image cap" /> */}
                                <CardBody className="pb-0">
                                  <span className="avatar mb-2 seriesImage">
                                    <img src={live.series.shieldImageUrl !== undefined ? live.series.shieldImageUrl : ""} className="img-avatar" alt="Team Image" />
                                  </span>
                                  <span className="mb-2 seriesName">
                                    {live.name !== "" && (<>{live.name},{' '}</>)} {live.series.shortName}
                                  </span>
                                  <Row className="mb-1">
                                    <span className="avatar ml-3">
                                      <img src={live.homeTeam.logoUrl !== undefined ? live.homeTeam.logoUrl : ""} className="img-avatar" alt="Team Image" />
                                    </span>
                                    <Col className="text-white">

                                      {live.homeTeam.shortName}
                                    </Col>
                                    <Col>
                                      {live.scores.homeScore}
                                    </Col>
                                  </Row>
                                  <Row>
                                    <span className="avatar ml-3">
                                      <img src={live.awayTeam.logoUrl !== undefined ? live.awayTeam.logoUrl : ""} className="img-avatar avatar" alt="Team Image" />
                                    </span>
                                    <Col className="text-white">

                                      {live.awayTeam.shortName}
                                    </Col>
                                    <Col>
                                      {live.scores.awayScore}
                                    </Col>
                                  </Row>
                                  <div className="mt-2">
                                    {live.matchSummaryText}
                                  </div>
                                </CardBody>
                              </Card>
                            </Col>
                          </Fragment>

                        )
                        }

                      </div>
                    )) : ""}
                  </Row>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
          : null}
        {this.props.score.meta !== undefined ? this.props.score.meta.completedMatchCount === 0 ? null : <Card>
          <CardHeader><h3>COMPLETED</h3></CardHeader>
          <CardBody>
            <div>

              <div className="wrapper">
                <div className="scrolls">
                  <Row className="card-score">
                    {this.props.score.matchList !== undefined ? this.props.score.matchList.matches.map((live) => (
                      <div key={live.id}>

                        {live.status === "COMPLETED" && (
                          <Fragment>
                            <Col xs="12" sm="6" lg="3">
                              <Card className="bg-info fade-in" tag="a" onClick={() => this.ScoreCard(live.id, live.series.id, live.matchSummaryText, live.scores, live.homeTeam, live.awayTeam)} style={{ cursor: "pointer" }}>
                                {/* <CardImg top width="100%" src={`data:image/png;base64,${this.props.image}`} alt="Card image cap" /> */}
                                <CardBody className="pb-0">
                                  <span className="avatar mb-2 seriesImage">
                                    <img src={live.series.shieldImageUrl !== undefined ? live.series.shieldImageUrl : ""} className="img-avatar" alt="Team Image" />
                                  </span>
                                  <span className="mb-2 text-white seriesName">
                                    {live.name !== "" && (<>{live.name},{' '}</>)} {live.series.shortName}
                                  </span>
                                  <Row className="mb-1">
                                    <span className="avatar ml-3">
                                      <img src={live.homeTeam.logoUrl !== undefined ? live.homeTeam.logoUrl : ""} className="img-avatar" alt="Team Image" />
                                    </span>
                                    <Col className="text-white">
                                      {live.homeTeam.shortName}
                                    </Col>
                                    <Col className="text-white">
                                      {live.scores.homeScore}
                                    </Col>
                                  </Row>
                                  <Row>
                                    <span className="avatar ml-3">
                                      <img src={live.awayTeam.logoUrl !== undefined ? live.awayTeam.logoUrl : ""} className="img-avatar avatar" alt="Team Image" />
                                    </span>
                                    <Col className="text-white">
                                      {live.awayTeam.shortName}
                                    </Col>
                                    <Col className="text-white">
                                      {live.scores.awayScore}
                                    </Col>
                                  </Row>
                                  <div className="mt-2 text-white">
                                    {live.matchSummaryText}
                                  </div>
                                </CardBody>
                              </Card>
                            </Col>
                          </Fragment>

                        )
                        }

                      </div>
                    )) : ""}
                  </Row>
                </div>
              </div>
            </div>
          </CardBody>
        </Card> : null}
        {this.props.score.meta !== undefined ? this.props.score.meta.upcomingMatchCount === 0 ? null : <Card>
          <CardHeader><h3>UPCOMING</h3></CardHeader>
          <CardBody>
            <div>

              <div className="wrapper">
                <div className="scrolls">
                  <Row className="card-score">
                    {/* <div className="vl"></div> */}
                    {this.props.score.matchList !== undefined ? this.props.score.matchList.matches.map((live) => (
                      <div key={live.id}>
                        {live.status === "UPCOMING" && (
                          <div>
                            <Col xs="12" sm="6" lg="3">
                              <Card className="bg-info text-white fade-in">
                                {/* <CardImg top width="100%" src={`data:image/png;base64,${this.props.image}`} alt="Card image cap" /> */}
                                <CardBody className="pb-0">
                                  <span className="avatar mb-2 seriesImage">
                                    <img src={live.series.shieldImageUrl !== undefined ? live.series.shieldImageUrl : ""} className="img-avatar" alt="Team Image" />
                                  </span>
                                  <span className="mb-2 seriesName">
                                    {live.name !== "" && <span>{live.name},{' '}</span>} {live.series.shortName}
                                  </span>
                                  <Row className="mb-1">
                                    <span className="avatar ml-3">
                                      <img src={live.homeTeam.logoUrl !== undefined ? live.homeTeam.logoUrl : ""} className="img-avatar" alt="Team Image" />
                                    </span>
                                    <Col className="text-white">

                                      {live.homeTeam.shortName}
                                    </Col>
                                  </Row>

                                  <Row>
                                    <span className="avatar ml-3">
                                      <img src={live.awayTeam.logoUrl !== undefined ? live.awayTeam.logoUrl : ""} className="img-avatar avatar" alt="Team Image" />
                                    </span>
                                    <Col className="text-white">

                                      {live.awayTeam.shortName}
                                    </Col>
                                  </Row>
                                  <Row className="mt-2">
                                    <Col>
                                      {dateFormat(live.startDateTime, "isoDate")},{' '} {dateFormat(live.startDateTime, "shortTime")}

                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                          </div>
                        )}
                      </div>
                    )) : ""}
                  </Row>
                </div>
              </div>
            </div>
          </CardBody>
        </Card> : null}


        {!this.app.state.loader &&
          <Modal isOpen={this.state.visible} toggle={this.closeModal} fallback={this.loading()}>
            <ModalHeader toggle={this.closeModal}>
              {this.props.scoreCard.meta !== undefined ?
                <Fragment>
                  <>
                    {this.props.matchDetail.match !== undefined &&
                      <span className="avatar m-2">
                        <img src={this.props.matchDetail.match.series.shieldImageUrl !== undefined ? this.props.matchDetail.match.series.shieldImageUrl : ""} className="img-avatar" alt="Series Image" />
                      </span>
                    }
                  </>
                  <strong className="series-name">{this.props.scoreCard.meta.series.name}</strong> </Fragment> : ""}
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col xs="8">
                  <Fragment>
                    <h3>
                      <Row className="mb-1">
                        <Col className="col-lg-10">
                          <span className="avatar m-2">
                            <img src={this.props.matchDetail.match !== undefined ? this.props.matchDetail.match.homeTeam.logoUrl : ""} className="img-avatar" alt="Team Image" />
                          </span>
                          {this.props.matchDetail.match !== undefined ? this.props.matchDetail.match.homeTeam.shortName : ""}
                          <span className="ml-4">{this.props.matchDetail.match !== undefined ? this.props.matchDetail.match.scores.homeScore !== "" ? this.props.matchDetail.match.scores.homeScore : '0-0' : ""}{' '}
                            {'('}{this.props.matchDetail.match !== undefined ? this.props.matchDetail.match.scores.homeOvers !== "" ? this.props.matchDetail.match.scores.homeOvers : "0.0" : ""}{')'}</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <span className="avatar m-2">
                            <img src={this.props.matchDetail.match !== undefined ? this.props.matchDetail.match.awayTeam.logoUrl : ""} className="img-avatar" alt="Team Image" />
                          </span>
                          {this.props.matchDetail.match !== undefined ? this.props.matchDetail.match.awayTeam.shortName : ""}
                          <span className="ml-4">{this.props.matchDetail.match !== undefined ? this.props.matchDetail.match.scores.awayScore !== "" ? this.props.matchDetail.match.scores.awayScore : '0-0' : ""}{' '}
                            {'('}{this.props.matchDetail.match !== undefined ? this.props.matchDetail.match.scores.awayOvers !== "" ? this.props.matchDetail.match.scores.awayOvers : "0.0" : ""}{')'}</span>
                        </Col>
                      </Row>
                    </h3>
                    <div className="large text-muted ml-3">{this.props.matchDetail.match !== undefined &&
                      <>
                        <strong>VENUE: </strong>
                        <span>
                          {/* <span className="avatar m-2" style={{ position: "relative", top: "5px" }}>
                      <img src={this.props.matchDetail.match !== undefined ? this.props.matchDetail.match.venue.image : ""} className="img-avatar" alt="Venue Image" />
                    </span> */}
                          {this.props.matchDetail.match.venue.name}
                        </span>
                      </>
                    }
                    </div>
                  </Fragment>
                  <div className="m-2 text-info" style={{ fontSize: "20px" }}>
                    <strong>{this.props.matchDetail.match !== undefined ? this.props.matchDetail.match.matchSummaryText : ""}<br /></strong>
                  </div>
                  <Table hover responsive className="table-outline m-2 d-none d-sm-table cur_table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">Batsman</th>
                        <th className="text-center">R</th>
                        <th className="text-center">B</th>
                        <th className="text-center">SR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.currentScore.matchDetail !== undefined ? this.props.currentScore.matchDetail.currentBatters.map((cur_bat) => (
                        <>
                          <tr>
                            <td className="text-center">
                              <strong>{cur_bat.name !== undefined ? cur_bat.name : "-"}
                                {cur_bat.name && cur_bat.isFacing &&
                                  <sup className="bat-avatar">
                                    {/* <i className="fa fa-star fa-sm" aria-hidden="true"></i> */}
                                    <span className="bat-avatar-status badge-success"></span>
                                  </sup>}
                              </strong>
                            </td>
                            <td className="text-center">
                              {/* <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us"></i> */}
                              <span>{cur_bat.runs !== undefined ? cur_bat.runs : <strong>-</strong>}</span>
                            </td>
                            <td>
                              <div className="text-center">
                                {/* <div className="float-left"> */}
                                <span>{cur_bat.ballsFaced !== undefined ? cur_bat.ballsFaced : <strong>-</strong>}</span>
                                {/* </div> */}
                                {/* <div className="float-right">
                                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                      </div> */}
                              </div>
                              {/* <Progress className="progress-xs" color="success" value="50" /> */}
                            </td>
                            <td>
                              {cur_bat.name &&
                                <div className="text-center">
                                  <strong>{cur_bat.strikeRate !== undefined ? cur_bat.strikeRate : <strong>-</strong>}</strong>
                                </div>
                              }
                            </td>
                          </tr>
                        </>
                      )) : ""}
                    </tbody>
                  </Table>
                  <Table hover responsive className="table-outline m-2 mb-3 d-none d-sm-table cur_table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">Bowler</th>
                        <th className="text-center">O</th>
                        <th className="text-center">R</th>
                        <th className="text-center">W</th>
                        <th className="text-center">ER</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.currentScore.matchDetail !== undefined && this.props.currentScore.matchDetail.bowler !== undefined &&
                        <>
                          <tr>
                            <td className="text-center">
                              <strong>{this.props.currentScore.matchDetail.bowler.name !== undefined ? this.props.currentScore.matchDetail.bowler.name : "-"}</strong>
                            </td>
                            <td className="text-center">
                              {/* <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us"></i> */}
                              <span>{this.props.currentScore.matchDetail.bowler.bowlerOver !== undefined ? this.props.currentScore.matchDetail.bowler.bowlerOver : <strong>-</strong>}</span>
                            </td>
                            <td className="text-center">
                              <span>{this.props.currentScore.matchDetail.bowler.runsAgainst !== undefined ? this.props.currentScore.matchDetail.bowler.runsAgainst : <strong>-</strong>}</span>
                              {/* <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i> */}
                            </td>
                            <td className="text-center">
                              <span>{this.props.currentScore.matchDetail.bowler.wickets !== undefined ? this.props.currentScore.matchDetail.bowler.wickets : <strong>-</strong>}</span>
                              {/* <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i> */}
                            </td>
                            <td>
                              <div className="text-center">
                                <strong>{this.props.currentScore.matchDetail.bowler.economy !== undefined ? this.props.currentScore.matchDetail.bowler.economy : <strong>-</strong>}</strong>
                              </div>
                            </td>
                          </tr>

                        </>
                      }
                    </tbody>
                  </Table>
                </Col>
                <Col xs="4">
                  {this.props.matchDetail.match !== undefined && this.props.comments.commentary !== undefined &&
                    <>
                      {this.props.matchDetail.match.status === "COMPLETED" ? "" : (
                        <>
                          <div style={{ marginLeft: "90px" }}>
                            <a onClick={() => this.ScoreCard(this.props.matchDetail.match.id, this.props.matchDetail.match.series.id)} style={{ color: "#20a8d8", cursor: "pointer", fontSize: "20px", position: "relative", top: "2px" }} className="refresh  "><i className="icon-refresh icons font-3xl mr-1"></i>Refresh</a>
                            <button
                              className="btn btn-ghost-success btn-md"
                              type="button" style={{ marginLeft: "7px" }} onClick={() => this.convertCSV()}>Export to CSV</button>
                          </div>
                          <ScorePredictor />
                        </>

                      )}
                    </>
                  }

                </Col>
              </Row>
              {this.props.score.matchList !== undefined ? this.props.score.matchList.matches.map((live) => (
                <>
                  {this.props.matchDetail.match !== undefined &&
                    <>
                      {live.id === this.props.matchDetail.match.id && (
                        <>
                          {live.status === "COMPLETED" && (
                            <>

                              {/* {this.props.scoreCard.fullScorecard !== undefined ? this.props.scoreCard.fullScorecard.innings.map((ings) => (
                              <>
                                {ings.batsmen.map((bat) => (
                                  <> */}
                              {this.props.playersByMatch.playersInMatch !== undefined &&
                                <>
                                  {this.props.scoreCard.fullScorecardAwards !== undefined &&
                                    <>
                                      {this.props.playersByMatch.playersInMatch.homeTeam.players.map((player) => (
                                        <>
                                          {this.props.scoreCard.fullScorecardAwards.manOfTheMatchId === player.playerId && (

                                            <span style={{ position: "relative", bottom: "15px" }}>
                                              <mark className="mr-4" style={{ fontSize: "15px", fontWeight: "bold" }}>PLAYER OF THE MATCH: </mark>
                                              <span className="avatar">
                                                <img src={player.imageURL !== undefined ? player.imageURL : playerImage} className="img-avatar" alt="Player Image" style={{ position: "relative", top: "10px", right: "10px" }} />
                                              </span>
                                              <span style={{ fontSize: "20px", fontWeight: "bold" }}>{this.props.scoreCard.fullScorecardAwards.manOfTheMatchName}</span>
                                            </span>
                                          )
                                          }
                                        </>
                                      ))}
                                      {this.props.playersByMatch.playersInMatch.awayTeam.players.map((player) => (
                                        <>
                                          {this.props.scoreCard.fullScorecardAwards.manOfTheMatchId === player.playerId && (
                                            <span style={{ position: "relative", bottom: "15px" }}>
                                              <mark className="m-4" style={{ fontSize: "15px", fontWeight: "bold" }}>PLAYER OF THE MATCH: </mark>
                                              <span className="avatar">
                                                <img src={player.imageURL !== undefined ? player.imageURL : playerImage} className="img-avatar" alt="Player Image" style={{ position: "relative", top: "10px", right: "10px" }} />
                                              </span>
                                              <span style={{ fontSize: "20px", fontWeight: "bold" }}>{this.props.scoreCard.fullScorecardAwards.manOfTheMatchName}</span>
                                            </span>
                                          )
                                          }
                                        </>
                                      ))}

                                    </>
                                  }
                                </>
                              }
                              {/* </>
                                ))}
                              </>
                            )) : "MOM"} */}
                            </>
                          )}
                        </>
                      )}
                    </>}
                </>
              )) : ""}
              <hr />
              <div>
                <Nav tabs>
                  {this.props.scoreCard.fullScorecard !== undefined ? this.props.scoreCard.fullScorecard.innings.map((ings) => (
                    <NavItem className="team">
                      <NavLink
                        active={this.state.activeTab === ings.id}
                        onClick={() => this.toggle(ings.id)}
                        className="teamName"
                      >
                        {ings.shortName}
                      </NavLink>
                    </NavItem>
                  )) : ""}
                </Nav>
                {this.props.scoreCard.fullScorecard !== undefined ? this.props.scoreCard.fullScorecard.innings.map((ing) => (
                  <>
                    {ing.id === this.state.activeTab &&
                      <>
                        <ListGroupItem>
                          <Button block color="link" className="text-left m-0 p-0" onClick={this.toggleCollapse_bat} style={{ color: "black" }}>
                            <h4 className="mt-2 p-0 float-left">BATTING<span className="ml-5">{this.props.scoreCard.fullScorecard !== undefined &&
                              <>
                                {ing.wicket}-{ing.run}{'  '}{'('}{ing.over}{')'}
                                <span className="ml-4">RR {'  '} {ing.runRate}</span>
                                <span style={{ marginLeft: "500px" }}>EXTRAS{'  '}<strong className="mr-2">{ing.extra}</strong><span className="extra-color">b</span>{ing.bye},{''}<span className="extra-color">lb</span>{ing.legBye},{''}<span className="extra-color">w</span>{ing.wide},{''}<span className="extra-color">nb</span>{ing.noBall}</span>

                              </>
                            }</span></h4>
                            <i className="icon-arrow-down icons font-2xl d-block mt-4 float-right"></i>
                          </Button>
                          <Collapse isOpen={this.state.collapse_bat}>
                            <TabContent activeTab={this.state.activeTab}>
                              <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                                <thead className="thead-light">
                                  <tr>
                                    <th className="text-center"><i className="icon-people"></i></th>
                                    <th className="text-center">Batsman</th>
                                    <th className="text-center">R</th>
                                    <th className="text-center">B</th>
                                    <th className="text-center">4s</th>
                                    <th className="text-center">6s</th>
                                    <th className="text-center">SR</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {this.props.scoreCard.fullScorecard !== undefined ? this.props.scoreCard.fullScorecard.innings.map((ings) => (
                                    <>
                                      {this.state.activeTab === ings.id && (
                                        <>
                                          {ings.batsmen.map((bat) => (
                                            <>
                                              <tr>
                                                <td className="text-center">
                                                  <div className="avatar">
                                                    <img src={bat.imageURL !== undefined ? bat.imageURL : playerImage} className="img-avatar" alt="Player Image" />
                                                    {bat.howOut === "not out" && <span className="avatar-status badge-success"></span>}
                                                  </div>
                                                </td>
                                                <td className="text-center">
                                                  <strong>{bat.name}
                                                    {/* {bat.howOut === "not out" ? <sup><i className="fa fa-star fa-sm mt-4" aria-hidden="true"></i>
                                      </sup> : ""} */}
                                                  </strong>
                                                  <div className="small text-muted">
                                                    <span>{bat.howOut}</span>
                                                  </div>
                                                </td>
                                                <td className="text-center">
                                                  {/* <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us"></i> */}
                                                  <span>{bat.runs !== "" ? bat.runs : <strong>-</strong>}</span>
                                                </td>
                                                <td>
                                                  <div className="text-center">
                                                    {/* <div className="float-left"> */}
                                                    <span>{bat.balls !== "" ? bat.balls : <strong>-</strong>}</span>
                                                    {/* </div> */}
                                                    {/* <div className="float-right">
                                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                      </div> */}
                                                  </div>
                                                  {/* <Progress className="progress-xs" color="success" value="50" /> */}
                                                </td>
                                                <td className="text-center">
                                                  <span>{bat.fours !== "" ? bat.fours : <strong>-</strong>}</span>
                                                  {/* <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i> */}
                                                </td>
                                                <td className="text-center">
                                                  <span>{bat.sixes !== "" ? bat.sixes : <strong>-</strong>}</span>
                                                  {/* <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i> */}
                                                </td>
                                                <td>
                                                  <div className="text-center">
                                                    <strong>{bat.strikeRate}</strong>
                                                  </div>
                                                </td>
                                              </tr>
                                            </>
                                          ))}
                                        </>
                                      )}
                                    </>
                                  )) : ""}
                                </tbody>
                              </Table>
                            </TabContent>
                          </Collapse>
                        </ListGroupItem>


                        <ListGroupItem>
                          <Button block color="link" className="text-left m-0 p-0" onClick={this.toggleCollapse_bowl} style={{ color: "black" }}>
                            <h4 className="mt-2 p-0 float-left">BOWLING</h4>
                            <i className="icon-arrow-down icons font-2xl d-block mt-4 float-right" style={{ position: "relative", bottom: "10px" }}></i>
                          </Button>
                          <Collapse isOpen={this.state.collapse_bowl}>
                            <TabContent activeTab={this.state.activeTab}>
                              <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                                <thead className="thead-light">
                                  <tr>
                                    <th className="text-center"><i className="icon-people"></i></th>
                                    <th className="text-center">Bowler</th>
                                    <th className="text-center">O</th>
                                    <th className="text-center">M</th>
                                    <th className="text-center">R</th>
                                    <th className="text-center">W</th>
                                    <th className="text-center">ER</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {this.props.scoreCard.fullScorecard !== undefined ? this.props.scoreCard.fullScorecard.innings.map((ings) => (
                                    <>
                                      {this.state.activeTab === ings.id && (
                                        <>
                                          {ings.bowlers.map((bowl) => (
                                            <>
                                              <tr>
                                                <td className="text-center">
                                                  {this.props.currentScore.matchDetail.bowler.name !== undefined ?
                                                    this.props.currentScore.matchDetail.bowler.id === bowl.id ?
                                                      <div className="avatar">
                                                        <img src={bowl.imageURL !== undefined ? bowl.imageURL : playerImage} className="img-avatar" alt="Player Image" />
                                                        <span className="avatar-status badge-success"></span>
                                                      </div>
                                                      :
                                                      <div className="avatar">
                                                        <img src={bowl.imageURL !== undefined ? bowl.imageURL : playerImage} className="img-avatar" alt="Player Image" />
                                                      </div>
                                                    : ""
                                                  }
                                                </td>
                                                <td className="text-center">
                                                  <strong>{bowl.name}</strong>
                                                </td>
                                                <td className="text-center">
                                                  {/* <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us"></i> */}
                                                  <span>{bowl.overs !== "" ? bowl.overs : <strong>-</strong>}</span>
                                                </td>
                                                <td>
                                                  <div className="text-center">
                                                    {/* <div className="float-left"> */}
                                                    <span>{bowl.maidens !== "" ? bowl.maidens : <strong>-</strong>}</span>
                                                    {/* </div> */}
                                                    {/* <div className="float-right">
                                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                      </div> */}
                                                  </div>
                                                  {/* <Progress className="progress-xs" color="success" value="50" /> */}
                                                </td>
                                                <td className="text-center">
                                                  <span>{bowl.runsConceded !== "" ? bowl.runsConceded : <strong>-</strong>}</span>
                                                  {/* <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i> */}
                                                </td>
                                                <td className="text-center">
                                                  <span>{bowl.wickets !== "" ? bowl.wickets : <strong>-</strong>}</span>
                                                  {/* <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i> */}
                                                </td>
                                                <td>
                                                  <div className="text-center">
                                                    <strong>{bowl.economy}</strong>
                                                  </div>
                                                </td>
                                              </tr>
                                            </>
                                          ))}
                                        </>
                                      )}
                                    </>
                                  )) : ""}
                                </tbody>
                              </Table>
                            </TabContent>
                          </Collapse>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Button block color="link" className="text-left m-0 p-0" onClick={this.toggleCollapse_comment} style={{ color: "black" }}>
                            <h4 className="mt-2 p-0 float-left">COMMENTARY</h4>
                            <i className="icon-arrow-down icons font-2xl d-block mt-4 float-right" style={{ position: "relative", bottom: "10px" }}></i>
                          </Button>
                          <Collapse isOpen={this.state.commentary}>
                            <TabContent activeTab={this.state.activeTab}>
                              {this.props.comments.commentary !== undefined &&
                                <>
                                  {this.props.comments.commentary.innings.map((ings) => (
                                    <>
                                      {ings.id === this.state.activeTab &&
                                        <Fragment>
                                          <h3 className="m-3" style={{ color: "crimson" }}>{ings.name}</h3>
                                          {ings.overs.map((over) => (
                                            <Fragment>
                                              <div className="col-lg-12 text-black" style={{ backgroundColor: "lightgray", fontSize: "18px" }}>
                                                {over.overSummary !== undefined &&
                                                  <>
                                                    <span className="avatar" style={{ top: "10px" }}>
                                                      <img src={over.overSummary.bowlersImage !== undefined ? over.overSummary.bowlersImage : playerImage} className="img-avatar" alt="Player Image" />
                                                      <span className="avatar-status badge-success"></span>
                                                    </span>
                                                    <span className="mt-2" style={{ position: "relative", bottom: "0px" }}>
                                                      <span className="ml-3 mr-4 mb-1"><strong>{over.overSummary.bowlersName}{' '}</strong></span>
                                                      <span>Total{' '}{over.overSummary.bowlersBowlingFigures}</span></span>
                                                    <div className="mt-3 mb-2 pb-2">
                                                      <span className="mt-2 mr-2"><strong>{over.number}<sup>th</sup>OVER,{'  '}</strong></span>
                                                      <span className="mt-2 mr-2">Runs Conceded:{' '}{over.overSummary.runsConcededinOver}</span>
                                                      <span className="mt-2 mr-2">Wickets:{' '}{over.overSummary.wicketsTakeninOver}</span>
                                                      <span className="mt-2 mr-2">{over.overSummary.extrasConcededinOver}</span>
                                                    </div>
                                                  </>
                                                }
                                              </div>
                                              {over.balls.map((ball) => (
                                                <Fragment>
                                                  <>
                                                    <Row className="mb-3">
                                                      {ball.comments.map((cmt) => (
                                                        <>
                                                          {cmt.ballType !== "NonBallComment" ?
                                                            <Fragment>
                                                              <Col className="col-lg-2 ml-3 text-center" style={{ fontSize: "25px" }}>
                                                                <strong>
                                                                  {over.number - 1}.
                                                {ball.ballNumber}
                                                                </strong>
                                                                <div>
                                                                  {/* {cmt.isFallOfWicket && (this.wicket_detail.push({ "wkt_det": cmt.wicketSummary, "bowler": cmt.bowlerId }))} */}
                                                                  {cmt.isFallOfWicket ?
                                                                    <Badge pill color="danger">OUT</Badge>
                                                                    : <>
                                                                      {cmt.runs === "4" ? <Badge pill color="success">4</Badge> :
                                                                        <>
                                                                          {cmt.runs === "6" &&
                                                                            <Badge pill color="primary">6</Badge>}
                                                                        </>
                                                                      }
                                                                    </>
                                                                  }
                                                                </div>
                                                              </Col>
                                                              <Col className="ml-3 mr-3" style={{ fontSize: "20px" }}>
                                                                {cmt.text}
                                                                {cmt.isFallOfWicket &&
                                                                  <>
                                                                    {cmt.wicketSummary !== undefined &&
                                                                      <div style={{ position: "relative", bottom: "10px" }}>
                                                                        <span className="avatar" style={{ top: "10px" }}>
                                                                          <img src={cmt.wicketSummary.batsmanImage !== undefined ? cmt.wicketSummary.batsmanImage : playerImage} className="img-avatar" alt="Player Image" />
                                                                          <span className="avatar-status badge-success"></span>
                                                                        </span>
                                                                        <span style={{ position: "absolute", bottom: "0px" }}>
                                                                          <span className="ml-2" style={{ color: "red" }}>{cmt.wicketSummary.batsmanName}</span>
                                                                          <span className="ml-2"><strong>Runs:{' '}</strong>{cmt.wicketSummary.batsmanRuns}</span>
                                                                          <span className="ml-2"><strong>Balls:{' '}</strong>{cmt.wicketSummary.ballsFaced}</span>
                                                                          <span className="ml-2"><strong>4s:{' '}</strong>{cmt.wicketSummary.batsman4sinInnings}</span>
                                                                          <span className="ml-2"><strong>6s:{' '}</strong>{cmt.wicketSummary.batsman6sinInnings}</span>
                                                                          <span className="ml-2"><strong>SR:{' '}</strong>{cmt.wicketSummary.strikeRate}</span>
                                                                        </span>
                                                                      </div>
                                                                    }
                                                                  </>
                                                                }
                                                              </Col>
                                                            </Fragment>
                                                            : ""}
                                                        </>
                                                      ))}
                                                    </Row>
                                                  </>
                                                </Fragment>
                                              ))}

                                            </Fragment>
                                          ))}
                                        </Fragment>
                                      }
                                    </>
                                  ))}
                                </>
                              }
                            </TabContent>
                          </Collapse>
                        </ListGroupItem>
                      </>
                    }
                  </>
                )) : ""}

              </div>
            </ModalBody>
          </Modal>
        }
      </div >
    );
  }
}
// Dashboard.propTypes = {
//   liveScore: PropTypes.func.isRequired,
//   getScoreCard: PropTypes.func.isRequired

// }
const mapStateToProps = state => {
  return {
    score: state.liveScore.scores,
    scoreCard: state.getScoreCard.scoreCard,
    matchDetail: state.getMatchDetails.match_detail,
    playersByMatch: state.getPlayersByMatch.players_by_match,
    comments: state.getCommentsByMatch.comments,
    currentScore: state.getCurrBat_Bowl.bat_bowl,
    predictionDetails: state.scorePredictor.predictionDetails,

  }
}

// export default Dashboard;
export default connect(mapStateToProps, { liveScore, getScoreCard, getMatchDetails, getPlayers, getComments, getCurrentScore, resetMatchDetails, convertToCsv, resetPrediction })(Dashboard);

