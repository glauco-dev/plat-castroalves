"use client";import React, { useState } from 'react';
import { Layout, Row, Col, Card } from 'antd';
import CalendarYear from '../components/Calendar'; // Certifique-se de importar corretamente o componente do calendário
import { T_Calendario_Evento } from '../cms/[[...any]]/models';
import Footer_ from '../components/Footer';

const { Content } = Layout;

const SchoolCalendarPage = () => {
  const [selectedsDate, setSelectedDate] = useState({} as {[key:string]:T_Calendario_Evento[]});

  const onSelectDate = (date:any) => {
    setSelectedDate(date);
  };

  return (
      <><Content id="calendario-content" style={{ padding: '2rem' }}>

      <h2>Calendário de Eventos</h2>

      <p className='-desc marcado'>
        Bem-vindo à nossa página de Calendário Escolar! Aqui você encontrará uma visão abrangente e detalhada de todas as atividades, eventos e momentos importantes que ocorrerão ao longo do ano letivo. Nosso calendário é cuidadosamente planejado para garantir que todos os alunos, professores e pais estejam bem informados sobre as datas cruciais que moldam a jornada educacional.
      </p>

      <Row gutter={[16, 16]} className="-component">
        <Col xs={40} sm={40}>
          {/* @ts-ignore */}
          <CalendarYear yearChangeMode="false" onSelectDate={onSelectDate} editable={false} />
        </Col>
        <Col xs={24} sm={12}>
          {selectedsDate && Object.keys(selectedsDate).map((key: any) => {
            return (Array.isArray(selectedsDate[key]) &&
              selectedsDate[key].map((ev: T_Calendario_Evento, i: number) => (
                <Card key={key + i}>
                  <h2 style={{ color: ev.color }}><small>{key}</small>  {ev.title} </h2>
                </Card>
              ))
            );

          })}
        </Col>
      </Row>
    </Content><Footer_></Footer_></>
  );
};

export default SchoolCalendarPage;