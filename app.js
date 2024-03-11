// Importamos la biblioteca crypto
const crypto = require('crypto');

// Función para generar una llave privada y una dirección pública
function generatePrivateKeyAndAddress(seedWords) {
    // Convertimos las palabras de la semilla a una cadena
    console.log('')
    const seedString = seedWords.join(' ');
    console.log('STRING DE SEMILLAS: ', seedString)
    // Obtenemos un hash SHA-256 de la semilla
    const sha256Hash = sha256(seedString);

    console.log('HASH DE SEMILLAS: ', sha256Hash)

    // Convertimos el hash a una cadena hexadecimal
    const privateKeyHex = sha256Hash.toString('hex');

    console.log('HASH DE SEMILLAS EN HEXADECIMAL: ', privateKeyHex)

    // Retornamos la llave privada y la dirección pública
    return {
        privateKey: privateKeyHex,
        address: generateAddress(privateKeyHex)
    };
}

// Función para obtener el hash SHA-256 de una cadena
function sha256(input) {
    // Implementación básica de SHA-256 para propósitos educativos
    // En una aplicación real, se debería utilizar una biblioteca de hash criptográfico confiable
    return crypto.createHash('sha256').update(input).digest();
}

// Función para generar una dirección pública a partir de una llave privada
function generateAddress(privateKeyHex) {
    // Generamos una clave pública utilizando criptografía asimétrica (ECDSA)
    const publicKey = privateKeyToPublicKey(privateKeyHex);

    // Convertimos la clave pública a una dirección pública
    console.log('LLAVE PUBLICA: ', publicKey)
    const address = publicKeyToAddress(publicKey);
    console.log('DIRECCION PUBLICA: ', address)
    return address;
}

// Función para convertir una llave privada hexadecimal en una clave pública
function privateKeyToPublicKey(privateKeyHex) {
    return privateKeyHex; // En este ejemplo, la clave pública es simplemente la llave privada
}

// Función para convertir una clave pública en una dirección pública
function publicKeyToAddress(publicKey) {
    // Seleccionamos los últimos 20 bytes del hash SHA-3 (Keccak-256) de la clave pública
    const publicKeyHash = keccak256(publicKey);

    // Agregamos el prefijo '0x' y convertimos el resultado a una cadena hexadecimal
    const address = '0x' + publicKeyHash.toString('hex');

    return address;
}

// el keccak256 es un algoritmo de hash criptográfico que se utiliza en la red Ethereum

function keccak256(input) {
    // Utilizamos la función createHash de la biblioteca crypto con el algoritmo 'keccak256'
    const hash = crypto.createHash('sha3-256');
    hash.update(input);
    return hash.digest();
}

// Ejemplo de uso
const seed = ['palabra1', 'palabra2', 'palabra3'];
const keys = generatePrivateKeyAndAddress(seed);

console.log(''); // Salto de línea
console.log('Llave privada: ', keys.privateKey);
console.log('Dirección pública: ', keys.address);
console.log(''); // Salto de línea

// PARA CORRER EJECUTAR => node app.js
