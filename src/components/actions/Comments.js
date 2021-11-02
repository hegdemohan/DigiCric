import { GET_COMMENTS } from './Types';
import axios from 'axios';
import { requestInterceptor, responseInterceptor } from "../../interceptor";
// const comments = {
//     "meta": {
//         "series": {
//             "id": 2383,
//             "name": "Rebel Women's Big Bash League 2019/2020"
//         },
//         "matchTypeId": 19,
//         "matchId": 46137,
//         "total": 258
//     },
//     "commentary": {
//         "innings": [
//             {
//                 "id": 2,
//                 "name": "Adelaide Strikers Women 1st Innings",
//                 "shortName": "STR",
//                 "teamId": 344,
//                 "teamColour": "#0085CA",
//                 "overs": [
//                     {
//                         "id": 15,
//                         "uniqueOverId": "20015",
//                         "number": 16,
//                         "balls": [
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T06:05:55Z",
//                                         "text": "Over 16. 8 runs. Bowler: Georgia Wareham. Adelaide Strikers Women: 4-120(rr 7.50)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 7737,
//                                         "batsmanName": "Katie Mack",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Katie-Mack-1920.ashx",
//                                         "bowlerId": 8244,
//                                         "bowlerName": "Georgia Wareham",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 120,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 4
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T06:05:55Z",
//                                         "text": "FOUR! Georgia Wareham to Katie Mack. Back of a length, pulling, Hit Hard in the air under control past deep mid wicket for 4 runs. The Strikers restricted the Renegades to 117 and chased it down with 28 balls remaining. Sophie Devine leading the way with 72 not out as the Strikers win by 6 wickets. ",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 7737,
//                                         "batsmanName": "Katie Mack",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Katie-Mack-1920.ashx",
//                                         "bowlerId": 8244,
//                                         "bowlerName": "Georgia Wareham",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 120,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 96,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T06:05:25Z",
//                                         "text": "FOUR! Georgia Wareham to Katie Mack. Length ball, pulling, Played past deep mid wicket for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 7737,
//                                         "batsmanName": "Katie Mack",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Katie-Mack-1920.ashx",
//                                         "bowlerId": 8244,
//                                         "bowlerName": "Georgia Wareham",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 95,
//                                 "result": "4"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 8244,
//                             "bowlersName": "Georgia Wareham",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 24, Wicket(s) : 0",
//                             "battingTeamsScore": "4-120",
//                             "runsConcededinOver": "8",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 14,
//                         "uniqueOverId": "20014",
//                         "number": 15,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T06:04:13Z",
//                                         "text": "Over 15. 14 runs. Bowler: Claire Koski. Adelaide Strikers Women: 4-112(rr 7.47)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8118,
//                                         "bowlerName": "Claire Koski",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 112,
//                                         "offStrikeBatsmanId": 7737,
//                                         "wickets": 4
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T06:04:13Z",
//                                         "text": "FOUR! Claire Koski to Sophie Devine. Length ball, driving, Hit Hard past long on for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8118,
//                                         "bowlerName": "Claire Koski",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 112,
//                                         "offStrikeBatsmanId": 7737,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 94,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T06:03:48Z",
//                                         "text": "Claire Koski to Sophie Devine. Length ball, Steer, Played to short third man for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8118,
//                                         "bowlerName": "Claire Koski",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 7737,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 93,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T06:03:13Z",
//                                         "text": "FOUR! Claire Koski to Sophie Devine. Length ball, cutting, Played past third man for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8118,
//                                         "bowlerName": "Claire Koski",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 108,
//                                         "offStrikeBatsmanId": 7737,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 92,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T06:02:33Z",
//                                         "text": "FOUR! Claire Koski to Sophie Devine. Length ball, driving, Hit Hard past long off for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8118,
//                                         "bowlerName": "Claire Koski",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 104,
//                                         "offStrikeBatsmanId": 7737,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 91,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T06:01:59Z",
//                                         "text": "Claire Koski to Katie Mack. Length ball, flick, Played to square leg for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 7737,
//                                         "batsmanName": "Katie Mack",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Katie-Mack-1920.ashx",
//                                         "bowlerId": 8118,
//                                         "bowlerName": "Claire Koski",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 100,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 90,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T06:01:14Z",
//                                         "text": "Claire Koski to Sophie Devine. Length ball, driving, Played to mid off for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8118,
//                                         "bowlerName": "Claire Koski",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 99,
//                                         "offStrikeBatsmanId": 7737,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 89,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 8118,
//                             "bowlersName": "Claire Koski",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 20, Wicket(s) : 0",
//                             "battingTeamsScore": "4-112",
//                             "runsConcededinOver": "14",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 13,
//                         "uniqueOverId": "20013",
//                         "number": 14,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T06:00:20Z",
//                                         "text": "Over 14. 5 runs. Bowler: Maitlan Brown. Adelaide Strikers Women: 4-98(rr 7.00)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 7737,
//                                         "batsmanName": "Katie Mack",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Katie-Mack-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 98,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 4
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T06:00:20Z",
//                                         "text": "Maitlan Brown to Katie Mack. Length ball, driving, Played to gully for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 7737,
//                                         "batsmanName": "Katie Mack",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Katie-Mack-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 98,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 88,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:59:53Z",
//                                         "text": "Maitlan Brown to Sophie Devine. Length ball, driving, Played to deep cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 7737,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 87,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:59:36Z",
//                                         "text": "Maitlan Brown to Sophie Devine. Length ball, flick, mis-timed to deep backward square leg for 2 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "2",
//                                         "battingTeamScore": 97,
//                                         "offStrikeBatsmanId": 7737,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 86,
//                                 "result": "2"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:59:06Z",
//                                         "text": "Maitlan Brown to Katie Mack. Length ball, working, Played to mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 7737,
//                                         "batsmanName": "Katie Mack",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Katie-Mack-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 95,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 85,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:57:35Z",
//                                         "text": "OUT! Caught. Maitlan Brown to Stafanie Taylor. Length ball, driving, Played to cover, by Duffin.",
//                                         "isFallOfWicket": true,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 94,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 4,
//                                         "wicketSummary": {
//                                             "batsmanImage": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                             "batsmanName": "Stafanie Taylor",
//                                             "dismissalMethod": "c: Duffin b: Brown",
//                                             "batsmanRuns": "21",
//                                             "ballsFaced": "23",
//                                             "batsman4sinInnings": "2",
//                                             "batsman6sinInnings": "0",
//                                             "strikeRate": "91.30"
//                                         }
//                                     }
//                                 ],
//                                 "id": 84,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:56:47Z",
//                                         "text": "Maitlan Brown to Sophie Devine. Length ball, driving, Played to long on for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 83,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 10766,
//                             "bowlersName": "Maitlan Brown",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 15, Wicket(s) : 2",
//                             "battingTeamsScore": "4-98",
//                             "runsConcededinOver": "5",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "1"
//                         }
//                     },
//                     {
//                         "id": 12,
//                         "uniqueOverId": "20012",
//                         "number": 13,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T05:55:32Z",
//                                         "text": "Over 13. 6 runs. Bowler: Claire Koski. Adelaide Strikers Women: 3-93(rr 7.15)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8118,
//                                         "bowlerName": "Claire Koski",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:55:32Z",
//                                         "text": "Claire Koski to Sophie Devine. Length ball, driving, Played to long on for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8118,
//                                         "bowlerName": "Claire Koski",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 82,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:55:03Z",
//                                         "text": "Claire Koski to Stafanie Taylor. Length ball, dropped, Played to cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 8118,
//                                         "bowlerName": "Claire Koski",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 92,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 81,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:54:17Z",
//                                         "text": "Claire Koski to Sophie Devine. Length ball, driving, Played to deep cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8118,
//                                         "bowlerName": "Claire Koski",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 80,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:53:49Z",
//                                         "text": "Claire Koski to Sophie Devine. Length ball, driving, Played to deep extra cover for 2 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8118,
//                                         "bowlerName": "Claire Koski",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "runs": "2",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 79,
//                                 "result": "2"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:53:23Z",
//                                         "text": "Claire Koski to Sophie Devine. Length ball, driving, Played to mid wicket for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8118,
//                                         "bowlerName": "Claire Koski",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 88,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 78,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:52:44Z",
//                                         "text": "Claire Koski to Stafanie Taylor. Back of a length, cutting, Played to third man for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 8118,
//                                         "bowlerName": "Claire Koski",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 88,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 77,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 8118,
//                             "bowlersName": "Claire Koski",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 20, Wicket(s) : 0",
//                             "battingTeamsScore": "0-0",
//                             "runsConcededinOver": "6",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 11,
//                         "uniqueOverId": "20011",
//                         "number": 12,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T05:51:11Z",
//                                         "text": "Over 12. 8 runs. Bowler: Lea Tahuhu. Adelaide Strikers Women: 3-87(rr 7.25)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 87,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 3
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:51:11Z",
//                                         "text": "Lea Tahuhu to Sophie Devine. Short, Leave, to wicketkeeper for no runs, fielded by Dooley.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 87,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 76,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:50:48Z",
//                                         "text": "FREE HIT. Lea Tahuhu to Sophie Devine. Length ball, driving, missed to wicketkeeper for no runs, fielded by Dooley.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 87,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 75,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "NoBall",
//                                         "dateTime": "2019-10-19T05:50:11Z",
//                                         "text": "No ball Lea Tahuhu to Sophie Devine. Length ball, driving, Played back to bowler for 1 run, fielded by Tahuhu.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 87,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 74,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:49:32Z",
//                                         "text": "Lea Tahuhu to Stafanie Taylor. Length ball, cutting, Played to third man for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 86,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 73,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:49:02Z",
//                                         "text": "FOUR! Lea Tahuhu to Stafanie Taylor. Full toss, flick, Hit Hard past deep backward square leg for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 85,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 72,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:48:24Z",
//                                         "text": "Lea Tahuhu to Sophie Devine. Length ball, driving, Played to mid off for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 81,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 71,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:47:52Z",
//                                         "text": "Lea Tahuhu to Stafanie Taylor. Length ball, driving, Played to deep cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 70,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5993,
//                             "bowlersName": "Lea Tahuhu",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 20, Wicket(s) : 2",
//                             "battingTeamsScore": "3-87",
//                             "runsConcededinOver": "8",
//                             "extrasConcededinOver": "Total Extra(s) : 1, wide:0, bye:0, no ball run(s):1",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 10,
//                         "uniqueOverId": "20010",
//                         "number": 11,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T05:46:22Z",
//                                         "text": "Over 11. 7 runs. Bowler: Sophie Molineux. Adelaide Strikers Women: 3-79(rr 7.18)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 79,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:46:22Z",
//                                         "text": "Sophie Molineux to Stafanie Taylor. Length ball, flick, Played to mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 79,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 69,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:46:06Z",
//                                         "text": "Sophie Molineux to Stafanie Taylor. Length ball, sweeping, missed to wicketkeeper for no runs, fielded by Dooley.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 78,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 68,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:45:28Z",
//                                         "text": "FOUR! Sophie Molineux to Stafanie Taylor. Full toss, driving, Hit Hard past deep extra cover for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 78,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 67,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:45:04Z",
//                                         "text": "Sophie Molineux to Stafanie Taylor. Length ball, driving, Played to extra cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 74,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 66,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:44:31Z",
//                                         "text": "Sophie Molineux to Sophie Devine. Length ball, driving, Played to long on for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 65,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:44:05Z",
//                                         "text": "Sophie Molineux to Stafanie Taylor. Length ball, working, Played to mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 73,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 64,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 8119,
//                             "bowlersName": "Sophie Molineux",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 15, Wicket(s) : 0",
//                             "battingTeamsScore": "3-79",
//                             "runsConcededinOver": "7",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 9,
//                         "uniqueOverId": "2009",
//                         "number": 10,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T05:43:05Z",
//                                         "text": "Over 10. 10 runs. Bowler: Molly Strano. Adelaide Strikers Women: 3-72(rr 7.20)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 7065,
//                                         "bowlerName": "Molly Strano",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:43:05Z",
//                                         "text": "Molly Strano to Sophie Devine. Length ball, working, Played to deep square leg for 2 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 7065,
//                                         "bowlerName": "Molly Strano",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                                         "runs": "2",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 63,
//                                 "result": "2"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:42:46Z",
//                                         "text": "SIX! Molly Strano to Sophie Devine. Full toss, pulling, Played in the air under control over deep mid wicket for 6 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 7065,
//                                         "bowlerName": "Molly Strano",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                                         "runs": "6",
//                                         "battingTeamScore": 70,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 62,
//                                 "result": "6"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:42:01Z",
//                                         "text": "Molly Strano to Sophie Devine. Length ball, cutting, Played to point for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 7065,
//                                         "bowlerName": "Molly Strano",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 61,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:41:39Z",
//                                         "text": "Molly Strano to Stafanie Taylor. Length ball, flick, Played to mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 7065,
//                                         "bowlerName": "Molly Strano",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 64,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 60,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:40:52Z",
//                                         "text": "Molly Strano to Sophie Devine. Length ball, working, Played to mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 7065,
//                                         "bowlerName": "Molly Strano",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 63,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 59,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:40:29Z",
//                                         "text": "Molly Strano to Sophie Devine. Length ball, glancing, Played to short fine leg for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 7065,
//                                         "bowlerName": "Molly Strano",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 62,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 58,
//                                 "result": "0"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 7065,
//                             "bowlersName": "Molly Strano",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 26, Wicket(s) : 0",
//                             "battingTeamsScore": "0-0",
//                             "runsConcededinOver": "10",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 8,
//                         "uniqueOverId": "2008",
//                         "number": 9,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T05:38:55Z",
//                                         "text": "Over 9. 4 runs. Bowler: Sophie Molineux. Adelaide Strikers Women: 3-62(rr 6.89)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 62,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 3
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:38:55Z",
//                                         "text": "Sophie Molineux to Sophie Devine. Full toss, driving, Played to long off for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 62,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 57,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:38:27Z",
//                                         "text": "Sophie Molineux to Stafanie Taylor. Length ball, flick, Played to square leg for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 61,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 56,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:38:11Z",
//                                         "text": "Sophie Molineux to Sophie Devine. Length ball, flick, Played to backward square leg for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 55,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:37:47Z",
//                                         "text": "Sophie Molineux to Stafanie Taylor. Length ball, driving, Played to deep mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 54,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:37:20Z",
//                                         "text": "Sophie Molineux to Stafanie Taylor. Length ball, pushing, Played to short extra cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 53,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:37:08Z",
//                                         "text": "Sophie Molineux to Stafanie Taylor. Length ball, driving, Played to cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 52,
//                                 "result": "0"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 8119,
//                             "bowlersName": "Sophie Molineux",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 15, Wicket(s) : 0",
//                             "battingTeamsScore": "3-62",
//                             "runsConcededinOver": "4",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 7,
//                         "uniqueOverId": "2007",
//                         "number": 8,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T05:35:43Z",
//                                         "text": "Over 8. 16 runs. Bowler: Georgia Wareham. Adelaide Strikers Women: 3-58(rr 7.25)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8244,
//                                         "bowlerName": "Georgia Wareham",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:35:43Z",
//                                         "text": "Georgia Wareham to Sophie Devine. Length ball, defending, Played to cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8244,
//                                         "bowlerName": "Georgia Wareham",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 51,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:35:27Z",
//                                         "text": "Georgia Wareham to Stafanie Taylor. Length ball, cutting, Played to deep backward point for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 8244,
//                                         "bowlerName": "Georgia Wareham",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 50,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:34:53Z",
//                                         "text": "Georgia Wareham to Sophie Devine. Length ball, working, Played to mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8244,
//                                         "bowlerName": "Georgia Wareham",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 49,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:34:20Z",
//                                         "text": "SIX! Georgia Wareham to Sophie Devine. Back of a length, pulling, Hit Hard in the air under control over deep mid wicket for 6 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8244,
//                                         "bowlerName": "Georgia Wareham",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                                         "runs": "6",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 48,
//                                 "result": "6"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:33:44Z",
//                                         "text": "SIX! Georgia Wareham to Sophie Devine. Short, pulling, Hit Hard in the air under control over deep mid wicket for 6 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8244,
//                                         "bowlerName": "Georgia Wareham",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                                         "runs": "6",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 47,
//                                 "result": "6"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:33:05Z",
//                                         "text": "Georgia Wareham to Stafanie Taylor. Back of a length, working, Played to mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 8244,
//                                         "bowlerName": "Georgia Wareham",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 46,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "Wide",
//                                         "dateTime": "2019-10-19T05:32:51Z",
//                                         "text": "Wide Georgia Wareham to Stafanie Taylor. Length ball, sweeping, Missed (Leg Side) to wicketkeeper for 1 run, fielded by Dooley.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 8244,
//                                         "bowlerName": "Georgia Wareham",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 45,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 8244,
//                             "bowlersName": "Georgia Wareham",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 24, Wicket(s) : 0",
//                             "battingTeamsScore": "0-0",
//                             "runsConcededinOver": "16",
//                             "extrasConcededinOver": "Total Extra(s) : 1, wide:1, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 6,
//                         "uniqueOverId": "2006",
//                         "number": 7,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T05:31:20Z",
//                                         "text": "Over 7. 3 runs. Bowler: Maitlan Brown. Adelaide Strikers Women: 3-42(rr 6.00)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 42,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 3
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:31:20Z",
//                                         "text": "Maitlan Brown to Sophie Devine. Length ball, driving, Played back to bowler for no runs, fielded by Brown.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 42,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 44,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:30:57Z",
//                                         "text": "Maitlan Brown to Sophie Devine. Full toss, driving, Played to deep cover for 2 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "2",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 43,
//                                 "result": "2"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:30:44Z",
//                                         "text": "Maitlan Brown to Sophie Devine. Yorker, defending, hit pad to point for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 42,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:29:55Z",
//                                         "text": "Maitlan Brown to Sophie Devine. Length ball, driving, mis-timed to mid off for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 40,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 41,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:29:31Z",
//                                         "text": "Maitlan Brown to Sophie Devine. Yorker, defending, Played to mid wicket for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 40,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 40,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:29:01Z",
//                                         "text": "Maitlan Brown to Stafanie Taylor. Length ball, driving, Played to deep cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 40,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 39,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 10766,
//                             "bowlersName": "Maitlan Brown",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 15, Wicket(s) : 2",
//                             "battingTeamsScore": "3-42",
//                             "runsConcededinOver": "3",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 5,
//                         "uniqueOverId": "2005",
//                         "number": 6,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T05:27:46Z",
//                                         "text": "Over 6. Power Play Fielding. 7 runs. Bowler: Lea Tahuhu. Adelaide Strikers Women: 3-39(rr 6.50)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:27:46Z",
//                                         "text": "Lea Tahuhu to Stafanie Taylor. Length ball, driving, Played to mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 38,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:27:01Z",
//                                         "text": "Lea Tahuhu to Stafanie Taylor. Length ball, driving, Played to mid off for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 37,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "Wide",
//                                         "dateTime": "2019-10-19T05:26:35Z",
//                                         "text": "Wide Lea Tahuhu to Stafanie Taylor. Length ball, glancing, Missed (Leg Side) to wicketkeeper for 1 run, fielded by Dooley.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 36,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:26:01Z",
//                                         "text": "Lea Tahuhu to Stafanie Taylor. Length ball, driving, missed to wicketkeeper for no runs, fielded by Dooley.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 35,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:25:27Z",
//                                         "text": "Lea Tahuhu to Stafanie Taylor. Length ball, Leave, to wicketkeeper for no runs, fielded by Dooley.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5824,
//                                         "batsmanName": "Stafanie Taylor",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 37,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 34,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:24:43Z",
//                                         "text": "Lea Tahuhu to Sophie Devine. Length ball, driving, Played to cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 33,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:24:13Z",
//                                         "text": "FOUR! Lea Tahuhu to Sophie Devine. Back of a length, cutting, Played past deep backward point for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5824,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 32,
//                                 "result": "4"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5993,
//                             "bowlersName": "Lea Tahuhu",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 20, Wicket(s) : 2",
//                             "battingTeamsScore": "0-0",
//                             "runsConcededinOver": "7",
//                             "extrasConcededinOver": "Total Extra(s) : 1, wide:1, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 4,
//                         "uniqueOverId": "2004",
//                         "number": 5,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T05:22:50Z",
//                                         "text": "Over 5. Power Play Fielding. 7 runs. Bowler: Maitlan Brown. Adelaide Strikers Women: 3-32(rr 6.40)",
//                                         "isFallOfWicket": true,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 32,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:22:50Z",
//                                         "text": "OUT! Bowled. Maitlan Brown to Bridget Patterson. Length ball, defending, missed to.",
//                                         "isFallOfWicket": true,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 32,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 3,
//                                         "wicketSummary": {
//                                             "batsmanImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                             "batsmanName": "Bridget Patterson",
//                                             "dismissalMethod": "b: Brown",
//                                             "batsmanRuns": "11",
//                                             "ballsFaced": "13",
//                                             "batsman4sinInnings": "2",
//                                             "batsman6sinInnings": "0",
//                                             "strikeRate": "84.62"
//                                         }
//                                     }
//                                 ],
//                                 "id": 31,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:22:14Z",
//                                         "text": "Maitlan Brown to Sophie Devine. Length ball, driving, Played to extra cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 32,
//                                         "offStrikeBatsmanId": 8112,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 30,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:21:35Z",
//                                         "text": "FOUR! Maitlan Brown to Sophie Devine. Length ball, driving, Hit Hard past deep cover for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 31,
//                                         "offStrikeBatsmanId": 8112,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 29,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:21:06Z",
//                                         "text": "Maitlan Brown to Sophie Devine. Length ball, driving, Played to cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 27,
//                                         "offStrikeBatsmanId": 8112,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 28,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:20:43Z",
//                                         "text": "Maitlan Brown to Bridget Patterson. Back of a length, cutting, Played to point for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 27,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 27,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:20:15Z",
//                                         "text": "Maitlan Brown to Bridget Patterson. Length ball, driving, Played to cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 26,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "Wide",
//                                         "dateTime": "2019-10-19T05:19:49Z",
//                                         "text": "Wide Maitlan Brown to Bridget Patterson. Length ball, Leave, to wicketkeeper for 1 run, fielded by Dooley.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 10766,
//                                         "bowlerName": "Maitlan Brown",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 25,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 10766,
//                             "bowlersName": "Maitlan Brown",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 15, Wicket(s) : 2",
//                             "battingTeamsScore": "3-32",
//                             "runsConcededinOver": "7",
//                             "extrasConcededinOver": "Total Extra(s) : 1, wide:1, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "1"
//                         }
//                     },
//                     {
//                         "id": 3,
//                         "uniqueOverId": "2003",
//                         "number": 4,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T05:18:44Z",
//                                         "text": "Over 4. Power Play Fielding. 5 runs. Bowler: Lea Tahuhu. Adelaide Strikers Women: 2-25(rr 6.25)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 25,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 2
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:18:44Z",
//                                         "text": "Lea Tahuhu to Bridget Patterson. Length ball, dropped, Played to short extra cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 25,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 24,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:17:51Z",
//                                         "text": "Lea Tahuhu to Bridget Patterson. Length ball, defending, Played to extra cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 24,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 23,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:17:17Z",
//                                         "text": "FOUR! Lea Tahuhu to Bridget Patterson. Back of a length, pulling, Played past fine leg for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 24,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 22,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:16:37Z",
//                                         "text": "Lea Tahuhu to Bridget Patterson. Length ball, driving, missed to wicketkeeper for no runs, fielded by Dooley.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 20,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 21,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:16:11Z",
//                                         "text": "Lea Tahuhu to Bridget Patterson. Length ball, Leave, to wicketkeeper for no runs, fielded by Dooley.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 20,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:15:46Z",
//                                         "text": "Lea Tahuhu to Bridget Patterson. Length ball, driving, missed to wicketkeeper for no runs, fielded by Dooley.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 19,
//                                 "result": "0"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5993,
//                             "bowlersName": "Lea Tahuhu",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 20, Wicket(s) : 2",
//                             "battingTeamsScore": "2-25",
//                             "runsConcededinOver": "5",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 2,
//                         "uniqueOverId": "2002",
//                         "number": 3,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T05:14:55Z",
//                                         "text": "Over 3. Power Play Fielding. 16 runs. Bowler: Molly Strano. Adelaide Strikers Women: 2-20(rr 6.67)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 7065,
//                                         "bowlerName": "Molly Strano",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 20,
//                                         "offStrikeBatsmanId": 8112,
//                                         "wickets": 2
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:14:55Z",
//                                         "text": "FOUR! Molly Strano to Sophie Devine. Back of a length, pulling, Hit Hard past deep mid wicket for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 7065,
//                                         "bowlerName": "Molly Strano",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 20,
//                                         "offStrikeBatsmanId": 8112,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 18,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:14:22Z",
//                                         "text": "Molly Strano to Bridget Patterson. Back of a length, pulling, Played to long on for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 7065,
//                                         "bowlerName": "Molly Strano",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 16,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 17,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:13:49Z",
//                                         "text": "FOUR! Molly Strano to Bridget Patterson. Length ball, driving, Played past deep cover for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 7065,
//                                         "bowlerName": "Molly Strano",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 15,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 16,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:13:28Z",
//                                         "text": "Molly Strano to Bridget Patterson. Length ball, defending, Played back to bowler for no runs, fielded by Strano.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 7065,
//                                         "bowlerName": "Molly Strano",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 11,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 15,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:12:53Z",
//                                         "text": "Molly Strano to Sophie Devine. Back of a length, pulling, Played to long on for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 7065,
//                                         "bowlerName": "Molly Strano",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 11,
//                                         "offStrikeBatsmanId": 8112,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 14,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:12:27Z",
//                                         "text": "SIX! Molly Strano to Sophie Devine. Length ball, slog sweeping, Hit Hard in the air under control over deep mid wicket for 6 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 7065,
//                                         "bowlerName": "Molly Strano",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                                         "runs": "6",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 8112,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 13,
//                                 "result": "6"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 7065,
//                             "bowlersName": "Molly Strano",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Molly-Strano-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 26, Wicket(s) : 0",
//                             "battingTeamsScore": "2-20",
//                             "runsConcededinOver": "16",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 1,
//                         "uniqueOverId": "2001",
//                         "number": 2,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T05:11:15Z",
//                                         "text": "Over 2. Power Play Fielding. no runs. Bowler: Lea Tahuhu. Adelaide Strikers Women: 2-4(rr 2.00)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 4,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 2
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:11:15Z",
//                                         "text": "Lea Tahuhu to Bridget Patterson. Back of a length, Leave, to wicketkeeper for no runs, fielded by Dooley.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8112,
//                                         "batsmanName": "Bridget Patterson",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Bridget-Patterson-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 4,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 12,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:10:00Z",
//                                         "text": "OUT! Caught. Lea Tahuhu to Tahlia McGrath. Length ball, driving, to wicketkeeper, by Dooley.",
//                                         "isFallOfWicket": true,
//                                         "batsmanId": 8111,
//                                         "batsmanName": "Tahlia McGrath",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Tahlia-McGrath-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 4,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 2,
//                                         "wicketSummary": {
//                                             "batsmanImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Tahlia-McGrath-1920.ashx",
//                                             "batsmanName": "Tahlia McGrath",
//                                             "dismissalMethod": "c: Dooley b: Tahuhu",
//                                             "batsmanRuns": "0",
//                                             "ballsFaced": "4",
//                                             "batsman4sinInnings": "0",
//                                             "batsman6sinInnings": "0",
//                                             "strikeRate": "0.00"
//                                         }
//                                     }
//                                 ],
//                                 "id": 11,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:09:16Z",
//                                         "text": "Lea Tahuhu to Tahlia McGrath. Back of a length, pushing, missed to wicketkeeper for no runs, fielded by Dooley.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8111,
//                                         "batsmanName": "Tahlia McGrath",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Tahlia-McGrath-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 10,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:08:41Z",
//                                         "text": "Lea Tahuhu to Tahlia McGrath. Length ball, defending, Played to extra cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8111,
//                                         "batsmanName": "Tahlia McGrath",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Tahlia-McGrath-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 9,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:08:13Z",
//                                         "text": "Lea Tahuhu to Tahlia McGrath. Length ball, pushing, missed to wicketkeeper for no runs, fielded by Dooley.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8111,
//                                         "batsmanName": "Tahlia McGrath",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Tahlia-McGrath-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 4,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 1
//                                     }
//                                 ],
//                                 "id": 8,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:07:07Z",
//                                         "text": "OUT! Caught. Lea Tahuhu to Suzie Bates. Length ball, pushing, to wicketkeeper, by Dooley.",
//                                         "isFallOfWicket": true,
//                                         "batsmanId": 5854,
//                                         "batsmanName": "Suzie Bates",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Suzie-Bates-1920.ashx",
//                                         "bowlerId": 5993,
//                                         "bowlerName": "Lea Tahuhu",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 4,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 1,
//                                         "wicketSummary": {
//                                             "batsmanImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Suzie-Bates-1920.ashx",
//                                             "batsmanName": "Suzie Bates",
//                                             "dismissalMethod": "c: Dooley b: Tahuhu",
//                                             "batsmanRuns": "2",
//                                             "ballsFaced": "3",
//                                             "batsman4sinInnings": "0",
//                                             "batsman6sinInnings": "0",
//                                             "strikeRate": "66.67"
//                                         }
//                                     }
//                                 ],
//                                 "id": 7,
//                                 "result": "0"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5993,
//                             "bowlersName": "Lea Tahuhu",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Lea-Tahuhu-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 20, Wicket(s) : 2",
//                             "battingTeamsScore": "2-4",
//                             "runsConcededinOver": "0",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "2"
//                         }
//                     },
//                     {
//                         "id": 0,
//                         "uniqueOverId": "2000",
//                         "number": 1,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T05:05:21Z",
//                                         "text": "Over 1. Power Play Fielding. 4 runs. Bowler: Sophie Molineux. Adelaide Strikers Women: 0-4(rr 4.00)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5854,
//                                         "batsmanName": "Suzie Bates",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Suzie-Bates-1920.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 4,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:05:21Z",
//                                         "text": "Sophie Molineux to Suzie Bates. Length ball, driving, Played to deep cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5854,
//                                         "batsmanName": "Suzie Bates",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Suzie-Bates-1920.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 4,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 6,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:04:51Z",
//                                         "text": "Sophie Molineux to Sophie Devine. Length ball, cutting, Played to point for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5854,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 5,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:04:32Z",
//                                         "text": "Sophie Molineux to Sophie Devine. Length ball, defending, Played to cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 2,
//                                         "offStrikeBatsmanId": 5854,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 4,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:04:19Z",
//                                         "text": "Sophie Molineux to Suzie Bates. Length ball, pushing, Played to cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5854,
//                                         "batsmanName": "Suzie Bates",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Suzie-Bates-1920.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5858,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 3,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:04:13Z",
//                                         "text": "Sophie Molineux to Sophie Devine. Length ball, driving, Played to point for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5854,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 2,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T05:03:55Z",
//                                         "text": "NEW BALL. Sophie Molineux to Sophie Devine. Length ball, driving, Played to point for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5858,
//                                         "batsmanName": "Sophie Devine",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "bowlerId": 8119,
//                                         "bowlerName": "Sophie Molineux",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5854,
//                                         "wickets": 0
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "NonBallComment",
//                                         "text": "Start of Adelaide Strikers Women Innings.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 0,
//                                         "bowlerId": 0,
//                                         "bowlerName": "",
//                                         "runs": "",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 0,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 1,
//                                 "result": "0"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 8119,
//                             "bowlersName": "Sophie Molineux",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 15, Wicket(s) : 0",
//                             "battingTeamsScore": "0-4",
//                             "runsConcededinOver": "4",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": -1,
//                         "uniqueOverId": "200-1",
//                         "number": 0,
//                         "balls": []
//                     }
//                 ]
//             },
//             {
//                 "id": 1,
//                 "name": "Melbourne Renegades Women 1st Innings",
//                 "shortName": "REN",
//                 "teamId": 342,
//                 "teamColour": "#E5002B",
//                 "overs": [
//                     {
//                         "id": 19,
//                         "uniqueOverId": "10019",
//                         "number": 20,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T04:47:40Z",
//                                         "text": "Over 20. 8 runs. Bowler: Sarah Coyte. Melbourne Renegades Women: 7-117(rr 5.85)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8244,
//                                         "batsmanName": "Georgia Wareham",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 117,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 7
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:47:40Z",
//                                         "text": "Sarah Coyte to Georgia Wareham. Length ball, driving, mis-timed to silly point for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8244,
//                                         "batsmanName": "Georgia Wareham",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 117,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 7
//                                     }
//                                 ],
//                                 "id": 122,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:47:04Z",
//                                         "text": "FOUR! Sarah Coyte to Georgia Wareham. Length ball, pulling, Hit Hard past deep mid wicket for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8244,
//                                         "batsmanName": "Georgia Wareham",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 117,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 7
//                                     }
//                                 ],
//                                 "id": 121,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:46:26Z",
//                                         "text": "Sarah Coyte to Josie Dooley. Length ball, driving, Played to extra cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 113,
//                                         "offStrikeBatsmanId": 8244,
//                                         "wickets": 7
//                                     }
//                                 ],
//                                 "id": 120,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:46:10Z",
//                                         "text": "Sarah Coyte to Josie Dooley. Length ball, driving, Played to mid wicket for 2 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "2",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 8244,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 119,
//                                 "result": "2"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:45:50Z",
//                                         "text": "Sarah Coyte to Georgia Wareham. Length ball, driving, to fine leg for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8244,
//                                         "batsmanName": "Georgia Wareham",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Georgia-Wareham-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 110,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 7
//                                     }
//                                 ],
//                                 "id": 118,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:44:35Z",
//                                         "text": "OUT! Bowled. Sarah Coyte to Maitlan Brown. Length ball, pulling, missed to wicketkeeper, fielded by McPharlin.",
//                                         "isFallOfWicket": true,
//                                         "batsmanId": 10766,
//                                         "batsmanName": "Maitlan Brown",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 109,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 7,
//                                         "wicketSummary": {
//                                             "batsmanImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                             "batsmanName": "Maitlan Brown",
//                                             "dismissalMethod": "b: Coyte",
//                                             "batsmanRuns": "10",
//                                             "ballsFaced": "8",
//                                             "batsman4sinInnings": "1",
//                                             "batsman6sinInnings": "0",
//                                             "strikeRate": "125.00"
//                                         }
//                                     }
//                                 ],
//                                 "id": 117,
//                                 "result": "0"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5843,
//                             "bowlersName": "Sarah Coyte",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 33, Wicket(s) : 1",
//                             "battingTeamsScore": "7-117",
//                             "runsConcededinOver": "8",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "1"
//                         }
//                     },
//                     {
//                         "id": 18,
//                         "uniqueOverId": "10018",
//                         "number": 19,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T04:43:18Z",
//                                         "text": "Over 19. 11 runs. Bowler: Stafanie Taylor. Melbourne Renegades Women: 6-109(rr 5.74)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10766,
//                                         "batsmanName": "Maitlan Brown",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 0
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:43:18Z",
//                                         "text": "Stafanie Taylor to Maitlan Brown. Back of a length, pulling, Played to deep backward square leg for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10766,
//                                         "batsmanName": "Maitlan Brown",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 116,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:42:54Z",
//                                         "text": "FOUR! Stafanie Taylor to Maitlan Brown. Length ball, reverse sweeping, Hit Hard past deep backward point for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10766,
//                                         "batsmanName": "Maitlan Brown",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 115,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:42:29Z",
//                                         "text": "Stafanie Taylor to Josie Dooley. Length ball, pulling, Played to deep mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 10766,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 114,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:42:10Z",
//                                         "text": "Stafanie Taylor to Josie Dooley. Length ball, driving, Played to deep mid wicket for 2 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "2",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 10766,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 113,
//                                 "result": "2"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:41:46Z",
//                                         "text": "Stafanie Taylor to Maitlan Brown. Length ball, driving, Played to mid off for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10766,
//                                         "batsmanName": "Maitlan Brown",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 112,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:41:28Z",
//                                         "text": "Stafanie Taylor to Maitlan Brown. Length ball, pulling, mis-timed to mid wicket for 2 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10766,
//                                         "batsmanName": "Maitlan Brown",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "2",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 111,
//                                 "result": "2"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5824,
//                             "bowlersName": "Stafanie Taylor",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 26, Wicket(s) : 3",
//                             "battingTeamsScore": "0-0",
//                             "runsConcededinOver": "11",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 17,
//                         "uniqueOverId": "10017",
//                         "number": 18,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T04:40:23Z",
//                                         "text": "Over 18. 3 runs. Bowler: Sophie Devine. Melbourne Renegades Women: 6-98(rr 5.44)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10766,
//                                         "batsmanName": "Maitlan Brown",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 0
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:40:23Z",
//                                         "text": "Sophie Devine to Maitlan Brown. Length ball, driving, Played to long on for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10766,
//                                         "batsmanName": "Maitlan Brown",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 110,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:39:54Z",
//                                         "text": "Sophie Devine to Maitlan Brown. Short, pulling, missed to wicketkeeper for no runs, fielded by McPharlin.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10766,
//                                         "batsmanName": "Maitlan Brown",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 97,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 6
//                                     }
//                                 ],
//                                 "id": 109,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:39:27Z",
//                                         "text": "Sophie Devine to Josie Dooley. Length ball, driving, Played to extra cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 97,
//                                         "offStrikeBatsmanId": 10766,
//                                         "wickets": 6
//                                     }
//                                 ],
//                                 "id": 108,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:38:59Z",
//                                         "text": "Sophie Devine to Josie Dooley. Length ball, glancing, hit pad to wicketkeeper for no runs, fielded by McPharlin.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 96,
//                                         "offStrikeBatsmanId": 10766,
//                                         "wickets": 6
//                                     }
//                                 ],
//                                 "id": 107,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:38:22Z",
//                                         "text": "Sophie Devine to Maitlan Brown. Length ball, driving, Played to extra cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10766,
//                                         "batsmanName": "Maitlan Brown",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Maitlan-Brown-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 96,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 6
//                                     }
//                                 ],
//                                 "id": 106,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:37:03Z",
//                                         "text": "OUT! Caught. Sophie Devine to Jess Duffin. Length ball, driving, Played to mid off, by Taylor.",
//                                         "isFallOfWicket": true,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 95,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 6,
//                                         "wicketSummary": {
//                                             "batsmanImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                             "batsmanName": "Jess Duffin",
//                                             "dismissalMethod": "c: Taylor b: Devine",
//                                             "batsmanRuns": "44",
//                                             "ballsFaced": "32",
//                                             "batsman4sinInnings": "5",
//                                             "batsman6sinInnings": "0",
//                                             "strikeRate": "137.50"
//                                         }
//                                     }
//                                 ],
//                                 "id": 105,
//                                 "result": "0"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5858,
//                             "bowlersName": "Sophie Devine",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 16, Wicket(s) : 1",
//                             "battingTeamsScore": "0-0",
//                             "runsConcededinOver": "3",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "1"
//                         }
//                     },
//                     {
//                         "id": 16,
//                         "uniqueOverId": "10016",
//                         "number": 17,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T04:35:43Z",
//                                         "text": "Over 17. 10 runs. Bowler: Sarah Coyte. Melbourne Renegades Women: 5-95(rr 5.59)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 95,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:35:43Z",
//                                         "text": "Sarah Coyte to Jess Duffin. Length ball, flick, Played to mid on for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 95,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 104,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:35:11Z",
//                                         "text": "Sarah Coyte to Jess Duffin. Length ball, driving, Played to mid off for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 94,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 103,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:34:25Z",
//                                         "text": "Sarah Coyte to Jess Duffin. Length ball, cutting, Played to backward point for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 94,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 102,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:33:58Z",
//                                         "text": "FOUR! Sarah Coyte to Jess Duffin. Length ball, flick, Played past fine leg for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 94,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 101,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:33:07Z",
//                                         "text": "FOUR! Sarah Coyte to Jess Duffin. Length ball, driving, Hit Hard past long off for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 90,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 100,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:32:31Z",
//                                         "text": "Sarah Coyte to Josie Dooley. Length ball, driving, Played to mid on for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 86,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 99,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5843,
//                             "bowlersName": "Sarah Coyte",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 33, Wicket(s) : 1",
//                             "battingTeamsScore": "5-95",
//                             "runsConcededinOver": "10",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 15,
//                         "uniqueOverId": "10015",
//                         "number": 16,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T04:31:29Z",
//                                         "text": "Over 16. 13 runs. Bowler: Amanda Wellington. Melbourne Renegades Women: 5-85(rr 5.31)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 85,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:31:29Z",
//                                         "text": "FOUR! Amanda Wellington to Jess Duffin. Length ball, cutting, Played past deep point for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 85,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 98,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:30:55Z",
//                                         "text": "FOUR! Amanda Wellington to Jess Duffin. Length ball, driving, Hit Hard past deep extra cover for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 81,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 97,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:30:15Z",
//                                         "text": "Amanda Wellington to Jess Duffin. Length ball, driving, mis-timed in the air uncontrolled to mid off for 2 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "2",
//                                         "battingTeamScore": 77,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 96,
//                                 "result": "2"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:29:39Z",
//                                         "text": "Amanda Wellington to Jess Duffin. Length ball, driving, mis-timed to deep cover for 2 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "2",
//                                         "battingTeamScore": 75,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 95,
//                                 "result": "2"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:29:14Z",
//                                         "text": "Amanda Wellington to Josie Dooley. Length ball, flick, to gully for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 73,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 94,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:28:50Z",
//                                         "text": "Amanda Wellington to Josie Dooley. Length ball, driving, Played to point for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 72,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 93,
//                                 "result": "0"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 7738,
//                             "bowlersName": "Amanda Wellington",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 28, Wicket(s) : 0",
//                             "battingTeamsScore": "5-85",
//                             "runsConcededinOver": "13",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 14,
//                         "uniqueOverId": "10014",
//                         "number": 15,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T04:27:59Z",
//                                         "text": "Over 15. 9 runs. Bowler: Stafanie Taylor. Melbourne Renegades Women: 5-72(rr 4.80)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 72,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:27:59Z",
//                                         "text": "Stafanie Taylor to Josie Dooley. Length ball, driving, Played to deep cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 72,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 92,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:27:43Z",
//                                         "text": "Stafanie Taylor to Josie Dooley. Length ball, cutting, Played to third man for 2 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "2",
//                                         "battingTeamScore": 71,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 91,
//                                 "result": "2"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:27:07Z",
//                                         "text": "FOUR! Stafanie Taylor to Josie Dooley. Length ball, driving, Played past deep mid wicket for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 69,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 90,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:26:49Z",
//                                         "text": "Stafanie Taylor to Josie Dooley. Length ball, driving, missed to wicketkeeper for no runs, fielded by McPharlin.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 65,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 89,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:26:19Z",
//                                         "text": "Stafanie Taylor to Jess Duffin. Length ball, driving, Played to deep cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 65,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 88,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:26:03Z",
//                                         "text": "Stafanie Taylor to Josie Dooley. Length ball, pulling, Played to mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 64,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 87,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5824,
//                             "bowlersName": "Stafanie Taylor",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 26, Wicket(s) : 3",
//                             "battingTeamsScore": "5-72",
//                             "runsConcededinOver": "9",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 13,
//                         "uniqueOverId": "10013",
//                         "number": 14,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T04:25:05Z",
//                                         "text": "Over 14. 6 runs. Bowler: Amanda Wellington. Melbourne Renegades Women: 5-63(rr 4.50)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 63,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:25:05Z",
//                                         "text": "Amanda Wellington to Josie Dooley. Length ball, driving, Played to extra cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 63,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 86,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:24:46Z",
//                                         "text": "Amanda Wellington to Josie Dooley. Length ball, defending, Played to short mid wicket for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 62,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 85,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:24:15Z",
//                                         "text": "Amanda Wellington to Jess Duffin. Length ball, Steer, Played to short third man for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 62,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 84,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:23:45Z",
//                                         "text": "Amanda Wellington to Jess Duffin. Length ball, driving, Played to cover for 2 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "2",
//                                         "battingTeamScore": 61,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 83,
//                                 "result": "2"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:23:11Z",
//                                         "text": "Amanda Wellington to Josie Dooley. Length ball, driving, Played to deep cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 59,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 82,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:22:33Z",
//                                         "text": "Amanda Wellington to Jess Duffin. Length ball, pushing, Played to point for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 58,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 81,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 7738,
//                             "bowlersName": "Amanda Wellington",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 28, Wicket(s) : 0",
//                             "battingTeamsScore": "5-63",
//                             "runsConcededinOver": "6",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 12,
//                         "uniqueOverId": "10012",
//                         "number": 13,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T04:21:27Z",
//                                         "text": "Over 13. 5 runs. Bowler: Stafanie Taylor. Melbourne Renegades Women: 5-57(rr 4.38)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 57,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:21:27Z",
//                                         "text": "Stafanie Taylor to Josie Dooley. Length ball, driving, Played to cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 57,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 80,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:21:07Z",
//                                         "text": "Stafanie Taylor to Jess Duffin. Length ball, driving, Played to long on for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 57,
//                                         "offStrikeBatsmanId": 10813,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 79,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:20:43Z",
//                                         "text": "Stafanie Taylor to Josie Dooley. Length ball, driving, Played to cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 10813,
//                                         "batsmanName": "Josie Dooley",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Josie-Dooley-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 56,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5
//                                     }
//                                 ],
//                                 "id": 78,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:19:09Z",
//                                         "text": "OUT! Stumped. Stafanie Taylor to Courtney Webb. Length ball, driving, missed to wicketkeeper, by McPharlin.",
//                                         "isFallOfWicket": true,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 55,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 5,
//                                         "wicketSummary": {
//                                             "batsmanImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                             "batsmanName": "Courtney Webb",
//                                             "dismissalMethod": "st: McPharlin b: Taylor",
//                                             "batsmanRuns": "16",
//                                             "ballsFaced": "25",
//                                             "batsman4sinInnings": "1",
//                                             "batsman6sinInnings": "0",
//                                             "strikeRate": "64.00"
//                                         }
//                                     }
//                                 ],
//                                 "id": 77,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:18:33Z",
//                                         "text": "Stafanie Taylor to Jess Duffin. Length ball, driving, Played to cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 76,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "Wide",
//                                         "dateTime": "2019-10-19T04:18:17Z",
//                                         "text": "Wide Stafanie Taylor to Jess Duffin. Length ball, sweeping, Missed (Leg Side) to wicketkeeper for 1 run, fielded by McPharlin.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 75,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:17:48Z",
//                                         "text": "Stafanie Taylor to Courtney Webb. Length ball, cutting, Played to backward point for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 74,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5824,
//                             "bowlersName": "Stafanie Taylor",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 26, Wicket(s) : 3",
//                             "battingTeamsScore": "5-57",
//                             "runsConcededinOver": "5",
//                             "extrasConcededinOver": "Total Extra(s) : 1, wide:1, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "1"
//                         }
//                     },
//                     {
//                         "id": 11,
//                         "uniqueOverId": "10011",
//                         "number": 12,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T04:16:37Z",
//                                         "text": "Over 12. 9 runs. Bowler: Sarah Coyte. Melbourne Renegades Women: 4-52(rr 4.33)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 52,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 4
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:16:37Z",
//                                         "text": "FOUR! Sarah Coyte to Jess Duffin. Length ball, driving, Hit Hard past deep cover for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 52,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 73,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:16:13Z",
//                                         "text": "Sarah Coyte to Courtney Webb. Back of a length, working, Played to deep mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 48,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 72,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:15:53Z",
//                                         "text": "Sarah Coyte to Jess Duffin. Length ball, flick, Played to backward square leg for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 71,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:15:24Z",
//                                         "text": "Sarah Coyte to Courtney Webb. Length ball, cutting, Played to backward point for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 46,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 70,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:14:57Z",
//                                         "text": "Sarah Coyte to Jess Duffin. Length ball, driving, Played to long on for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 45,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 69,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:14:35Z",
//                                         "text": "Sarah Coyte to Courtney Webb. Length ball, driving, Played to deep mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 44,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 68,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5843,
//                             "bowlersName": "Sarah Coyte",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 33, Wicket(s) : 1",
//                             "battingTeamsScore": "4-52",
//                             "runsConcededinOver": "9",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 10,
//                         "uniqueOverId": "10010",
//                         "number": 11,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T04:13:19Z",
//                                         "text": "Over 11. 6 runs. Bowler: Sophie Devine. Melbourne Renegades Women: 4-43(rr 3.91)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 43,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 4
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:13:19Z",
//                                         "text": "Sophie Devine to Jess Duffin. Length ball, flick, Played to deep backward square leg for 2 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "2",
//                                         "battingTeamScore": 43,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 67,
//                                 "result": "2"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:12:46Z",
//                                         "text": "Sophie Devine to Jess Duffin. Length ball, defending, Played back to bowler for no runs, fielded by Devine.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 41,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 66,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:12:23Z",
//                                         "text": "Sophie Devine to Courtney Webb. Length ball, glancing, Played to short fine leg for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 65,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:11:49Z",
//                                         "text": "Sophie Devine to Jess Duffin. Length ball, pushing, Played to extra cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 64,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "Wide",
//                                         "dateTime": "2019-10-19T04:11:24Z",
//                                         "text": "Wide Sophie Devine to Jess Duffin. Short, pulling, missed to wicketkeeper for 1 run, fielded by McPharlin.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 63,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:10:29Z",
//                                         "text": "Sophie Devine to Courtney Webb. Length ball, driving, Played to mid off for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 62,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:09:57Z",
//                                         "text": "Sophie Devine to Courtney Webb. Length ball, driving, missed to wicketkeeper for no runs, fielded by McPharlin.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 37,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 61,
//                                 "result": "0"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5858,
//                             "bowlersName": "Sophie Devine",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 16, Wicket(s) : 1",
//                             "battingTeamsScore": "4-43",
//                             "runsConcededinOver": "6",
//                             "extrasConcededinOver": "Total Extra(s) : 1, wide:1, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 9,
//                         "uniqueOverId": "1009",
//                         "number": 10,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T04:08:55Z",
//                                         "text": "Over 10. 4 runs. Bowler: Amanda Wellington. Melbourne Renegades Women: 4-37(rr 3.70)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 37,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:08:55Z",
//                                         "text": "Amanda Wellington to Courtney Webb. Length ball, driving, Played to deep cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 37,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 60,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:08:35Z",
//                                         "text": "Amanda Wellington to Courtney Webb. Length ball, driving, Played to cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 36,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 59,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:08:13Z",
//                                         "text": "Amanda Wellington to Jess Duffin. Back of a length, cutting, Played to deep point for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 58,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:07:27Z",
//                                         "text": "Amanda Wellington to Courtney Webb. Length ball, working, Played to backward square leg for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 35,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 57,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:07:09Z",
//                                         "text": "Amanda Wellington to Courtney Webb. Length ball, driving, Played to cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 34,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 56,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:06:51Z",
//                                         "text": "Amanda Wellington to Jess Duffin. Length ball, driving, Played to short extra cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 55,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 7738,
//                             "bowlersName": "Amanda Wellington",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 28, Wicket(s) : 0",
//                             "battingTeamsScore": "4-37",
//                             "runsConcededinOver": "4",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 8,
//                         "uniqueOverId": "1008",
//                         "number": 9,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T04:05:57Z",
//                                         "text": "Over 9. 1 run. Bowler: Megan Schutt. Melbourne Renegades Women: 4-33(rr 3.67)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 0
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:05:57Z",
//                                         "text": "Megan Schutt to Courtney Webb. Length ball, driving, Played to cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 54,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:05:36Z",
//                                         "text": "Megan Schutt to Courtney Webb. Length ball, working, hit pad to short extra cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 53,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:05:08Z",
//                                         "text": "Megan Schutt to Courtney Webb. Length ball, pushing, Played to cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 33,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 52,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:04:34Z",
//                                         "text": "Megan Schutt to Courtney Webb. Length ball, defending, Played to short extra cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 51,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:04:13Z",
//                                         "text": "Megan Schutt to Jess Duffin. Length ball, pushing, Played to short third man for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 50,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:03:46Z",
//                                         "text": "Megan Schutt to Jess Duffin. Length ball, defending, Played to extra cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 32,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 49,
//                                 "result": "0"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5981,
//                             "bowlersName": "Megan Schutt",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 13, Wicket(s) : 2",
//                             "battingTeamsScore": "0-0",
//                             "runsConcededinOver": "1",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 7,
//                         "uniqueOverId": "1007",
//                         "number": 8,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T04:02:38Z",
//                                         "text": "Over 8. 5 runs. Bowler: Amanda Wellington. Melbourne Renegades Women: 4-32(rr 4.00)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 0
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:02:38Z",
//                                         "text": "Amanda Wellington to Jess Duffin. Length ball, flick, Played to deep square leg for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 48,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:02:20Z",
//                                         "text": "Amanda Wellington to Jess Duffin. Full toss, driving, Played back to bowler for no runs, fielded by Wellington.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 47,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:01:58Z",
//                                         "text": "Amanda Wellington to Courtney Webb. Length ball, pulling, Played to mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 31,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 46,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:01:40Z",
//                                         "text": "Amanda Wellington to Jess Duffin. Length ball, driving, Played to mid on for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 30,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 45,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:01:20Z",
//                                         "text": "Amanda Wellington to Courtney Webb. Length ball, sweeping, Played to short fine leg for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 29,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 44,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T04:00:46Z",
//                                         "text": "Amanda Wellington to Jess Duffin. Length ball, flick, Played to mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 7738,
//                                         "bowlerName": "Amanda Wellington",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 43,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 7738,
//                             "bowlersName": "Amanda Wellington",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Amanda-Jade-Wellington-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 28, Wicket(s) : 0",
//                             "battingTeamsScore": "0-0",
//                             "runsConcededinOver": "5",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 6,
//                         "uniqueOverId": "1006",
//                         "number": 7,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T03:59:16Z",
//                                         "text": "Over 7. 6 runs. Bowler: Sarah Cady. Melbourne Renegades Women: 4-27(rr 3.86)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 27,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 4
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:59:16Z",
//                                         "text": "Sarah Cady to Jess Duffin. Length ball, driving, Played to cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 27,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 42,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:58:56Z",
//                                         "text": "Sarah Cady to Jess Duffin. Length ball, defending, Played back to bowler for no runs, fielded by Cady.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5842,
//                                         "batsmanName": "Jess Duffin",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Jess-Duffin-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 26,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 41,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:58:18Z",
//                                         "text": "Sarah Cady to Courtney Webb. Back of a length, cutting, Played to third man for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 26,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 40,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:57:36Z",
//                                         "text": "FOUR! Sarah Cady to Courtney Webb. Length ball, cutting, Played past third man for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 25,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 39,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:57:10Z",
//                                         "text": "Sarah Cady to Courtney Webb. Length ball, defending, Played to mid off for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 21,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 38,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:56:52Z",
//                                         "text": "Sarah Cady to Courtney Webb. Length ball, defending, Played to short leg for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5843,
//                                         "bowlerName": "Sarah Cady",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 21,
//                                         "offStrikeBatsmanId": 5842,
//                                         "wickets": 4
//                                     }
//                                 ],
//                                 "id": 37,
//                                 "result": "0"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5843,
//                             "bowlersName": "Sarah Coyte",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sarah-Coyte-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 33, Wicket(s) : 1",
//                             "battingTeamsScore": "4-27",
//                             "runsConcededinOver": "6",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 5,
//                         "uniqueOverId": "1005",
//                         "number": 6,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T03:55:11Z",
//                                         "text": "Over 6. Power Play Fielding. 1 run. Bowler: Stafanie Taylor. Melbourne Renegades Women: 4-21(rr 3.50)",
//                                         "isFallOfWicket": true,
//                                         "batsmanId": 5413,
//                                         "batsmanName": "Tammy Beaumont",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/REN_TammyBeaumont_WBBL05_350x509.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 21,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 4
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:55:11Z",
//                                         "text": "OUT! Bowled. Stafanie Taylor to Tammy Beaumont. Length ball, sweeping, missed to.",
//                                         "isFallOfWicket": true,
//                                         "batsmanId": 5413,
//                                         "batsmanName": "Tammy Beaumont",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/REN_TammyBeaumont_WBBL05_350x509.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 21,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 4,
//                                         "wicketSummary": {
//                                             "batsmanImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/REN_TammyBeaumont_WBBL05_350x509.ashx",
//                                             "batsmanName": "Tammy Beaumont",
//                                             "dismissalMethod": "b: Taylor",
//                                             "batsmanRuns": "2",
//                                             "ballsFaced": "8",
//                                             "batsman4sinInnings": "0",
//                                             "batsman6sinInnings": "0",
//                                             "strikeRate": "25.00"
//                                         }
//                                     }
//                                 ],
//                                 "id": 36,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:54:42Z",
//                                         "text": "Stafanie Taylor to Tammy Beaumont. Length ball, driving, missed to wicketkeeper for no runs, fielded by McPharlin.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5413,
//                                         "batsmanName": "Tammy Beaumont",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/REN_TammyBeaumont_WBBL05_350x509.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 11324,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 35,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:54:10Z",
//                                         "text": "Stafanie Taylor to Courtney Webb. Length ball, driving, Played to deep cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5413,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 34,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:53:52Z",
//                                         "text": "Stafanie Taylor to Courtney Webb. Length ball, cutting, Played to point for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 20,
//                                         "offStrikeBatsmanId": 5413,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 33,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:53:34Z",
//                                         "text": "Stafanie Taylor to Courtney Webb. Length ball, driving, Played to mid off for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 11324,
//                                         "batsmanName": "Courtney Webb",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Courtney-Webb-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 20,
//                                         "offStrikeBatsmanId": 5413,
//                                         "wickets": 3
//                                     }
//                                 ],
//                                 "id": 32,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:52:44Z",
//                                         "text": "OUT! Caught. Stafanie Taylor to Claire Koski. Back of a length, pulling, Played to mid wicket, by Schutt.",
//                                         "isFallOfWicket": true,
//                                         "batsmanId": 8118,
//                                         "batsmanName": "Claire Koski",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "bowlerId": 5824,
//                                         "bowlerName": "Stafanie Taylor",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 20,
//                                         "offStrikeBatsmanId": 5413,
//                                         "wickets": 3,
//                                         "wicketSummary": {
//                                             "batsmanImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                             "batsmanName": "Claire Koski",
//                                             "dismissalMethod": "c: Schutt b: Taylor",
//                                             "batsmanRuns": "6",
//                                             "ballsFaced": "8",
//                                             "batsman4sinInnings": "0",
//                                             "batsman6sinInnings": "0",
//                                             "strikeRate": "75.00"
//                                         }
//                                     }
//                                 ],
//                                 "id": 31,
//                                 "result": "0"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5824,
//                             "bowlersName": "Stafanie Taylor",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/International/West%20Indies/Stafanie-Taylor-WT2018.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 26, Wicket(s) : 3",
//                             "battingTeamsScore": "4-21",
//                             "runsConcededinOver": "1",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "2"
//                         }
//                     },
//                     {
//                         "id": 4,
//                         "uniqueOverId": "1004",
//                         "number": 5,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T03:50:33Z",
//                                         "text": "Over 5. Power Play Fielding. 4 runs. Bowler: Megan Schutt. Melbourne Renegades Women: 2-20(rr 4.00)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5413,
//                                         "batsmanName": "Tammy Beaumont",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/REN_TammyBeaumont_WBBL05_350x509.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 20,
//                                         "offStrikeBatsmanId": 8118,
//                                         "wickets": 2
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:50:33Z",
//                                         "text": "Megan Schutt to Tammy Beaumont. Length ball, driving, Played to cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5413,
//                                         "batsmanName": "Tammy Beaumont",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/REN_TammyBeaumont_WBBL05_350x509.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 20,
//                                         "offStrikeBatsmanId": 8118,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 30,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:50:13Z",
//                                         "text": "Megan Schutt to Claire Koski. Length ball, glancing, Played to short fine leg for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8118,
//                                         "batsmanName": "Claire Koski",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 20,
//                                         "offStrikeBatsmanId": 5413,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 29,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:49:36Z",
//                                         "text": "Megan Schutt to Claire Koski. Length ball, driving, Played to point for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8118,
//                                         "batsmanName": "Claire Koski",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 19,
//                                         "offStrikeBatsmanId": 5413,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 28,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:49:02Z",
//                                         "text": "Megan Schutt to Tammy Beaumont. Length ball, flick, Played to deep mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5413,
//                                         "batsmanName": "Tammy Beaumont",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/REN_TammyBeaumont_WBBL05_350x509.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 19,
//                                         "offStrikeBatsmanId": 8118,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 27,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:48:34Z",
//                                         "text": "Megan Schutt to Claire Koski. Length ball, flick, Played to deep mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8118,
//                                         "batsmanName": "Claire Koski",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 18,
//                                         "offStrikeBatsmanId": 5413,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 26,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegBye",
//                                         "dateTime": "2019-10-19T03:48:16Z",
//                                         "text": "Megan Schutt to Tammy Beaumont. Back of a length, pulling, hit body to short extra cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5413,
//                                         "batsmanName": "Tammy Beaumont",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/REN_TammyBeaumont_WBBL05_350x509.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 17,
//                                         "offStrikeBatsmanId": 8118,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 25,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5981,
//                             "bowlersName": "Megan Schutt",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 13, Wicket(s) : 2",
//                             "battingTeamsScore": "2-20",
//                             "runsConcededinOver": "4",
//                             "extrasConcededinOver": "Total Extra(s) : 1, wide:0, bye:1, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 3,
//                         "uniqueOverId": "1003",
//                         "number": 4,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T03:46:57Z",
//                                         "text": "Over 4. Power Play Fielding. 4 runs. Bowler: Sophie Devine. Melbourne Renegades Women: 2-16(rr 4.00)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5413,
//                                         "batsmanName": "Tammy Beaumont",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/REN_TammyBeaumont_WBBL05_350x509.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 16,
//                                         "offStrikeBatsmanId": 8118,
//                                         "wickets": 2
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:46:57Z",
//                                         "text": "Sophie Devine to Tammy Beaumont. Length ball, flick, Played to deep mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5413,
//                                         "batsmanName": "Tammy Beaumont",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/REN_TammyBeaumont_WBBL05_350x509.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 16,
//                                         "offStrikeBatsmanId": 8118,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 24,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:46:27Z",
//                                         "text": "Sophie Devine to Tammy Beaumont. Length ball, driving, Played to mid on for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5413,
//                                         "batsmanName": "Tammy Beaumont",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/REN_TammyBeaumont_WBBL05_350x509.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 15,
//                                         "offStrikeBatsmanId": 8118,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 23,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:45:58Z",
//                                         "text": "Sophie Devine to Tammy Beaumont. Length ball, pushing, Played to short extra cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5413,
//                                         "batsmanName": "Tammy Beaumont",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/REN_TammyBeaumont_WBBL05_350x509.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 15,
//                                         "offStrikeBatsmanId": 8118,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 22,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:45:09Z",
//                                         "text": "Sophie Devine to Claire Koski. Short, hooking, Played to deep backward square leg for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8118,
//                                         "batsmanName": "Claire Koski",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 15,
//                                         "offStrikeBatsmanId": 5413,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 21,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:44:31Z",
//                                         "text": "Sophie Devine to Claire Koski. Back of a length, pulling, Played to deep mid wicket for 2 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8118,
//                                         "batsmanName": "Claire Koski",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "2",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5413,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 20,
//                                 "result": "2"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:43:54Z",
//                                         "text": "Sophie Devine to Claire Koski. Back of a length, driving, Played to mid off for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8118,
//                                         "batsmanName": "Claire Koski",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 12,
//                                         "offStrikeBatsmanId": 5413,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 19,
//                                 "result": "0"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5858,
//                             "bowlersName": "Sophie Devine",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 16, Wicket(s) : 1",
//                             "battingTeamsScore": "2-16",
//                             "runsConcededinOver": "4",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 2,
//                         "uniqueOverId": "1002",
//                         "number": 3,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T03:42:48Z",
//                                         "text": "Over 3. Power Play Fielding. 2 runs. Bowler: Megan Schutt. Melbourne Renegades Women: 2-12(rr 4.00)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8118,
//                                         "batsmanName": "Claire Koski",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 12,
//                                         "offStrikeBatsmanId": 5413,
//                                         "wickets": 2
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:42:48Z",
//                                         "text": "Megan Schutt to Claire Koski. Length ball, working, Played to mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8118,
//                                         "batsmanName": "Claire Koski",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Claire-Koski-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 12,
//                                         "offStrikeBatsmanId": 5413,
//                                         "wickets": 2
//                                     }
//                                 ],
//                                 "id": 18,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:41:42Z",
//                                         "text": "OUT! Caught & Bowled. Megan Schutt to Sophie Molineux. Back of a length, pulling, mis-timed back to bowler, by Schutt.",
//                                         "isFallOfWicket": true,
//                                         "batsmanId": 8119,
//                                         "batsmanName": "Sophie Molineux",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 11,
//                                         "offStrikeBatsmanId": 5413,
//                                         "wickets": 2,
//                                         "wicketSummary": {
//                                             "batsmanImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                             "batsmanName": "Sophie Molineux",
//                                             "dismissalMethod": "c&b: Schutt",
//                                             "batsmanRuns": "10",
//                                             "ballsFaced": "10",
//                                             "batsman4sinInnings": "1",
//                                             "batsman6sinInnings": "0",
//                                             "strikeRate": "100.00"
//                                         }
//                                     }
//                                 ],
//                                 "id": 17,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:40:46Z",
//                                         "text": "Megan Schutt to Sophie Molineux. Length ball, cutting, Played to backward point for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8119,
//                                         "batsmanName": "Sophie Molineux",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 11,
//                                         "offStrikeBatsmanId": 5413,
//                                         "wickets": 1
//                                     }
//                                 ],
//                                 "id": 16,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:39:58Z",
//                                         "text": "OUT! Caught. Megan Schutt to Danni Wyatt. Length ball, driving, mis-timed in the air uncontrolled to wicketkeeper, by McPharlin.",
//                                         "isFallOfWicket": true,
//                                         "batsmanId": 5419,
//                                         "batsmanName": "Danni Wyatt",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Danni-Wyatt-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 11,
//                                         "offStrikeBatsmanId": 8119,
//                                         "wickets": 1,
//                                         "wicketSummary": {
//                                             "batsmanImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Danni-Wyatt-1920.ashx",
//                                             "batsmanName": "Danni Wyatt",
//                                             "dismissalMethod": "c: McPharlin b: Schutt",
//                                             "batsmanRuns": "1",
//                                             "ballsFaced": "7",
//                                             "batsman4sinInnings": "0",
//                                             "batsman6sinInnings": "0",
//                                             "strikeRate": "14.29"
//                                         }
//                                     }
//                                 ],
//                                 "id": 15,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:38:50Z",
//                                         "text": "Megan Schutt to Danni Wyatt. Length ball, defending, Played back to bowler for no runs, fielded by Schutt.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5419,
//                                         "batsmanName": "Danni Wyatt",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Danni-Wyatt-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 8119,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 14,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:38:26Z",
//                                         "text": "Megan Schutt to Sophie Molineux. Length ball, driving, mis-timed in the air uncontrolled to backward point for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8119,
//                                         "batsmanName": "Sophie Molineux",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 11,
//                                         "offStrikeBatsmanId": 5419,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 13,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5981,
//                             "bowlersName": "Megan Schutt",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 13, Wicket(s) : 2",
//                             "battingTeamsScore": "2-12",
//                             "runsConcededinOver": "2",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "2"
//                         }
//                     },
//                     {
//                         "id": 1,
//                         "uniqueOverId": "1001",
//                         "number": 2,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T03:37:20Z",
//                                         "text": "Over 2. Power Play Fielding. 3 runs. Bowler: Sophie Devine. Melbourne Renegades Women: 0-10(rr 5.00)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5419,
//                                         "batsmanName": "Danni Wyatt",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Danni-Wyatt-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 10,
//                                         "offStrikeBatsmanId": 8119,
//                                         "wickets": 0
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:37:20Z",
//                                         "text": "Sophie Devine to Danni Wyatt. Short, pulling, missed to wicketkeeper for no runs, fielded by McPharlin.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5419,
//                                         "batsmanName": "Danni Wyatt",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Danni-Wyatt-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 10,
//                                         "offStrikeBatsmanId": 8119,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 12,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:36:52Z",
//                                         "text": "Sophie Devine to Danni Wyatt. Length ball, driving, Played to cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5419,
//                                         "batsmanName": "Danni Wyatt",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Danni-Wyatt-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 8119,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 11,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:36:28Z",
//                                         "text": "Sophie Devine to Sophie Molineux. Length ball, driving, Played to deep cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8119,
//                                         "batsmanName": "Sophie Molineux",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 10,
//                                         "offStrikeBatsmanId": 5419,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 10,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:35:52Z",
//                                         "text": "Sophie Devine to Danni Wyatt. Back of a length, working, Played to mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5419,
//                                         "batsmanName": "Danni Wyatt",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Danni-Wyatt-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 9,
//                                         "offStrikeBatsmanId": 8119,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 9,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:35:08Z",
//                                         "text": "Sophie Devine to Danni Wyatt. Length ball, driving, Played to cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5419,
//                                         "batsmanName": "Danni Wyatt",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Danni-Wyatt-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 8,
//                                         "offStrikeBatsmanId": 8119,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 8,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:34:35Z",
//                                         "text": "Sophie Devine to Sophie Molineux. Back of a length, working, Played to short mid wicket for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8119,
//                                         "batsmanName": "Sophie Molineux",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "bowlerId": 5858,
//                                         "bowlerName": "Sophie Devine",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 8,
//                                         "offStrikeBatsmanId": 5419,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 7,
//                                 "result": "1"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5858,
//                             "bowlersName": "Sophie Devine",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Sophie-Devine-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 16, Wicket(s) : 1",
//                             "battingTeamsScore": "0-10",
//                             "runsConcededinOver": "3",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": 0,
//                         "uniqueOverId": "1000",
//                         "number": 1,
//                         "balls": [
//                             {
//                                 "ballNumber": 6,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "NonBallComment",
//                                         "dateTime": "2019-10-19T03:33:18Z",
//                                         "text": "Over 1. Power Play Fielding. 7 runs. Bowler: Megan Schutt. Melbourne Renegades Women: 0-7(rr 7.00)",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5419,
//                                         "batsmanName": "Danni Wyatt",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Danni-Wyatt-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "",
//                                         "battingTeamScore": 7,
//                                         "offStrikeBatsmanId": 8119,
//                                         "wickets": 0
//                                     },
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:33:18Z",
//                                         "text": "Megan Schutt to Danni Wyatt. Length ball, defending, hit pad to short mid wicket for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 5419,
//                                         "batsmanName": "Danni Wyatt",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Danni-Wyatt-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 7,
//                                         "offStrikeBatsmanId": 8119,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 6,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 5,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:32:26Z",
//                                         "text": "Megan Schutt to Sophie Molineux. Length ball, driving, Played to extra cover for 1 run.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8119,
//                                         "batsmanName": "Sophie Molineux",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "1",
//                                         "battingTeamScore": 7,
//                                         "offStrikeBatsmanId": 5419,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 5,
//                                 "result": "1"
//                             },
//                             {
//                                 "ballNumber": 4,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:32:02Z",
//                                         "text": "Megan Schutt to Sophie Molineux. Length ball, driving, Played to mid on for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8119,
//                                         "batsmanName": "Sophie Molineux",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 6,
//                                         "offStrikeBatsmanId": 5419,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 4,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 3,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:31:25Z",
//                                         "text": "Megan Schutt to Sophie Molineux. Length ball, driving, Played to deep cover for 2 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8119,
//                                         "batsmanName": "Sophie Molineux",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "2",
//                                         "battingTeamScore": 6,
//                                         "offStrikeBatsmanId": 5419,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 3,
//                                 "result": "2"
//                             },
//                             {
//                                 "ballNumber": 2,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:30:46Z",
//                                         "text": "FOUR! Megan Schutt to Sophie Molineux. Back of a length, cutting, Hit Hard past deep backward point for 4 runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8119,
//                                         "batsmanName": "Sophie Molineux",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "4",
//                                         "battingTeamScore": 4,
//                                         "offStrikeBatsmanId": 5419,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 2,
//                                 "result": "4"
//                             },
//                             {
//                                 "ballNumber": 1,
//                                 "comments": [
//                                     {
//                                         "id": 2,
//                                         "ballType": "LegitOffBat",
//                                         "dateTime": "2019-10-19T03:30:18Z",
//                                         "text": "NEW BALL. Megan Schutt to Sophie Molineux. Length ball, defending, Played to cover for no runs.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 8119,
//                                         "batsmanName": "Sophie Molineux",
//                                         "batsmanImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Melbourne%20Renegades/WBBL05/Sophie-Molineux-1920.ashx",
//                                         "bowlerId": 5981,
//                                         "bowlerName": "Megan Schutt",
//                                         "bowlerImageURL": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                                         "runs": "0",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 5419,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 1,
//                                 "result": "0"
//                             }
//                         ],
//                         "overSummary": {
//                             "bowlersId": 5981,
//                             "bowlersName": "Megan Schutt",
//                             "bowlersImage": "https://www.cricket.com.au/-/media/Players/Women/Domestic/Adelaide%20Strikers%20WBBL/WBBL05/Megan-Schutt-1920.ashx",
//                             "bowlersBowlingFigures": "Runs Conceded : 13, Wicket(s) : 2",
//                             "battingTeamsScore": "0-7",
//                             "runsConcededinOver": "7",
//                             "extrasConcededinOver": "Total Extra(s) : 0, wide:0, bye:0, no ball run(s):0",
//                             "wicketsTakeninOver": "0"
//                         }
//                     },
//                     {
//                         "id": -1,
//                         "uniqueOverId": "100-1",
//                         "number": 0,
//                         "balls": [
//                             {
//                                 "ballNumber": 0,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "NonBallComment",
//                                         "text": "Start of Melbourne Renegades Women Innings. Welcome to Adelaide for the WBBL clash between the Adelaide Strikers and Melbourne Renegades at Karen Rolton Oval. ",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 0,
//                                         "bowlerId": 0,
//                                         "bowlerName": "",
//                                         "runs": "",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 0,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 3,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 0,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "NonBallComment",
//                                         "text": "Start of Innings. Welcome to Adelaide for the WBBL clash between the Adelaide Strikers and Melbourne Renegades at Karen Rolton Oval. ",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 0,
//                                         "bowlerId": 0,
//                                         "bowlerName": "",
//                                         "runs": "",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 0,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 2,
//                                 "result": "0"
//                             },
//                             {
//                                 "ballNumber": 0,
//                                 "comments": [
//                                     {
//                                         "id": 1,
//                                         "ballType": "NonBallComment",
//                                         "text": "Adelaide Strikers Women won the toss and elected to bowl.",
//                                         "isFallOfWicket": false,
//                                         "batsmanId": 0,
//                                         "bowlerId": 0,
//                                         "bowlerName": "",
//                                         "runs": "",
//                                         "battingTeamScore": 0,
//                                         "offStrikeBatsmanId": 0,
//                                         "wickets": 0
//                                     }
//                                 ],
//                                 "id": 1,
//                                 "result": "0"
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     },
//     "status": 200,
//     "poweredBy": "dev132"
// }

export const getComments = (Mid, Sid) => dispatch => {
    // dispatch({
    //     type: GET_COMMENTS,
    //     payload: comments
    // })
    axios({
        "method": "GET",
        "url": "https://dev132-cricket-live-scores-v1.p.rapidapi.com/comments.php",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
            "x-rapidapi-key": "5b6bac07f2mshbacedf94d8d5a12p10e35ajsn0d32354f31a4"
        }, "params": {
            "seriesid": Sid,
            "matchid": Mid
        }
    })
        .then((comments) => dispatch({
            type: GET_COMMENTS,
            payload: comments.data
        }))
        .catch((error) => {
            console.log(error)
        })
}