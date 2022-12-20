import { Button, Layout, Modal, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import {
  eventsSelector,
  guestsSelector,
} from "./../redux/reducers/event/selectors";

import { EventCalendar } from "../components/EventCalendar";
import { EventForm } from "../components/EventForm";
import { IEvent } from "./../models/IEvent";
import { authSelector } from "./../redux/reducers/auth/selectors";
import { useActions } from "./../hooks/useActions";
import { useTypedSelector } from "./../hooks/useTypedSelector";

export const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const guests = useTypedSelector(guestsSelector);
  const events = useTypedSelector(eventsSelector);
  const { user } = useTypedSelector(authSelector);
  const { fetchGuests, createEvent, fetchEvents } = useActions();

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const onCreateEvent = (event: IEvent) => {
    closeModal();
    createEvent(event);
  };
  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify={"center"}>
        <Button onClick={openModal}>Add event</Button>
      </Row>{" "}
      <Modal
        title="Add event"
        open={modalVisible}
        footer={null}
        onCancel={closeModal}
      >
        <EventForm guests={guests} submit={onCreateEvent} />
      </Modal>
    </Layout>
  );
};
