
//1) Установка 5 скоростей. Используется https://vjs.zencdn.net/7.7.5/video.js
let speedRates = [0.25, 0.5, 1, 1.5, 2];

let myPlayer = videojs('my-video', {
    playbackRates: speedRates,
});

//2) Запись и воспроизведение с последнего сохраненного места. 
// Используется https://vjs.zencdn.net/7.7.5/video.js
function playFromLastPlace() {
    myPlayer.on('timeupdate', function() {
        localStorage.setItem('lastRecordedTime', myPlayer.currentTime());
    });
    
    myPlayer.currentTime(localStorage.getItem('lastRecordedTime'));
}
playFromLastPlace();

//3) Preview on scroll. Используется videojs-sprite-thumbnails.js. 
function previewOnScroll() {
    myPlayer.spriteThumbnails({
          interval: 5,
          url: './media/thumbnails/80p-00001.jpg',
          width: 142,
          height: 80
    });
}

previewOnScroll();




