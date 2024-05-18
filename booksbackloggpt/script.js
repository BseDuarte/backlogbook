function addImage(cellId) {
    const input = document.getElementById('uploadImage');
    const cell = document.getElementById(cellId);

    if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Imagem adicionada';
            img.style.maxWidth = '300px'; // Ajuste o tamanho da imagem conforme necessário
            img.style.marginTop = '10px';

            // Limpa o container antes de adicionar uma nova imagem
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);

            saveImage(cellId, e.target.result);
        }

        reader.readAsDataURL(file);
    } else {
        alert('Nenhum arquivo selecionado.');
    }

    function saveImage(cellId, imageSrc) {
            let savedImages = JSON.parse(localStorage.getItem('savedImages')) || {};

            savedImages[cellId] = imageSrc;

            localStorage.setItem('savedImages')
    }
}
