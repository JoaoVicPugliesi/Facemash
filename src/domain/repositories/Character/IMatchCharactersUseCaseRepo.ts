import { Character } from '../../entities/Character';
import { IMatchCharactersUseCaseDTO } from '../../../application/useCases/Character/match/IMatchCharactersUseCaseDTO';

export interface IMatchCharactersUseCaseRepo {
    match(DTO: IMatchCharactersUseCaseDTO): Promise<Character[]>
}