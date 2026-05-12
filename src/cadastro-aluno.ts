const tela = require("readline-sync")
const { titulo } = require("./ultis.ts")
const { addAluno, listarAlunos } = require('./data.ts')


let alunos:string[] = []
let nascimentos:string[] = []
let contatos:string[] = []

function telaCadastro() {} {
    const nomeAluno = tela.question("Nome do aluno: ")
    const dataNascimento = tela.question("Data Nascimento: ")
    const contato:string = tela.question("Número de celular: ")
       addAluno(nomeAluno, dataNascimento, contato)       

    const aluno = `${nomeAluno};${dataNascimento};${contato}`
    alunos.push(aluno)
           addAluno(nomeAluno, dataNascimento,contato)

}
    //responsavel em carregar os alunos cadastrados
    function telaListaAlunos() {
        

	for(let i = 0; i <= alunos. length; i++) {
	    console.log(`${i + 1}. ${alunos[i]}`)
    	    
	}

	listarAlunos()
}



export = { telaCadastro, telaListaAlunos }
