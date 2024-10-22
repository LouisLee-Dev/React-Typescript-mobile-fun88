import React from "react";
import { useDispatch } from "react-redux";
import { updateGame } from "../actions/game";

type GameProps = {
  game: any; // Define image_url as a string
};

const Game: React.FC<GameProps> = (props) => {
  const dispatch: any = useDispatch();
  const onToggleFavor = () => {
    dispatch(updateGame({...props.game,favor:!props.game.favor}));
  };
  return (
    <div className="relative p-1 rounded-lg">
      <img
        src={`/assets/image/${props.game.img}`}
        alt={props.game.img}
        className="w-full h-full object-cover"
      />
      <img
        src="/assets/image/Vector 4.svg"
        alt="triangle"
        className="absolute right-1 top-1 w-10 h-10"
      />
      {props.game.favor ? (
        <img
          src="/assets/image/u48.svg.svg"
          alt="triangle"
          className="absolute right-2 top-2 w-4 h-4"
          onClick={onToggleFavor}
        />
      ) : (
        <img
          src="/assets/image/u48.svg (1).svg"
          alt="triangle"
          className="absolute right-2 top-2 w-4 h-4"
          onClick={onToggleFavor}
        />
      )}
    </div>
  );
};

export default Game;
