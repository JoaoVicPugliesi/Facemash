import { IDuelCharactersUseCaseDTO } from "../../../application/useCases/Character/duel/IDuelCharactersUseCaseDTO";
import { IDuelCharactersUseCaseRepo } from "../../../domain/repositories/Character/IDuelCharactersUseCaseRepo";
import { prisma } from "../../db/Prisma";

export class IDuelCharactersUseCaseRepoImpl
  implements IDuelCharactersUseCaseRepo
{
  compareElos(winnerElo: number, loserElo: number): number[] {
    const K = 32;

    const expectedWinner = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
    const expectedLoser = 1 / (1 + Math.pow(10, (winnerElo - loserElo) / 400));
    const reassignedWinnerElo = Math.round(
      winnerElo + K * (1 - expectedWinner)
    );
    const reassignedLoserElo = Math.round(loserElo + K * (0 - expectedLoser));

    return [reassignedWinnerElo, reassignedLoserElo];
  }

  async reassignElos({
    winner,
    loser,
  }: IDuelCharactersUseCaseDTO): Promise<void> {
    await prisma.character.update({
      where: {
        id: winner.id,
      },
      data: {
        rating: winner.rating,
      },
    });

    await prisma.character.update({
      where: {
        id: loser.id,
      },
      data: {
        rating: loser.rating,
      },
    });
  }
}
