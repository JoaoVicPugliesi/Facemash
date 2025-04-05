import { ICharacter } from "../../../../domain/entities/Character";

export interface IAddCharacterUseCaseDTO extends Pick<ICharacter, 'name' | 'picture'> {}
