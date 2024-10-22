import React from "react";
import Game from "../components/Game";
import { useSelector } from "react-redux";
import isEmpty from "../utils/isEmpty";

const Start: React.FC = (props) => {
  const games = useSelector((store: any) => store.games.games);
  return (
    <div className="flex flex-wrap justify-center">
      {!isEmpty(games) &&
        games.map((item: any) => (
          <Game
            game={item}
            key={item._id}
          />
        ))}
    </div>
  );
};

export default Start;
