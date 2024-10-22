// import axios from "axios";
import { GAME_GET, GAME_UPDATE, GAME_FABOR_TOGGLE } from "./types";
const games = [
  { _id: 1, name: "Sugar Rush", img: "1.png", favor: true },
  { _id: 2, name: "Shaolin Crew", img: "2.png", favor: true },
  { _id: 3, name: "Bad Wolf", img: "3.png", favor: true },
  { _id: 4, name: "Book of Egypt", img: "4.png", favor: true },
  { _id: 5, name: "Pirates Power", img: "5.png", favor: true },
  { _id: 6, name: "Crocodile Butz", img: "6.png", favor: true },
  { _id: 7, name: "Powerplay Jackpot", img: "7.png", favor: true },
  { _id: 8, name: "Maya Jackpot", img: "8.png", favor: true },
  { _id: 9, name: "Beach Life", img: "9.png", favor: true },
  { _id: 11, name: "Sugar Rush", img: "1.png", favor: true },
  { _id: 12, name: "Shaolin Crew", img: "2.png", favor: true },
  { _id: 13, name: "Bad Wolf", img: "3.png", favor: true },
  { _id: 14, name: "Book of Egypt", img: "4.png", favor: true },
  { _id: 15, name: "Pirates Power", img: "5.png", favor: true },
  { _id: 16, name: "Crocodile Butz", img: "6.png", favor: true },
  { _id: 17, name: "Powerplay Jackpot", img: "7.png", favor: true },
  { _id: 18, name: "Maya Jackpot", img: "8.png", favor: true },
  { _id: 19, name: "Beach Life", img: "9.png", favor: true },
];

export const getGames = () => async (dispatch) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(games);
    }, 500);
  })
    .then((res) => {
      dispatch({ type: GAME_GET, payload: res });
    })
    .catch((err) => console.log(err));
};

export const updateGame = (game) => async (dispatch) => {  
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(game);
    }, 500);
  })
    .then((res) => {
      console.log("ssss");
      
      dispatch({ type: GAME_UPDATE, payload: res });
    })
    .catch((err) => console.log(err));
};
