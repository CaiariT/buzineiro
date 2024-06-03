document.addEventListener('DOMContentLoaded', function () {
    let isButtonDisabled = false;
    let buzina;

    document.querySelectorAll('.interactive-image').forEach(imageContainer => {
        imageContainer.addEventListener('click', function () {
            if (!isButtonDisabled) {
                isButtonDisabled = true;
                const image = imageContainer.querySelector('img');
                const nameElement = imageContainer.querySelector('p');
                const sound = imageContainer.getAttribute('data-sound');
                const name = imageContainer.getAttribute('data-name');

                buzina = new Audio(sound);
                const volumeSlider = document.getElementById('volumeSlider');

                buzina.volume = volumeSlider.value;
                buzina.play();
                console.log(`Buzina Clicada: ${name}`);
                //tempo que a buzina fica ativa
                setTimeout(function () {
                    isButtonDisabled = false;
                }, 1000);
            }
        });
    });

    const volumeSlider = document.getElementById('volumeSlider');
    volumeSlider.addEventListener('input', function () {
        if (buzina) {
            buzina.volume = volumeSlider.value;
        }
    });
});
