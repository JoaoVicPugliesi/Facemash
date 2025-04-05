import { IDuelCharactersUseCaseDTO } from "../../../application/useCases/Character/duel/IDuelCharactersUseCaseDTO";

export interface IDuelCharactersUseCaseRepo {
    compareElos(winnerElo: number, loserElo: number): number[];
    reassignElos(DTO: IDuelCharactersUseCaseDTO): Promise<void>;
}