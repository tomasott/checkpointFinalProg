
class Alunos {
    //passo 1
    constructor(nome, quantidadedeFaltas, notas) {
        this.nome = nome;
        this.quantidadedeFaltas = quantidadedeFaltas;
        this.notas = notas;
    }
    //passo 2
    faltas() {
        return (this.quantidadedeFaltas += 1);
    }

    calcularMedia() {
        let media = this.notas.reduce((nota, i) => {
            return nota + i;
        });
        return media / this.notas.length;
    }
}

const joao = new Alunos ("Joao",0,[9,8,7,4])
const paulo = new Alunos ("Paulo",0,[10,6,8,5])

console.log(joao)
console.log(paulo)
console.log(joao.calcularMedia())

//passo 3
let curso = {
    nomedoCurso: "Microeconomia",
    notadeAprovacao: 5,
    faltaMaxima: 4,
    listadeEstudantes: [joao,paulo],
    listadeResultados: [],
    //passo 4
    adicionarAluno(nome, quantidadedeFaltas, notas) {
        let aluno = new Alunos(nome, quantidadedeFaltas, notas);
        this.listadeEstudantes.push(aluno);
    }
}