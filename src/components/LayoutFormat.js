function resize() {
    let fullscreenWidth = document.getElementsByClassName('fullscreen-width');
    for (let elm of fullscreenWidth) {
      // console.log(elm);
      let rect = elm.getBoundingClientRect();
      let marginLeft = rect.left + 0;
      elm.style.cssText = "position: relative; width: 100vw; margin-left: -" + marginLeft + "px;";
    }
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    resize();
  });
  
  window.onresize = () => {
    console.log('window resized');
    resize();
  }