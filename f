let alunos:string[] = []
let notas:string[][] = []


function addAluno(nome:string, dataNascimento:string, telefone:string) {
  const id = alunos.length + 1
        alunos.push(`${id};${nome};${dataNascimento};${telefone}`)		
}

function listarAlunos(){
	for(let i:number = 0; i < alunos.length; i++) {
	    console.log(alunos[i])
	}
}


function addNotas(idAluno:string, nota1:number, nota2:number,nota3:number){}

export = { addAluno, listarAlunos, addNotas }
