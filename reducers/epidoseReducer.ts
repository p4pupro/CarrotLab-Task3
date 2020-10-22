import * as types from '../api/types';
import { ResultResponse, WrongResultResponse } from '../utils/episodeResponseType';

type CharactersState = {
    episode: ResultResponse;
    error: WrongResultResponse;
};

const initialState = {
    episode: {} as ResultResponse,
    error: {} as WrongResultResponse,
};

export const episodeReducer = (state: CharactersState = initialState, action: any) => {
    switch (action.type) {
        case types.FETCH_EPISODE_SUCCESS:
            return Object.assign({}, state, {
                episode: action.payload
            });
        case types.FETCH_EPISODE_FAIL:
            state.error = action.error;
            return state;
        default:
            return state;
    }
}