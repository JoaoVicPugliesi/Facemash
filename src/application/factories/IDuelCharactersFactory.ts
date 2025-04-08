import { IDuelCharactersUseCaseRepoImpl } from "../../infra/repositories/Character/IDuelCharactersUseCaseRepoImpl";
import { IMatchCharactersUseCaseRepoImpl } from "../../infra/repositories/Character/IMatchCharactersUseCaseRepoImpl";
import { IDuelCharactersUseCase } from "../useCases/Character/duel/IDuelCharactersUseCase";
import { IMatchCharactersUseCase } from "../useCases/Character/match/IMatchCharactersUseCase";

export class IDuelCharactersFactory {
    compose(): IDuelCharactersUseCase {
        const iMatchCharactersUseCaseRepo = new IMatchCharactersUseCaseRepoImpl();
        const iMatchCharactersUseCase = new IMatchCharactersUseCase(iMatchCharactersUseCaseRepo);
        const iDuelCharactersUseCaseRepo = new IDuelCharactersUseCaseRepoImpl();
        const iDuelCharactersUseCase = new IDuelCharactersUseCase(iDuelCharactersUseCaseRepo, iMatchCharactersUseCase);
        return iDuelCharactersUseCase;
    }
}