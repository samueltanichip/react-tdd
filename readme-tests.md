# 🧪 Testes no Frontend

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

## 👩‍💻 Testando por roles

Realizar as buscas pelas roles é uma boa prática porque, além de 
testar a sua aplicação, você garante a sua acessibilidade. As 
especificações relacionadas à acessibilidade estão definidas na W3C 
(*World Wide Web Consortium*) como WAI-ARIA.

WAI-ARIA quer dizer *Accessible Rich Internet Applications* (Aplicações 
Ricas para uma Internet Acessível). O conjunto ARIA oferece a maneira 
de tornar as aplicações mais acessíveis a uma maior diversidade de 
pessoas, incluindo quem utiliza tecnologias assistivas, como leitores 
de telas e lentes de aumento.

[Aqui](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) você 
confere uma lista de todas as possíveis roles.
