const URLGERALSLIDES = "https://fegemo.github.io/cefet-front-end/classes/",
      CONTEUDOHTML = ["Ingredientes do HTML (tags) e Temperando com CSS",
        "Coding Dojo, Mais tags HTML e Entendendo regras CSS",
        "Tabelas, Tesouros e Piratas", "Div/Span, Box Model, Float e Desafios",
        "Divitite e as Tags Semânticas, display, pseudo-coisas e Assombrações",
        "Elementos de dados e o AvatarCreator"],
      CONTEUDOCSS = ["Seletores de classe, Flutuação e Abelhas",
        "História, a Cascata e outros Seletores, Ferramentas e Ninjas",
        "Layout, Fontes, Multimídia e Unicórnios",
        "Posicionamento e mais Assombrações",
        "Especificidade, Centralizando coisas e a Lanchonete do Coral 55",
        "Transições, Animações e os Animais", "Responsive Web Design"],
      CONTEUDOJS = [
        "Características, Escrevendo código, Clicando em botões e Resolvendo equações",
        "Arranjos, Alterando o DOM e Exploração Espacial",
        "História, Estilizando elementos, Eventos de mouse, Depurando e o PhotoSnap",
        "Usando objetos, Criando elementos HMTL e a Lista de Tarefas",
        "Web Storage, JSON e a Lista de Tarefas x2",
        "Bibliotecas, jQuery e o PhotoSnap x2", "Ajax e as Guerras Estelares"],
      MATERIAS = [CONTEUDOHTML, CONTEUDOCSS, CONTEUDOJS];

let selectMateria = document.querySelector('select');

selectMateria.addEventListener('change', exibeAulas);

function exibeAulas(){
  let urlMateria = URLGERALSLIDES,
      materiaEscolhida = parseInt(this.value),
      listaAulas = document.querySelector('ul');

  listaAulas.innerHTML = '';

  switch(materiaEscolhida){
      case 0: urlMateria += 'html';
              break;
      case 1: urlMateria += 'css';
              break;
      case 2: urlMateria += 'js';
              break;
  }

  //Uso do 'for' tradicional se dá pela necessidade de um contador
  for(let i = 0; i < MATERIAS[materiaEscolhida].length; i++){
      let linkParaSlide = document.createElement('a'),
          aulaEl = document.createElement('li');

      linkParaSlide.innerHTML = MATERIAS[materiaEscolhida][i];
      linkParaSlide.target = "_blank";
      linkParaSlide.href = urlMateria + ( i+1 );

      aulaEl.appendChild(linkParaSlide);
      listaAulas.appendChild(aulaEl);
  }
}
