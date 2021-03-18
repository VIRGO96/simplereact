import { FETCH_TEXT, FETCH_LOADING } from "../actions/types";

const initialState = {
  wikitext: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_TEXT:
      console.log("fetching reducer");
      return {
        ...state,
        wikitext: action.payload,
      };
    default:
      return state;
  }
}
