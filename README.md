Programa para codificação de e decodifição de mensagem através cifra de César com fator de deslocamento fixo 33 (ROT7)

Início

- É aberta uma página HTML (index.html) e um prompt é inicializado pedindo que o usuário insira a mensagem que deseja ser criptografada;

- No arquivo java script é chamada a função para codificação (function cipher(message,lag){}) com parâmetros de mensagem variável e deslocamento fixo (var messageCiphered = cipher('0',33)); 

- A função através do prompt pede ao usuário que digite uma mensagem a ser codificada:

var message = prompt("Digite uma mensagem para ser cifrada.\nObs.: A mensagem deve conter apenas letras(sem acentos) e espaços");

- A mensagem deve conter apenas letras, maiúsculas e minúsculas (sem acentos) e espaços. Enquanto a condição não for satisfeita o processo permanece em loop: 

(while (message.search(/[^A-Za-z\s]/) !== -1 || message[0] === undefined) {
     var message = prompt("Digite uma mensagem para ser cifrada.\nObs.: A mensagem deve conter apenas letras(sem acentos) e espaços");
  };

Processamento de codificação – Função cipher

- Quando a condição de entrada de mensagem é satisfeita são declaradas as variáveis que serão utilizadas no processamento:

1- Variável que receberá os números dos strings equivalentes na tabela ASCII (var charCodeNum = 0) ;
2- Variável que receberá o valor numérico da codificação (var letterCiphered = 0);
3- Variável do tipo array que recebera os strings da mensagem codificadas (var cipheredMessage = []); 

- O processo de codificação é executado da seguinte maneira:

1- Uma função percorre cada uma dos strings da mensagem e o valor numérico de obtido pela função String.prototype.charCodeAt()
cada posição é guardado em uma variável:
for (var i = 0; i < message.length; i++) {
	charCodeNum = message[i].charCodeAt();

2- Se o número estiver no intervalo ASCII de letras maiúsculas (65 a 90), é aplicada a equação de deslocamento para o número desse intervalo e armazenado em uma variável. O array de mensagem codificada recebe esse número e transforma na letra equivalente da tabela ASCII codificada:
if (charCodeNum >= 65 && charCodeNum <= 90) {
	  letterCiphered = (charCodeNum - 65 + lag) % 26 + 65;
      cipheredMessage.push(String.fromCharCode(letterCiphered));

3- Se o número estiver no intervalo ASCII de letras minúsculas (97 a 122), é aplicada a equação de deslocamento para o número desse intervalo e armazenado em uma variável. O array de mensagem codificada recebe esse número e transforma na letra equivalente da tabela ASCII codificada:
else if (charCodeNum >= 97 && charCodeNum <= 122) {
	    letterCiphered = (charCodeNum - 97 + lag) % 26 + 97;
	    cipheredMessage.push(String.fromCharCode(letterCiphered));

4- Se o número for equivalente ao espaço na tabela ASCII (32), o array de mensagem codificada recebe a posição 35 convertida para o símbolo #.
else if (charCodeNum === 32) {
	    letterCiphered = 35;
	    cipheredMessage.push(String.fromCharCode(letterCiphered));

5- Quando a função termina de percorrer as strings da mensagem o processo se encerra e os novos caracteres codificados estão armazenados no array ‘cipheredMessage’;

6- Nesse momento é retornado a página HTML a mensagem codificada com a utilização da função  Array.prototype.join() para unir os caracteres de forma contínua:
return document.getElementById('messageCiphered').innerHTML = cipheredMessage.join('').


Processamento de decodificação – Função decipher

- Após a codificação é chamada a função (function decipher(message,lag) {}) para decodificar recebendo como parâmetro a mensagem codificada e o fator de deslocamento fixo 33:
var messageDeciphered = decipher(messageCiphered,33);

- São declaradas as variáveis que serão utilizadas no processamento:

1- Variável que receberá os números dos strings equivalentes na tabela ASCII (var charCodeNum = 0) ;
2- Variável que receberá o valor numérico da decodificação (var letterDeciphered = 0);
3- Variável do tipo array que recebera os strings da mensagem decodificadas (var decipheredMessage = []).

- O processo de decodificação é executado da seguinte maneira:

1- Uma função percorre cada uma dos strings da mensagem e o valor numérico de obtido pela função String.prototype.charCodeAt()
cada posição é guardado em uma variável:
for (var i = 0; i < message.length; i++) {
	charCodeNum = message[i].charCodeAt();

2- Se o número estiver no intervalo ASCII de letras maiúsculas (65 a 90), é aplicada a equação de deslocamento para o número desse intervalo e armazenado em uma variável. O array de mensagem decodificada recebe esse número e transforma na letra equivalente da tabela ASCII codificada:
if (charCodeNum >= 65 && charCodeNum <= 90) {
	  letterDeciphered = (charCodeNum - 90 - lag) % 26 + 90;
	  decipheredMessage.push(String.fromCharCode(letterDeciphered));

3- Se o número estiver no intervalo ASCII de letras minúsculas (97 a 122), é aplicada a equação de deslocamento para o número desse intervalo e armazenado em uma variável. O array de mensagem decodificada recebe esse número e transforma na letra equivalente da tabela ASCII codificada:
else if (charCodeNum >= 97 && charCodeNum <= 122) {
	    letterDeciphered = (charCodeNum -122 - lag) % 26 + 122;
	    decipheredMessage.push(String.fromCharCode(letterDeciphered));

4- Se o número for equivalente ao espaço na tabela ASCII (35), o array de mensagem codificada recebe a posição 32 convertida para espaço
else if (charCodeNum === 35){
	    letterDeciphered = 32;
	    decipheredMessage.push(String.fromCharCode(letterDeciphered));

5- Quando a função termina de percorrer as strings da mensagem o processo se encerra e os novos caracteres decodificados estão armazenados no array ‘decipheredMessage’;

6- Nesse momento é retornado a página HTML a mensagem decodificada com a utilização da função  Array.prototype.join() para unir os caracteres de forma contínua:
  return document.getElementById('messageDeciphered').innerHTML = decipheredMessage.join('');

Fim do processo
