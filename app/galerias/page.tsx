"use client"
import React from 'react';
import { Layout, Row, Col, Card } from 'antd';

const { Content } = Layout;

const SchoolPage = () => {
  const cardsData = [
    {
      title: 'Matrícula',
      content: 'Solicite sua matrícula para o próximo ano letivo.',
      link: '/servicos/matricula',
      image: '/matricula.jpg', // Coloque o caminho para a imagem
    },
    {
      title: 'Solicitações',
      content: 'Faça solicitações para diversos serviços administrativos.',
      link: '/servicos/solicitacoes',
      image: '/solicitacoes.jpg', // Coloque o caminho para a imagem
    },
    {
      title: 'Calendário Escolar',
      content: 'Confira o calendário de atividades escolares.',
      link: '/servicos/calendario',
      image: '/calendario.jpg', // Coloque o caminho para a imagem
    },
    // Adicione mais cards conforme necessário
  ];

  return (
    <Layout>
      <Content style={{ padding: '2rem' }}>
        <Row gutter={[16, 16]}>
          {cardsData.map((card, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={<img alt={card.title} src={card.image} />}
                hoverable
                onClick={() => window.location.href = card.link}
              >
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default SchoolPage;
