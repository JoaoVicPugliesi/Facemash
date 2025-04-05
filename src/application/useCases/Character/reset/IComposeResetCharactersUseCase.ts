import { IResetCharactersUseCaseRepoImpl } from './../../../../infra/repositories/Character/IResetCharactersUseCaseRepoImpl';
import { IResetCharactersController } from './IResetCharactersController';
import { IResetCharactersUseCase } from './IResetCharactersUseCase';

const iResetCharactersUseCaseRepo = new IResetCharactersUseCaseRepoImpl();
const iResetCharactersUseCase = new IResetCharactersUseCase(iResetCharactersUseCaseRepo);
const iResetCharactersController = new IResetCharactersController(iResetCharactersUseCase);

export const resetCharacters: IResetCharactersController = iResetCharactersController;