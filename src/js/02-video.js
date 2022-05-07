import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    
const onPlay=  function ({ seconds }) {
 
// const timeUpdateData = {
//     videoplayerCurrentTime: seconds,
// };
//     console.log(timeUpdateData)
//     return timeUpdateData
  
    localStorage.setItem('videoplayer-current-time', seconds);
    console.log(localStorage)
}

player.on('timeupdate', throttle(onPlay,1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));