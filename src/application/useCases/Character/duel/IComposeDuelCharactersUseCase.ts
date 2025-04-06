import { IDuelCharactersFactory } from "../../../factories/IDuelCharactersFactory";
import { IDuelCharactersController } from "./IDuelCharactersController";

const iDuelCharactersFactory = new IDuelCharactersFactory();
const iDuelCharactersUseCase = iDuelCharactersFactory.compose();
const iDuelCharactersController = new IDuelCharactersController(iDuelCharactersUseCase);

export const duelCharacters: IDuelCharactersController = iDuelCharactersController;