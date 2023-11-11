document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um ouvinte de evento a todas as divs com a classe .interactive-image
    document.querySelectorAll('.interactive-image').forEach(imageContainer => {
        imageContainer.addEventListener('click', function () {
            // Obtem os elementos filho (imagem e parágrafo)
            const image = imageContainer.querySelector('img');
            const nameElement = imageContainer.querySelector('p');

            // Obtém os atributos de dados
            const sound = imageContainer.getAttribute('data-sound');
            const name = imageContainer.getAttribute('data-name');

            // Criação do elemento de áudio para a buzina clicada
            const buzina = new Audio(sound);

            // Reproduz o som correspondente à imagem clicada
            buzina.play();

            // Exibe o nome da buzina na consola (pode ser removido em produção)
            console.log(`Buzina Clicada: ${name}`);
        });
    });
});
