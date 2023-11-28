type TPokemonStatus = {
    base_stat: number;
    stat: "hp" | "attack" | "defense";
};
type TCountryName = {
    common: string;
    official: string;
};
type TFlag = {
    png: string;
    svg: string;
};
declare class Pokemon {
    id: number;
    name: string;
    baseExperience: number;
    height: number;
    weight: number;
    legendary: boolean;
    firstAppearance: string;
    abilities: string[];
    stats: TPokemonStatus[];
    constructor(data: Pokemon);
}
declare class Movie {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    constructor(data: Movie);
}
declare class Country {
    name: TCountryName;
    independent: boolean;
    unMember: boolean;
    capital: string;
    region: string;
    subregion: string;
    languages: string[];
    latlng: number[];
    borders: string[];
    area: number;
    population: number;
    timezones: string[];
    flags: TFlag;
    constructor(data: Country);
}
declare const loadPokemon: () => void;
declare const loadMovie: () => void;
declare const loadCountry: () => void;
