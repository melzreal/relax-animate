const wrapper = document.getElementById('container');
const text = document.getElementById('text');
const totalTime = 10000;
const breatheInAndOut = (totalTime / 5) * 2;
const holdIn = totalTime / 3;

relaxAnimation();


function relaxAnimation(){
  text.innerText = 'breathe in'
  wrapper.className = 'container expand'

 setTimeout(() => {
  text.innerText = 'pause'

  setTimeout(() => {
    text.innerText = 'breathe out'
    wrapper.className = 'container reduce'
  }, holdIn)

 }, breatheInAndOut) 
}


setInterval(relaxAnimation, totalTime);
