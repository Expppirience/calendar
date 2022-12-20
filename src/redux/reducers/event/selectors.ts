import { AppStateType } from "../..";

export const guestsSelector = (state: AppStateType) => state.events.guests;
