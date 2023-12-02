import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// components
import Game from "../components/Game";

//styling
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { fadeIn } from "../animation";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Get that data back
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  return (
    <GamesList variants={fadeIn} initial="hidden" animate="show">
      <LayoutGroup type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Search results</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </LayoutGroup>
    </GamesList>
  );
};

const GamesList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 3rem 0;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;
export default Home;
