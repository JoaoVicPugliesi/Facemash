export interface IDuelCharactersUseCaseDTO {
    winner: {
        id: number,
        rating: number
    },
    loser: {
        id: number,
        rating: number
    }
}