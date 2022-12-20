import { IEvent } from "./../../../models/IEvent";
import { IUser } from "./../../../models/IUser";

export interface IEventState {
  guests: IUser[];
  events: IEvent[];
  isEventLoading: boolean;
}

export enum EventACEnum {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENTS = "SET_EVENT",
  SET_IS_EVENT_LOADING = "SET_IS_EVENT_LOADING",
}

export interface SetGuestsAT {
  type: EventACEnum.SET_GUESTS;
  data: {
    guests: IUser[];
  };
}

export interface SetEventsAT {
  type: EventACEnum.SET_EVENTS;
  data: {
    events: IEvent[];
  };
}

export interface SetIsEventLoadingAT {
  type: EventACEnum.SET_IS_EVENT_LOADING;
  data: {
    isLoading: boolean;
  };
}

export type EventAT = SetGuestsAT | SetEventsAT | SetIsEventLoadingAT;
