import { FastifyReply, FastifyRequest } from "fastify";
import { Character } from "../../../../domain/entities/Character";
import { IResetCharactersUseCase } from "./IResetCharactersUseCase";
export class IResetCharactersController {
  constructor(
    private readonly iResetCharactersUseCase: IResetCharactersUseCase
  ) {}

  async handle(req: FastifyRequest, res: FastifyReply) {

    await this.iResetCharactersUseCase.execute();

    res.status(204).send();
      
  }
}
