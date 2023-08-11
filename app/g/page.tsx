"use client";
import { useEffect, useState } from 'react';
import { db } from '../firebase_config'; // Importe a instância do Firebase configurada
import {  Typography, Row, Col, Modal } from 'antd';
import { useSearchParams } from 'next/navigation';
import { Model_Galeria } from '../cms/[[...any]]/models';
import { collection, doc as d, getDoc } from 'firebase/firestore';
import Breadnav from '../components/breadnav';
import Footer_ from '../components/Footer';

const { Text, Title } = Typography;

export default function GalleryPage() {
  const [gallery, setGallery] = useState({} as Model_Galeria);
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const fetchGallery = async () => {
        try {
          const docRef = collection(db, `galerias`);
          const doc = await getDoc(await d(docRef, id));
          if (doc.id) {
            setGallery({id: doc.id, data: (doc.data() as Model_Galeria).data});
          } else {
            console.log('Documento não encontrado');
          }
        } catch (error) {
          console.error('Erro ao buscar o documento:', error);
        }
      };
      fetchGallery();
    }
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openImageModal = (imageURL:string) => {
    setSelectedImage(imageURL);
    setModalVisible(true);
  };

  const closeImageModal = () => {
    setSelectedImage('');
    setModalVisible(false);
  };

  if(!gallery.data) return <></>
  return (
    <><div id="galeria-single" style={{ padding: '2rem' }}>
      <Breadnav></Breadnav>
      <h2>
        {gallery.data.titulo}
      </h2>
      <p className='galeria-body'>
        {gallery.data.desc}
      </p>
      <Row gutter={16} style={{ marginInline: "auto", justifyContent: "center" }}>
        {gallery.data.imagens.map((imagem, index) => (
          <Col key={index} span={8}>
            <img
              src={imagem}
              alt={`Imagem ${index}`}
              style={{ width: '100%', marginBottom: '1rem', cursor: "pointer" }}
              onClick={() => openImageModal(imagem)} />
          </Col>
        ))}
      </Row>

      <Modal
        open={modalVisible}
        onCancel={closeImageModal}
        footer={null}
        centered
      >
        <img
          src={selectedImage}
          alt="Imagem Ampliada"
          style={{ width: '100%', height: 'auto' }} />
      </Modal>
    </div><Footer_></Footer_></>
  );
}