

let endpoints = [
    'https://swapi.dev/api/',
    'https://swapi.dev/api/people/',
    'https://swapi.dev/api/planets/',
    'https://swapi.dev/api/films/',
    'https://swapi.dev/api/species/',
    'https://swapi.dev/api/vehicles/',
    'https://swapi.dev/api/starships/',

  ];
  axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
    (response) => {
        const randomNumber = Math.floor(Math.random() * 5) + 1;

            const charName = response[1].data.results[randomNumber].name;
            const charHeight = response[1].data.results[randomNumber].height;
            const charWeight = response[1].data.results[randomNumber].mass;
            const charHairCol = response[1].data.results[randomNumber].hair_color;
            const charSkinCol = response[1].data.results[randomNumber].skin_color;
            const charEyeCol = response[1].data.results[randomNumber].eye_color;
            const charPlanet = response[2].data.results[randomNumber].name;
            const charFilms = response[3].data.results[randomNumber].title;
            const charSpecies = response[4].data.results[randomNumber].name;
            const charVehicles = response[5].data.results[randomNumber].name;
            const charVehiclesModel = response[5].data.results[randomNumber].model;
            //const charVehiclesCost = response[5].data.results[randomNumber].cost_in_credits;
            const charStarhips = response[6].data.results[randomNumber].name;
            const charStarhipsManu = response[6].data.results[randomNumber].manufacturer;
            const charStarhipsCost = response[6].data.results[randomNumber].cost_in_credits;

    text = `Your name is ${charName}. You are ${charHeight}cm tall and weighs 
    ${charWeight}kg. you have a ${charHairCol} hair and ${charEyeCol} eye color. You are from 
    ${charPlanet}. Acted in the ${charFilms}. You are related to ${charSpecies} species. You drive a ${charVehicles} model ${charVehiclesModel}.
    You board a ${charStarhips} from ${charStarhipsManu} that cost you ${charStarhipsCost} imperial credits.`
 
    console.log(text);

    const textEl = document.querySelector('#my-paragraph');
    textEl.innerText = text;


    });