export type ResultResponse = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: [];
    url: string;
    created: string;
};

export type EpisodeResponse = {
    result: ResultResponse;
};
  
export type WrongResultResponse = {
    timestamp: string;
    status: string;
    message: string;
    path: string;
};