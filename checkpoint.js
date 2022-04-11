 //passo 1
function Alunos(nome, quantidadedeFaltas, notas) {
        this.nome = nome;
        this.quantidadedeFaltas = quantidadedeFaltas;
        this.notas = notas;
    
    //passo 2
    this.faltas = function() {
        return (this.quantidadedeFaltas += 1);
    };

    this.calcularMedia = function() {
        let media = this.notas.reduce((nota, i) => {
            return nota + i;
        });
        return media / this.notas.length;
    }
}

const joao = new Alunos("Joao", 0, [9, 8, 7, 4])
const paulo = new Alunos("Paulo", 0, [10, 6, 8, 5])

console.log(joao.calcularMedia())



//passo 3
let curso = {
    nomedoCurso: "Microeconomia",
    notadeAprovacao: 5,
    faltaMaxima: 4,
    listadeEstudantes: [joao, paulo],
    //passo 4
    adicionarAluno: function(nome, quantidadedeFaltas, notas) {
        let aluno = new Alunos(nome, quantidadedeFaltas, notas);
        this.listadeEstudantes.push(aluno);
    },

    verificarSeAprovado: function(aluno) {
        console.log(aluno)
        console.log(aluno.calcularMedia)
        if(aluno.calcularMedia>= this.notadeAprovacao && aluno.quantidadedeFaltas < this.faltaMaxima) {
            return true
        }   else if(aluno.calcularMedia >= (this.notadeAprovacao*1.1) && aluno.quantidadedeFaltas == this.faltaMaxima){
            return true
        }   else {
            return false
        }
    },

  listarAlunosAprovados: function () {
      var listadeResultados = [];
    for (let i = 0; i < this.listadeEstudantes.length; i++) {
      let aluno = this.listadeEstudantes[i].nome;
      listadeResultados.push(aluno);
      listadeResultados.push(this.verificarSeAprovado(this.listadeEstudantes[i]));
    }
    return listadeResultados
  }
};


curso.adicionarAluno("Gustavo", 2, [2, 5, 3, 6]);
curso.adicionarAluno("Roberto", 4, [8, 7, 9, 10]);
curso.adicionarAluno("Milena", 1, [10, 9, 5, 8]);
curso.adicionarAluno("Arthur", 6, [10, 9, 10, 10]);
console.log(curso.verificarSeAprovado("Gustavo"));
console.log(curso.verificarSeAprovado("Roberto"));
console.log(curso.verificarSeAprovado("Milena"));
