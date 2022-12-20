import { Calendar } from "antd";
import { IEvent } from "../models/IEvent";
import React from "react";

interface IEventCalendarProps {
  events: IEvent[];
}

export const EventCalendar: React.FC<IEventCalendarProps> = () => {
  return <Calendar></Calendar>;
};
