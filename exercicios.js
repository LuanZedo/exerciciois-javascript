1 /* 
function calcular(a, b) {
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
}
calcular(2, 4) 
*/



2 /* 
function classificar(a, b, c) {
    if (a == b && b == c) {
        console.log(`eh um triangulo EQUIILATERO`)
    }
    else if (a == b || a == c || b == c) {
        console.log(`eh um triangulo ISOSCELES`)
    }
    else {
        console.log(`eh um triangulo ESCALENO`)
    }
}
classificar(5, 2, 5) 
*/



3 /* 
function potenciacao(base , expoente) {
    return base ** expoente
}
console.log (potenciacao(2, 10)) 
*/



4 /* 
function arredondar(num) {
    return `R$` + num.toFixed(2).toString().replace(`.` , `,`)
}
console.log(arredondar(0.1 + 0.2)) 
*/



5 /* 
function jurosSimples(c, i, t) {
    return c * i * t + c
}
function jurosCompostos(c, i, t) {
    return (c * (1 + i) ** t)
}
console.log(jurosSimples(1200, 0.10, 10))
console.log(jurosCompostos(1200, 0.10, 10)) 
*/ 



6 /* 
function bhaskara(a, b, c) {
    let delta = b**2 - 4 * a * c

    if (delta < 0) {
        return `delta é negativo`
    }
    else {
        let res1 = (-b + Math.sqrt(delta)) / (2 * a)
        let res2 = (-b - Math.sqrt(delta)) / (2 * a)

        return (`os resultados são ${res1} e ${res2}`)
    }
}
console.log(bhaskara(3, -5, 12))
console.log(bhaskara(5, -2, -3)) 
*/



7 /*
function analisarDesempenho(pontuacoes) {
    // Converte a string de pontuações em um array de números
    let pontos = pontuacoes.split(" ").map(Number)

    let recordesBatidos = 0
    let piorJogo = 0

    let melhorPontuacao = pontos[0]
    let piorPontuacao = pontos[0]

    for (let i = 1; i < pontos.length; i++) {
        if (pontos[i] > melhorPontuacao) {
            melhorPontuacao = pontos[i]
            recordesBatidos++
        }
        if (pontos[i] < piorPontuacao) {
            piorPontuacao = pontos[i]
            piorJogo = i + 1
        }
    }
    return [recordesBatidos, piorJogo]
}
console.log(analisarDesempenho("10 20 20 8 25 3 0 30 1"))
console.log(analisarDesempenho("7 5 5 12 13 30 22 45 3")) 
*/



8 /* 
function anoBissexto(ano) {
    if (ano % 4 == 0) {
        console.log(`${ano} eh um ano bissexto`)
        return true
    }
    if (ano % 4 !== 0) {
        console.log(`${ano} nao eh um ano bissexto`)
        return false
    }
}
console.log(anoBissexto(2024))
console.log(anoBissexto(2023)) 
*/



9 /* 
function fatorial(num) {
    let resultado = num

    for (let i = 1; i < num; i++) {
        resultado = resultado * i
    }
    return resultado
}
console.log(fatorial(7)) 
*/



10 /*
function compraAutomovel(automovel) {
    switch (automovel) {
        case `hatch`:
            console.log(`compra efetuada com sucesso`)
            break

        case `sedan`:
        case `motocicleta`:
        case `caminhonete`:
            console.log(`tem certeza que nao prefere outro modelo?`)
            break

        default:
            console.log(`nao trabalhamos com esse automovel aqui`)
            break
    }
}
console.log(compraAutomovel(`hatch`))
console.log(compraAutomovel(`motociicleta`))
console.log(compraAutomovel(`uno`)) 
*/



11 /*
function calcularAumento(salario, plano) {
    let aumento;
    
    switch (plano) {
        case 'a':
            aumento = salario * 0.10
            break;
        case 'b':
            aumento = salario * 0.15
            break;
        case 'c':
            aumento = salario * 0.20
            break;
        default:
            return `Plano inválido`
    }
    return salario + aumento;
}
console.log(calcularAumento(3000, `b`))
*/



12 /* 
function preco(codigo, qntd) {
    switch (codigo) {
        case 100:
            return 3 * qntd
        case 200:
            return 4 * qntd
        case 300:
            return 5.5 * qntd
        case 400:
            return 7.5 * qntd
        case 500:
            return 3.5 * qntd
        case 600:
            return 2.8 * qntd
        default:
            return `produto nao existente`
    }
}
console.log(preco(200, 7))
console.log(preco(800, 3)) 
*/



13 /* 
function calcularCedulas(valor) {
    const cedulas = [100, 50, 10, 5, 1];
    let resultado = ""

    for (let cedula of cedulas) {
        let quantidade = Math.floor(valor / cedula)
        if (quantidade > 0) {
            resultado += `${quantidade} nota(s) de R$ ${cedula}.\n`
            valor -= quantidade * cedula
        }
    }
    return resultado
}
const valor = parseInt(prompt("Informe o valor: "), 10);
console.log(calcularCedulas(valor)) 
*/



14 /*
const valorPlano = 100
function calcularPlano(idade) {
    if (idade < 10)  {
        return valorPlano + 80
    }
    else if (idade >= 10 && idade <= 30) {
        return valorPlano + 50
    }
    else if (idade > 30 && idade <= 60) {
        return valorPlano + 95
    }
    else if (idade > 60) {
        return valorPlano + 130
    }
}
console.log(calcularPlano(35))
console.log(calcularPlano(98))
*/



15 /*
function calcularImpares(inicio = 0, fim = 100) {

    let numImpares = []

    for (let i = inicio; i < fim; i++) {
        if (i % 2 != 0) {
            numImpares.push(i)
        }
    }
    return numImpares
}
console.log(calcularImpares(50, 100))
*/



