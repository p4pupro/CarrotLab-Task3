import * as types from './types';
import { baseUrl, episode } from "react-native-dotenv";
import { Dispatch } from "react";
import { EpisodeResponse, WrongResultResponse } from "../utils/episodeResponseType";


export interface SuccessEpisodeAction {
    readonly type: 'FETCH_EPISODE_SUCCESS';
    payload: EpisodeResponse;
};

export interface ErrorEpisodeAction {
    readonly type: 'FETCH_EPISODE_FAIL';
    payload: WrongResultResponse;
};

export type EpisodeAction = SuccessEpisodeAction | ErrorEpisodeAction;

export const fetchEpisode = (episodeId: number) => {

    const url = baseUrl + episode + episodeId;
    return async (dispatch: Dispatch<EpisodeAction>) => {
        const request = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        try {
            const response = await request.json();

            if (response) {
                dispatch({ type: types.FETCH_EPISODE_SUCCESS, payload: response });
            } else {
                dispatch({ type: types.FETCH_EPISODE_FAIL, payload: response });
            }
        } catch (error) {
            dispatch({ type: types.FETCH_EPISODE_FAIL, payload: error });
        };
    }

}
