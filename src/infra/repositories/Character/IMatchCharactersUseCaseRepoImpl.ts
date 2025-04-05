import { IMatchCharactersUseCaseDTO } from "../../../application/useCases/Character/match/IMatchCharactersUseCaseDTO";
import { Character } from "../../../domain/entities/Character";
import { IMatchCharactersUseCaseRepo } from "../../../domain/repositories/Character/IMatchCharactersUseCaseRepo";
import { prisma } from "../../db/Prisma";
export class IMatchCharactersUseCaseRepoImpl
  implements IMatchCharactersUseCaseRepo
{
  async match({ randomIds }: IMatchCharactersUseCaseDTO): Promise<Character[]> {
    const characters: Character[] = [];
    const ids: number[] = Object.values(randomIds).filter(
      (id): id is number => typeof id === "number"
    );

    for (const id of ids) {
      const character: Character | null = await prisma.character.findFirst({
        where: { id },
      });

      if (character) characters.push(character);
    }

    return characters;
  }
}
