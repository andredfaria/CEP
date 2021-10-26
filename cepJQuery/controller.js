function map_interative_init() {
        
    google.charts.load('current', { 'packages': ['geochart'] });
    google.charts.setOnLoadCallback(drawRegionsMap);

    dicEstados = {
        "21" :"Maranhão",
        "22" :"Piauí",
        "23" :"Ceará",
        "24" :"Rio Grande do Norte",
        "25" :"Paraíba",
        "26" :"Pernambuco",
        "27" :"Alagoas",
        "28" :"Sergipe",
        "29" :"Bahia",
        '1': 'Acre',
        '3': 'Amapa',
        '4': 'Amazonas',
        '7': 'Distrito Federal',
        '32': 'Espirito Santo',
        '9': 'Goias',
        '11': 'Mato Grosso',
        '12': 'Mato Grosso do Sul',
        '31': 'Minas Gerais',
        '14': 'Para',
        '16': 'Parana',
        '33': 'Rio de Janeiro',
        '21': 'Rio Grande do Sul',
        '22': 'Rondonia',
        '23': 'Roraima',
        '24': 'Santa Catarina',
        '35': 'Sao Paulo',
        '27': 'Tocantins'
    }

    var ultimoEstadoSelecionado = '';


    function drawRegionsMap() {

        var data = google.visualization.arrayToDataTable([
            ["Country"],
            ["Stage"],
            ["City"],
            ["Bolivia"],
            ["Argentina"],
            ["Chine"],
            ["Equador"],
            ["Venezuela"],
            ["Uruguai"],
            ["Paraguai"],
            ["Guiana"],
            ["Suriname"],
            ["Peru"],
            ["Colombia"],
            ["Brazil"],
            ["Rondônia"],
            ["Acre"],
            ["Amazonas"],
            ["Roraima"],
            ["Pará"],
            ["Amapá"],
            ["Tocantins"],
            ["Maranhão"],
            ["Piauí"],
            ["Ceará"],
            ["Rio Grande do Norte"],
            ["Paraíba"],
            ["Pernambuco"],
            ["Alagoas"],
            ["Sergipe"],
            ["Bahia"],
            ["Minas Gerais"],
            ["Espírito Santo"],
            ["Rio de Janeiro"],
            ["São Paulo"],
            ["Paraná"],
            ["Santa Catarina"],
            ["Rio Grande do Sul"],
            ["Mato Grosso do Sul"],
            ["Mato Grosso"],
            ["Goiás"],
            ["Distrito Federal"]
        ]);

        var options = {
            region: 'BR',
            resolution: 'provinces',
            datalessRegionColor: 'white',
            defaultColor: '#F1F2F3',
            enableRegionInteractivity: true
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        function myClickHandler() {
            var selection = chart.getSelection();
            $("#selectEstados").val(selection[0].row);
            getState(selection[0].row)
        }

        google.visualization.events.addListener(chart, 'select', myClickHandler);

        chart.draw(data, options);
    }

}

$(function () {
    map_interative_init();

    $.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/", function(resultado){
        resultado.forEach(element => {
            $('#selectEstados').append($('<option>', {
                value: element.id,
                text: element.nome
            }));
        });
    });

    $.get("https://servicodados.ibge.gov.br/api/v1/localidades/regioes", function(resultado){
        resultado.forEach(element => {     
            $('#selectRegioes').append($('<option>', {
                value: element.id,
                text: element.nome
            }));
        });
    });

    $('#selectRegioes').val(null);
    $('#selectEstados').val(null);
});

function enviar(){
    var cep = $("#cep").val();
    $.get("https://viacep.com.br/ws/"+cep+"/json/", function(resultado){

    $("#localidade").val(resultado.localidade);
          $("#rua").val(resultado.logradouro);
          $("#bairro").val(resultado.bairro);
          $("#estado").val(resultado.uf);
          $("#texareaCEP").val(resultado.logradouro +", "+ resultado.bairro +", "+ resultado.uf);
    });
};


function regioes(){
    var macrorregiao = $('#selectRegioes').children("option:selected").val();

    $.get("https://servicodados.ibge.gov.br/api/v1/localidades/regioes/"+macrorregiao+"/estados", function(resultado){
        resultado.forEach(element => {    
            $('#selectEstados').append($('<option>', {
                value: element.id,
                text: element.nome
            }));
        });

        console.log($('#selectRegioes').children("option:selected"));
    });
}

function getState(id) {
    var estado = $('#selectEstados').children("option:selected").val();
    
    if (id)
        estado = id;

    $('#selectMunicipios').empty()
    $.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+estado+"/municipios", function(resultado){
        resultado.forEach(element => {
            $('#selectMunicipios').append($('<option>', {
                value: element.id,
                text: element.nome
            }));
        });
    });
}

function getCounty(){
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

function selecionaAno(){
    var select;
    select = $('#selectNome').val();
    console.log('teste');
}

function buscaNome(){
    var nome = $('#Nome').val();
    
    $.get("https://servicodados.ibge.gov.br/api/v2/censos/nomes/"+nome, function(resultado){
            console.log(resultado);
            var data;
            $("#SEXO").removeAttr( 'style' );
            
            resultado[0].res.map(function(a,i){
                $('#selectNome').append($('<option>', {
                    value: i,
                    text: a.periodo.replace('[', "").replace('[', "")  
                }));
                $('#qtdText').append($('<option>', {
                    value: i,
                    text: a.frequencia  
                }));
            });

        });
}