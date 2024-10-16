// Temporiser l'intro pendant 3 secondes avant d'afficher le contenu principal
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('intro-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000); // 3000 millisecondes = 3 secondes
});
