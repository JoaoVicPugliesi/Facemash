import { Character } from "../../../../domain/entities/Character";
import { IMatchCharactersUseCaseRepo } from "../../../../domain/repositories/Character/IMatchCharactersUseCaseRepo";
import { IMatchCharactersUseCaseDTO } from "./IMatchCharactersUseCaseDTO";
export class IMatchCharactersUseCase {
  constructor(
    private readonly iMatchCharactersUseCaseRepo: IMatchCharactersUseCaseRepo
  ) {}

  async execute({
    randomIds,
  }: IMatchCharactersUseCaseDTO): Promise<Character[]> {
    const { randomId1, randomId2 } = randomIds;
    const characters: Character[] =
      await this.iMatchCharactersUseCaseRepo.match({
        randomIds: {
          randomId1,
          randomId2,
        },
      });

    return characters;
  }
}
