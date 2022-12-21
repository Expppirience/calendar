import {
  EventACEnum,
  SetEventsAT,
  SetGuestsAT,
  SetIsEventLoadingAT,
} from "./types";

import { AppDispatch } from "../..";
import { IEvent } from "./../../../models/IEvent";
import { IUser } from "./../../../models/IUser";
import { UserService } from "./../../../api/UserService";

export const EventAC = {
  setGuests: (guests: IUser[]): SetGuestsAT => {
    return {
      type: EventACEnum.SET_GUESTS,
      data: { guests },
    };
  },
  setEvents: (events: IEvent[]): SetEventsAT => {
    return {
      type: EventACEnum.SET_EVENTS,
      data: {
        events,
      },
    };
  },
  setIsEventLoading: (isLoading: boolean): SetIsEventLoadingAT => {
    return {
      type: EventACEnum.SET_IS_EVENT_LOADING,
      data: {
        isLoading,
      },
    };
  },
  fetchGuests: () => {
    return async (dispatch: AppDispatch) => {
      try {
        EventAC.setIsEventLoading(true);
        const guests = await UserService.getUsers();
        dispatch(EventAC.setGuests(guests.data));
      } catch (e) {
        console.log(e);
      } finally {
        EventAC.setIsEventLoading(false);
      }
    };
  },
  fetchEvents: (username: string) => {
    return async (dispatch: AppDispatch) => {
      try {
        EventAC.setIsEventLoading(true);
        const events = localStorage.getItem("events") || "[]";
        const formattedEvents = JSON.parse(events) as IEvent[];
        const currentUserEvents = formattedEvents.filter((ev) => {
          return ev.author === username || ev.guest === username;
        });
        dispatch(EventAC.setEvents(currentUserEvents));
      } catch (e) {
      } finally {
        EventAC.setIsEventLoading(false);
      }
    };
  },
  createEvent: (event: IEvent) => {
    return async (dispatch: AppDispatch) => {
      try {
        const events = localStorage.getItem("events") || "[]";
        const formattedEvents = JSON.parse(events) as IEvent[];
        formattedEvents.push(event);
        dispatch(EventAC.setEvents(formattedEvents));
        localStorage.setItem("events", JSON.stringify(formattedEvents));
      } catch (e) {
        console.log(e);
      }
    };
  },
};
