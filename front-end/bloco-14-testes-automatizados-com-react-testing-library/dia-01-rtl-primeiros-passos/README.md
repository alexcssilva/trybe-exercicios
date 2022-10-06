## DIA-01

**O que vamos aprender?**


Testes automatizados são parte fundamental de qualquer software de qualidade, e com React não é diferente. Sendo React uma biblioteca recente, a melhor forma de se escrever testes automatizados para ele não é um assunto dado como encerrado, ainda que o  _runner_ mais usado e recomendado seja o Jest. A biblioteca de testes para React com  [maior adoção](https://www.npmtrends.com/react-testing-library-vs-enzyme) é a  [_enzyme_](https://github.com/airbnb/enzyme) , desenvolvida pela Airbnb. A biblioteca  [recomendada pela documentação](https://reactjs.org/docs/testing.html) , por outro lado, é a  [react-testing-library](https://github.com/testing-library/react-testing-library) , desenvolvida por Kent C. Dodds. Por razões que ficarão claras ao longo do dia de hoje, nós aprenderemos a usar a  `react-testing-library`  , mas desde já mantenha a  `enzyme`  no seu radar, pois você pode trombar com ela no futuro!

Assim sendo, hoje você vai aprender a  **escrever testes automatizados em React** ! Vai aprender a usar as ferramentas que a  `react-testing-library`  oferece para testar componentes e comportamentos inteiros, simulando a ocorrência de eventos e lidando com lógica assíncrona.

Tudo isso, naturalmente, virá acompanhado de uma discussão acerca do que são boas práticas de teste e quais são os  _tradeoffs_ de diferentes abordagens de teste.

Bora?!

### Você será capaz de:

-   Utilizar os seletores (queries) da React-Testing-Library em testes automatizados;
    
-   Simular eventos com a React-Testing-Library em testes automatizados;
    
-   Testar fluxos lógicos assíncronos com a React-Testing-Library;
    
-   Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados.
    

