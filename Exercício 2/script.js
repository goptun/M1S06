function ordenarMedia(a, b) {
  return b.media - a.media;
}

let alunos = [
  { nome: "João", nota1: 7, nota2: 8 },
  { nome: "Maria", nota1: 4, nota2: 5 },
  { nome: "José", nota1: 6, nota2: 7 },
  { nome: "Pedro", nota1: 8, nota2: 9 },
  { nome: "Ana", nota1: 9, nota2: 10 },
];

let mediaAlunos = alunos.map((aluno) => {
  let media = (aluno.nota1 + aluno.nota2) / 2;
  aluno.media = media;
  return aluno;
});

mediaAlunos.sort(ordenarMedia);

mediaAlunos.forEach((aluno) => {
  console.log(`${aluno.nome} - ${aluno.media}`);
});
