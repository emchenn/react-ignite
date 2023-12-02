//require("dotenv").config();
// Base URL
const base_url = `https://api.rawg.io/api/games`;
const api = `?key=${vars.REACT_APP_RAWG_API}`;
// getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// popular games
const popular_games = `?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}${api}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}${api}`;
export const newGamesURL = () => `${base_url}${new_games}${api}`;

// Game details

export const gameDetailsURL = (game_id) => `${base_url}/${game_id}${api}`;

// Screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}/${game_id}/screenshots${api}`;

// Searched game
export const searchGameURL = (game_name) =>
  `${base_url}?search=${game_name}&page_size=9`;
