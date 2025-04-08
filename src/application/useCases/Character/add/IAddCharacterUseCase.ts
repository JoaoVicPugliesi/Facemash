import { IAddCharacterUseCaseRepo } from "../../../../domain/repositories/Character/IAddCharactersUseCaseRepo";
import { IAddCharacterUseCaseDTO } from "./IAddCharacterUseCaseDTO";

export class IAddCharacterUseCase {
    constructor(private readonly iAddUseCaseRepo: IAddCharacterUseCaseRepo) {}

    async execute({ name, picture, gender }: IAddCharacterUseCaseDTO): Promise<void> {
        await this.iAddUseCaseRepo.add({
            name,
            picture,
            gender
        });
    }
}