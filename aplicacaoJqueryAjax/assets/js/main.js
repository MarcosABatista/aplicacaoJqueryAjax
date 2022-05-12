function consultaCep() {
  let cep = document.getElementById('cep').value
  let url = ' https://viacep.com.br/ws/' + cep + '/json/'
  $.ajax({
    url: url,
    type: 'GET',
    success: function (response) {
      console.log(response.localidade.uf)
      $('#localidade').html(response.localidade + '-')
      $('#uf').html(response.uf)
    }
  })
}

function limpar() {
  $('#localidade').html('')
  $('#uf').html('')
  $('#cep').html((cep.value = ''))
}
