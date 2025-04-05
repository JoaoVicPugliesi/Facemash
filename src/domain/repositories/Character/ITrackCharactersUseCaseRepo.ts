import { Character } from "../../entities/Character";

export interface ITrackCharactersUseCaseRepo {
    track(): Promise<Character[] | null>
}