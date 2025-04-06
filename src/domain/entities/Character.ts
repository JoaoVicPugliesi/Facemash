export interface ICharacter {
  id: number,
  name: string,
  picture: string,
  rating: number
}

export class Character implements ICharacter {
  public id: number;
  public name: string;
  public picture: string;
  public rating: number;
  constructor({ id, name, picture, rating }: ICharacter) {
      (this.id = id);
      (this.name = name);
      (this.picture = picture);
      (this.rating = rating);
  }
}
