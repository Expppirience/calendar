import { EventACEnum, EventAT, IEventState } from "./types";

const initialState: IEventState = {
  guests: [],
  events: [],
  isEventLoading: false,
};

export const eventReducer = (
  state: IEventState = initialState,
  action: EventAT
): IEventState => {
  switch (action.type) {
    case EventACEnum.SET_GUESTS:
      return { ...state, guests: [...action.data.guests] };

    case EventACEnum.SET_EVENTS:
      return { ...state, events: [...action.data.events] };

    case EventACEnum.SET_IS_EVENT_LOADING:
      return { ...state, isEventLoading: action.data.isLoading };

    default:
      return state;
  }
};
