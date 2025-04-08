import { IGender } from "../../../../domain/entities/Character"

export interface IMatchCharactersUseCaseDTO {
    randomIds: {
        gender: IGender;
        randomId1: number,
        randomId2: number
    }
}