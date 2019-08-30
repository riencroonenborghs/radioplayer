import { Country } from "./country"

export class Station {
  country: Country;
  name: string;
  image: string;
  siteUrl: string;
  radioUrl: string;
  description: string;
  starred: boolean = false;

  constructor(
    country: Country,
    name: string,
    image: string,
    siteUrl: string,
    radioUrl: string,
    description: string) {
    this.country = country;
    this.name = name;
    this.image = image;
    this.siteUrl = siteUrl;
    this.radioUrl = radioUrl;
    this.description = description;
  }
}
