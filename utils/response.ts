export type ResultResponse = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: {
        name: string;
        url: string;
    };
    episode: [

    ];
    url: string;
    created: string;
};

export type InfoResponse = {
    count: number;
    pages: number;
    next: string;
    prev: string;
};

export type Response = {
    results: ResultResponse;
    info: InfoResponse;
};
  
export type WrongResultResponse = {
    timestamp: string;
    status: string;
    message: string;
    path: string;
};