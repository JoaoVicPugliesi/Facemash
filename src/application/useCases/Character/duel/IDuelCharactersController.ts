import { FastifyReply, FastifyRequest } from 'fastify';
import { IDuelCharactersUseCaseDTO } from './IDuelCharactersUseCaseDTO';
import { IDuelCharactersUseCase } from './IDuelCharactersUseCase';
import { IDuelCharactersResponseHandler } from '../../../handlers/IDuelCharactersHandler';
export class IDuelCharactersController {
    constructor(private readonly iDuelCharactersUseCase: IDuelCharactersUseCase) {}

    async handle(req: FastifyRequest, res: FastifyReply) {
        const DTO: IDuelCharactersUseCaseDTO =  req.body as IDuelCharactersUseCaseDTO;
        const characters: IDuelCharactersResponseHandler = await this.iDuelCharactersUseCase.execute(DTO);
        
        res.status(200).send(
            { 
                match: characters.response.match_characters, 
            });
    }
}