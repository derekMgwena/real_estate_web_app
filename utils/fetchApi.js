import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key':  'f8bad06311msh398899cea0b798bp1b4e5cjsnb5143edddc13',
    },
  });
    
  return data;
}

 /*headers: {
  'X-RapidAPI-Key': 'f8bad06311msh398899cea0b798bp1b4e5cjsnb5143edddc13',
  'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
}*/