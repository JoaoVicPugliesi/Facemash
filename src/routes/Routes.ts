import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { addCharacter } from "../application/useCases/Character/add/IComposeAddCharacterUseCase";
import { matchCharacters } from "../application/useCases/Character/match/IComposeMatchCharactersUseCase";
import { duelCharacters } from "../application/useCases/Character/duel/IComposeDuelCharactersUseCase";
import { trackCharacters } from "../application/useCases/Character/track/IComposeTrackCharactersUseCase";
import { resetCharacters } from "../application/useCases/Character/reset/IComposeResetCharactersUseCase";

export class Routes {
  constructor(private readonly app: FastifyInstance) {}

  setupRoutes() {
    this.app.post(
      "/characters/add",
      async (req: FastifyRequest, res: FastifyReply) => {
        await addCharacter.handle(req, res);
      }
    );
    this.app.get(
      "/characters/track",
      async (req: FastifyRequest, res: FastifyReply) => {
        await trackCharacters.handle(req, res);
      }
    );
    this.app.post(
      "/characters/match",
      async (req: FastifyRequest, res: FastifyReply) => {
        await matchCharacters.handle(req, res);
      }
    );
    this.app.put(
      "/characters/duel",
      async (req: FastifyRequest, res: FastifyReply) => {
        await duelCharacters.handle(req, res);
      }
    );
    this.app.put(
      "/characters/reset",
      async (req: FastifyRequest, res: FastifyReply) => {
        await resetCharacters.handle(req, res);
      }
    );
  }
}
