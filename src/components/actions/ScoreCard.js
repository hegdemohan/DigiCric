import { GET_SCORECARD } from './Types';
import axios from 'axios';
import { requestInterceptor, responseInterceptor } from "../../interceptor";
// const score_card = {
//     "meta": {
//         "matchTypeId": 1,
//         "series": {
//             "id": 2375,
//             "name": "India v South Africa Test Series 2019"
//         }
//     },
//     "fullScorecard": {
//         "innings": [
//             {
//                 "id": 3,
//                 "isDeclared": false,
//                 "name": "2nd Inn South Africa ",
//                 "shortName": "2nd SA",
//                 "team": {
//                     "id": 6,
//                     "shortName": "SA"
//                 },
//                 "batsmen": [
//                     {
//                         "id": 7165,
//                         "name": "Aiden Markram",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Aiden-Markram-Test17.ashx",
//                         "runs": "0",
//                         "balls": "2",
//                         "strikeRate": "0.00",
//                         "fours": "0",
//                         "sixes": "0",
//                         "howOut": "lbw: Sharma",
//                         "fallOfWicket": "1-0",
//                         "fallOfWicketOver": "0.2",
//                         "fowOrder": 1
//                     },
//                     {
//                         "id": 4548,
//                         "name": "Dean Elgar",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Dean-Elgar-Test17.ashx",
//                         "runs": "48",
//                         "balls": "72",
//                         "strikeRate": "66.67",
//                         "fours": "8",
//                         "sixes": "0",
//                         "howOut": "c: Yadav b: Ashwin",
//                         "fallOfWicket": "4-71",
//                         "fallOfWicketOver": "25.2",
//                         "fowOrder": 4
//                     },
//                     {
//                         "id": 5647,
//                         "name": "Theunis de Bruyn",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Theunis-de-Bruyn-Test17-new.ashx",
//                         "runs": "8",
//                         "balls": "18",
//                         "strikeRate": "44.44",
//                         "fours": "2",
//                         "sixes": "0",
//                         "howOut": "c: Saha b: Yadav",
//                         "fallOfWicket": "2-21",
//                         "fallOfWicketOver": "5.4",
//                         "fowOrder": 2
//                     },
//                     {
//                         "id": 4063,
//                         "name": "Faf du Plessis",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Faf-du-Plessis-Test17.ashx",
//                         "runs": "5",
//                         "balls": "54",
//                         "strikeRate": "9.26",
//                         "fours": "0",
//                         "sixes": "0",
//                         "howOut": "c: Saha b: Ashwin",
//                         "fallOfWicket": "3-70",
//                         "fallOfWicketOver": "23.3",
//                         "fowOrder": 3
//                     },
//                     {
//                         "id": 5885,
//                         "name": "Temba Bavuma",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Temba-Bavuma-Test17.ashx",
//                         "runs": "38",
//                         "balls": "63",
//                         "strikeRate": "60.32",
//                         "fours": "4",
//                         "sixes": "1",
//                         "howOut": "c: Rahane b: Jadeja",
//                         "fallOfWicket": "6-125",
//                         "fallOfWicketOver": "43.2",
//                         "fowOrder": 6
//                     },
//                     {
//                         "id": 5648,
//                         "name": "Quinton de Kock",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Quinton-de-Kock-Test17-new.ashx",
//                         "runs": "5",
//                         "balls": "9",
//                         "strikeRate": "55.56",
//                         "fours": "1",
//                         "sixes": "0",
//                         "howOut": "b: Jadeja",
//                         "fallOfWicket": "5-79",
//                         "fallOfWicketOver": "28.2",
//                         "fowOrder": 5
//                     },
//                     {
//                         "id": 7617,
//                         "name": "Senuran Muthusamy",
//                         "runs": "9",
//                         "balls": "44",
//                         "strikeRate": "20.45",
//                         "fours": "1",
//                         "sixes": "0",
//                         "howOut": "c: Sharma b: Shami",
//                         "fallOfWicket": "7-129",
//                         "fallOfWicketOver": "44.5",
//                         "fowOrder": 7
//                     },
//                     {
//                         "id": 3537,
//                         "name": "Vernon Philander",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Vernon-Philander-Test17-new.ashx",
//                         "runs": "37",
//                         "balls": "72",
//                         "strikeRate": "51.39",
//                         "fours": "2",
//                         "sixes": "2",
//                         "howOut": "c: Saha b: Yadav",
//                         "fallOfWicket": "8-185",
//                         "fallOfWicketOver": "66.1",
//                         "fowOrder": 8
//                     },
//                     {
//                         "id": 7529,
//                         "name": "Keshav Maharaj",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Keshav-Maharaj-Test17.ashx",
//                         "runs": "22",
//                         "balls": "65",
//                         "strikeRate": "33.85",
//                         "fours": "3",
//                         "sixes": "0",
//                         "howOut": "lbw: Jadeja",
//                         "fallOfWicket": "10-189",
//                         "fallOfWicketOver": "67.2",
//                         "fowOrder": 10
//                     },
//                     {
//                         "id": 6580,
//                         "name": "Kagiso Rabada",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Kagiso-Rabada-Test17.ashx",
//                         "runs": "4",
//                         "balls": "5",
//                         "strikeRate": "80.00",
//                         "fours": "1",
//                         "sixes": "0",
//                         "howOut": "c: Sharma b: Yadav",
//                         "fallOfWicket": "9-189",
//                         "fallOfWicketOver": "66.6",
//                         "fowOrder": 9
//                     },
//                     {
//                         "id": 11455,
//                         "name": "Anrich Nortje",
//                         "runs": "0",
//                         "balls": "0",
//                         "strikeRate": "0",
//                         "fours": "0",
//                         "sixes": "0",
//                         "howOut": "not out",
//                         "fowOrder": 0
//                     }
//                 ],
//                 "bowlers": [
//                     {
//                         "id": 3515,
//                         "name": "Ishant Sharma",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Ishant-Sharma-Test1819.ashx",
//                         "runsConceded": "17",
//                         "maidens": "2",
//                         "wickets": "1",
//                         "overs": "5.0",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "3.40"
//                     },
//                     {
//                         "id": 4395,
//                         "name": "Umesh Yadav",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Umesh-Yadav-Test1819.ashx",
//                         "runsConceded": "22",
//                         "maidens": "3",
//                         "wickets": "3",
//                         "overs": "8.0",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "2.75"
//                     },
//                     {
//                         "id": 5051,
//                         "name": "Mohammed Shami",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Mohammed-Shami-Test1819.ashx",
//                         "runsConceded": "34",
//                         "maidens": "2",
//                         "wickets": "1",
//                         "overs": "9.0",
//                         "wides": "2",
//                         "noBalls": "0",
//                         "economy": "3.78"
//                     },
//                     {
//                         "id": 3795,
//                         "name": "Ravichandran Ashwin",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Ravi-Ashwin-Test1819.ashx",
//                         "runsConceded": "45",
//                         "maidens": "6",
//                         "wickets": "2",
//                         "overs": "21.0",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "2.14"
//                     },
//                     {
//                         "id": 3856,
//                         "name": "Ravindra Jadeja",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Ravindra-Jadeja-Test1819.ashx",
//                         "runsConceded": "52",
//                         "maidens": "4",
//                         "wickets": "3",
//                         "overs": "21.2",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "2.44"
//                     },
//                     {
//                         "id": 3516,
//                         "name": "Rohit Sharma",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Rohit-Sharma-Test1819.ashx",
//                         "runsConceded": "4",
//                         "maidens": "0",
//                         "wickets": "0",
//                         "overs": "2.0",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "2.00"
//                     },
//                     {
//                         "id": 3788,
//                         "name": "Virat Kohli",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Virat-Kohli-Test1819.ashx",
//                         "runsConceded": "4",
//                         "maidens": "0",
//                         "wickets": "0",
//                         "overs": "1.0",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "4.00"
//                     }
//                 ],
//                 "wicket": "10",
//                 "run": "189",
//                 "over": "67.2",
//                 "extra": "13",
//                 "bye": "8",
//                 "legBye": "3",
//                 "wide": "2",
//                 "noBall": "0",
//                 "runRate": "2.81",
//                 "requiredRunRate": ""
//             },
//             {
//                 "id": 2,
//                 "isDeclared": false,
//                 "name": "1st Inn South Africa ",
//                 "shortName": "1st SA",
//                 "team": {
//                     "id": 6,
//                     "shortName": "SA"
//                 },
//                 "batsmen": [
//                     {
//                         "id": 4548,
//                         "name": "Dean Elgar",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Dean-Elgar-Test17.ashx",
//                         "runs": "6",
//                         "balls": "13",
//                         "strikeRate": "46.15",
//                         "fours": "1",
//                         "sixes": "0",
//                         "howOut": "b: Yadav",
//                         "fallOfWicket": "2-13",
//                         "fallOfWicketOver": "3.5",
//                         "fowOrder": 2
//                     },
//                     {
//                         "id": 7165,
//                         "name": "Aiden Markram",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Aiden-Markram-Test17.ashx",
//                         "runs": "0",
//                         "balls": "2",
//                         "strikeRate": "0.00",
//                         "fours": "0",
//                         "sixes": "0",
//                         "howOut": "lbw: Yadav",
//                         "fallOfWicket": "1-2",
//                         "fallOfWicketOver": "1.2",
//                         "fowOrder": 1
//                     },
//                     {
//                         "id": 5647,
//                         "name": "Theunis de Bruyn",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Theunis-de-Bruyn-Test17-new.ashx",
//                         "runs": "30",
//                         "balls": "58",
//                         "strikeRate": "51.72",
//                         "fours": "6",
//                         "sixes": "0",
//                         "howOut": "c: Saha b: Yadav",
//                         "fallOfWicket": "5-53",
//                         "fallOfWicketOver": "20.6",
//                         "fowOrder": 5
//                     },
//                     {
//                         "id": 5885,
//                         "name": "Temba Bavuma",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Temba-Bavuma-Test17.ashx",
//                         "runs": "8",
//                         "balls": "15",
//                         "strikeRate": "53.33",
//                         "fours": "1",
//                         "sixes": "0",
//                         "howOut": "c: Saha b: Shami",
//                         "fallOfWicket": "3-33",
//                         "fallOfWicketOver": "9.1",
//                         "fowOrder": 3
//                     },
//                     {
//                         "id": 11455,
//                         "name": "Anrich Nortje",
//                         "runs": "3",
//                         "balls": "28",
//                         "strikeRate": "10.71",
//                         "fours": "0",
//                         "sixes": "0",
//                         "howOut": "c: Kohli b: Shami",
//                         "fallOfWicket": "4-41",
//                         "fallOfWicketOver": "17.2",
//                         "fowOrder": 4
//                     },
//                     {
//                         "id": 4063,
//                         "name": "Faf du Plessis",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Faf-du-Plessis-Test17.ashx",
//                         "runs": "64",
//                         "balls": "117",
//                         "strikeRate": "54.70",
//                         "fours": "9",
//                         "sixes": "1",
//                         "howOut": "c: Rahane b: Ashwin",
//                         "fallOfWicket": "8-162",
//                         "fallOfWicketOver": "58.3",
//                         "fowOrder": 8
//                     },
//                     {
//                         "id": 5648,
//                         "name": "Quinton de Kock",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Quinton-de-Kock-Test17-new.ashx",
//                         "runs": "31",
//                         "balls": "48",
//                         "strikeRate": "64.58",
//                         "fours": "7",
//                         "sixes": "0",
//                         "howOut": "b: Ashwin",
//                         "fallOfWicket": "6-128",
//                         "fallOfWicketOver": "37.6",
//                         "fowOrder": 6
//                     },
//                     {
//                         "id": 7617,
//                         "name": "Senuran Muthusamy",
//                         "runs": "7",
//                         "balls": "20",
//                         "strikeRate": "35.00",
//                         "fours": "0",
//                         "sixes": "0",
//                         "howOut": "lbw: Jadeja",
//                         "fallOfWicket": "7-139",
//                         "fallOfWicketOver": "44.2",
//                         "fowOrder": 7
//                     },
//                     {
//                         "id": 3537,
//                         "name": "Vernon Philander",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Vernon-Philander-Test17-new.ashx",
//                         "runs": "44",
//                         "balls": "192",
//                         "strikeRate": "22.92",
//                         "fours": "6",
//                         "sixes": "0",
//                         "howOut": "not out",
//                         "fowOrder": 0
//                     },
//                     {
//                         "id": 7529,
//                         "name": "Keshav Maharaj",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Keshav-Maharaj-Test17.ashx",
//                         "runs": "72",
//                         "balls": "132",
//                         "strikeRate": "54.55",
//                         "fours": "12",
//                         "sixes": "0",
//                         "howOut": "c: Sharma b: Ashwin",
//                         "fallOfWicket": "9-271",
//                         "fallOfWicketOver": "101.4",
//                         "fowOrder": 9
//                     },
//                     {
//                         "id": 6580,
//                         "name": "Kagiso Rabada",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Kagiso-Rabada-Test17.ashx",
//                         "runs": "2",
//                         "balls": "9",
//                         "strikeRate": "22.22",
//                         "fours": "0",
//                         "sixes": "0",
//                         "howOut": "lbw: Ashwin",
//                         "fallOfWicket": "10-275",
//                         "fallOfWicketOver": "105.4",
//                         "fowOrder": 10
//                     }
//                 ],
//                 "bowlers": [
//                     {
//                         "id": 3515,
//                         "name": "Ishant Sharma",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Ishant-Sharma-Test1819.ashx",
//                         "runsConceded": "36",
//                         "maidens": "1",
//                         "wickets": "0",
//                         "overs": "10.0",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "3.60"
//                     },
//                     {
//                         "id": 4395,
//                         "name": "Umesh Yadav",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Umesh-Yadav-Test1819.ashx",
//                         "runsConceded": "37",
//                         "maidens": "2",
//                         "wickets": "3",
//                         "overs": "13.0",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "2.85"
//                     },
//                     {
//                         "id": 3856,
//                         "name": "Ravindra Jadeja",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Ravindra-Jadeja-Test1819.ashx",
//                         "runsConceded": "81",
//                         "maidens": "15",
//                         "wickets": "1",
//                         "overs": "36.0",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "2.25"
//                     },
//                     {
//                         "id": 5051,
//                         "name": "Mohammed Shami",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Mohammed-Shami-Test1819.ashx",
//                         "runsConceded": "44",
//                         "maidens": "3",
//                         "wickets": "2",
//                         "overs": "17.0",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "2.59"
//                     },
//                     {
//                         "id": 3795,
//                         "name": "Ravichandran Ashwin",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Ravi-Ashwin-Test1819.ashx",
//                         "runsConceded": "69",
//                         "maidens": "9",
//                         "wickets": "4",
//                         "overs": "28.4",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "2.41"
//                     },
//                     {
//                         "id": 3516,
//                         "name": "Rohit Sharma",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Rohit-Sharma-Test1819.ashx",
//                         "runsConceded": "0",
//                         "maidens": "1",
//                         "wickets": "0",
//                         "overs": "1.0",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "0.00"
//                     }
//                 ],
//                 "wicket": "10",
//                 "run": "275",
//                 "over": "105.4",
//                 "extra": "8",
//                 "bye": "0",
//                 "legBye": "8",
//                 "wide": "0",
//                 "noBall": "0",
//                 "runRate": "2.60",
//                 "requiredRunRate": ""
//             },
//             {
//                 "id": 1,
//                 "isDeclared": true,
//                 "name": "1st Inn India ",
//                 "shortName": "1st IND",
//                 "team": {
//                     "id": 3,
//                     "shortName": "IND"
//                 },
//                 "batsmen": [
//                     {
//                         "id": 5063,
//                         "name": "Mayank Agarwal",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Mayank_Agarwal_Test1819.ashx",
//                         "runs": "108",
//                         "balls": "195",
//                         "strikeRate": "55.38",
//                         "fours": "16",
//                         "sixes": "2",
//                         "howOut": "c: du Plessis b: Rabada",
//                         "fallOfWicket": "3-198",
//                         "fallOfWicketOver": "60.6",
//                         "fowOrder": 3
//                     },
//                     {
//                         "id": 3516,
//                         "name": "Rohit Sharma",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Rohit-Sharma-Test1819.ashx",
//                         "runs": "14",
//                         "balls": "35",
//                         "strikeRate": "40.00",
//                         "fours": "1",
//                         "sixes": "0",
//                         "howOut": "c: de Kock b: Rabada",
//                         "fallOfWicket": "1-25",
//                         "fallOfWicketOver": "9.6",
//                         "fowOrder": 1
//                     },
//                     {
//                         "id": 3834,
//                         "name": "Cheteshwar Pujara",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Cheteshwar-Pujara-Test1819.ashx",
//                         "runs": "58",
//                         "balls": "112",
//                         "strikeRate": "51.79",
//                         "fours": "9",
//                         "sixes": "1",
//                         "howOut": "c: du Plessis b: Rabada",
//                         "fallOfWicket": "2-163",
//                         "fallOfWicketOver": "50.6",
//                         "fowOrder": 2
//                     },
//                     {
//                         "id": 3788,
//                         "name": "Virat Kohli",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Virat-Kohli-Test1819.ashx",
//                         "runs": "254",
//                         "balls": "336",
//                         "strikeRate": "75.60",
//                         "fours": "33",
//                         "sixes": "2",
//                         "howOut": "not out",
//                         "fowOrder": 0
//                     },
//                     {
//                         "id": 3845,
//                         "name": "Ajinkya Rahane",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Ajinkya-Rahane-Test1819.ashx",
//                         "runs": "59",
//                         "balls": "168",
//                         "strikeRate": "35.12",
//                         "fours": "8",
//                         "sixes": "0",
//                         "howOut": "c: de Kock b: Maharaj",
//                         "fallOfWicket": "4-376",
//                         "fallOfWicketOver": "117.2",
//                         "fowOrder": 4
//                     },
//                     {
//                         "id": 3856,
//                         "name": "Ravindra Jadeja",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Ravindra-Jadeja-Test1819.ashx",
//                         "runs": "91",
//                         "balls": "104",
//                         "strikeRate": "87.50",
//                         "fours": "8",
//                         "sixes": "2",
//                         "howOut": "c: de Bruyn b: Muthusamy",
//                         "fallOfWicket": "5-601",
//                         "fallOfWicketOver": "156.3",
//                         "fowOrder": 5
//                     },
//                     {
//                         "id": 3835,
//                         "name": "Wriddhiman Saha",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Wriddhiman-Saha-Test.ashx",
//                         "runs": "",
//                         "balls": "",
//                         "strikeRate": "-",
//                         "fours": "",
//                         "sixes": "",
//                         "howOut": "",
//                         "fowOrder": 0
//                     },
//                     {
//                         "id": 3795,
//                         "name": "Ravichandran Ashwin",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Ravi-Ashwin-Test1819.ashx",
//                         "runs": "",
//                         "balls": "",
//                         "strikeRate": "-",
//                         "fours": "",
//                         "sixes": "",
//                         "howOut": "",
//                         "fowOrder": 0
//                     },
//                     {
//                         "id": 3515,
//                         "name": "Ishant Sharma",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Ishant-Sharma-Test1819.ashx",
//                         "runs": "",
//                         "balls": "",
//                         "strikeRate": "-",
//                         "fours": "",
//                         "sixes": "",
//                         "howOut": "",
//                         "fowOrder": 0
//                     },
//                     {
//                         "id": 4395,
//                         "name": "Umesh Yadav",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Umesh-Yadav-Test1819.ashx",
//                         "runs": "",
//                         "balls": "",
//                         "strikeRate": "-",
//                         "fours": "",
//                         "sixes": "",
//                         "howOut": "",
//                         "fowOrder": 0
//                     },
//                     {
//                         "id": 5051,
//                         "name": "Mohammed Shami",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/India/Mohammed-Shami-Test1819.ashx",
//                         "runs": "",
//                         "balls": "",
//                         "strikeRate": "-",
//                         "fours": "",
//                         "sixes": "",
//                         "howOut": "",
//                         "fowOrder": 0
//                     }
//                 ],
//                 "bowlers": [
//                     {
//                         "id": 3537,
//                         "name": "Vernon Philander",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Vernon-Philander-Test17-new.ashx",
//                         "runsConceded": "66",
//                         "maidens": "6",
//                         "wickets": "0",
//                         "overs": "26.0",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "2.54"
//                     },
//                     {
//                         "id": 6580,
//                         "name": "Kagiso Rabada",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Kagiso-Rabada-Test17.ashx",
//                         "runsConceded": "93",
//                         "maidens": "3",
//                         "wickets": "3",
//                         "overs": "30.0",
//                         "wides": "0",
//                         "noBalls": "6",
//                         "economy": "3.10"
//                     },
//                     {
//                         "id": 11455,
//                         "name": "Anrich Nortje",
//                         "runsConceded": "100",
//                         "maidens": "5",
//                         "wickets": "0",
//                         "overs": "25.0",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "4.00"
//                     },
//                     {
//                         "id": 7529,
//                         "name": "Keshav Maharaj",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Keshav-Maharaj-Test17.ashx",
//                         "runsConceded": "196",
//                         "maidens": "10",
//                         "wickets": "1",
//                         "overs": "50.0",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "3.92"
//                     },
//                     {
//                         "id": 7617,
//                         "name": "Senuran Muthusamy",
//                         "runsConceded": "97",
//                         "maidens": "1",
//                         "wickets": "1",
//                         "overs": "19.3",
//                         "wides": "0",
//                         "noBalls": "5",
//                         "economy": "4.97"
//                     },
//                     {
//                         "id": 4548,
//                         "name": "Dean Elgar",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Dean-Elgar-Test17.ashx",
//                         "runsConceded": "26",
//                         "maidens": "0",
//                         "wickets": "0",
//                         "overs": "4.0",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "6.50"
//                     },
//                     {
//                         "id": 7165,
//                         "name": "Aiden Markram",
//                         "imageURL": "https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Aiden-Markram-Test17.ashx",
//                         "runsConceded": "17",
//                         "maidens": "0",
//                         "wickets": "0",
//                         "overs": "2.0",
//                         "wides": "0",
//                         "noBalls": "0",
//                         "economy": "8.50"
//                     }
//                 ],
//                 "wicket": "5",
//                 "run": "601",
//                 "over": "156.3",
//                 "extra": "17",
//                 "bye": "0",
//                 "legBye": "6",
//                 "wide": "0",
//                 "noBall": "11",
//                 "runRate": "3.84",
//                 "requiredRunRate": ""
//             }
//         ]
//     },
//     "fullScorecardAwards": {
//         "mostRunsAward": {
//             "id": 3788,
//             "name": "Virat Kohli",
//             "runs": "254",
//             "balls": "336",
//             "strikeRate": "75.60",
//             "fowOrder": 0
//         },
//         "mostWicketsAward": {
//             "id": 3795,
//             "name": "Ravichandran Ashwin",
//             "runsConceded": "114",
//             "wickets": "6",
//             "overs": "49.4",
//             "economy": "2.31"
//         },
//         "manOfTheMatchId": 3788,
//         "manOfTheMatchName": "Virat Kohli",
//         "manOfMatchBattingResults": [
//             {
//                 "id": 3788,
//                 "name": "Virat Kohli",
//                 "runs": "254",
//                 "balls": "336",
//                 "strikeRate": "75.60",
//                 "fours": "33",
//                 "sixes": "2",
//                 "howOut": "not out",
//                 "fowOrder": 0
//             }
//         ],
//         "manOfMatchBowlngResults": [
//             {
//                 "id": 3788,
//                 "name": "Virat Kohli",
//                 "runsConceded": "4",
//                 "maidens": "0",
//                 "wickets": "0",
//                 "overs": "1.0",
//                 "wides": "0",
//                 "noBalls": "0",
//                 "economy": "4.00"
//             }
//         ],
//         "mostRunsAwardPlayerResults": [
//             {
//                 "id": 3788,
//                 "name": "Virat Kohli",
//                 "runs": "254",
//                 "balls": "336",
//                 "strikeRate": "75.60",
//                 "fours": "33",
//                 "sixes": "2",
//                 "howOut": "not out",
//                 "fowOrder": 0
//             }
//         ],
//         "mostWicketsAwardPlayerResults": [
//             {
//                 "id": 3795,
//                 "name": "Ravichandran Ashwin",
//                 "runsConceded": "45",
//                 "maidens": "6",
//                 "wickets": "2",
//                 "overs": "21.0",
//                 "wides": "0",
//                 "noBalls": "0",
//                 "economy": "2.14"
//             },
//             {
//                 "id": 3795,
//                 "name": "Ravichandran Ashwin",
//                 "runsConceded": "69",
//                 "maidens": "9",
//                 "wickets": "4",
//                 "overs": "28.4",
//                 "wides": "0",
//                 "noBalls": "0",
//                 "economy": "2.41"
//             }
//         ]
//     },
//     "status": 200,
//     "poweredBy": "dev132"
// }
export const getScoreCard = (Mid, Sid) => dispatch => {
    // dispatch({
    //     type: GET_SCORECARD,
    //     payload: score_card,
    //     summaryText: Summary,
    //     totalScore: totalScore,
    //     homeTeam: homeTeam,
    //     awayTeam: awayTeam
    // })
    // console.log(Mid, Sid);
    axios({
        "method": "GET",
        "url": "https://dev132-cricket-live-scores-v1.p.rapidapi.com/scorecards.php",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
            "x-rapidapi-key": "5b6bac07f2mshbacedf94d8d5a12p10e35ajsn0d32354f31a4"
        }, "params": {
            "seriesid": Sid,
            "matchid": Mid
        }
    })
        .then((score_card) => dispatch({
            type: GET_SCORECARD,
            payload: score_card.data,
        }))
        .catch((error) => {
            console.log(error)
        })
}