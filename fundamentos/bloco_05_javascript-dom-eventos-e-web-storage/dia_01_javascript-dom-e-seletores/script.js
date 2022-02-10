 /*Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
              - document.getElementById()
              - document.getElementsByClassName()
              - document.getElementsByTagName() */

      //Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
      function changeTextTags(tag, index, text) {
        document.getElementsByTagName(tag)[index].innerText = text;
      }
      changeTextTags('p', 0, 'Empregado em uma empresa legal.');
      changeTextTags('p', 1, 'Ganhando um bom salário.');

    //Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
      function changeClassBackground(className, index, color){
        document.getElementsByClassName(className)[index].style.backgroundColor = color;
      }
      changeClassBackground('main-content', 0, 'rgb(76,164,109)');

    //Crie uma função que mude a cor do quadrado vermelho para branco.
      function changeClassBackground(className, index, color){
          document.getElementsByClassName(className)[index].style.backgroundColor = color;
      }
      changeClassBackground('center-content', 0, 'white');

    //Crie uma função que corrija o texto da tag <h1>.
      function changeTextTags(tag, index, text) {
        document.getElementsByTagName(tag)[index].innerText = text;
      }
      changeTextTags('h1', 0, 'Exercício 5.1 - JavaScript');

    //Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
      function changeToUppercase(tag, index) {
        let text = document.getElementsByTagName(tag)[index].innerText;
        document.getElementsByTagName(tag)[index].innerText = text.toUpperCase();
      }
      changeToUppercase('p', 0);
      changeToUppercase('p', 1);
      changeToUppercase('p', 2);

    //Crie uma função que exiba o conteúdo de todas as tags <p> no console
      function displayTags(tag) {
        let tags = document.getElementsByTagName(tag)
        for (let index of tags) {
          console.log(index.innerText);
        }
      }
      displayTags('p');

    //Extra
       function changeTagMargin(tag, index, value) {
        document.getElementsByTagName(tag)[index].style.marginLeft = value;
      }
      changeTagMargin('p', 0, '10px');
      changeTagMargin('p', 1, '10px');
      changeTagMargin('p', 2, '10px');
      