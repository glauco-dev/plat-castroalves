import React from 'react';
import { Card, Typography, Button } from 'antd';

const { Title, Text } = Typography;

const PostagemCard = ({ cover, title, date, text, likes, link }:any) => {
  return (
    <Card
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem' }}
    >
      <img src={cover} alt={title} style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
      <div style={{ flex: 1, marginLeft: '1rem' }}>
        <Title level={4}>{title}</Title>
        <Text type="secondary">{date}</Text>
        <p>{text}</p>
        <Button type="primary" href={link} target="_blank">Quero saber mais</Button>
      </div>
    </Card>
  );
};

export default PostagemCard;
