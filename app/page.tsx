"use client";
import { Layout, Menu, Card, Divider, Carousel } from 'antd';
import { HomeOutlined, InfoCircleOutlined, PictureOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.css';
import PostagemCard from './components/PostagemCard';
import Hero from './components/Hero';
import Footer from './components/Footer';
import InstitucionalPage from './institucional/page';

const { Header, Content } = Layout;

const HomePage = () => {
  const blogPosts = [
    {
      title: 'Título da Postagem 1',
      cover: '/publicacao-1.jpg',
      date: '10 de Agosto de 2023',
      text:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies orci ut finibus volutpat. Phasellus in facilisis massa. Etiam at ex in metus vestibulum pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam feugiat vulputate diam, vitae scelerisque ex eleifend id. Vivamus ac mi pellentesque, dignissim nisi eu, maximus ex. Vestibulum finibus viverra placerat. Integer vel ornare nulla, a congue velit. Etiam consequat porta risus, maximus dignissim risus vehicula vitae. Phasellus a bibendum elit, eget consequat ante. Morbi massa eros, blandit et odio ac, lacinia mattis odio. Quisque semper purus dapibus placerat commodo. Proin sem tortor, sodales non condimentum at, mattis nec orci. Cras ac scelerisque ante. Fusce mollis faucibus est porttitor molestie. Nam lacinia, nibh ut porta sagittis, leo massa vulputate orci, quis suscipit nulla sem efficitur turpis. Ut urna nunc, iaculis nec interdum at, vulputate sed risus. Nam at sollicitudin diam. Mauris et vehicula eros, sed tincidunt enim. Pellentesque vehicula est sit amet lorem malesuada faucibus. Phasellus lobortis ex at sapien feugiat feugiat. Suspendisse viverra arcu nisi, vitae interdum nibh interdum eu. Quisque porta ipsum ut tortor venenatis condimentum. Fusce egestas, orci eget tempor vehicula, ipsum arcu ultrices mi, vel pretium mauris dui eget tellus. Proin rutrum purus vitae augue sodales, at sollicitudin mi ornare. Donec ultrices molestie lacus, et efficitur leo condimentum vel. Aliquam id nunc commodo, malesuada sem et, faucibus odio. Cras vehicula luctus orci, non porta tortor consequat placerat. Fusce cursus augue at eleifend fringilla. Etiam auctor ullamcorper metus vel ultricies. Integer bibendum pretium varius. Nulla sed justo vitae lectus sollicitudin mattis. Ut eu magna at augue facilisis pretium. Maecenas ut urna eget augue cursus condimentum quis vel nibh",
      likes: 15,
      comments: 5,
      link: "#"
    },
    // Adicione mais postagens conforme necessário
  ];
  return (
    <Layout>
      
      
      <Content className={styles.content}>
        <Hero></Hero>

          <div className={styles.services}>
          <Card className={styles.serviceCard}>
          <h3>Matrícula</h3>
            <Divider />
            <p>Solicite sua matrícula para o próximo ano letivo.</p>
            <Link href="/matricula">Saiba mais</Link>
          </Card>
          <Card className={styles.serviceCard}>
          <h3>Calendário Escolar</h3>
            <Divider />
            <p>Confira o calendário de atividades escolares.</p>
            <Link href="/calendario">Saiba mais</Link>
          </Card>
        </div>


        <Divider className={styles.divider} />

      </Content>
        <InstitucionalPage/>
      
      
    </Layout>
  );
};

export default HomePage;