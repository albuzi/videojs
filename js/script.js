
//1) Установка 5 скоростей. Используется https://vjs.zencdn.net/7.7.5/video.js
let speedRates = [0.25, 0.5, 1, 1.5, 2];

let myPlayer = videojs('my-video', {
    playbackRates: speedRates
});

//2) Запись и воспроизведение с последнего сохраненного места. 
// Используется https://vjs.zencdn.net/7.7.5/video.js
function playFromLastPlace() {
    myPlayer.on('timeupdate', function() {
        localStorage.setItem('lastRecordedTime', myPlayer.currentTime());
    });
    
    myPlayer.currentTime(localStorage.getItem('lastRecordedTime'));
};
playFromLastPlace();

//3) Preview on scroll. Используется videojs.thumbnails.js. 
// Реализовано только отображение preview. Создание 
// Нарезаются кадры (на бэкенде) через определенную периоды времени и в скрипте 
// задается их отображение, например, каждые 30 секунд 
function previewOnScroll() {
    const myVideo = document.querySelector('video');
    myVideo.onloadedmetadata = function b() {
        let videoDuration = myVideo.duration;
        let timeToImage = {}; //json хранит период отображения соответствующей preview image
        let intervalThumbs = 30;
        for (let i = 0; i < videoDuration; i += intervalThumbs) {
            timeToImage[i] = {
                src: `c${i/intervalThumbs}.png`
            }
        }
        myPlayer.thumbnails(timeToImage);
    };
};

previewOnScroll();