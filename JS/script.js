 // Seleciona o elemento do menu dropdown
const dropdownMenu = document.querySelector('.dropdown');
const toggleButton = document.getElementById('togglebutton');


window.addEventListener('scroll', () => {
  const footer = document.getElementById('footer');
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const currentPosition = window.pageYOffset;

  if (currentPosition >= scrollableHeight) {
    footer.style.display = 'flex';
  } else {
    footer.style.display = 'none';
  }
});



 function scrollTo90Percent() {
      const windowHeight = window.innerHeight;
      const scrollAmount = windowHeight * 0.9;
      document.documentElement.scrollTop += scrollAmount;
    }
    // Adiciona um ouvinte de evento de clique ao botão
    document.getElementById('scrollButton').addEventListener('click', scrollTo90Percent);



    document.addEventListener('DOMContentLoaded', function() {

        // Adiciona um ouvinte de evento ao botão para ativar a função addHoverEffect
        document.getElementById('baixo').addEventListener('mouseenter', displayflex1);
        document.getElementById('violao').addEventListener('mouseenter', displayflex2);
        document.getElementById('guitarra').addEventListener('mouseenter', displayflex3);
        document.getElementById('ukulele').addEventListener('mouseenter', displayflex4);
        // Adiciona um ouvinte de evento ao botão para ativar a função removeHoverEffect
        document.getElementById('baixo').addEventListener('mouseleave', displaynone1);
        document.getElementById('violao').addEventListener('mouseleave', displaynone2);
        document.getElementById('guitarra').addEventListener('mouseleave', displaynone3);
        document.getElementById('ukulele').addEventListener('mouseleave', displaynone4);
            // Função para adicionar a classe hover quando o mouse entra no botão
    function displayflex1() {
      const button = document.getElementById('jshover1');
      button.style.display = 'flex';
    }
    function displayflex2() {
      const button = document.getElementById('jshover2');
      button.style.display = 'flex';
    }
    function displayflex3() {
      const button = document.getElementById('jshover3');
      button.style.display = 'flex';
    }
    function displayflex4() {
      const button = document.getElementById('jshover4');
      button.style.display = 'flex';
    }

    // Função para remover a classe hover quando o mouse sai do botão
    function displaynone1() {
      const button = document.getElementById('jshover1');
      button.style.display = 'none';
    }
    function displaynone2() {
      const button = document.getElementById('jshover2');
      button.style.display = 'none';
    }
    function displaynone3() {
      const button = document.getElementById('jshover3');
      button.style.display = 'none';
    }
    function displaynone4() {
      const button = document.getElementById('jshover4');
      button.style.display = 'none';
    }
    });


