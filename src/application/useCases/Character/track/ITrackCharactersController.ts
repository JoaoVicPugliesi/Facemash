import { FastifyReply, FastifyRequest } from "fastify";
import { Character } from "../../../../domain/entities/Character";
import { ITrackCharactersUseCase } from "./ITrackCharactersUseCase";
export class ITrackCharactersController {
  constructor(
    private readonly iTrackCharactersUseCase: ITrackCharactersUseCase
  ) {}

  async handle(req: FastifyRequest, res: FastifyReply) {
    const characters: Character[] | null =
        await this.iTrackCharactersUseCase.execute();

    if(characters) res.status(200).send({ tracked: characters });
      
  }
}
