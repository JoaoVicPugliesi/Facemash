import { IMatchCharactersUseCaseDTO } from './IMatchCharactersUseCaseDTO';
import { FastifyRequest, FastifyReply } from 'fastify';
import { IMatchCharactersUseCase } from './IMatchCharactersUseCase';
import { Character } from '../../../../domain/entities/Character';
export class IMatchCharactersController {
    constructor(private readonly iMatchCharactersUseCase: IMatchCharactersUseCase) {}

    async handle(req: FastifyRequest, res: FastifyReply): Promise<void> {
        const DTO: IMatchCharactersUseCaseDTO = req.body as IMatchCharactersUseCaseDTO;
        const { randomId1, randomId2 } = DTO.randomIds;
        const characters: Character[] = await this.iMatchCharactersUseCase.execute({
            randomIds: {
                randomId1,
                randomId2
            }
        })

        res.status(200).send({ characters: characters });
    }
}