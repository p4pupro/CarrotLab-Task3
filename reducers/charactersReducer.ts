import * as types from '../api/types';
import { Response, WrongResultResponse } from '../utils/response';

type CharactersState = {
  characters: Response;
  error: WrongResultResponse;
};

const initialState = {
  characters: {} as Response,
  error: {} as WrongResultResponse,
};

export const charactersReducer = (state: CharactersState = initialState, action: any) => {
  switch (action.type) {
    case types.FETCH_CHARACTERS_SUCCESS:
      return Object.assign({}, state, {
        characters: action.payload
      });
    case types.FETCH_CHARACTERS_FAIL:
      state.error = action.error;
      return state;
    default:
      return state;
  }
}
