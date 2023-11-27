import { TCountryName, TFlag, TPokemonStatus } from "./@types/types";

class Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    legendary: boolean;
    firstAppearance: Date;
    abilities: string[];
    stats: TPokemonStatus[];
}

class Movie {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

class Country {
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
}

