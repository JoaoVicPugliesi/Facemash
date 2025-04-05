import { IAddCharacterUseCaseRepoImpl } from '../../../../infra/repositories/Character/IAddCharactersUseCaseRepoImpl';
import { IAddCharacterUseCase } from './IAddCharacterUseCase';
import { IAddCharacterController } from './IAddCharacterController';

const iAddCharacterRepo = new IAddCharacterUseCaseRepoImpl();
const iAddCharacterUseCase = new IAddCharacterUseCase(iAddCharacterRepo);
const iAddCharacterController = new IAddCharacterController(iAddCharacterUseCase);

export const addCharacter: IAddCharacterController = iAddCharacterController;