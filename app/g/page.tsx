import { useEffect, useState } from 'react';
import { db } from '../firebase_config'; // Importe a instância do Firebase configurada
import {  Typography, Row, Col } from 'antd';
import { useSearchParams } from 'next/navigation';
import { Model_Galeria } from '../cms/[[...any]]/models';
import { collection, doc as d, getDoc } from 'firebase/firestore';

const { Text, Title } = Typography;

export default function GalleryPage() {
  const [gallery, setGallery] = useState({} as Model_Galeria);
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const fetchGallery = async () => {
        try {
          const docRef = collection(db, `galerias/${id}`);
          const doc = await getDoc(await d(docRef));
          if (doc.id) {
            setGallery({id: doc.id, data: doc.data() as Model_Galeria['data']});
          } else {
            console.log('Documento não encontrado');
          }
        } catch (error) {
          console.error('Erro ao buscar o documento:', error);
        }
      };
      fetchGallery();
    }
  }, [searchParams]);

  return (
    <div style={{ padding: '2rem' }}>
        <h2>
            {gallery?.data.titulo}
        </h2>
        <p>
            {gallery?.data.desc}
        </p>
      <Row gutter={16}>
        {gallery?.data.imagens.map((imagem, index) => (
          <Col key={index} span={8}>
            <img
              src={imagem}
              alt={`Imagem ${index}`}
              style={{ width: '100%', marginBottom: '1rem' }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}