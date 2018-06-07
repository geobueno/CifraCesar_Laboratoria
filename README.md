Programa para codifica��o de e decodifi��o de mensagem atrav�s cifra de C�sar com fator de deslocamento fixo 33 (ROT7)

In�cio

- � aberta uma p�gina HTML (index.html) e um prompt � inicializado pedindo que o usu�rio insira a mensagem que deseja ser criptografada;

- No arquivo java script � chamada a fun��o para codifica��o (function cipher(message,lag){}) com par�metros de mensagem vari�vel e deslocamento fixo (var messageCiphered = cipher('0',33)); 

- A fun��o atrav�s do prompt pede ao usu�rio que digite uma mensagem a ser codificada:

var message = prompt("Digite uma mensagem para ser cifrada.\nObs.: A mensagem deve conter apenas letras(sem acentos) e espa�os");

- A mensagem deve conter apenas letras, mai�sculas e min�sculas (sem acentos) e espa�os. Enquanto a condi��o n�o for satisfeita o processo permanece em loop: 

(while (message.search(/[^A-Za-z\s]/) !== -1 || message[0] === undefined) {
     var message = prompt("Digite uma mensagem para ser cifrada.\nObs.: A mensagem deve conter apenas letras(sem acentos) e espa�os");
  };

Processamento de codifica��o � Fun��o cipher

- Quando a condi��o de entrada de mensagem � satisfeita s�o declaradas as vari�veis que ser�o utilizadas no processamento:

1- Vari�vel que receber� os n�meros dos strings equivalentes na tabela ASCII (var charCodeNum = 0) ;
2- Vari�vel que receber� o valor num�rico da codifica��o (var letterCiphered = 0);
3- Vari�vel do tipo array que recebera os strings da mensagem codificadas (var cipheredMessage = []); 

- O processo de codifica��o � executado da seguinte maneira:

1- Uma fun��o percorre cada uma dos strings da mensagem e o valor num�rico de obtido pela fun��o String.prototype.charCodeAt()
cada posi��o � guardado em uma vari�vel:
for (var i = 0; i < message.length; i++) {
	charCodeNum = message[i].charCodeAt();

2- Se o n�mero estiver no intervalo ASCII de letras mai�sculas (65 a 90), � aplicada a equa��o de deslocamento para o n�mero desse intervalo e armazenado em uma vari�vel. O array de mensagem codificada recebe esse n�mero e transforma na letra equivalente da tabela ASCII codificada:
if (charCodeNum >= 65 && charCodeNum <= 90) {
	  letterCiphered = (charCodeNum - 65 + lag) % 26 + 65;
      cipheredMessage.push(String.fromCharCode(letterCiphered));

3- Se o n�mero estiver no intervalo ASCII de letras min�sculas (97 a 122), � aplicada a equa��o de deslocamento para o n�mero desse intervalo e armazenado em uma vari�vel. O array de mensagem codificada recebe esse n�mero e transforma na letra equivalente da tabela ASCII codificada:
else if (charCodeNum >= 97 && charCodeNum <= 122) {
	    letterCiphered = (charCodeNum - 97 + lag) % 26 + 97;
	    cipheredMessage.push(String.fromCharCode(letterCiphered));

4- Se o n�mero for equivalente ao espa�o na tabela ASCII (32), o array de mensagem codificada recebe a posi��o 35 convertida para o s�mbolo #.
else if (charCodeNum === 32) {
	    letterCiphered = 35;
	    cipheredMessage.push(String.fromCharCode(letterCiphered));

5- Quando a fun��o termina de percorrer as strings da mensagem o processo se encerra e os novos caracteres codificados est�o armazenados no array �cipheredMessage�;

6- Nesse momento � retornado a p�gina HTML a mensagem codificada com a utiliza��o da fun��o  Array.prototype.join() para unir os caracteres de forma cont�nua:
return document.getElementById('messageCiphered').innerHTML = cipheredMessage.join('').


Processamento de decodifica��o � Fun��o decipher

- Ap�s a codifica��o � chamada a fun��o (function decipher(message,lag) {}) para decodificar recebendo como par�metro a mensagem codificada e o fator de deslocamento fixo 33:
var messageDeciphered = decipher(messageCiphered,33);

- S�o declaradas as vari�veis que ser�o utilizadas no processamento:

1- Vari�vel que receber� os n�meros dos strings equivalentes na tabela ASCII (var charCodeNum = 0) ;
2- Vari�vel que receber� o valor num�rico da decodifica��o (var letterDeciphered = 0);
3- Vari�vel do tipo array que recebera os strings da mensagem decodificadas (var decipheredMessage = []).

- O processo de decodifica��o � executado da seguinte maneira:

1- Uma fun��o percorre cada uma dos strings da mensagem e o valor num�rico de obtido pela fun��o String.prototype.charCodeAt()
cada posi��o � guardado em uma vari�vel:
for (var i = 0; i < message.length; i++) {
	charCodeNum = message[i].charCodeAt();

2- Se o n�mero estiver no intervalo ASCII de letras mai�sculas (65 a 90), � aplicada a equa��o de deslocamento para o n�mero desse intervalo e armazenado em uma vari�vel. O array de mensagem decodificada recebe esse n�mero e transforma na letra equivalente da tabela ASCII codificada:
if (charCodeNum >= 65 && charCodeNum <= 90) {
	  letterDeciphered = (charCodeNum - 90 - lag) % 26 + 90;
	  decipheredMessage.push(String.fromCharCode(letterDeciphered));

3- Se o n�mero estiver no intervalo ASCII de letras min�sculas (97 a 122), � aplicada a equa��o de deslocamento para o n�mero desse intervalo e armazenado em uma vari�vel. O array de mensagem decodificada recebe esse n�mero e transforma na letra equivalente da tabela ASCII codificada:
else if (charCodeNum >= 97 && charCodeNum <= 122) {
	    letterDeciphered = (charCodeNum -122 - lag) % 26 + 122;
	    decipheredMessage.push(String.fromCharCode(letterDeciphered));

4- Se o n�mero for equivalente ao espa�o na tabela ASCII (35), o array de mensagem codificada recebe a posi��o 32 convertida para espa�o
else if (charCodeNum === 35){
	    letterDeciphered = 32;
	    decipheredMessage.push(String.fromCharCode(letterDeciphered));

5- Quando a fun��o termina de percorrer as strings da mensagem o processo se encerra e os novos caracteres decodificados est�o armazenados no array �decipheredMessage�;

6- Nesse momento � retornado a p�gina HTML a mensagem decodificada com a utiliza��o da fun��o  Array.prototype.join() para unir os caracteres de forma cont�nua:
  return document.getElementById('messageDeciphered').innerHTML = decipheredMessage.join('');

Fim do processo
