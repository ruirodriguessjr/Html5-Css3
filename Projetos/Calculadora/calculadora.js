var aux = "false";
var acumulador = "0";
var opPendente = "";


function limpa(){
    document.getElementById('display').value = '';
}

//Abaixo estamos adcionando os valores de cada botão ao parametro Num
function preencher(num) {
    if (aux) {
        document.getElementById('display').value = num;
        aux = false;
       }
    else {
        if (document.getElementById('display').value == "0")
            document.getElementById('display').value = num;
        else
            document.getElementById('display').value += num;
       }
}
        
//Valores de exibição quando apertado o botão igual
function calcular(Op) {
    if (document.getElementById('display').value == ""){
        alert("O Campo esta vázio digite um valor");
        document.getElementById('display').value ="0"; }
    else{
        if (aux && opPendente != "=");
        else	{
            aux = true;
            if ( '+' == opPendente )
                acumulador += parseFloat(document.getElementById('display').value);
                else if ( '-' == opPendente )
                acumulador -= parseFloat(document.getElementById('display').value);
                else if ( '/' == opPendente )
                acumulador /= parseFloat(document.getElementById('display').value);
                else if ( '*' == opPendente )
                acumulador *= parseFloat(document.getElementById('display').value);
            else
                acumulador = parseFloat(document.getElementById('display').value);
                document.getElementById('display').value = acumulador;
                opPendente = Op;
        }
       }
}

function raiz(){
    num = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.sqrt(num);
}

//Atribuindo o ponto( . ) aos valores numéricos
function ponto() {
    var valPresente = document.getElementById('display').value;
    if (aux) {
        valPresente = "0.";
        aux = false;
       }
    else {
    if (valPresente.indexOf(".") == -1)
        valPresente += ".";
       }
       document.getElementById('display').value = valPresente;
}


