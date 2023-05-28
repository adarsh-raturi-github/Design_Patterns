export class MenuItem {
  /*read-only members cannot be changed outside the class
  they either need to be initialized at declaration or initialized inside 
  the class constructor.*/
  private readonly name: string;
  private readonly description: string;
  private readonly vegetarian: boolean;
  private readonly price: number;

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }
  isVegetarian() {
    return this.vegetarian;
  }

  getPrice() {
    return this.price;
  }
}
