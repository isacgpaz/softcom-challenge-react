<h1 align="center">
  🌐 Lojinha Virtual | Softcom Challenge 📁
</h1>
<p align="center">🚀 Desafio de Desenvolvimento Front-End com ReactJS proposto 
pela Softcom Tecnologia.</p>

### 📸 ScreenShots da Aplicação
#### 📱 Dispositivos Móveis 
<img src="/screenshots/home-mobile.png" alt="Página inicial - Mobile"/>
<img src="/screenshots/product-mobile.png" alt="Produto - Mobile"/>

#### 🖥 Desktop
<img src="/screenshots/home-desktop.png" alt="Página inicial - Desktop"/>
<img src="/screenshots/product-desktop.png" alt="Produto - Desktop"/>

### 🏃🏻‍♂️ Como executar o Projeto

#### 🔧 Instalando as Dependências
```bash
npm install
# or
yarn 
```

#### 🎲 Executando o Servidor da API REST (JSON-Server)
Simuador de API REST para consumo de dados.
```bash
npm run server
# or
yarn server 
```

#### 🔥 Executando a Aplicação em Desenvolvimento
```bash
npm run dev
# or
yarn dev 
```


***

### 🏪 Apresentação do Projeto
O projeto consiste em construir a interface responsiva de uma lojinha virtual, 
com funcionalidade de adicionar itens a um carrinho de compras e totalizar os 
valores a cada nova adição. O protótipo do projeto foi disponibilizado pela 
Softcom e está disponível no [Figma](https://www.figma.com/file/ebcFb6dxwj4JkN7vENzgeQ/%5BSoftcom%5D-Desafio-UX?node-id=58%3A2096) para visualização.

***

### 🛠 Tecnologias Utilizadas

As seguintes ferramentas foram usadas na construção do projeto:
- [React](https://pt-br.reactjs.org/)
- [Next](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://www.styled-components.com/)
- [JSON Server](https://github.com/typicode/json-server)
- [Axios](https://axios-http.com/)

***

### 🚀 Metodologias Aplicadas

#### 📱 Mobile First

Utilizei o conceito de Mobile First para desenvolver as diferentes telas do
projeto. Pensando em aplicar um design responsivo, respeitando o protótipo a ser
disponibilizado, construí e estruturei o Layout base com cabeçalho, navegação e 
rodapé (Header, Navigation e CartFooter). Com o progresso do projeto, voltei minha
atenção para a aplicação em telas maiores e fiz os ajustes necessários utilizando 
a Media Queries e a biblioteca [React-Responsive](https://www.npmjs.com/package/react-responsive).

#### 🎲 Simulando API com JSON Server e requisições com Axios
    
Para simular o consumo de dados através de uma API REST, utilizei a biblioteca
JSON Server, que permite executar em ambiente local uma base de dados em 
JSON(JavaScript Object Notation) e acessá-a através de rotas pré-definidas. Para
consumir os dados usei o Axios, que tornou as chamadas à API mais dinâmica e menos 
verbosa, além de ter uma fácil configuração.


#### 📋 TypeScript: Tipagem e Interfaces
    
O TypeScript torna possível a utilização de tipos no JavaScript. Utilizando 
a notação JSX construí componentes sólidos com parâmetros específicos, o que
é de grande ajuda em ambiente de desenvolvimento. Com a ajuda de interfaces
a tipagem das entidades fica bem mais restrita a um determinado tipo de dado,
o que é útil principalmente para saber quais propriedades existem em um 
determinado objeto/componente.

***

### 🧗🏻‍♂️ Etapas do Desenvolvimento

#### 📚 Entendendo o Desafio

Dediquei os primeiros momentos deste desafio buscando compreender quais eram os requisitos necessários para executar o desenvolvimento da aplicação solicitada,
como implementar a jornada do usuário da melhor forma possível e aprimorar meus conhecimentos sobre as ferramentas propostas. Procurei ser fiel ao design do protótipo, respeitando espaçamentos, fontes, cores e disposição em tela.
    
#### ⚙ Pensando em Componentes
Estudando o design do protótipo no Figma comecei a dividir os componentes da aplicação pensando em blocos sólidos e que facilitassem a estilização posteriormente. 

#### 🎨 Styled Components vs SASS
Havia a dúvida sobre qual metodologia de estilo aplicar. Comecei a desenvolver utilizando SASS mas logo nas primeiras linhas decidi migrar para o Styled Componentes. Creio que tenha sido uma sábia decisão, principalmente para deixar a escrita do código mais semântica e organizada. Iniciei configurando o arquivo global de estilos, após levantamento de fontes, pesos, ícones e cores utilizadas no protótipo do projeto. Outro ponto positivo de usar Styled Components foi para aplicar Media Queries ao partir para o desenvolvimento para desktop e dispositivos maiores. 

#### ⛏ Contexts e Hooks
Com essas funcionalidades das novas versões do React, é possível fazer a comunicação e visualização entre componentes de forma clara e direta, tornando possível utilizar propriedades e dados de um componente e modificá-los em outro. Outro diferencial destas ferramentas é a divisão do código entre parte visual e funcional, tornando o código bem mais limpo e organizado.

#### 📩 NextJS: Data Fetching
O NextJS veio para somar e muito nas nossas vidas. Ele torna possível ter uma página pré-renderizada e auxilia muito na consulta e consumo de dados de uma API, guardando o resultado da busca e o código construído em cache.

#### 🛒 Carrinho de Compras e Persistência de Estado
Para implementar o carrinho/sacola de compras, foram necessárias algumas tratativas dos dados recebidos da API(conversões múltiplas de String para Number), para calcular e contabilizar os itens adicionados. Criei um componente Quantifier responsável por alterar a quantidade de um determinado item, adicioná-lo a lista de compras e calcular o preço final do carrinho a cada nova adição. Com o conceito de estados em React, as informações do carrinho são mantidas ao navegar entre as diferentes páginas e sessões do projeto. É possível consultar o carrinho de compras tanto na parte inferior(dispositivos móveis) quando no cabeçalho da aplicação(desktop e demais dispositivos).

#### 🔍 Aplicando filtros e pesquisa inteligente
Após recolher os dados é possível manipulá-los por categorias e tipos. Para o nosso projeto foram listadas 5 categorias: Brinquedos, Coleiras, Camas e Casinhas, Ossos e Petiscos e Saúde. Além de uma categoria especial: Sugestão do Vendedor. Utilizando a ferramenta de [Rotas Dinâmicas](https://nextjs.org/docs/routing/dynamic-routes) do NextJS, dividi a listagem de produtos de forma a exibi-los em tempo real de escrita da pesquisa conforme a sua categoria. A pesquisa, assim como solicitado no descritivo do desafio, aceita qualquer parte do nome de um produto. A categoria Sugestão do Vendedor é alimentada por meio de uma flag na base de dados que permite adicioná-los a esta categoria especial sem removê-los da sua categoria original.

#### 🖥 Implementando o Layout para Desktop e outros dispositivos
Após concluir todas as demais funcionalidades, parti para desenvolver o layout em telas maiores. O maior desafio foi a implementação do modal de detalhamento dos itens, pois varia de acordo com o tamanho da tela, sendo mais próximo de uma página em telas menores e como de fato um modal em telas maiores.

***

### 🥳 Conclusão
Este desafio foi uma grande experiência para mim. Poder implementá-lo, além de divertido, contribuiu bastante em meus estudos nesta área do Desenvolvimento Web e expandiu meus horizontes para novas tecnologias e ferramentas. 

Agradeço à [SoftCom Tecnologia](https://github.com/softcomtecnologia) por disponibilizar este projeto para a comunidade, bem como por todo o suporte dado através do descritivo, feedback e da interação durante o desenvolvimento no LinkedIn(🤝🏻). É uma oportunidade incrível e me sinto honrado de poder ter contribuído neste desafio. 

🚀 Vamos por mais! 🖖🏻

***

### Autor
👨‍💻 Isac Gomes da Paz Marinho | Desenvolvedor Web

✉ [ Meu Email](mailto:isacgomesp@gmail.com)

🌍 [LinkedIn](https://www.linkedin.com/in/isacgpaz/)

