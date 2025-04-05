import { IAddCharacterUseCaseDTO } from "../../../application/useCases/Character/add/IAddCharacterUseCaseDTO";
import { IAddCharacterUseCaseRepo } from "../../../domain/repositories/Character/IAddCharactersUseCaseRepo";
import { prisma } from "../../db/Prisma";


export class IAddCharacterUseCaseRepoImpl implements IAddCharacterUseCaseRepo {
    async add({ name, picture }: IAddCharacterUseCaseDTO): Promise<void> {
        await prisma.character.create({
            data: {
                name,
                picture
            }
        })
    }
}