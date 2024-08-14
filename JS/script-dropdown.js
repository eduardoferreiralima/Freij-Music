 // Seleciona o elemento do menu dropdown
 const dropdownMenu = document.querySelector('.dropdown');
 const toggleButton = document.getElementById('togglebutton');
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
  
  // Adiciona um ouvinte de evento de clique ao botão para ativar a função toggleDropdown
  toggleButton.addEventListener('click', toggleDropdown);
  checkScrollPosition();