import { Character } from "../../../../domain/entities/Character";
import { IDuelCharactersUseCaseRepo } from "../../../../domain/repositories/Character/IDuelCharactersUseCaseRepo";
import { IDuelCharactersResponseHandler } from "../../../handlers/IDuelCharactersHandler";
import { ITrackCharactersUseCase } from "../track/ITrackCharactersUseCase";
import { IMatchCharactersUseCase } from "./../match/IMatchCharactersUseCase";
import { IDuelCharactersUseCaseDTO } from "./IDuelCharactersUseCaseDTO";

export class IDuelCharactersUseCase {
  constructor(
    private readonly iDuelCharactersUseCaseRepo: IDuelCharactersUseCaseRepo,
    private readonly iMatchCharactersUseCase: IMatchCharactersUseCase,
    private readonly iTrackCharactersUseCase: ITrackCharactersUseCase
  ) {}

  async execute({ winner, loser }: IDuelCharactersUseCaseDTO): Promise<IDuelCharactersResponseHandler> {
    const comparedElos: number[] = this.iDuelCharactersUseCaseRepo.compareElos(
      winner.rating,
      loser.rating
    );

    await this.iDuelCharactersUseCaseRepo.reassignElos({
      winner: {
        id: winner.id,
        rating: comparedElos[0],
      },
      loser: {
        id: loser.id,
        rating: comparedElos[1],
      },
    });

    let randomId2;

    do {
      randomId2 = Math.floor(Math.random() * 10) + 1;
    } while (randomId2 === winner.id || randomId2 === loser.id);

    const matchCharacters = await this.iMatchCharactersUseCase.execute({
      randomIds: {
        randomId1: winner.id,
        randomId2: randomId2,
      },
    });

    const trackCharacters: Character[] | null = await this.iTrackCharactersUseCase.execute();

    return {
      response: {
        match_characters: matchCharacters,
        track_characters: trackCharacters
      }
    };
  }
}
