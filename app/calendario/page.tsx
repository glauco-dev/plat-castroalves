"use client";import React, { useState } from 'react';
import { Layout, Row, Col, Card } from 'antd';
import CalendarYear from '../components/Calendar'; // Certifique-se de importar corretamente o componente do calendário
import { T_Calendario_Evento } from '../cms/[[...any]]/models';

const { Content } = Layout;

const SchoolCalendarPage = () => {
  const [selectedsDate, setSelectedDate] = useState([] as T_Calendario_Evento[]);

  const onSelectDate = (date:any) => {
    console.log(date, "!!!!");
    setSelectedDate(date);
  };

  return (
    <Layout>
      <Content style={{ padding: '2rem' }}>
        <Row gutter={[16, 16]}>
          <Col xs={40} sm={40}>
            {/* @ts-ignore */}
            <CalendarYear yearChangeMode="false" onSelectDate={onSelectDate} editable={true}/>
          </Col>
          <Col xs={24} sm={12}>
            {selectedsDate && Object.keys(selectedsDate).map((key:string) =>
              (
                selectedsDate[key].map( (ev:T_Calendario_Evento, i:string) => (
                  <Card key={key+i}>
                    <h2 style={{color:ev.color}}><small>{key}</small>  {ev.title} </h2>
                    {/* Adicione mais detalhes ou informações relevantes aqui */}
                  </Card>
                ) )
              )
              
            )}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default SchoolCalendarPage;