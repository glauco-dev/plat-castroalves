"use client";

import React, { useCallback } from "react";

import { User as FirebaseUser } from "firebase/auth";
import {
  Authenticator,
  FirebaseCMSApp,
  buildCollection
} from "../../../firecms";

import CustomCalendar from './custom_Calendar'
import "typeface-rubik";
import "@fontsource/ibm-plex-mono";
import { Enum_ContactType, Enum_ContentTags, Enum_Horarios, Enum_Nv_usuarios, Enum_Turma, Model_Aluno, Model_Anexo, Model_ArtAdministrativo, Model_Aula, Model_Boletim_Aluno, Model_Boletim_Geral, Model_CalendarioEvento, Model_Chat, Model_Comentario, Model_Galeria, Model_Materiais, Model_Matricula, Model_Mensagem, Model_Nota, Model_Pagamento, Model_Pai, Model_PartnerBrand, Model_Professor, Model_Publicacao, Model_Solicitacao, Model_Turma, Model_Usuario } from "./models";

const firebaseConfig = {

  apiKey: "AIzaSyCZZl4oNiMLzaiRL8z9Pz_IMV-zpYFzR0I",

  authDomain: "plat-castroalves.firebaseapp.com",

  projectId: "plat-castroalves",

  storageBucket: "plat-castroalves.appspot.com",

  messagingSenderId: "683062146216",

  appId: "1:683062146216:web:7343626f48c2e753217e9d"

};
const collections = [
  buildCollection<Model_Usuario>({
    path: "usuarios",
    name: "Usuários",
    properties: {
      nome: { dataType: "string", name: "Nome" },
      acesso: { dataType: "string", name: "Acesso" },
      foto: { dataType: "string", name: "Foto" },
      points: { dataType: "number", name: "Pontos" },
      email: { dataType: "string", name: "Email" },
    }
  }),
  buildCollection<Model_Aluno>({
    path: "alunos",
    name: "Alunos",
    properties: {
      nome: { dataType: "string", name: "Nome" },
      turma: { dataType: "string", name: "Turma" },
      acesso: { dataType: "string", name: "Acesso" },
      pai: { dataType: "map", name: "Pai" },
      foto: { dataType: "string", name: "Foto" },
      points: { dataType: "number", name: "Pontos" },
      email: { dataType: "string", name: "Email" },
    }
  }),
  buildCollection<Model_Pai>({
    path: "pais",
    name: "Pais",
    properties: {
      nome: { dataType: "string", name: "Nome" },
      acesso: { dataType: "string", name: "Acesso" },
      filho: { dataType: "map", name: "Filho" },
      foto: { dataType: "string", name: "Foto" },
      points: { dataType: "number", name: "Pontos" },
      email: { dataType: "string", name: "Email" },
    }
  }),
  buildCollection<Model_Professor>({
    path: "professores",
    name: "Professores",
    properties: {
      nome: { dataType: "string", name: "Nome" },
      acesso: { dataType: "string", name: "Acesso" },
      turmas: { dataType: "array", name: "Turmas", of: { dataType: "string" } },
      foto: { dataType: "string", name: "Foto" },
      points: { dataType: "number", name: "Pontos" },
      email: { dataType: "string", name: "Email" },
    }
  }),
  buildCollection<Model_Publicacao>({
    path: "publicacoes",
    name: "Publicações",
    properties: {
      titulo: { dataType: "string", name: "Título" },
      data: { dataType: "string", name: "Data" },
      categories: { dataType: "array", name: "Categorias", of: { dataType: "string" } },
      destaque: { dataType: "boolean", name: "Destaque" },
      texto: { dataType: "string", name: "Texto" },
      capa: { dataType: "string", name: "Capa" },
      galeria: { dataType: "array", name: "Imagens", of: { dataType: "string", storage: {
            storagePath: "images",
            acceptedFiles: ["image/*"],
            maxSize: 1024 * 1024,
            metadata: {
                cacheControl: "max-age=1000000"
            },
            fileName: (context) => {
                return context.file.name;
            },
            storeUrl: true
        } } },
      comentarios: { dataType: "array", name: "Comentários", of: { dataType: "string" } },
    }
  }),

  buildCollection<Model_PartnerBrand>({
    name: 'Marca Parceira', // Nome da coleção no Firestore
    path: 'marcas_parceiras', // Caminho da coleção no Firestore
    properties: {
      name: { dataType: 'string', name: 'Nome'},
      logo: {
        dataType: "string", name: "Logo" , storage: {
              storagePath: "images",
              acceptedFiles: ["image/*"],
              maxSize: 1024 * 1024,
              metadata: {
                  cacheControl: "max-age=1000000"
              },
              fileName: (context) => {
                  return context.file.name;
              },
              storeUrl: true
          },
      },
      description: { dataType: 'string', name: 'Descrição'},
      cliente: { dataType: 'map', name: 'Cliente', }, // Supondo que 'clientes' seja o nome da coleção dos clientes
      location: { dataType: 'map', name: 'Localização'},
      contact_info: {
        dataType: 'array',
        name: 'Informações de Contato',
        of:{
          dataType:"map",
          properties: {
            dataType: { dataType: 'string', name: 'Tipo', enumValues: Enum_ContactType },
            value: { dataType: 'string', name: 'Valor' },
          },
        }
      },
    },
  }),

  buildCollection<Model_Galeria>({
    path: "galerias",
    name: "Galerias",
    // @ts-ignore
    properties: {
      data: {
        dataType: "map",
        properties: {
          titulo: { dataType: "string", name: "Título" },
          desc: { dataType: "string", name: "Descrição" },
          capa: { dataType: "string", name: "Capa", storage: {
              storagePath: "images",
              acceptedFiles: ["image/*"],
              maxSize: 1024 * 1024,
              metadata: {
                  cacheControl: "max-age=1000000"
              },
              fileName: (context) => {
                  return context.file.name;
              },
              storeUrl: true
          }, },
          imagens: { dataType: "array", name: "Imagens", of: { dataType: "string", storage: {
            storagePath: "images",
            acceptedFiles: ["image/*"],
            maxSize: 1024 * 1024,
            metadata: {
                cacheControl: "max-age=1000000"
            },
            fileName: (context) => {
                return context.file.name;
            },
            storeUrl: true
        } } },
          link: { dataType: "string", name: "PermaLink" },
          tags: { dataType: "array", name: "Tags de Conteúdo", of: {dataType:"string", enumValues: Enum_ContentTags}}
        }
      },
    }
  }),
  buildCollection<Model_Comentario>({
    path: "comentarios",
    name: "Comentários",
    properties: {
      texto: { dataType: "string", name: "Texto" },
      autor: { dataType: "map", name: "Autor" },
      data: { dataType: "string", name: "Data" },
    }
  }),
  buildCollection<Model_Mensagem>({
    path: "mensagens",
    name: "Mensagens",
    properties: {
      texto: { dataType: "string", name: "Texto" },
      autor: { dataType: "map", name: "Autor" },
      data: { dataType: "string", name: "Data" },
    }
  }),
  buildCollection<Model_Solicitacao>({
    path: "solicitacoes",
    name: "Solicitações",
    properties: {
      tipo: { dataType: "string", name: "Tipo" },
      data: { dataType: "date", name: "Data" },
      solicitante: { dataType: "map", name: "Solicitante" },
    }
  }),
  buildCollection<Model_Anexo>({
    path: "anexos",
    name: "Anexos",
    properties: {
      arquivo: { dataType: "string", name: "Arquivo" },
      nome: { dataType: "string", name: "Nome" },
      data: { dataType: "date", name: "Data" },
    }
  }),
  buildCollection<Model_Pagamento>({
    path: "pagamentos",
    name: "Pagamentos",
    properties: {
      mes: { dataType: "date", name: "Mês" },
      comprovante: { dataType: "map", name: "Comprovante" },
    }
  }),
  buildCollection<Model_Materiais>({
    path: "materiais",
    name: "Materiais",
    properties: {
      cliente: { dataType: "map", name: "Cliente" },
      lista: { dataType: "array", name: "Lista", of: { dataType: "string" } },
    }
  }),
  buildCollection<Model_Matricula>({
    path: "matriculas",
    name: "Matrículas",
    properties: {
      cliente: { dataType: "map", name: "Cliente" },
      data: { dataType: "date", name: "Data" },
      comprovante: { dataType: "map", name: "Comprovante" },
    }
  }),
  buildCollection<Model_Turma>({
    path: "turmas",
    name: "Turmas",
    properties: {
      disciplinas: { dataType: "array", name: "Disciplinas", of: { dataType: "string" } },
      alunos: { dataType: "array", name: "Alunos", of: { dataType: "string" } },
    }
  }),
  buildCollection<Model_Nota>({
    path: "notas",
    name: "Notas",
    properties: {
      disciplina: { dataType: "map", name: "Disciplina" },
      aluno: { dataType: "map", name: "Aluno" },
      unidade: { dataType: "number", name: "Unidade" },
    }
  }),
  buildCollection<Model_Boletim_Geral>({
    path: "boletins_gerais",
    name: "Boletins Gerais",
    properties: {
      notas: { dataType: "array", name: "Notas", of: { dataType: "string" } },
      unidades: { dataType: "array", name: "Unidades", of: { dataType: "string" } },
    }
  }),
  buildCollection<Model_Boletim_Aluno>({
    path: "boletins_alunos",
    name: "Boletins Alunos",
    properties: {
      notas: { dataType: "array", name: "Notas", of: { dataType: "string" } },
    }
  }),
  buildCollection<Model_Aula>({
    path: "aulas",
    name: "Aulas",
    properties: {
      disciplina: { dataType: "map", name: "Disciplina" },
      horarios: { dataType: "array", name: "Horários", of: { dataType: "string" } },
      turma: { dataType: "string", name: "Turma" },
    }
  }),
  buildCollection<Model_CalendarioEvento>({
    name: "calendario_eventos", // Nome da coleção no Firestore
    path: "calendario_eventos", // Caminho para a coleção
    properties: {
      dia: {
        name: "Dia",
        dataType: "string",
        description: "Data do evento",
        validation: { required: true }
      },
      eventos: {
        name: "Eventos",
        dataType: "array",
        of: {
          dataType: "array",
          Field: CustomCalendar,
          oneOf: {
            properties: {

              id: {
                name: "ID",
                dataType: "string",
                description: "ID do evento"
              },
              title: {
                name: "Título",
                dataType: "string",
                description: "Título do evento"
              },
              color: {
                name: "Cor",
                dataType: "string",
                description: "Cor do evento"
              }
            }
          }
        }
      }
    }
  })
];


// TODO: model do Calendário anual

export default function CMS() {

  const myAuthenticator: Authenticator<FirebaseUser> = useCallback(async ({
    user,
    authController
  }) => {
    const sampleUserRoles = await Promise.resolve(["admin"]);
    authController.setExtra(sampleUserRoles);

    return true;
  }, []);

  return <FirebaseCMSApp
    name={"Castro alves"}
    basePath={"/cms"}
    authentication={myAuthenticator}
    collections={collections}
    firebaseConfig={firebaseConfig}
  />;
}