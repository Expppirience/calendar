import {
  Button,
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import React, { FC, useState } from "react";

import { IEvent } from "../models/IEvent";
import { IUser } from "../models/IUser";
import { authSelector } from "./../redux/reducers/auth/selectors";
import { formatDate } from "./../utils/date";
import { rules } from "../utils/rules";
import { useTypedSelector } from "./../hooks/useTypedSelector";

interface IEventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

export const EventForm: FC<IEventFormProps> = ({ guests, submit }) => {
  const initialEvent = {
    author: "",
    date: "",
    description: "",
    guest: "",
  };

  const [event, setEvent] = useState<IEvent>(initialEvent as IEvent);
  const { user } = useTypedSelector(authSelector);

  const handleChangeSelect = (guest: string) => {
    setEvent({ ...event, guest: guest });
  };

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent({ ...event, description: e.currentTarget.value });
  };

  const handleChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };

  const handleSubmit = () => {
    submit({ ...event, author: user.username });
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required("Please input your username!")]}
      >
        <Input onChange={handleChangeDescription} value={event.description} />
      </Form.Item>
      <Form.Item
        label="Choose date"
        name="date"
        rules={[rules.required("Please input your username!")]}
      >
        <DatePicker onChange={handleChangeDate} />
      </Form.Item>
      <Form.Item
        label="Choose guest"
        name="guest"
        rules={[rules.required("Please input your username!")]}
      >
        <Select onChange={handleChangeSelect}>
          {guests.map((guest) => {
            return (
              <Select.Option value={guest.username} key={guest.username}>
                {guest.username}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Row justify={"end"}>
        <Form.Item>
          <Button type={"primary"} htmlType="submit">
            Create event
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};
