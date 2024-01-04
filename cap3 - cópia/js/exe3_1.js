function calcularMedia() {
    // cria referencia aos elementos da pagina
    var inNome = document.getElementById('inNome');
    var inPrimeiraNota = document.getElementById('inPrimeiraNota');
    var inSegundaNota = document.getElementById('inSegundaNota');
    var outMedia = document.getElementById('outMedia');
    var outResultado = document.getElementById('outResultado');
    // obtem o conteudo nos campos de entrada
    var nome = (inNome.value);
    var primeiraNota = Number(inPrimeiraNota.value);
    var segundaNota = Number(inSegundaNota.value);
    // calcula o algoritimo
    var resultadoMedia = (primeiraNota + segundaNota) / 2;
    // apresenta a media (altera o coneudo do elemento outMedia)
    outMedia.textContent = 'Média das Notas: ' + resultadoMedia.toFixed(2);
    // cria a condicao
    if (resultadoMedia >= 7) {
        // altera o texto e estilo da cor do elemento outResultado
        outResultado.textContent = 'Parabéns ' + nome + '! Você foi Aprovado(a)';
        
        outResultado.style.color = 'blue';
    } else {
        outResultado.textContent = 'Ops ' + nome + '... Você foi reprovado(a)';
        outResultado.style.color = 'red';
    }
}
// cria a referencia ao elemento btSituacao(botao)
var btSituacao = document.getElementById('btSituacao');
// registra um evento associado ao botao, para carregar uma funcao
btSituacao.addEventListener('click', calcularMedia);