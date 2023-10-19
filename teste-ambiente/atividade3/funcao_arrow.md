# Função Arrow

A função arrow é uma forma mais concisa de escrever funções em JavaScript. Ela introduz uma sintaxe mais curta e resolve alguns problemas associados às funções tradicionais.

## Descrição

A principal diferença é a omissão da palavra-chave `function` e a introdução da seta `=>`. Isso torna a sintaxe mais limpa, especialmente em casos simples.

## Exemplo

```javascript
// Função tradicional
function soma(a, b) {
  return a + b;
}

// Função arrow equivalente
const somaArrow = (a, b) => a + b;

console.log(soma(2, 3));        // Saída: 5
console.log(somaArrow(2, 3));    // Saída: 5
