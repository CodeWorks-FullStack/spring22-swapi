import { ProxyState } from "../AppState.js";
import { Starship } from "../Models/Starship.js";

class StarshipsService {
  async getStarships() {
    // @ts-ignore
    const response = await axios.get('https://swapi.dev/api/starships')
    // FIXME ALWAYS LOG THE RES!!!!
    console.log('starships response', response);
    // Converting from POJO to Starship class
    ProxyState.starships = response.data.results.map(s => new Starship(s))
  }

}

export const starshipsService = new StarshipsService()