import { PeopleController } from "./Controllers/PeopleController.js";
import { StarshipsController } from "./Controllers/StarshipsController.js";

class App {
  peopleController = new PeopleController()
  starshipsController = new StarshipsController()
}

window["app"] = new App();
