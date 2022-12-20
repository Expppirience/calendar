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
        const guests = await UserService.getUsers();
        dispatch(EventAC.setGuests(guests.data));
      } catch (e) {
        console.log(e);
      }
    };
  },
};
