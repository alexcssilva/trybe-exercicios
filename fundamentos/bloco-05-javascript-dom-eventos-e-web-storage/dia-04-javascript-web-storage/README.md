## DIA-04

**O que vamos aprender?**

Você aprenderá sobre  **Web Storage** .  **Web Storage** provê mecanismos para que as aplicações  _web_ possam salvar dados nos  _browsers_ das pessoas.

Antes do  **HTML 5** , as aplicações tinham que salvar os dados locais em cookies, que eram enviados para o servidor a cada requisição do  _browser_ .  **Web Storage** é mais seguro e tem a capacidade de salvar uma quantidade maior de dados sem afetar o desempenho da página.

Ao contrário dos  **Cookies** , o limite de armazenamento é muito maior (pelo menos 5MB), e as informações não são transferidas para o servidor durante as requisições.

**Web Storage** é por origem (por domínio e protocolo). Todas as páginas de uma origem podem salvar e acessar os mesmos dados. Por exemplo, se o domínio  `betrybe.com`  salva o dado  `X`  no  **Web Storage** , o domínio  `course.betrybe.com`  consegue ler esse dado  `X`  .

-   Manipular o objeto  `localStorage`  ;
    
-   Manipular o objeto  `sessionStorage`  .

