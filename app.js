// Função para codificação da mensagem de texto inserida pelo usuário, com parâmetros de entrada da mensagem (message) e deslocamento de cifragem (lag).
function cipher(message,lag) {

  // Condições para entrada de dados de maneira correta através do prompt. Verificação da existência de caracteres diferentes de letras e espaços e de valor nulo. 
  while (message.search(/[^A-Za-z\s]/) !== -1 || message[0] === undefined) {
    var message = prompt("Digite uma mensagem para ser cifrada.\nObs.: A mensagem deve conter apenas letras(sem acentos) e espaços");
  }

  // Declaração de variáveis para processamento da mensagem recebida corretamente.
  var charCodeNum = 0;
  var letterCiphered = 0;
  var cipheredMessage = [];

  // Verificação e processamento de codificação de cada um dos caracteres da mensagem de acordo com as condições características (letras minúsculas, maiúsculas e espaços).
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
// Função para decodificação da mensagem de texto criptografada pela função anterior com parâmetros de entrada da mensagem codificada (message) e deslocamento de cifragem (lag).
function decipher(message,lag) {

  // Declaração de variáveis para processamento da mensagem criptografada.
  var charCodeNum = 0;
  var letterDeciphered = 0;
  var decipheredMessage = [];

  // Verificação e processamento de descodificação de cada um dos caracteres da mensagem de acordo com as condições características (letras minúsculas, maiúsculas e espaços).
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

// Chamada das funções para codificação e decodificaçao da mensagem de texto inserida pelo usuário, com parâmetros de entrada da mensagem (userMessage) e deslocamento de cifragem (lagFactor).
var messageCiphered = cipher('0',33);
var messageDeciphered = decipher(messageCiphered,33);




