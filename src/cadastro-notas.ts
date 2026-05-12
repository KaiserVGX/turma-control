const tela = require("readline-sync")
const { titulo } = require("./ultis.ts")
const { alunos } = require("./data.ts")

let notas:string[] = []


function telaNotas() {

       titulo("CADASTRO DE NOTAS")

       const idAluno:number = tela.question("Informe código do aluno: ")
       
       const posicao:number = idAluno - 1
 
       if (posicao == undefined) {


       console.log("Aluno não encontrado")

       } else {

        const n1 = tela.question("Informe a primeira nota: ")
        const n2 = tela.question("Informe a segunda nota: ")
        const n3 = tela.question("Informe a terceira nota: ")

        notas.push(`${n1};${n2},${n3}`)
 }
}

export = { telaNotas }
