import { FastifyReply, FastifyRequest } from 'fastify';
import { IDuelCharactersUseCaseDTO } from './IDuelCharactersUseCaseDTO';
import { Character } from '../../../../domain/entities/Character';
import { IDuelCharactersUseCase } from './IDuelCharactersUseCase';
export class IDuelCharactersController {
    constructor(private readonly iDuelCharactersUseCase: IDuelCharactersUseCase) {}

    async handle(req: FastifyRequest, res: FastifyReply) {
        const DTO: IDuelCharactersUseCaseDTO =  req.body as IDuelCharactersUseCaseDTO;
        const characters: Character[] = await this.iDuelCharactersUseCase.execute(DTO);
        
        res.status(200).send({ characters: characters });
    }
}