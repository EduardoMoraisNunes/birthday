birthday = new Audio('audio/happyfazbearbirthday.wav')
bite = new Audio('audio/bite.mp3')
card = document.getElementById('textboxwrap')
card.addEventListener('click', startevent)
burn = 0
function startevent(){
  card.removeEventListener('click', startevent)
  document.getElementById('doublesided').style.animation = 'open 0.5s linear forwards' 
  document.getElementById('doublesidedinside').style.animation = 'open2 0.5s linear forwards' 
  document.getElementById('textbox').style.animation = 'movetextbox 0.5s linear forwards' 
  card.addEventListener('click', finishevent)
  birthday.play()
  document.title = 'Happy Birthday'
}
function finishevent(){
  card.removeEventListener('click', finishevent)
  document.getElementById('doublesided').style.animation = 'openreverse 0.5s linear forwards' 
  document.getElementById('doublesidedinside').style.animation = 'openreverse 0.5s linear forwards' 
  document.getElementById('textbox').style.animation = 'openreverse 0.5s linear forwards' 
  card.addEventListener('click', startevent2)
  birthday.pause()
  document.title = 'A card'
}
function startevent2(){
  document.title = 'Happy Birthday'
  card.removeEventListener('click', startevent2)
  document.getElementById('doublesided').style.animation = 'open 0.01s linear forwards' 
  document.getElementById('doublesidedinside').style.animation = 'open2 0.01s linear forwards' 
  document.getElementById('textbox').style.animation = 'movetextbox 0.01s linear forwards' 
  ++burn
  if (burn >= 5) {
    document.getElementById('fire').style.animation = 'stop 0.6s linear forwards' 
    birthday.pause()
    bite.play()
  } else {
    card.addEventListener('click', finishevent2)
    birthday.play()
  }
  burntime = setTimeout(() => {
    burn = 0
  }, 1000);
}
function finishevent2(){
  card.removeEventListener('click', finishevent2)
  document.getElementById('doublesided').style.animation = 'openreverse 0.1s linear forwards' 
  document.getElementById('doublesidedinside').style.animation = 'openreverse 0.1s linear forwards' 
  document.getElementById('textbox').style.animation = 'openreverse 0.1s linear forwards' 
  card.addEventListener('click', startevent2)
  birthday.pause()
  clearTimeout(burntime, 1000)
  document.title = 'A card'
}