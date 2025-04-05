import { IAddCharacterUseCaseDTO } from './IAddCharacterUseCaseDTO';
import { FastifyReply, FastifyRequest } from 'fastify';
import { IAddCharacterUseCase } from './IAddCharacterUseCase';
export class IAddCharacterController {
    constructor(private readonly iAddCharacterUseCase: IAddCharacterUseCase) {}

    async handle(req: FastifyRequest, res: FastifyReply) {
        const { name, picture }: IAddCharacterUseCaseDTO = req.body as IAddCharacterUseCaseDTO;
        await this.iAddCharacterUseCase.execute({
            name,
            picture
        });

        return res.status(201).send({ message: 'Character Created Successfully' });
    }
}