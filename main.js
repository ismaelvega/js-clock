var inc = 1000;

document.addEventListener('DOMContentLoaded', () => {
  window.button.addEventListener('click', () => {
    if(window.button.classList.contains('isActive')){
      window.button.classList.remove('isActive')
      document.body.style.color = 'black'
      document.querySelector('.card').style.backgroundColor = 'rgba(242, 245, 250, 0.452)'
      document.querySelector('.card').style.border = '1px solid #F2F5FA'
      document.body.style.background = '#D3DDE6'
      document.querySelector('.hour').style.backgroundColor = 'black'
      document.querySelector('.minute').style.backgroundColor = 'black'
      document.querySelector('.dot').style.backgroundColor = 'white'
      document.querySelector('.dot').style.border = '2px solid black'
    } else {
      window.button.classList.add('isActive')
      document.body.style.color = 'white'
      document.querySelector('.card').style.backgroundColor = '#310a5d'
      document.querySelector('.card').style.border = '1px solid #411e8f'
      document.body.style.background = '#2a2438'
      document.querySelector('.hour').style.backgroundColor = 'white'
      document.querySelector('.minute').style.backgroundColor = 'white'
      document.querySelector('.dot').style.backgroundColor = 'black'
      document.querySelector('.dot').style.border = '2px solid white'
    }

  })
})
clock();
function clock() {
  const date = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  document.querySelector('.current-date').textContent = `${days[date.getDay()]}, ${months[date.getMonth()].slice(0, 3)} ${date.getFullYear()}`
  document.querySelector('.current-date-top-bar').textContent = `${days[date.getDay()].slice(0, 3)}, ${months[date.getMonth()].slice(0, 3)} ${date.getFullYear()}`
  const hours = ((date.getHours() + 11) % 12 + 1);
  // console.log(hours)
  const minutes = date.getMinutes();
  // console.log(minutes)
  const seconds = date.getSeconds();
  // console.log(seconds)
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  const h = (hours < 10) ? "0" + hours : hours;
  const m = (minutes < 10) ? "0" + minutes : minutes;
  const s = (seconds < 10) ? "0" + seconds : seconds;
  document.querySelector('.hours').innerHTML = h;
  document.querySelector('.mins').innerHTML = m;
  document.querySelector('.secs').innerHTML = s;
  document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
  document.querySelector('.second').style.transform = `rotate(${second}deg)`
}

setInterval(clock, inc);

