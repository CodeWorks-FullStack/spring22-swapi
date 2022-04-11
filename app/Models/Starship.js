export class Starship {
  constructor(data) {
    this.name = data.name
    this.cost = data.cost_in_credits
    this.class = data.starship_class
    this.manufacturer = data.manufacturer
  }
}