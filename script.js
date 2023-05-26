var textInput = document.querySelector("#Criptografar-Texto");

function criptografar() {

    var TextoCriptografado = textInput.value;

    var resultCripto = TextoCriptografado.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "obter").replace(/u/g, "ufat")
    .replace(/1/g, "!").replace(/2/g, "ols").replace(/3/g, "e").replace(/4/g, "Sm").replace(/5/g, "s").replace(/6/g, "9").replace(/7/g, "RMM")
    .replace(/8/g, "oo").replace(/9/g, "6");

    document.getElementById("saida").innerHTML = '<textarea class="text-result" id="TextoResultado">' + resultCripto + 
    '</textarea>'
}

function descriptografar() {

    var TextoCriptografado = textInput.value;

    var DescriptografarTexto = TextoCriptografado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/obter/g, "o").replace(/ufat/g, "u")
    .replace(/!/g, "1").replace(/ols/g, "2").replace(/e/g, "3").replace(/Sm/g, "4").replace(/s/g, "5").replace(/9/g, "6").replace(/RMM/g, "7")
    .replace(/oo/g, "8").replace(/6/g, "9");

    document.getElementById("saida").innerHTML ='<textarea class="text-result" id="TextoResultado">' + DescriptografarTexto + 
    '</textarea>'
}

function copiar() {

    var CopiarTexto = document.getElementById('TextoResultado');

    CopiarTexto.select();
    document.execCommand('copy');

    alert("Texto copiado com sucesso");
}