function enviar(){
    // alert($("#cep").val());
    var cep = $("#cep").val();
    $.get("https://viacep.com.br/ws/"+cep+"/json/", function(resultado){
          console.log(resultado);
          $("#mensagem").html(resultado);

          $("#localidade").val(resultado.localidade);
          $("#rua").val(resultado.logradouro);
          $("#bairro").val(resultado.bairro);
          $("#estado").val(resultado.uf);
    });
}