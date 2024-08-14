 // Tempo em milissegundos para o footer desaparecer após ser exibido inicialmente
 const delayToHideFooter = 2000; // 5000ms = 5 segundos
   // Seleciona o elemento do menu dropdown
const dropdownMenu = document.querySelector('.dropdown');
const toggleButton = document.getElementById('togglebutton');


     // Exibe o footer ao mover a barra de rolagem
    window.addEventListener('scroll', () => {
    const footer = document.getElementById('footer');
    if (footer.style.opacity == 1) {
      footer.style.opacity = 0;
    } else {
      footer.style.opacity = 1;
    }
  });
 
  // Esconde o footer após certo tempo (opcional)
    setTimeout(() => {
    const footer = document.getElementById('footer');
    footer.style.opacity = 0;
  }, delayToHideFooter);




// Função para verificar a posição da página e mostrar/ocultar o menu conforme necessário
function checkScrollPosition() {
  if (window.pageYOffset > 100) {
    dropdownMenu.style.display = 'none';
  }
}

// Adiciona um ouvinte de evento de rolagem à página
window.addEventListener('scroll', checkScrollPosition);



// Função para alternar a visibilidade do menu dropdown
function toggleDropdown() {
  if (dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'flex';
  } else {
    dropdownMenu.style.display = 'none';
  }
}

// Adiciona um ouvinte de evento de clique ao botão de toggle
toggleButton.addEventListener('click', toggleDropdown);

