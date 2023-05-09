// Função de escopo Global que converte o valor inserido no input para a moeda selecionada no select
function convertValue() {

    // Variaveis de escopo da função
    var value = document.querySelector('.converter_input').value,
        moeda = document.querySelector('.converter_moeda').value,
        prefix;

    // Interuptor alternando valores de variaveis decorrente da moeda selecionada
    switch(moeda) {
        case 'USD':
            secondValue = 0.20;
            prefix = '$';
            break;
        case 'JPY':
            secondValue = 27.15;
            prefix = '¥';
            break; 
        case 'EUR':
            secondValue = 0.18;
            prefix = '$';
            break;

        // Se nenhuma for selecionada, não realizar nenhuma ação
        default: break;
    }

    // Multipicar o valor inserido pelo valor monetario da moeda escolhida
    value = value*secondValue;

    // Formata o valor para adicionar o prefixo da moeda selecionada junto com seu valor final
    value = prefix+' '+value.toFixed(2)+' '+moeda;

    // Inserir o valor na div de resultado para vizualização do usuario
    document.querySelector('.converter_result h1').innerHTML = value;

    // Se o campo de valor a ser convertido não estiver vazio...
    if (document.querySelector('.converter_input').value) {

        // Remove a classe que esconde a div responsavel pela vizualização da resposta pelo usuario
        document.querySelector('.converter_result').classList.remove('hide');

    // Caso esteja vazia, ou não exista
    } else {

        // Adiciona a classe que esconde a div responsavel pela vizualização da resposta pelo usuario
        document.querySelector('.converter_result').classList.add('hide');
    }
}

// Assim que a estrutura DOM HTML estiver concluida...
document.addEventListener('DOMContentLoaded', function() {

    // Converte o valor do input, caso exista
    convertValue();

    // Ao pressionar uma tecla com o input selecionado...
    document.querySelector('.converter_input').addEventListener('keydown', function(e) {
        // var e = o evento de pressionar uma tecla com o input selecionado
        // console.log(e); Seria interessante fazer ele vizualizar o que o evento retorna!

        // Previne que o comportamento padrão ocorra, no caso, de inserir um caracter no input
        e.preventDefault();

        // Se a tecla precionada pode ser convertida para um inteiro(integer)...
        if (parseInt(e.key)) {

            // Adicione o valor da tecla pressionada, agora em formato int
            // += adiciona o valor sem apagar o valor existente antes da adição atual
            e.target.value += parseInt(e.key);
        }

        // Se o ID da tecla pressionada for 8 (Backspace)...
        if (e.keyCode == 8) {

            // Remove o ultimo numero do valor atual no input
            // Pesquisar funcionamento do slice()
            e.target.value = e.target.value.slice(0,-1);
        }

        // Se o ID da tecla pressionada for 190(ponto) OU 188(virgula) OU 48 (numero 0)...
        // Necessário adicionar o 0(zero) pois parseInt interpreta 0(zero) como falso
        if (
            e.keyCode == 190 || 
            e.keyCode == 188 || 
            e.keyCode == 48
        ) {

            // Adicione o valor da tecla pressionada
            e.target.value += e.key;
        }

        // Converte o valor inserido no input para a moeda escolhida no select
        convertValue();
    })

    // Quando o valor do select de moeda for alterado...
    document.querySelector('.converter_moeda').addEventListener('change', function(e) {
        // var e = o evento de pressionar uma tecla com o input selecionado
        // console.log(e); Seria interessante fazer ele vizualizar o que o evento retorna!

        // Converte o valor inserido no input para a moeda escolhida no select
        convertValue();
    })
})