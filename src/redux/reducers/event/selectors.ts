import { AppStateType } from "../..";

export const guestsSelector = (state: AppStateType) => state.events.guests;
export const eventsSelector = (state: AppStateType) => state.events.events;
