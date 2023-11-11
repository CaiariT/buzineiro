document.addEventListener('DOMContentLoaded', function () {
    let isButtonDisabled = false;

    document.querySelectorAll('.interactive-image').forEach(imageContainer => {
        imageContainer.addEventListener('click', function () {
            if (!isButtonDisabled) {
                isButtonDisabled = true;

                // Obtenha os elementos filho (imagem e parágrafo)
                const image = imageContainer.querySelector('img');
                const nameElement = imageContainer.querySelector('p');

                // Obtenha os atributos de dados
                const sound = imageContainer.getAttribute('data-sound');
                const name = imageContainer.getAttribute('data-name');

                // Crie o elemento de áudio para a buzina clicada
                const buzina = new Audio(sound);

                // Reproduza o som correspondente à imagem clicada
                buzina.play();

                // Exiba o nome da buzina na consola (pode ser removido em produção)
                console.log(`Buzina Clicada: ${name}`);

                // Desative o botão por 2 segundos
                setTimeout(function () {
                    isButtonDisabled = false;
                }, 2000);
            }
        });
    });
});
