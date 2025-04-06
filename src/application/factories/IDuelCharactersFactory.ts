import { IDuelCharactersUseCaseRepoImpl } from "../../infra/repositories/Character/IDuelCharactersUseCaseRepoImpl";
import { IMatchCharactersUseCaseRepoImpl } from "../../infra/repositories/Character/IMatchCharactersUseCaseRepoImpl";
import { ITrackCharactersUseCaseRepoImpl } from "../../infra/repositories/Character/ITrackCharactersUseCaseRepoImpl";
import { IDuelCharactersUseCase } from "../useCases/Character/duel/IDuelCharactersUseCase";
import { IMatchCharactersUseCase } from "../useCases/Character/match/IMatchCharactersUseCase";
import { ITrackCharactersUseCase } from "../useCases/Character/track/ITrackCharactersUseCase";

export class IDuelCharactersFactory {
    compose(): IDuelCharactersUseCase {
        const iMatchCharactersUseCaseRepo = new IMatchCharactersUseCaseRepoImpl();
        const iMatchCharactersUseCase = new IMatchCharactersUseCase(iMatchCharactersUseCaseRepo);
        const iTrackCharactersUseCaseRepo = new ITrackCharactersUseCaseRepoImpl();
        const iTrackCharactersUseCase = new ITrackCharactersUseCase(iTrackCharactersUseCaseRepo);
        const iDuelCharactersUseCaseRepo = new IDuelCharactersUseCaseRepoImpl();
        const iDuelCharactersUseCase = new IDuelCharactersUseCase(iDuelCharactersUseCaseRepo, iMatchCharactersUseCase, iTrackCharactersUseCase);
        return iDuelCharactersUseCase;
    }
}