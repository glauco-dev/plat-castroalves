"use client";

import React from 'react';
import { Form, Input, Select, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, DocumentReference, DocumentData } from 'firebase/firestore/lite';
import '@/node_modules/antd/dist/reset.css';
import styles from './FormularioMatricula.module.css'; // Importar os estilos modulados

import firebase_app from '../firebase_config'
import MotivationalText from '../components/MotivationalText';
import Footer from '../components/Footer';

const db = getFirestore(firebase_app);

const { Option } = Select;

interface FormValues {
  nomeAluno: string;
  dataNascimento: string;
  sexo: string;
  endereco: string;
  telefone: string;
  email: string;
  nomeResponsavel: string;
  informacoesMedicasFile?: File;
  historicoEscolarFile?: File;
  cpfAluno?: string;
}

const App: React.FC = () => {
  const onFinish = async (values: FormValues) => {
    const { nomeAluno, nomeResponsavel, cpfAluno, ...otherValues } = values;
    const alunoData = {
      nomeAluno,
      dataNascimento: new Date(values.dataNascimento),
      sexo: values.sexo,
      informacoesMedicasFile: values.informacoesMedicasFile,
      historicoEscolarFile: values.historicoEscolarFile,
      cpfAluno
    };
    const responsavelData = {
      nomeResponsavel,
      endereco: values.endereco,
      telefone: values.telefone,
      email: values.email
    };

    try {
        // Verificar se o aluno já está cadastrado na coleção "alunos"
        const alunoRef: DocumentReference<DocumentData> = doc(db, `alunos/${cpfAluno}`);
        const alunoDoc = await getDoc(alunoRef);

      if (!alunoDoc.exists()) {
        // Se o aluno não existir, criar um documento na coleção "alunos"
        await setDoc(alunoRef, alunoData);
      }

      // Criar um documento na coleção "pais" para o responsável
      const paisCollection = collection(db, "pais");
      await addDoc(paisCollection, responsavelData);

      message.success('Matrícula realizada com sucesso!', 3);
    } catch (error) {
      message.error('Ocorreu um erro ao realizar a matrícula. Por favor, tente novamente.', 3);
      console.error(error);
    }
  };

  const customUploadButton = (
    <Button>
      <UploadOutlined /> Selecione um arquivo
    </Button>
  );

  return (
      <><MotivationalText></MotivationalText><div className={styles.container}>
      <h2 className={styles.formTitle}>Formulário de Matrícula Escolar</h2>
      <Form onFinish={onFinish} className={styles.form}>
        <Form.Item
          label="Nome Completo do Aluno"
          name="nomeAluno"
          className={styles.formItem}
          rules={[{ required: true, message: 'Por favor, insira o nome do aluno!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Data de Nascimento"
          name="dataNascimento"
          className={styles.formItem}
          rules={[{ required: true, message: 'Por favor, insira a data de nascimento!' }]}
        >
          <Input type="date" />
        </Form.Item>

        <Form.Item
          label="Sexo"
          name="sexo"
          className={styles.formItem}
          rules={[{ required: true, message: 'Por favor, selecione o sexo!' }]}
        >
          <Select>
            <Option value="masculino">Masculino</Option>
            <Option value="feminino">Feminino</Option>
            <Option value="outro">Outro</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Endereço Residencial"
          name="endereco"
          className={styles.formItem}
          rules={[{ required: true, message: 'Por favor, insira o endereço residencial!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Número de Telefone"
          name="telefone"
          className={styles.formItem}
          rules={[{ required: true, message: 'Por favor, insira o número de telefone!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Endereço de E-mail"
          name="email"
          className={styles.formItem}
          rules={[
            { required: true, message: 'Por favor, insira o endereço de e-mail!' },
            { type: 'email', message: 'Por favor, insira um endereço de e-mail válido!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nome do Responsável"
          name="nomeResponsavel"
          className={styles.formItem}
          rules={[{ required: true, message: 'Por favor, insira o nome do responsável!' }]}
        >
          <Input />
        </Form.Item>


        <Form.Item className={styles.formItem} label="Informações Médicas (Arquivo)" name="informacoesMedicasFile">
          <Upload beforeUpload={() => false} customRequest={() => { } }>
            {customUploadButton}
          </Upload>
        </Form.Item>

        <Form.Item className={styles.formItem} label="Histórico Escolar (Arquivo)" name="historicoEscolarFile">
          <Upload beforeUpload={() => false} customRequest={() => { } }>
            {customUploadButton}
          </Upload>
        </Form.Item>

        <Form.Item className={styles.submitButton}>
          <Button type="primary" htmlType="submit">
            Enviar Matrícula
          </Button>
        </Form.Item>
      </Form>
    </div>
          <Footer></Footer>
    </>
  );
}

export default App;
