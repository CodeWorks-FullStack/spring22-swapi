import { ProxyState } from "../AppState.js";
import { starshipsService } from "../Services/StarshipsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawStarships() {
  let template = ''
  ProxyState.starships.forEach(s => template += `<li>Name: ${s.name} - Manufacturer: ${s.manufacturer}`)
  document.getElementById('starships').innerHTML = template
}

export class StarshipsController {
  constructor() {
    this.getStarships()
    ProxyState.on('starships', _drawStarships)
  }
  async getStarships() {
    try {
      await starshipsService.getStarships()
    } catch (error) {
      Pop.toast(error.message, 'error')
      console.log(error)
    }
  }
}