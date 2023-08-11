"use client";

import React from 'react';
import Footer from '../components/Footer'; // Importe o componente de rodapé
import Parceiros from '../components/Parceiros';
import styles from './Institucional.module.css'; // Importe os estilos modulares
import Link from 'next/link';

const InstitucionalPage: React.FC = () => {
  return (
    <div>

      <div className={`${styles['institucional-content']}`}>
        <div className={`${styles['section-principal']}`}>
            <div className={styles.section_inner}>
                <div className={styles.vectorLines}>
                    <div className={`${styles.vectorLine} ${styles.blue}`}>
                        <Parceiros partnerBrands={[]}/>
                    </div>
                </div>
                <div className={styles.sectionHeader}>
                    <h1 className={styles.sectionTitle} style={{marginTop: "-30rem", marginBottom:'4rem'}}>Educandário Castro Alves: Transformando Vidas Através da Educação</h1>
                    <div className={styles.initialText}>
                        <p className={styles.firstP}>No cora&ccedil;&atilde;o da nossa comunidade, brilha uma luz de educa&ccedil;&atilde;o e compaix&atilde;o que ilumina os caminhos dos nossos alunos. Bem-vindo ao Educand&aacute;rio Castro Alves, mais do que uma escola, um lar de aprendizado fundamentado em valores crist&atilde;os, onde cada estudante &eacute; tratado com amor e dedica&ccedil;&atilde;o.</p>

                        <p>Em um mundo cada vez mais complexo, encontrar um espa&ccedil;o onde os valores humanos e espirituais s&atilde;o cultivados &eacute; uma b&ecirc;n&ccedil;&atilde;o. No Educand&aacute;rio Castro Alves, somos guiados pela cren&ccedil;a de que a educa&ccedil;&atilde;o n&atilde;o &eacute; apenas transmitir conhecimento, mas tamb&eacute;m moldar car&aacute;ter, valores e cidad&atilde;os respons&aacute;veis.</p>

                        <p>Nossa escola tem uma caracter&iacute;stica &uacute;nica que nos torna uma fam&iacute;lia, n&atilde;o apenas uma institui&ccedil;&atilde;o educacional. Aqui, alunos, professores e funcion&aacute;rios s&atilde;o parte de uma comunidade unida pelo desejo de crescer juntos, apoiar uns aos outros e criar um ambiente acolhedor e seguro para a busca do conhecimento.</p>

                        <p>A filosofia crist&atilde; &eacute; a base s&oacute;lida sobre a qual constru&iacute;mos nossa abordagem educacional. Acreditamos que cada indiv&iacute;duo &eacute; dotado de talentos e potencialidades &uacute;nicas, e &eacute; nossa responsabilidade nutrir essas d&aacute;divas enquanto promovemos o respeito, a compaix&atilde;o e a &eacute;tica. O amor ao pr&oacute;ximo e o cuidado com o bem-estar de todos s&atilde;o os pilares que sustentam cada aula, cada conversa e cada decis&atilde;o que tomamos.</p>

                        <p>Nossa equipe de educadores n&atilde;o &eacute; apenas formada por professores, mas sim por mentores e guias. Eles se dedicam n&atilde;o apenas ao ensino do curr&iacute;culo acad&ecirc;mico, mas tamb&eacute;m ao crescimento pessoal e emocional de cada aluno. Acreditamos que a rela&ccedil;&atilde;o entre aluno e educador &eacute; essencial para construir confian&ccedil;a e encorajar o desenvolvimento integral.</p>

                        <p>No Educand&aacute;rio Castro Alves, o bem-estar dos nossos alunos est&aacute; sempre em primeiro plano. Oferecemos um ambiente que promove a sa&uacute;de mental, f&iacute;sica e emocional. Nossas instala&ccedil;&otilde;es foram projetadas para proporcionar conforto e inspira&ccedil;&atilde;o, e nossas atividades extracurriculares incluem pr&aacute;ticas esportivas, art&iacute;sticas e sociais que enriquecem a experi&ecirc;ncia educacional.</p>

                        <p>Al&eacute;m das salas de aula, nosso educand&aacute;rio &eacute; um lugar de celebra&ccedil;&atilde;o e comunh&atilde;o. Eventos escolares, encontros culturais e projetos sociais s&atilde;o oportunidades para os alunos se conectarem, expressarem suas paix&otilde;es e fazerem a diferen&ccedil;a na comunidade ao seu redor.</p>

                        <p>Ao escolher o Educand&aacute;rio Castro Alves, voc&ecirc; est&aacute; optando por uma educa&ccedil;&atilde;o que vai al&eacute;m do intelectual, abra&ccedil;ando o espiritual e emocional. N&oacute;s acreditamos que educar &eacute; nutrir almas, empoderar mentes e formar cora&ccedil;&otilde;es compassivos. Venha fazer parte da nossa fam&iacute;lia, onde a jornada educacional &eacute; iluminada pelo amor crist&atilde;o e pelo compromisso com um futuro melhor para todos.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={`${styles.section} ${styles.yellow}`}>
            <div className={styles.section_inner}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Filosofia Cristã</h2>
                    <p>
                    Nossa escola acredita em educar a mente, o corpo e o espírito. Com base em princípios
                    cristãos, buscamos cultivar valores como amor, compaixão, respeito e solidariedade,
                    preparando nossos alunos para se tornarem cidadãos responsáveis e éticos.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.section} ${styles.blue}`}>
            <div className={styles.section_inner}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Professores Amorosos</h2>
                    <p>
                    Nossos professores são apaixonados pelo ensino e dedicados ao bem-estar de cada aluno.
                    Eles não apenas transmitem conhecimento, mas também são mentores que ajudam os alunos a
                    desenvolverem suas habilidades, confiança e autoestima.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.section} ${styles.dark}`}>
            <div className={styles.section_inner}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Passeios Educativos e Eventos</h2>
                    <p>
                    Aprendizado vai além das quatro paredes da sala de aula. Organizamos passeios educativos
                    que enriquecem a experiência de aprendizado, permitindo que os alunos explorem o mundo
                    real de maneira prática e envolvente. Além disso, nossos grandes eventos escolares
                    proporcionam momentos de alegria, celebração e convívio comunitário.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.section} ${styles.yellow}`}>
            <div className={styles.section_inner}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Ambiente Acolhedor</h2>
                    <p>
                    Nossa escola é mais do que um local de estudo. É uma segunda casa para nossos alunos,
                    onde eles são recebidos com carinho e cuidado. Nosso ambiente acolhedor promove a
                    confiança e a conexão entre alunos, professores e funcionários.
                    </p>
                </div>
            </div>
        </div>

        <div className={`${styles.section}`}>
            <div className={styles.section_inner}>
                <div className={styles.sectionHeader} >
                    <h2 className={styles.sectionTitle}>Então não perca tempo</h2>
                    <p>
                    <span>
                    Entre em contato conosco pelo
                    </span> 
                    <a className={styles.actionLinks} href="https://w.app/wIOaZq">whatsapp</a> 
                    ou <Link href="/matricula"  className={styles.actionLinks}>solicite uma matícula pelo nosso site</Link> 
                    </p>
                </div>
            </div>
        </div>
      </div>

      

      <Footer />
    </div>
  );
};

export default InstitucionalPage;
