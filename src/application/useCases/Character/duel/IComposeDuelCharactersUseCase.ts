import { IDuelCharactersUseCaseRepoImpl } from './../../../../infra/repositories/Character/IDuelCharactersUseCaseRepoImpl';
import { IMatchCharactersUseCaseRepoImpl } from "../../../../infra/repositories/Character/IMatchCharactersUseCaseRepoImpl";
import { IMatchCharactersUseCase } from "../match/IMatchCharactersUseCase";
import { IDuelCharactersUseCase } from './IDuelCharactersUseCase';
import { IDuelCharactersController } from './IDuelCharactersController';

const iMatchCharactersUseCaseRepo = new IMatchCharactersUseCaseRepoImpl();
const iMatchCharactersUseCase = new IMatchCharactersUseCase(iMatchCharactersUseCaseRepo);
const iDuelCharactersUseCaseRepo = new IDuelCharactersUseCaseRepoImpl();
const iDuelCharactersUseCase = new IDuelCharactersUseCase(iDuelCharactersUseCaseRepo, iMatchCharactersUseCase);
const iDuelCharactersController = new IDuelCharactersController(iDuelCharactersUseCase);

export const duelCharacters: IDuelCharactersController = iDuelCharactersController;