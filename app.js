// Fun��o para codifica��o da mensagem de texto inserida pelo usu�rio, com par�metros de entrada da mensagem (message) e deslocamento de cifragem (lag).
function cipher(message,lag) {

  // Condi��es para entrada de dados de maneira correta atrav�s do prompt. Verifica��o da exist�ncia de caracteres diferentes de letras e espa�os e de valor nulo. 
  while (message.search(/[^A-Za-z\s]/) !== -1 || message[0] === undefined) {
     var message = prompt("Digite uma mensagem para ser cifrada.\nObs.: A mensagem deve conter apenas letras(sem acentos) e espa�os");
  }

  // Declara��o de vari�veis para processamento da mensagem recebida corretamente.
  var charCodeNum = 0;
  var letterCiphered = 0;
  var cipheredMessage = [];

  // Verifica��o e processamento de codifica��o de cada um dos caracteres da mensagem de acordo com as condi��es caracter�sticas (letras min�sculas, mai�sculas e espa�os).
  for (var i = 0; i < message.length; i++) {
	charCodeNum = message[i].charCodeAt();
	if (charCodeNum >= 65 && charCodeNum <= 90) {
	  letterCiphered = (charCodeNum - 65 + lag) % 26 + 65;
      cipheredMessage.push(String.fromCharCode(letterCiphered));
    } else if (charCodeNum >= 97 && charCodeNum <= 122) {
	    letterCiphered = (charCodeNum - 97 + lag) % 26 + 97;
	    cipheredMessage.push(String.fromCharCode(letterCiphered));
    } else if (charCodeNum === 32) {
	    letterCiphered = 35;
	    cipheredMessage.push(String.fromCharCode(letterCiphered));
	}
  }
  // Valor final processado, caracteres reunidos para formar a mensagem criptografada enviada ao HTML
  return document.getElementById('messageCiphered').innerHTML = cipheredMessage.join('');
}
// Fun��o para decodifica��o da mensagem de texto criptografada pela fun��o anterior com par�metros de entrada da mensagem codificada (message) e deslocamento de cifragem (lag).
function decipher(message,lag) {

  // Declara��o de vari�veis para processamento da mensagem criptografada.
  var charCodeNum = 0;
  var letterDeciphered = 0;
  var decipheredMessage = [];

  // Verifica��o e processamento de descodifica��o de cada um dos caracteres da mensagem de acordo com as condi��es caracter�sticas (letras min�sculas, mai�sculas e espa�os).
  for (var i = 0; i < message.length; i++) {
	charCodeNum = message[i].charCodeAt();
	if (charCodeNum >= 65 && charCodeNum <= 90) {
	  letterDeciphered = (charCodeNum - 90 - lag) % 26 + 90;
	  decipheredMessage.push(String.fromCharCode(letterDeciphered));
	} else if (charCodeNum >= 97 && charCodeNum <= 122) {
	    letterDeciphered = (charCodeNum -122 - lag) % 26 + 122;
	    decipheredMessage.push(String.fromCharCode(letterDeciphered));
	} else if (charCodeNum === 35){
	    letterDeciphered = 32;
	    decipheredMessage.push(String.fromCharCode(letterDeciphered));
	}
  }
  // Valor final processado, caracteres reunidos para formar a mensagem descriptografada enviada ao HTML
  return document.getElementById('messageDeciphered').innerHTML = decipheredMessage.join('');
}

// Chamada das fun��es para codifica��o e decodifica�ao da mensagem de texto inserida pelo usu�rio, com par�metros de entrada da mensagem (userMessage) e deslocamento de cifragem (lagFactor).
var messageCiphered = cipher('0',33);
var messageDeciphered = decipher(messageCiphered,33);




