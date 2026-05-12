<<<<<<< HEAD
const tela = require("readline-sync")
const cadastro = require("./src/cadastro-aluno.ts")
const { telaNotas } = require("./src/cadastro-notas.ts")


function main() {
  let loop = true

  while(loop) {
    console.log("1 - Cadastrar aluno\n2 - Adicionar Notas\n3 - Listar\n0 - Sair")
   const opcao:string = tela.question("Deseja continuar? ")

    switch(opcao) {
      case "0":
        loop = false //para parar o loop
      break
      case "1":
	   cadastro.telaCadastro()   
      break
      case "2":
           telaNotas()
      break
      case"3":
          cadastro.telaListaAlunos()
      break
	  default: // caso não coloque a opção valida cai aqui
        console.log("Opção invalida!")  
      break
    }      
  }
}

main()
=======
console.log('rodando')
>>>>>>> 97a1c3644a7e49105884e6d16a259db21d908797
