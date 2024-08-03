function goToPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');

    if (pageId !== 'photos-page') {
        stopMusic();
    }
}

function chooseGender(gender) {
    const buttons = document.querySelectorAll('button');
    if (gender === 'male') {
        buttons.forEach(button => button.classList.remove('female-btn'));
        buttons.forEach(button => button.classList.add('male-btn'));
    } else {
        buttons.forEach(button => button.classList.remove('male-btn'));
        buttons.forEach(button => button.classList.add('female-btn'));
    }
    goToPage('love-search-page');

}

function loveSearch(answer) {
    if (answer === 'yes') {
        goToPage('yes-page');
    } else {
        goToPage('no-page');
    }
}

function alreadyLove(answer) {
    if (answer === 'yes') {
        goToPage('true-love-page');
    } else {
        goToPage('no-love-page');
    }
}

function showTrueLove() {
    goToPage('show-love-page');
}

function showPhotos() {
    const photosContainer = document.getElementById('photos-container');
    photosContainer.innerHTML = '';

    

    const photoUrls = ['imagenes/imagen.jpeg', 'imagenes/imgen 1.jpeg', 'imagenes/imagen 2.jpeg', 'imagenes/imagen 3.jpeg', 'imagenes/imagen 4.jpeg']; 
     

    let index = 0;

    const interval = setInterval(() => {
        if (index >= photoUrls.length) {
            clearInterval(interval);
        } else {
            const img = document.createElement('img');
            img.src = photoUrls[index];
            photosContainer.innerHTML = '';
            photosContainer.appendChild(img);
            index++;
        }
    }, 5000);

    

playMusic();

goToPage('photos-page');
}

function playMusic() {
const music = document.getElementById('background-music');
music.play();
}

function stopMusic() {
const music = document.getElementById('background-music');
music.pause();
music.currentTime = 0;
}

