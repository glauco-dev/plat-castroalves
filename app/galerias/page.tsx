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
          data: (doc.data() as Model_Galeria)['data']
        }));
        setGalleries(fetchedGalleries);
      } catch (error) {
        console.error('Error fetching galleries:', error);
      }
    };

    fetchGalleries();
  }, []);

  return (
    <div id="galerias">
      <h1 style={{
        color: "rgb(11, 50, 155)",
        marginBottom: "2rem",
        fontSize: "47pt",
        fontWeight: "normal",
        fontFamily: "Segoe UI",
      }}>Galerias</h1>

      <p>Na jornada educacional no <strong>Educand&aacute;rio Castro Alves</strong>, cada dia &eacute; uma oportunidade de aprender, crescer e criar mem&oacute;rias valiosas.</p>

      <p>Sabemos que as experi&ecirc;ncias vividas durante os eventos, atividades e celebra&ccedil;&otilde;es s&atilde;o t&atilde;o significativas quanto o conhecimento adquirido em sala de aula.</p>

      <p>&Eacute; por isso que temos o prazer de apresentar as nossas Galerias, um espa&ccedil;o dedicado a revivermos esses momentos especiais atrav&eacute;s de imagens vibrantes e cheias de significado.</p>

      <Row gutter={[16, 16]} className='mt-10'>
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
