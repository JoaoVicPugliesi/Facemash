import { prisma } from '../../db/Prisma';
import { IResetCharactersUseCaseRepo } from './../../../domain/repositories/Character/IResetCharactersUseCaseRepo';
export class IResetCharactersUseCaseRepoImpl implements IResetCharactersUseCaseRepo {
    async reset(): Promise<void> {
        await prisma.character.updateMany({
            data: {
                rating: 1400
            }
        });
    }
}