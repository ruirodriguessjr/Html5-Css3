var valor1 = "0";
var valor2 = "0";
var operacao;
var valAux = "false";

function add(num){
    if(valAux == "true"){
        document.calc.tela.value = "";
        valAux = "false";
    }
    if (num != "10"){
        document.calc.tela.value += num;
    }else{
        document.calc.tela.value += ".";
    }
}

function limpaTela(){
    document.calc.tela.value="";   
}

function soma(){
    valor1 = parseFloat(document.calc.tela.value);
    valor2 = parseFloat(valor2);
    valor2 = valor1 + valor2;
    operacao = "0";
    valAux = "true";
}
function subt(){
    valor1 = parseFloat(document.calc.tela.value);
    valor2 = parseFloat(valor2);
    valor2 = valor1-valor2;
    operacao = "1";
    valAux = "true";
}
function divs(){
    if (valor2 === '0') {
        document.calc.tela.value = 'Impossível dividir por Zero';
    } else {
        valor2 = document.calc.tela.value = parseFloat(valor1 / valor2);
    }
    operacao = "2";
    valAux = "true";
}
function multp(){
    valor1 = parseFloat(document.calc.tela.value);
    valor2 = parseFloat(valor2);
    if (valor2 == 0){
        valor2 = 1;
    }
    valor2 = valor1 * valor2;
    operacao = "3";
    valAux = "true";
}
function raiz(){
    valor1 = parseInt(document.calc.tela.value);
    aux = 1;
    result = 0;
    while(valor1 > 0){
        valor1 = valor1 - aux;
        result++;
        aux += 2;
    }
    if (valor1 == 0){
        document.calc.tela.value = result;
    }else{
        document.calc.tela.value = "Não existe raiz";
    }
}

function igual(){
    valor1 = parseFloat(document.calc.tela.value);
    if(valor2 != "0"){
        if (operacao == "0"){
            document.calc.tela.value = valor2 + valor1;
        }else if (operacao == "1"){
            document.calc.tela.value = valor2 - valor1;
        }else if (operacao == "3"){
            document.calc.tela.value = valor2 * valor1;
        }else if (operacao == "2"){
            if(valor1 != 0){
                document.calc.tela.value=valor2/valor1;
            }else{
                document.calc.tela.value="Erro, Divisão por 0";
            }
        }
    }
    valAux = "false";
    valor2="0";
}
