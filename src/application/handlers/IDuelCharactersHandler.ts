import { Character } from "../../domain/entities/Character"

export interface IDuelCharactersResponseHandler {
    response: {
        match_characters: Character[],
    }
}