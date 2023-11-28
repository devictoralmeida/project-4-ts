import { TCountryName, TFlag, TPokemonStatus } from "./@types/types";

class Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  legendary: boolean;
  firstAppearance: string;
  abilities: string[];
  stats: TPokemonStatus[];

  constructor(data: Pokemon) {
    this.id = data.id;
    this.name = data.name;
    this.base_experience = data.base_experience;
    this.height = data.height;
    this.weight = data.weight;
    this.legendary = data.legendary;
    this.firstAppearance = data.firstAppearance;
    this.abilities = data.abilities;
    this.stats = data.stats;
  }
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
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  constructor(data: Movie) {
    this.adult = data.adult;
    this.backdrop_path = data.backdrop_path;
    this.id = data.id;
    this.original_language = data.original_language;
    this.original_title = data.original_title;
    this.overview = data.overview;
    this.popularity = data.popularity;
    this.poster_path = data.poster_path;
    this.release_date = data.release_date;
    this.title = data.title;
    this.video = data.video;
    this.vote_average = data.vote_average;
    this.vote_count = data.vote_count;
  }
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

  constructor(data: Country) {
    this.name = data.name;
    this.independent = data.independent;
    this.unMember = data.unMember;
    this.capital = data.capital;
    this.region = data.region;
    this.subregion = data.subregion;
    this.languages = data.languages;
    this.latlng = data.latlng;
    this.borders = data.borders;
    this.area = data.area;
    this.population = data.population;
    this.timezones = data.timezones;
    this.flags = data.flags;
  }
}
