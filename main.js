const form = document.getElementById('form-Atividade');
const imgAprovado = '<img src="./aprovado.png" alt="emoje festejando" />';
const imgReprovado = '<img src="./reprovado.png" alt="emoje triste"/>';
const Atividades = [];
const notas =[];
const spanAprovado = '<span class=" resultado Aprovado ">Aprovado</span>';
const spanReprovado = '<span class=" resultado Reprovado ">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima:"));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-Atividade');
    const inputNotaAtividade  = document.getElementById('nota-Atividade');

    if(Atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value}, ja foi adicionada`);
    } else {
        Atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}<td/>`;
        linha += `<td>${inputNotaAtividade.value}<td/>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}<td/>`;
        linha += '<tr/>';
    
        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; 
}

function atualizaMediaFinal()  {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML.toFixed(2) = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let  somaDasNotas = 0;

    for (let i = 0; i < notas.length;  i++ ) {
        somaDasNotas +=  notas[i];
    }

    return somaDasNotas / notas.length;
}