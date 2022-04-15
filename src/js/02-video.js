import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEOPLAYER_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const videoPlayerTime = localStorage.getItem(VIDEOPLAYER_KEY);

if (videoPlayerTime) {
  player.setCurrentTime(videoPlayerTime);
}

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime() {
  player.getCurrentTime().then(seconds => {
    localStorage.setItem(VIDEOPLAYER_KEY, seconds);
  });
}
