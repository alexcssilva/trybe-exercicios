## DIA-04

**O que vamos aprender?**

Vamos recapitular o que você aprendeu até então:

-   Você aprendeu a fazer uso de  **_Redux_** para prover gerenciamento de estado à sua aplicação;
    
-   Você viu como o fluxo de dados funciona em uma aplicação que usa  **_Redux_** se baseia em 3 entidades fundamentais:
    
    1.  `store`  : a  **única fonte da verdade referente ao estado compartilhado da sua aplicação** . Ou seja, é na  `store`  e somente lá que se encontram os dados compartilhados da sua aplicação.
    2.  `actions`  : ordens enviadas para a  `store`  que, por sua vez, interpreta as alterações que devem ocorrer através do  `reducer`  . No  **_Redux_** , ainda existem as  `action creators`  , funções que criam as  `actions`  utilizadas na aplicação. Uma boa prática é inserir todas as  `action creators`  dentro de uma única pasta, separada dos demais arquivos.
    3.  `reducer`  : uma  [função pura](https://medium.com/nossa-coletividad/redux-e-reducers-a-m%C3%A1gica-das-fun%C3%A7%C3%B5es-puras-65e5beb093d8) que tem como responsabilidade gerenciar o estado da  `store`  de acordo com a  `action`  recebida. Ou seja, ele provê um  **novo** estado para a  `store`  , com as devidas alterações relacionadas a  `action`  que lhe foi entregue. É possível combinar vários  `reducers`  `A`  ,  `B`  , ...,  `N`  em um  `reducer`  `X`  só, de forma que somente  `X`  seja enviado para criar a  `store`  . Assim como as  `actions`  , é uma boa prática inserir todos os seus  `reducers`  em uma pasta própria.
-   Por fim, você viu como integrar  **_Redux_** com  **_React_** , haja visto que  **_Redux_** **não** é exclusivo para aplicações  **_React_** . Tal integração é feita via o pacote  **react-redux** , permitindo que componentes  **_React_** consigam acessar a  `store`  e enviar  `actions`  para ela.
    
Foquemos agora no fluxo de dados de uma aplicação  **_Redux_** : "out of the box", o  **_Redux_** suporta somente o fluxo  **síncrono** de dados, e isso consegue ser percebido ao olhar para  `actions`  : uma  `action`  é um objeto  **_JavaScript_** que descreve algum evento que  **já aconteceu** e esse objeto é enviado para a  `store`  para que seu estado seja atualizado.

Mas, e se fosse preciso ter uma  `action`  assíncrona, que precisa fazer uma requisição para uma  **_API_** , de forma que os devidos dados necessários estejam presentes para gerar a  `action`  ? De antemão não teríamos tais dados para formar essa  `action`  , esse objeto, haja visto que é preciso esperar pela requisição ser concluída. Logo, como se cria  `actions`  assíncronas? É isso que você aprenderá na aula de hoje.

### Você será capaz de:

-   Criar  `actions`  assíncronas na sua aplicação  **_React_** que faz uso de  **_Redux_** .
