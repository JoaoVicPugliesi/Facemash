import { IResetCharactersUseCaseRepo } from '../../../../domain/repositories/Character/IResetCharactersUseCaseRepo';

export class IResetCharactersUseCase {
    constructor(private readonly iResetCharactersUseCaseRepo: IResetCharactersUseCaseRepo) {}

    async execute(): Promise<void> {
        await this.iResetCharactersUseCaseRepo.reset();
    }
}