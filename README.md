# ESTE ES UN EJEMPLO MERAMENTE EDUCATIVO :warning:

# Generador de Llave Privada y Dirección Pública

Este script en JavaScript permite generar una llave privada y una dirección pública utilizando criptografía asimétrica (ECDSA).

## Funcionamiento

El script consta de varias funciones:

- `generatePrivateKeyAndAddress(seedWords)`: Esta función toma una lista de palabras de semilla y genera una llave privada y una dirección pública basadas en ella.
- `sha256(input)`: Esta función calcula el hash SHA-256 de una cadena de entrada.
- `generateAddress(privateKeyHex)`: Esta función genera una dirección pública a partir de una llave privada en formato hexadecimal.
- `privateKeyToPublicKey(privateKeyHex)`: Esta función convierte una llave privada en formato hexadecimal en una clave pública.
- `publicKeyToAddress(publicKey)`: Esta función convierte una clave pública en una dirección pública.
- `keccak256(input)`: Esta función calcula el hash Keccak-256 de una entrada.

## Uso

Para utilizar el script, simplemente proporciona una lista de palabras de semilla y ejecuta el script. Por ejemplo:

```bash
node app.js
