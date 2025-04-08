import { IAddCharacterUseCaseDTO } from "../../../application/useCases/Character/add/IAddCharacterUseCaseDTO";
import { IAddCharacterUseCaseRepo } from "../../../domain/repositories/Character/IAddCharactersUseCaseRepo";
import { prisma } from "../../db/Prisma";

export class IAddCharacterUseCaseRepoImpl implements IAddCharacterUseCaseRepo {
  async add({ name, picture, gender }: IAddCharacterUseCaseDTO): Promise<void> {
    if (gender === "female") {
      await prisma.woman.create({
        data: {
          name,
          picture,
        },
      });
    }

    if (gender === "male") {
      await prisma.man.create({
        data: {
          name,
          picture,
        },
      });
    }
  }
}
