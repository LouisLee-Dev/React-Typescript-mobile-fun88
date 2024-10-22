import { GAME_FABOR_TOGGLE, GAME_GET, GAME_UPDATE } from "../actions/types";

const initialState = {
  games: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GAME_GET:
      return {
        ...state,
        games: payload,
      };
    case GAME_UPDATE:
      return {
        ...state,
        games: state.games.map((item) =>
          item._id == payload._id ? { ...payload } : item
        ),
      };
    case GAME_FABOR_TOGGLE:
      return {
        ...state,
        games: state.games.map((item) =>
          item._id == payload ? { ...payload, favor: !item.favor } : item
        ),
      };
    default:
      return state;
  }
}
