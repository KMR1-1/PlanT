// toggleMenu.js

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne tous les éléments ayant la classe 'toggle-button'
    const toggleButtons = document.querySelectorAll('.toggle-button');

    // Boucle sur chaque bouton trouvé
    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Récupère l'élément suivant directement après le bouton cliqué
            const content = this.nextElementSibling;

            // Vérifie si le contenu est actuellement visible
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
