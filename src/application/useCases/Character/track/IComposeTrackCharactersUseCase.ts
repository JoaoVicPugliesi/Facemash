import { ITrackCharactersUseCaseRepoImpl } from './../../../../infra/repositories/Character/ITrackCharactersUseCaseRepoImpl';
import { ITrackCharactersController } from './ITrackCharactersController';
import { ITrackCharactersUseCase } from './ITrackCharactersUseCase';

const iTrackCharactersUseCaseRepo = new ITrackCharactersUseCaseRepoImpl();
const iTrackCharactersUseCase = new ITrackCharactersUseCase(iTrackCharactersUseCaseRepo);
const iTrackCharactersController = new ITrackCharactersController(iTrackCharactersUseCase);

export const trackCharacters: ITrackCharactersController = iTrackCharactersController;