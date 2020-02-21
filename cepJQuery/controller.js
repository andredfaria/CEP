$(function(){
    // $.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/", function(resultado){
    //     resultado.forEach(element => {     
    //         $('#selectEstados').append($('<option>', {
    //             value: element.id,
    //             text: element.nome
    //         }));
    //     });
    // });
    $.get("https://servicodados.ibge.gov.br/api/v1/localidades/regioes", function(resultado){
        resultado.forEach(element => {     
            $('#selectRegioes').append($('<option>', {
                value: element.id,
                text: element.nome
            }));
        });
    });
});

function enviar(){
    var cep = $("#cep").val();
    $.get("https://viacep.com.br/ws/"+cep+"/json/", function(resultado){

    $("#localidade").val(resultado.localidade);
          $("#rua").val(resultado.logradouro);
          $("#bairro").val(resultado.bairro);
          $("#estado").val(resultado.uf);
    });
};


function regioes(){
    var macrorregiao = $('#selectRegioes').children("option:selected").val();

    $.get("https://servicodados.ibge.gov.br/api/v1/localidades/regioes/"+macrorregiao+"/estados", function(resultado){
        resultado.forEach(element => {    
            console.log(element);
            $('#selectEstados').append($('<option>', {
                value: element.id,
                text: element.nome
            }));
        });
    });
}

function estado(){
    var estado = $('#selectEstados').children("option:selected").val();

    $.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+estado+"/municipios", function(resultado){
        resultado.forEach(element => {    
            console.log(element);
            $('#selectMunicipios').append($('<option>', {
                value: element.id,
                text: element.nome
            }));
        });
    });
}

function municipio(){
    var municipio = $('#selectMunicipios').children("option:selected").val();

    $.get("https://servicodados.ibge.gov.br/api/v1/localidades/municipios/"+municipio+"/subdistritos", function(resultado){
        resultado.forEach(element => {     
            $('#selecSubdistritos').append($('<option>', {
                value: element.sigla,
                text: element.nome
            }));
        });
    });
}

