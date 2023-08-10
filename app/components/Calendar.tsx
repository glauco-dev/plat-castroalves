import React, { useState, useEffect } from 'react';
import { Calendar, Modal, Badge, Button, Form, Input, Select } from 'antd';
import '/node_modules/antd/dist/reset.css';
import moment from 'moment';
import 'moment/locale/pt-br';
import '../moment-config';
import { CalendarMode, SelectInfo } from 'antd/es/calendar/generateCalendar';
import { T_Calendario_Evento } from '../cms/[[...any]]/models';

const { Option } = Select;
const CalendarioEventos = ({initialValues={} as {[key:string]:T_Calendario_Evento[]},
    editable=false, 
    onSelectDate= (ev: any)=>{console.log(ev, " events changed")}}) => {
  const [form] = Form.useForm();
  const [events, setEvents] = useState(initialValues);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState((null as unknown )as Date);
  const [selectedEvents, setSelectedEvents] = useState([] as T_Calendario_Evento[]);
  const [currentDate, setCurrentDate] = useState(null);
  const [currentEvents, setCurrentEvents] = useState([]);

  const dateCellRender = (date: { format: (arg0: string) => any; }) => {
    const dateKey = date.format('YYYY-MM-DD');
    const eventList = events[dateKey] || [];
    return (
      <ul className="events">
        {eventList.map((event: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) => (
          <li key={index}>
            <Badge status="success" text={event.title} />
          </li>
        ))}
      </ul>
    );
  };

  const handleAddEvent = (event: any) => {
    const updatedEvents = { ...events };
    if(selectedDate==null) return;
    const dateKey = (selectedDate as any).format('YYYY-MM-DD');
    // @ts-ignore
    if (!updatedEvents[dateKey]) {
    // @ts-ignore
    updatedEvents[dateKey] = [];
    }
    // @ts-ignore
    updatedEvents[dateKey].push({ ...event, id: Date.now() }); // Adicionei o ID do evento
    setEvents(updatedEvents);
    // @ts-ignore
    setCurrentEvents(updatedEvents[dateKey]);
    setModalVisible(false);
  };

  const handleRemoveEvent = (eventId: any) => {
    const updatedEvents = { ...events };
    // @ts-ignore
    const dateKey = selectedDate.format('YYYY-MM-DD');
    // @ts-ignore
    updatedEvents[dateKey] = updatedEvents[dateKey].filter((event: { id: any; }) => event.id !== eventId);
    setEvents(updatedEvents);
    // @ts-ignore
    setSelectedEvents(updatedEvents[dateKey]);
  };
  
  
  const handleDateClick = (value: any, selectInfo: SelectInfo) => {
    if(!editable || !value) return;
    // @ts-ignore
    if (value.date()) {
      // @ts-ignore
      const dateKey = value.format('YYYY-MM-DD');
      setSelectedDate(value);
      // @ts-ignore
      setSelectedEvents(events[dateKey] || []);
      setModalVisible(true);
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    form.resetFields();
  };

  

  const handlePanelChange = (value: any, mode: CalendarMode) => {
    // @ts-ignore
    if (mode === 'month' && value?.date()) {
      // @ts-ignore
      const dateKey = value.format('YYYY-MM-DD');
      setSelectedDate(value);
      // @ts-ignore
      setSelectedEvents(events[dateKey] || []);
      setModalVisible(true);
    }
  };

  
  useEffect(() => {
    onSelectDate(events)
  }, [events])
  

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Calendário de Eventos</h1>
      <Calendar
        cellRender={dateCellRender}
        onSelect={handleDateClick}
        onPanelChange={handlePanelChange}
      />
      <Modal
        title={selectedDate && (selectedDate as any).format('D MMMM YYYY')}
        open={modalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        <Form form={form} onFinish={handleAddEvent}>
          <Form.Item name="title" label="Título do Evento" rules={[{ required: true, message: 'Informe o título do evento' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="color" label="Cor do Evento" rules={[{ required: true, message: 'Selecione a cor do evento' }]}>
            <Select>
              <Option value="#ff5722">Vermelho</Option>
              <Option value="#3f51b5">Azul</Option>
              <Option value="#009688">Verde</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Adicionar Evento
            </Button>
          </Form.Item>
        </Form>
        {selectedEvents.map(event => (
          <div key={event.id} style={{ marginBottom: '1rem' }}>
            <Badge color={event.color} text={event.title} />
            <Button type="primary" style={{ marginLeft: '1rem' }} onClick={() => handleRemoveEvent(event.id)}>
              Remover
            </Button>
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default CalendarioEventos;