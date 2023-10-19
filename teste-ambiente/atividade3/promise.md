
2. **Promise (promise.md)**

```markdown
# Promise

As promises são objetos que representam a eventual conclusão ou falha assíncrona de uma operação. Promises são amplamente usadas para operações assíncronas em JavaScript, como requisições HTTP ou leitura de arquivos.

## Descrição

Uma Promise está em um de três estados:

- **Pendente (Pending):** Estado inicial, a promessa está em andamento.
- **Resolvida (Fulfilled):** A operação foi concluída com sucesso.
- **Rejeitada (Rejected):** A operação falhou.

## Exemplo

```javascript
// Exemplo de uma função que retorna uma Promise
function exemploPromise(valor) {
  return new Promise((resolve, reject) => {
    if (valor > 0) {
      resolve("Operação bem-sucedida");
    } else {
      reject("Operação falhou. O valor deve ser maior que zero.");
    }
  });
}

// Usando a Promise
exemploPromise(10)
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.error(erro);
  });
