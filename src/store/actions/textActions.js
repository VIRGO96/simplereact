import { FETCH_TEXT, FETCH_LOADING } from "./types";
import { RepositoryFactory } from "../../repository/RepositoryFactory";
const WikiRepo = RepositoryFactory.get("wiki_repository");

export const fetchWikiText = (payload) => async (dispatch) => {
  dispatch({
    type: FETCH_LOADING,
    payload: true,
  });
  if (payload == null) {
    dispatch({
      type: FETCH_TEXT,
      payload: null,
    });
  } else {
    let { data } = await WikiRepo.getText(payload);
    dispatch({
      type: FETCH_TEXT,
      payload: data,
    });
  }
  dispatch({
    type: FETCH_LOADING,
    payload: false,
  });
};
