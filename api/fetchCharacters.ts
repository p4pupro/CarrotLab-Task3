import * as types from './types';
import { baseUrl, character } from "react-native-dotenv";
import { Dispatch } from "react";
import { Response, WrongResultResponse } from "../utils/response";


export interface SuccessCharacterAction {
    readonly type: 'FETCH_CHARACTERS_SUCCESS';
    payload: Response;
};

export interface ErrorCharacterAction {
    readonly type: 'FETCH_CHARACTERS_FAIL';
    payload: WrongResultResponse;
};

export type CharacterAction = SuccessCharacterAction | ErrorCharacterAction;

export const fetchCharacters = (params: any) => {
    if (params === '') {
        const url = baseUrl + character;
        return async (dispatch: Dispatch<CharacterAction>) => {
            const request = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            try {
                const response = await request.json();
                if (response) {
                    dispatch({ type: types.FETCH_CHARACTERS_SUCCESS, payload: response });
                } else {
                    dispatch({ type: types.FETCH_CHARACTERS_FAIL, payload: response });
                }
            } catch (error) {
                dispatch({ type: types.FETCH_CHARACTERS_FAIL, payload: error });
            };
        }
    } else {
        const url = params;
        return async (dispatch: Dispatch<CharacterAction>) => {
            const request = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            try {
                const response = await request.json();
                if (response) {
                    dispatch({ type: types.FETCH_CHARACTERS_SUCCESS, payload: response });
                } else {
                    dispatch({ type: types.FETCH_CHARACTERS_FAIL, payload: response });
                }
            } catch (error) {
                dispatch({ type: types.FETCH_CHARACTERS_FAIL, payload: error });
            };
        }
    }

}
