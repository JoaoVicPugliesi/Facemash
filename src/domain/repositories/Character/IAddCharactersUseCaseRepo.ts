import { IAddCharacterUseCaseDTO } from "../../../application/useCases/Character/add/IAddCharacterUseCaseDTO";


export interface IAddCharacterUseCaseRepo {
    add(DTO: IAddCharacterUseCaseDTO): Promise<void>
}