"use client";

import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import { Enum_ContentTags, Model_Galeria } from '../cms/[[...any]]/models'; // Substitua pelo caminho correto

import { db } from '../firebase_config';
import 'firebase/firestore';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';


const GalleryPage = () => {
  const [galleries, setGalleries] = useState<Model_Galeria[]>([]);

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await getDocs(collection( db, 'galerias'));
        const fetchedGalleries = response.docs.map((doc) => ({
          id: doc.id,
          data: doc.data() as Model_Galeria['data']
        }));
        setGalleries(fetchedGalleries);
      } catch (error) {
        console.error('Error fetching galleries:', error);
      }
    };

    fetchGalleries();
  }, []);

  return (
    <div>
      <h1>Galerias</h1>
      <Row gutter={[16, 16]}>
        {galleries.map(gallery => (
          <Col key={gallery.id} xs={24} sm={12} md={8} lg={6}>
            <Link href={`/g?id=${gallery.id}`} passHref>
              <Card
                cover={<img alt={gallery.data.titulo} src={gallery.data.capa} />}
                hoverable
              >
                <Card.Meta title={gallery.data.titulo} description={gallery.data.desc} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GalleryPage;
