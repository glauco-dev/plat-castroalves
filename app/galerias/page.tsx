"use client"
import React from 'react';
import { Layout, Row, Col, Card, Badge } from 'antd';
import { Enum_ContentTags, Model_Galeria } from '../cms/[[...any]]/models';

const { Content } = Layout;

const SchoolPage = () => {
  const cardsData:Model_Galeria[] = [
    {
      id: "1",
      data: {
        titulo: 'Saída à Matinha',
        desc: 'Passeio realizado em xx-xx-xxxx',
        link: '/galerias?id=1',
        capa: '/',
        imagens: [],
        tags:[ Enum_ContentTags.POSTAGEM ]// Coloque o caminho para a imagem
      }
    },
    {
      id: "2",
      data: {
        titulo: 'Saída à Matinha',
        desc: 'Passeio realizado em xx-xx-xxxx',
        link: '/galerias?id=1',
        capa: '/',
        imagens: [],
        tags:[ Enum_ContentTags.POSTAGEM ]// Coloque o caminho para a imagem
      }
    },{
      id: "3",
      data: {
        titulo: 'Saída à Matinha',
        desc: 'Passeio realizado em xx-xx-xxxx',
        link: '/galerias?id=1',
        capa: '/',
        imagens: [],
        tags:[ Enum_ContentTags.POSTAGEM ]// Coloque o caminho para a imagem
      }
    },{
      id: "4",
      data: {
        titulo: 'Saída à Matinha',
        desc: 'Passeio realizado em xx-xx-xxxx',
        link: '/galerias?id=1',
        capa: '/',
        imagens: [],
        tags:[ Enum_ContentTags.POSTAGEM ]// Coloque o caminho para a imagem
      }
    },{
      id: "5",
      data: {
        titulo: 'Saída à Matinha',
        desc: 'Passeio realizado em xx-xx-xxxx',
        link: '/galerias?id=1',
        capa: '/',
        imagens: [],
        tags:[ Enum_ContentTags.POSTAGEM ]// Coloque o caminho para a imagem
      }
    },{
      id: "6",
      data: {
        titulo: 'Saída à Matinha',
        desc: 'Passeio realizado em xx-xx-xxxx',
        link: '/galerias?id=1',
        capa: '/',
        imagens: [],
        tags:[ Enum_ContentTags.POSTAGEM ]// Coloque o caminho para a imagem
      }
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
                cover={<img alt={card.data.titulo} src={card.data.capa} />}
                hoverable
                onClick={() => window.location.href = card.data.link}
              >
                <h3>{card.data.titulo}</h3>
                <p>
                  {card.data.tags.map(tag => <Badge text={tag}></Badge>)}
                  {card.data.desc}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default SchoolPage;
