
// Enumerações dos níveis de usuários
export enum Enum_Nv_usuarios {
    ADM = "Administrador",
    COORDENADOR = "Coordenador",
    PROFESSOR  = "Professor",
    PAI = "Pai",
    ALUNO  = "Aluno",
}
//  e turmas cientes no sistema
export enum Enum_Turma {
    EFII6 = "6° EFII",
    EFII7 = "7° EFII",
    EFII8 = "8° EFII",
    EFII9 = "9° EFII",
    EM1 = "1° EM",
    EM2 = "2° EM",
    EM3 = "3° EM",
}
// Unidades
export enum Enum_Unidade{
    I,
    II,
    III,
    IV
}
// 


// Interfaces de criação no sistema da plataforma:

// ##  usuários - pai/aluno/professor/administração
export interface Model_Usuario {
    nome: string,
    acesso: Enum_Nv_usuarios,
    foto: string,
    points: number,
    email: string,
}

// Especificações
export interface Model_Aluno extends Model_Usuario{
    turma: Enum_Turma,
    acesso: Enum_Nv_usuarios.ALUNO
    pai: Model_Pai
}
export interface Model_Pai extends Model_Usuario{
    acesso: Enum_Nv_usuarios.PAI
    filho: Model_Aluno
}
export interface Model_Professor extends Model_Usuario{
    acesso: Enum_Nv_usuarios.PROFESSOR
    turmas: Enum_Turma[]
}

// ## conteúdos programados ao público 
export interface Model_Publicacao {
    titulo: string,
    data: string,
    categories: string[],
    destaque: boolean,
    texto: string,
    capa: string,
    galeria: string[],
    comentarios: Model_Comentario []
}
// - extensões
// Galeria
export enum Enum_ContentTags{
    URGENTE = "URGENTE",
    COMUNICADO = "COMUNICADO",
    AULA = "AULA",
    ATIVIDADE = "ATIVIDADE",
    ADVERTENCIA = "ADVERTENCIA",
    ENQUETE = "ENQUETE",
    PROVAS = "PROVAS",
    POSTAGEM = "POSTAGEM",
}
export interface Model_Galeria {
    id: string,
    data: {
        titulo: string,
        desc: string,
        tags: [Enum_ContentTags],
        capa: string,
        link: string,
        imagens: string[]
    }
}
// Comentário
export interface Model_Comentario {
    texto : string,
    autor: Model_Usuario,
    data: string,
}
///// 

// ## chat entre usuários

// mensagem
export interface Model_Mensagem {
    texto: string,
    autor: Model_Usuario
    data: string
}

// Objeto geral do chat
export interface Model_Chat {
    mensagens: Model_Mensagem[],
    usuarios: Model_Usuario[]
}

// ## plataforma para serviços administrativos (fardamento, livro, pagamento)
export enum Model_ArtAdministrativo{
    Pagamento = "Pagamento",
    Farda = "Fardamento",
    Livro = "Livro"
}
export interface Model_Solicitacao {
    tipo: Model_ArtAdministrativo,
    data: Date,
    solicitante: Model_Pai
}

export interface Model_Anexo{
    arquivo: string,
    nome: string,
    data: Date
}
export interface Model_Pagamento{
    mes: Date,
    comprovante: Model_Anexo
}

export interface Model_Materiais{
    cliente: Model_Cliente,
    lista: string[]
}

export interface Model_Matricula{
    cliente: Model_Cliente
    data: Date,
    comprovante: Model_Anexo
}

export interface Model_Cliente{
    aluno: Model_Usuario,
    pai: Model_Usuario,
    matricula: Model_Matricula,
    mensalidades: Model_Pagamento[]
    materiais: Model_Materiais
}

// Notas, unidades e boletins
export interface Model_Turma{
    disciplinas: Model_Disciplina[]
    alunos: Model_Aluno[]
}

export interface Model_Disciplina{
    professor: Model_Professor,
    nome: string
    
}

export interface Model_Nota{
    disciplina: Model_Disciplina,
    aluno: Model_Aluno,
    unidade: Enum_Unidade
}

export interface Model_Boletim_Geral{
    notas: Model_Nota[]
    unidades: Enum_Unidade[]
}

export interface Model_Boletim_Aluno{
    notas: Model_Nota[]
}

// Notificações e funcionalidades menores da plataforma

export interface Model_Aula {
    disciplina: Model_Disciplina,
    horarios: Enum_Horarios[]; 
    turma: Enum_Turma
}
export enum Enum_Horarios {
    Segunda_Sete_10 = "Segunda-feira 07:10 - 08:00",
  Segunda_Oito_00 = "Segunda-feira 08:00 - 08:50",
  Segunda_Oito_50 = "Segunda-feira 08:50 - 09:40",
  Segunda_Dez_00 = "Segunda-feira 10:00 - 10:50",
  Segunda_Dez_50 = "Segunda-feira 10:50 - 11:40",
  Segunda_Onze_40 = "Segunda-feira 11:40 - 12:30",

  Terca_Sete_10 = "Terça-feira 07:10 - 08:00",
  Terca_Oito_00 = "Terça-feira 08:00 - 08:50",
  Terca_Oito_50 = "Terça-feira 08:50 - 09:40",
  Terca_Dez_00 = "Terça-feira 10:00 - 10:50",
  Terca_Dez_50 = "Terça-feira 10:50 - 11:40",
  Terca_Onze_40 = "Terça-feira 11:40 - 12:30",

  Quarta_Sete_10 = "Quarta-feira 07:10 - 08:00",
  Quarta_Oito_00 = "Quarta-feira 08:00 - 08:50",
  Quarta_Oito_50 = "Quarta-feira 08:50 - 09:40",
  Quarta_Dez_00 = "Quarta-feira 10:00 - 10:50",
  Quarta_Dez_50 = "Quarta-feira 10:50 - 11:40",
  Quarta_Onze_40 = "Quarta-feira 11:40 - 12:30",

  Quinta_Sete_10 = "Quinta-feira 07:10 - 08:00",
  Quinta_Oito_00 = "Quinta-feira 08:00 - 08:50",
  Quinta_Oito_50 = "Quinta-feira 08:50 - 09:40",
  Quinta_Dez_00 = "Quinta-feira 10:00 - 10:50",
  Quinta_Dez_50 = "Quinta-feira 10:50 - 11:40",
  Quinta_Onze_40 = "Quinta-feira 11:40 - 12:30",

  Sexta_Sete_10 = "Sexta-feira 07:10 - 08:00",
  Sexta_Oito_00 = "Sexta-feira 08:00 - 08:50",
  Sexta_Oito_50 = "Sexta-feira 08:50 - 09:40",
  Sexta_Dez_00 = "Sexta-feira 10:00 - 10:50",
  Sexta_Dez_50 = "Sexta-feira 10:50 - 11:40",
  Sexta_Onze_40 = "Sexta-feira 11:40 - 12:30",
  }

//   '2023-08-15': [
//     { id: 1, title: 'Evento 1', color: '#ff5722' },
//     { id: 2, title: 'Evento 2', color: '#3f51b5' },
//   ],
//   '2023-08-20': [
//     { id: 3, title: 'Evento 3', color: '#009688' },
//   ],
export type T_Calendario_Evento = {
    id:number, title:string, color:string 
}
export interface Model_CalendarioEvento {
    dia: string,
    eventos: T_Calendario_Evento[]
}