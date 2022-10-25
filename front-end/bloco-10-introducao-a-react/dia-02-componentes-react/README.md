
## DIA-01

**O que vamos aprender?**


Na aula passada, você foi introduzido à biblioteca  **_React_** e soube como criar um projeto  **_React_** com o  `create-react-app`  . Se abrir um projeto recém-criado pelo  `create-react-app`  , você vai se deparar com algo similar ao seguinte no arquivo  `src/index.js`  :

Copiar

```react
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
```

O método  `ReactDOM.render`  está recebendo como primeiro parâmetro  `<App />`  . Mas, afinal, o que é esse  `<App />`  ? Ele é um exemplo de  **componente** **_React_** , e é isso que você estudará a fundo na aula de hoje. 🚀

### Você será capaz de:


-   Criar componentes React corretamente;
    
-   Fazer uso de  `props`  corretamente;
    
-   Fazer composição de componentes corretamente;
    
-   Criar múltiplos componentes dinamicamente.
    
-   Utilizar  `PropTypes`  para checar o tipo de uma  `prop`  no uso de um componente;
    
-   Utilizar  `PropTypes`  para garantir a presença de  `props`  obrigatórias no uso de um componente;
    
-   Utilizar  `PropTypes`  para checar que uma  `prop`  é um objeto de formato específico;
    
-   Utilizar  `PropTypes`  para garantir que uma  `prop`  é um array com elementos de um determinado tipo.
