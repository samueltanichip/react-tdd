# 🧪 React TDD

<p align="center">
  Projeto com foco em desenvolver o frontend orientado a testes,
  utilizando o React Testing Library e o Jest 🃏
</p>

## 📦 Dependências

- **`ts-node`**: apenas é necessário caso o projeto esteja usando 
Typescript.

- **`jest` e `@types/jest`:** framework utilizado para realizar testes 
unitários e o pacote necessário para utilização do jest com typescript, 
respectivamente.

- **`jsdom` e `jest-environment-jsdom`:** de acordo com a documentação 
do `jsdom`, ele é uma implementação em JavaScript puro de muitos 
padrões da web, como os padrões WHATWG DOM e HTML, para uso com Node.js. 
Em geral, o objetivo do projeto é emular o suficiente de um subconjunto 
de um navegador da Web para ser útil para testar e extrair aplicativos 
da Web do mundo real.

  Logo, o `jest-environment-jsdom` serve para habilitarmos esse ambiente
para desenvolver os testes com o Jest;

Conjunto de ferramentas voltadas para testar os componentes React:

- **`@testing-library/react`:** fornece funções utilitárias leves em 
cima do `react-dom` e `react-dom/test-utils`, de uma forma que 
incentiva melhores práticas de teste;

- **`@testing-library/jest-dom`:** oferece jest *matchers* customizados
estendendo o jest para testar o estado da DOM, tornando os testes mais
declarativos e fáceis de ler e manter;

  > Os matchers em Jest são métodos como `.toBe()`, `.toBeTruthy()`,
  > entre outros. Mas quando instalamos esse pacote, temos acesso à
  > matchers relacionados à DOM, como `.toBeInTheDocument()`, 
  > `.toBeDisable()`, entre outros. Por isso se tornam fáceis de ler.

- **`@testing-library/user-event`:** busca simular os eventos reais que 
aconteceriam no navegador enquanto o usuário interage com ele. Por 
exemplo, `userEvent.click(checkbox)` alteraria o estado do checkbox.

- **`@babel/core`, `@babel/preset-env`, `@babel/preset-react` e `babel-jest`:**
Apesar do Testing library testar os componentes, ele ainda não consegue 
interpretá-los, por isso, precisamos do babel para fazer com que os
componentes sejam entendidos.

- **`identity-obj-proxy`:** útil para testar importações triviais de 
webpack. Por exemplo, você pode dizer ao Jest para simular este objeto 
como módulos CSS importados; então todas as pesquisas de `className` 
no objeto de estilos importado serão retornadas como estão. 
  
  Resumindo, serve para, quando importarmos arquivos como imagens ou 
estilos em nosso código, não dê problema nos testes. E isso é feito 
através de mocks, ou seja, uma simulação desses arquivos.

## 📝 Tipos de testes

### 🔬 Unitário

Esses são os testes das menores porções do código, por exemplo, uma 
função. Verificamos se essa pequena parte de código faz o que deveria 
fazer, independente de outras unidades.

Quando desenvolvemos para o frontend, muitas vezes trabalhamos com 
componentes. Os testes unitários nos permitem garantir que eles 
funcionam como esperado de forma isolada, mas também é preciso saber 
se esses componentes funcionam quando utilizados de forma conjunta. 
Mas como saber se não vão parar de funcionar? Para isso, vamos para o 
próximo tipo de teste.

### 🌐 Integração

Agora que as unidades do código estão funcionando corretamente de forma 
isolada, precisamos garantir que, quando uma parte se comunicar com a 
outra, as coisas vão funcionar como esperado.

No front-end, os testes de integração são super importantes, porque 
queremos nos certificar de que nossos componentes funcionam conforme 
esperado quando usados em conjunto.

Por exemplo, se tivermos um formulário contendo vários inputs 
diferentes e com um botão para enviar os dados, queremos testar que, 
ao preencher todos os dados corretamente e clicar no botão, veremos a 
mensagem de sucesso esperada.

### 📡 End-to-end (E2E)

Nos testes E2E testamos os componentes trabalhando de forma integrada, 
mas pensando na jornada real do usuário. Podemos utilizar ferramentas 
que automatizam essas ações em um contexto real. 

Por exemplo, a aplicação é iniciada no browser, que navega para a 
nossa página e executa as ações que forem definidas, como clicando em 
botões, preenchendo campos e verificando se os resultados são conforme 
esperado.

### 📸 Snapshot

Esse tipo de teste é focado na interface. A ideia é ter certeza que, 
quando fizermos quaisquer alterações, ela não terá mudanças inesperadas.

Quando um teste de snapshot é criado, ele renderiza o componente, ou
seja, transforma em algo que o navegador consegue entender e mostrar 
na tela. Em seguida, "tira uma foto" do que foi renderizado, e guarda 
aquela imagem. 

Assim, cada vez que os testes forem rodados, o que for renderizado é 
comparado com a imagem que estava guardada. Se houver alguma diferença, 
o teste falha e sabemos que algo na nossa interface foi alterado, sem 
precisar rodar a aplicação inteira pra isso.

<h4 align="center">🚧 Readme em construção 👷🏻‍♀️</h4>

<hr>

<p align="center">
  Feito com ❤️ por
  <a align="center" href="https://www.linkedin.com/in/ana-beatriz-nunes/">
    Ana Beatriz Nunes
  </a>
</p>