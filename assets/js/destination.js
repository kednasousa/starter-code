document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-link');
  const destinationSections = document.querySelectorAll('.container_destination > section');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      const targetId = this.id ? this.id.replace('-link', '') : null;
      const targetSection = targetId ? document.getElementById(targetId) : null;

      if (targetSection && destinationSections.length > 0) {
        // Se a seção alvo existir e estivermos na página de destino, previna o comportamento padrão e alterne as seções
        event.preventDefault();

        // Remove a classe 'active' de todos os links
        links.forEach(link => link.classList.remove('active'));

        // Adiciona a classe 'active' ao link clicado
        this.classList.add('active');

        // Oculta todas as seções
        destinationSections.forEach(section => section.style.display = 'none');

        // Mostra a seção correspondente ao link clicado
        targetSection.style.display = 'block';
      } else {
        // Se a seção alvo não existir, permita a navegação padrão
        // Isso significa que o link levará a uma página diferente
      }
    });
  });
});
