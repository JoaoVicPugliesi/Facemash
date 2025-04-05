import { Character } from '../../../../domain/entities/Character';
import { ITrackCharactersUseCaseRepo } from './../../../../domain/repositories/Character/ITrackCharactersUseCaseRepo';
export class ITrackCharactersUseCase {
    constructor(private readonly iTrackCharactersUseCaseRepo: ITrackCharactersUseCaseRepo) {}

    async execute(): Promise<Character[] | null> {
        const characters: Character[] | null = await this.iTrackCharactersUseCaseRepo.track();

        if(characters) return characters;

        return null;
    }
}