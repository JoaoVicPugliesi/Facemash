import { ICharacter, IGender } from "../../../../domain/entities/Character";



export interface IAddCharacterUseCaseDTO extends Pick<ICharacter, 'name' | 'picture'> {
    gender: IGender
}
