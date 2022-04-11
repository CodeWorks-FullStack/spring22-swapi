import { ProxyState } from "../AppState.js";
import { Person } from "../Models/Person.js";

class PeopleService {
  // make sure to use the word async before the method if we are awaiting something inside of it.
  async getPeople() {
    // if you use await without async, you will get an error!
    // fetch works, but is ew.
    // const response = await fetch('https://swapi.dev/api/people')
    // .then(response => response.json())

    // NOTE it is ok to ignore axios error here - vs code doesn't have the intellisense to know its a thing here.
    // @ts-ignore
    const response = await axios.get('https://swapi.dev/api/people')
    // FIXME ALWAYS LOG THE RES!!!!
    // map only works on arrays! if you get the error - x is not a function, you are using an array method on something that is not an array. Harrison will ask you to log that res!

    // return me a new array, but instead of POJOs, create a new Person for every POJO in the collection we are iterating on
    ProxyState.people = response.data.results.map(p => new Person(p))
  }

}

export const peopleService = new PeopleService()