import { ProxyState } from "../AppState.js";
import { peopleService } from "../Services/PeopleService.js";
import { Pop } from "../Utils/Pop.js";

function _drawPeople() {
  let template = ''
  ProxyState.people.forEach(p => template += `<li>Name: ${p.name} - Hair-color: ${p.hairColor}</li>`)
  document.getElementById('people').innerHTML = template
}


export class PeopleController {
  constructor() {
    this.getPeople()
    ProxyState.on('people', _drawPeople)
  }

  async getPeople() {
    try {
      // await is signifying that we aren't going to execute code until the peopleService.getPeople is 'resolved'.
      // promises have three states - pending, fulfilled, or rejected
      await peopleService.getPeople()
      // NOTE if the await failes, anything written UNDER an await will not run
      console.log('this happened AFTER proimse was fulliled in controller');
    } catch (error) {
      Pop.toast(error.message, 'error')
      console.log(error)
    }
  }
}