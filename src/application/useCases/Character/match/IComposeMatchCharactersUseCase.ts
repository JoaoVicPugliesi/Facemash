import { IMatchCharactersUseCaseRepoImpl } from "../../../../infra/repositories/Character/IMatchCharactersUseCaseRepoImpl";
import { IMatchCharactersController } from "./IMatchCharactersController";
import { IMatchCharactersUseCase } from "./IMatchCharactersUseCase";

const iMatchCharactersUseCaseRepo = new IMatchCharactersUseCaseRepoImpl();
const iMatchCharactersUseCase = new IMatchCharactersUseCase(iMatchCharactersUseCaseRepo);
const iMatchCharactersController = new IMatchCharactersController(iMatchCharactersUseCase);

export const matchCharacters: IMatchCharactersController = iMatchCharactersController;