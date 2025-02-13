document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('memeContainer').style.display = 'block';
    playChimeSound();
    showMemes();
});

function playChimeSound() {
    var sound = document.getElementById('chimeSound');
    sound.play();
}

function showMemes() {
    // Here you can dynamically fetch memes from a source
    // For now, we will show a simple set of images
    const memes = [
        "https://i.imgur.com/D9gD4GJ.jpg", // Example meme image
        "https://i.imgur.com/2QkWzq8.jpg"  // Example meme image
    ];
    const memeContainer = document.getElementById('memeContainer');
    memeContainer.innerHTML = '';
    memes.forEach(meme => {
        const img = document.createElement('img');
        img.src = meme;
        img.alt = "Funny Meme";
        img.classList.add('meme');
        memeContainer.appendChild(img);
    });
}
