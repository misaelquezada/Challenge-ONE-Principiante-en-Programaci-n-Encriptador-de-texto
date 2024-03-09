document.getElementById('accion-btn').addEventListener('click', function() {
    var texto = document.getElementById('texto').value;
    var accion = document.querySelector('input[name="accion"]:checked').value;
    var resultado = '';
  
    if (accion === 'encriptar') {
      resultado = encriptarTexto(texto);
    } else if (accion === 'desencriptar') {
      resultado = desencriptarTexto(texto);
    }
  
    document.getElementById('resultado').innerText = resultado;
  });
  
  document.getElementById('copiar-btn').addEventListener('click', function() {
    var resultado = document.getElementById('resultado').innerText;
    copiarTexto(resultado);
  });
  
  document.getElementById('pegar-btn').addEventListener('click', function() {
    pegarTexto();
  });
  
  function encriptarTexto(texto) {
    return texto.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
  }
  
  function desencriptarTexto(texto) {
    return texto.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
  }
  
  function copiarTexto(texto) {
    var tempInput = document.createElement("textarea");
    tempInput.value = texto;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  function pegarTexto() {
    var tempInput = document.createElement("textarea");
    document.body.appendChild(tempInput);
    tempInput.focus();
    document.execCommand("paste");
    var textoPegado = tempInput.value;
    document.body.removeChild(tempInput);
    document.getElementById('texto').value = textoPegado;
  }
  