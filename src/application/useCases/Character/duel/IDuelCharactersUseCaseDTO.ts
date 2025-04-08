import { IGender } from "../../../../domain/entities/Character"

export interface IDuelCharactersUseCaseDTO {
    gender: IGender,
    winner: {
        id: number,
        rating: number
    },
    loser: {
        id: number,
        rating: number
    }
}
