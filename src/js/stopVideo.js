(() => {
  const iframe = document.querySelector('iframe');
  const video = document.querySelector('video');
  const closeVideo = document.querySelector('[data-video]');

  const stopPlay = () => {
    if (iframe) {
      let iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
    if (video) {
      video.pause();
    }
  };

  closeVideo.addEventListener('click', stopPlay);
})();
