import { Calendar } from "antd";
import { Dayjs } from "dayjs";
import { IEvent } from "../models/IEvent";
import React from "react";
import { formatDate } from "../utils/date";

interface IEventCalendarProps {
  events: IEvent[];
}

export const EventCalendar: React.FC<IEventCalendarProps> = ({ events }) => {
  const dateCellRender = (value: Dayjs) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter((ev) => ev.date === formatedDate);
    return (
      <div>
        {currentDayEvents.map((ev, i) => {
          return <div key={i}>{ev.description}</div>;
        })}
      </div>
    );
  };

  return <Calendar dateCellRender={dateCellRender}></Calendar>;
};
