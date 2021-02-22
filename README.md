# Desafio Stone

## Tecnologias utilizadas
A solução do desafio foi implementada utilizando TypeScript e os testes foram implementados utilizando Jest.

## Estrutura do diretório
```
desafio-stone
│   README.md
│   package.json
│   tsconfig.json
│   jest.config.js
│   yarn.lock
|
└───src
│   │   index.ts (arquivo principal com a solução)
│   │
│   └───data (dados para teste)
│   |   └───emailsData
|   |   |    |     emailsData.ts (arquivo com variações de listas de emails)
|   |   |   
│   |   └───data
|   |        |     itemsData.ts (arquivo com variações da lista de objetos de compra)
│   |
|   └───__tests__
|            | index.test.ts
```
## Executando a solução
1. Executar o comando `yarn` na raiz do projeto <br>
    ```$ yarn```
2. Para fazer alterações no arquivo principal sem a necessidade de recompilar o projeto manualmente: <br>
    ```$ yarn start```
3. Para verificar os testes: <br>
    ```$ yarn test```

## Solução
O arquivo index.ts tem a implementação da solução. Nele existem duas funções: <br>
```amountToPay(number, number): number[]```<br> 
Uma função auxiliar para tornar mais fácil a leitura da função principal. Ela retorna um array cujo o tamanho varia de acordo com o resultado da divisão dos valores do total calculado dos itens pelo número de usuários.<br> 
Se a divisão for exata, o vetor terá uma única posição contendo o valor a ser atribuído a todos os pares do dicionário. Caso a divisão contenha algum valor como resto, o vetor terá o mesmo número de posições que a lista de usuários com valores gerados com a distribuição mais justa.<br>

```totalBill(Array<IBuyList>, Array<string>): (IPersonDue | string)``` <br>
- ```IBuyList: { item: string, quantity: number, price: number }``` <br>
- ```IPersonDue: {[key: string]: number}``` <br>
- A função pode retornar uma string para quando as listas forem vazias, assim evitando problemas como divisão por zero e delimitando regras para executar o desafio.

Função principal, conforme requisitada no enunciado do desafio, responsável por: <br>
- Calcular a soma dos valores, ou seja, multiplicar o preço de cada item por sua quantidade e somar todos os itens
- Chama amountToPay() para dividir o valor de forma igual entre a quantidade de e-mails
- Retornar um mapa/dicionário onde a chave será o e-mail e o valor será quanto ele deve pagar nessa conta

Maiores detalhes quanto a implementação foram inseridos como comentários para auxiliar na avaliação.

## Restrições
A fim de delimitar melhor o escopo, foi assumido que o valor mínimo de cada item seria 100 (R$1,00) e número máximo de usuários para divisão também seria 100. Dessa forma evitando trabalhar com números decimais conforme foi sugerido.

## Testes
- Lista de emails vazia
- Lista de compras vazia
- Email do usuário é chave do dicionário
- Para um usuário e lista com um item
- Para divisões não inteiras, i.e., com resto diferente de zero
- Com preço e quantidades variáveis por itens