16 /*
let taxa = 0.05
function calcularAnuidade(mes, valor) {
    let tempo = mes - 1
    let valorPagar = (valor * (1 + taxa) ** tempo) - valor
    return valorPagar
}
console.log(calcularAnuidade(7, 500))
*/



17 /*
function contarIntervalo(vetor) {
    let dentroDoIntervalo = 0;
    let foraDoIntervalo = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentroDoIntervalo++;
        } else {
            foraDoIntervalo++;
        }
    }
    console.log(`Números dentro do intervalo [10, 20]: ${dentroDoIntervalo}`);
    console.log(`Números fora do intervalo: ${foraDoIntervalo}`);
}
contarIntervalo([5, 10, 15, 20, 25, 8, 13, 21, 19]); 
*/



18 /*
function atribuirNota(notas) {
    let notasAtribuidas = []
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 5) {
            notasAtribuidas.push(`D`)
        }
        else if (notas[i] >= 5 && notas[i] < 7) {
            notasAtribuidas.push(`C`)
        }
        else if (notas[i] >= 7 && notas[i] < 9) {
            notasAtribuidas.push(`B`)
        }
        else if (notas[i] >= 9 && notas[i] <= 10) {
            notasAtribuidas.push(`A`)
        }
        else {
            notasAtribuidas.push(`invalida`)
        }
    }
    console.log(notasAtribuidas)
}
atribuirNota([1, 4, 6, 10, 154, 0, 7, 8, 2])
*/



19 /*
function repetir(num, vezes) {
    let numRepetido = []
    for (let i = 0; i < vezes; i++) {
        numRepetido.push(num)
    }
    return numRepetido
}
console.log(repetir(7, 10))
*/



20 /*
function removerPropriedade(obj, propriedade) {
    let novoObjeto = { ...obj }

    delete novoObjeto[propriedade]

    return novoObjeto
}

const pessoa = {
    nome: 'jose',
    idade: 25,
    cidade: 'Maceio'
}

const resultado = removerPropriedade(pessoa, 'idade')

console.log(pessoa)
console.log(resultado)
*/



21 /*
function filtrarNumeros(array) {
    return array.filter(elemento => typeof elemento === 'number');
}

const misturado = [10, 'Robert', true, 12, null, 3.14, undefined, 0, `pindamonhagaba`]

const apenasNumeros = filtrarNumeros(misturado);

console.log(apenasNumeros)
*/



22 /*
function objetoParaArrays(obj) {
    return Object.entries(obj)
}

const pessoa = {
    nome: 'rogerio',
    idade: 25,
    cidade: 'xique-xique'
}
console.log(objetoParaArrays(pessoa))
*/



23 /*
function arrayNumIndicesPares(numeros) {
    let numIndicesPares = []
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0 && i % 2 == 0) {
            numIndicesPares.push(numeros[i])
        }
    }
    return numIndicesPares
}
console.log(arrayNumIndicesPares([2, 10, 12, 50, 55, 53, 90, 12, 11, 40, 22]))
*/



24 /*
function calcularDespesas(produtos) {
    return produtos.reduce((total, produto) => total + produto.preco, 0);
  }
  
  const produtos = [
    { nome: 'queijo', categoria: 'alimentos', preco: 50 },
    { nome: 'desodorante', categoria: 'higiene', preco: 30 },
    { nome: 'caderno', categoria: 'estudos', preco: 20 },
    { nome: 'arroz', categoria: 'alimentos', preco: 45 }
  ]
  console.log(calcularDespesas(produtos))
*/



25 /*
function sortear(num) {
    let numSorteado = Math.ceil(Math.random()*10)
    if (num == numSorteado) {
        return `parabens! o numero sorteado foi ${numSorteado}`
    }
    else {
        return `que pena! o numero sorteado era ${numSorteado}`
    }
}
console.log(sortear(1))
*/



26 /*
function contPalavras(frase) {
    let arrayPalavras = frase.split(` `)
    return arrayPalavras.length
}
let fraseBonita = `um belo dia o sol nasceu e se pos`
console.log(contPalavras(fraseBonita))
*/

27 /*
function inverter(obj) {
    return Object.entries(obj).reduce((acc, [chave, valor]) => {
      acc[valor] = chave
      return acc
    }, {});
  }
  const objeto = {a: 1, b: 2, c: 3, d: 4}
  console.log(inverter(objeto))
*/



28 /*
function melhorMedia(alunos) {
    let melhorAluno = ''
    let melhorMedia = 0
    for (let [nome, notas] of Object.entries(alunos)) {
        let mediaAluno = notas.reduce((total, valorAtual) => total + valorAtual, 0) / notas.length
        if (mediaAluno > melhorMedia) {
            melhorMedia = mediaAluno
            melhorAluno = nome
        }
    }
    return {nome: melhorAluno, media: melhorMedia}
}
const estudantes = {
    joao: [8, 4, 2, 5, 3],
    carla: [10, 9, 3, 2, 7],
    dalva: [10, 9, 10, 9, 8]
}
console.log(melhorMedia(estudantes))
*/



29 /*
function filtrarEmEstoque(produtos) {
    return produtos.filter(produto => produto.emEstoque)
}
const listaProdutos = [
    { nome: `Macarrao`, preco: 10.99, emEstoque: true },
    { nome: `Banana`, preco: 25.50, emEstoque: false },
    { nome: `Arroz`, preco: 7.80, emEstoque: true },
    { nome: `caminhao`, preco: 15.30, emEstoque: false },
    { nome: `feijao`, preco: 12.00, emEstoque: true }
]
console.log(filtrarEmEstoque(listaProdutos))
*/