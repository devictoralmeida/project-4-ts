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

class Pokemon {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  weight: number;
  legendary: boolean;
  firstAppearance: string;
  abilities: string[];
  stats: TPokemonStatus[];

  constructor(data: Pokemon) {
    this.id = data.id;
    this.name = data.name;
    this.baseExperience = data.baseExperience;
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

const loadPokemon = () => {
  const pokemon: Pokemon = new Pokemon({
    id: 132,
    name: "Ditto",
    baseExperience: 101,
    height: 3,
    weight: 40,
    legendary: false,
    firstAppearance: "1996-06-01",
    abilities: ["limber", "imposter"],
    stats: [
      {
        base_stat: 48,
        stat: "hp",
      },
      {
        base_stat: 48,
        stat: "attack",
      },
      {
        base_stat: 48,
        stat: "defense",
      },
    ],
  });

  for (let [key, value] of Object.entries(pokemon)) {
    const pokemonAttributes = document.querySelector(
      ".pokemon__attribute-names"
    );
    const pokemonAttributesValues = document.querySelector(
      ".pokemon__attribute-values"
    );

    key = key.replace("_", " ");

    if (key.includes("stats") && Array.isArray(value)) {
      value.forEach((stats: TPokemonStatus) => {
        const attributeName = document.createElement("th");
        const attributeValue = document.createElement("td");

        attributeName.innerText = stats.stat;
        attributeValue.innerText = stats.base_stat.toString();

        pokemonAttributes.append(attributeName);
        pokemonAttributesValues.append(attributeValue);
      });
    } else if (key.includes("abilities") && Array.isArray(value)) {
      const attributeName = document.createElement("th");
      const attributeValue = document.createElement("td");

      attributeName.innerText = key;
      attributeValue.innerText = value.toString();

      pokemonAttributes.append(attributeName);
      pokemonAttributesValues.append(attributeValue);
    } else {
      const attributeName = document.createElement("th");
      const attributeValue = document.createElement("td");

      attributeName.innerText = key;
      attributeValue.innerText = value;

      pokemonAttributes.append(attributeName);
      pokemonAttributesValues.append(attributeValue);
    }
  }
};

const loadMovie = () => {
  const movie: Movie = new Movie({
    adult: false,
    backdrop_path: "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    id: 447365,
    original_language: "en",
    original_title: "Guardians of the Galaxy Vol. 3",
    overview:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    popularity: 4145.055,
    poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    release_date: "2023-05-03",
    title: "Guardians of the Galaxy Vol. 3",
    video: false,
    vote_average: 8.1,
    vote_count: 3154,
  });

  for (let [key, value] of Object.entries(movie)) {
    const movieAttributes = document.querySelector(".movie__attribute-names");
    const movieAttributesValues = document.querySelector(
      ".movie__attribute-values"
    );

    key = key.replace("_", " ");

    const attributeName = document.createElement("th");
    const attributeValue = document.createElement("td");

    attributeName.innerText = key;
    attributeValue.innerText = value.toString();

    movieAttributes.append(attributeName);
    movieAttributesValues.append(attributeValue);
  }
};

const loadCountry = () => {
  const country: Country = new Country({
    name: {
      common: "Brazil",
      official: "Federative Republic of Brazil",
    },
    independent: true,
    unMember: true,
    capital: "Brasília",
    region: "Americas",
    subregion: "South America",
    languages: ["Portuguese"],
    latlng: [-10, -55],
    borders: [
      "ARG",
      "BOL",
      "COL",
      "GUF",
      "GUY",
      "PRY",
      "PER",
      "SUR",
      "URY",
      "VEN",
    ],
    area: 8515767,
    population: 212559409,
    timezones: ["UTC-05:00", " UTC-04:00", "UTC-03:00", "UTC-02:00"],
    flags: {
      png: "https://flagcdn.com/w320/br.png",
      svg: "https://flagcdn.com/br.svg",
    },
  });

  for (let [key, value] of Object.entries(country)) {
    const countryAttributes = document.querySelector(
      ".country__attribute-names"
    );
    const countryAttributesValues = document.querySelector(
      ".country__attribute-values"
    );

    key = key.replace("_", " ");

    if (key.includes("name")) {
      for (let [name_key, name_value] of Object.entries(value)) {
        const attributeName = document.createElement("th");
        const attributeValue = document.createElement("td");

        attributeName.innerText = `Name ${name_key}`;
        attributeValue.innerText = name_value.toString();

        countryAttributes.append(attributeName);
        countryAttributesValues.append(attributeValue);
      }
    } else if (key.includes("flags")) {
      const attributeName = document.createElement("th");
      const attributeValue = document.createElement("td");
      const countryImage = document.createElement("img");

      attributeName.innerText = key;
      countryImage.src = value["svg"];

      countryAttributes.append(attributeName);
      attributeValue.append(countryImage);
      countryAttributesValues.append(attributeValue);
    } else {
      const attributeName = document.createElement("th");
      const attributeValue = document.createElement("td");

      attributeName.innerText = key;
      attributeValue.innerText = value.toString().trim();

      countryAttributes.append(attributeName);
      countryAttributesValues.append(attributeValue);
    }
  }
};

loadPokemon();
loadMovie();
loadCountry();
