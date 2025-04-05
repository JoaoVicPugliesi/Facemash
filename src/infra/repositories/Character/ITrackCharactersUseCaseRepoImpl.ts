import { Character } from "../../../domain/entities/Character";
import { ITrackCharactersUseCaseRepo } from "../../../domain/repositories/Character/ITrackCharactersUseCaseRepo";
import { prisma } from "../../db/Prisma";

export class ITrackCharactersUseCaseRepoImpl implements ITrackCharactersUseCaseRepo {
    async track(): Promise<Character[] | null> {
        const characters: Character[] | null = await prisma.character.findMany({
            orderBy: {
                rating: 'desc',
            },
            take: 30
        });

        if(characters) return characters;

        return null;
    }
}