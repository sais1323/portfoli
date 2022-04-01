const c = document.querySelector('#console')
const ss = document.querySelector('#start_screen')
const gv = document.querySelector('#game_vehicle')
const sn = document.querySelector('#speed_needle')
var root = document.documentElement
var bg = 0

function countdown(){
  var num = 1
  var fuel = 1000
  var time = 0  
  var run;
  var play;
  var cdb = document.querySelector('#countdown_box')
  var text = document.querySelector('#countdown_text')
  var secs = 3

  function addNumber() {
    // handle mpg meter
    if(run) {
      num++
      if(num < 181) {
        root.style.setProperty('--speed', 'rotate('+num+'deg)')  
      } else {
        num = 180
      }

    } else {
      num--
      if(num > 0) {
        root.style.setProperty('--speed', 'rotate('+num+'deg)')  
      } else {
        num = 0
      }
    }  

    // handle fuel meter
    if(num > 80 && num < 100) {
      fuel = fuel - 1
    } else {
      fuel = fuel - 3
    }
    if(fuel > 0) {
      ss.style.display = 'none'
      var fperc = fuel / 1000 * 100
      // console.log(num + ' / ' + fuel)
      root.style.setProperty('--fuel', 'rotate('+fperc+'deg)')
    } else {
      run = false
    }

    if(num > 0){
      gv.classList.add('bounce')
      time = time + num
      document.querySelector('#travel_dist').innerHTML = time / 10000  + '<span>miles</span>'
      bg = bg + (num*.25)
      c.style.backgroundPosition = '50% '+bg+'px'
    } else {
      gv.classList.remove('bounce')
    }

    if(fuel <= 0 && num <= 0) {      
      ss.style.display = 'block'
      if(!localStorage.getItem('gas_guzzler')){
        localStorage.setItem('gas_guzzler', time / 10000)
      } else {
        if(time / 10000 > localStorage.getItem('gas_guzzler')) {
          localStorage.setItem('gas_guzzler', time / 10000)
        }
      }      
    } else {
      setTimeout(addNumber, 1000/30)
    }
  }

  text.innerHTML = '3'
  root.style.setProperty('--carDisplay', 'block');
  cdb.classList.add('countdown_pulse')
  setTimeout(function(){
    secs--
    text.innerHTML = secs
  },1000)
  setTimeout(function(){
    secs--
    text.innerHTML = secs
  },2000)
  setTimeout(function(){
    secs--
    text.innerHTML = 'GO!'
    addNumber()
    },3000)  
  setTimeout(function(){
    root.style.setProperty('--carDisplay', 'none');    
  },4000)

  c.addEventListener('mousedown', function(){
    run = true   
  })
  c.addEventListener('mouseup', function(){
    run = false 
  })
  c.addEventListener('touchstart', function(){
    run = true
  })
  c.addEventListener('touchend', function(){
    run = false
  })  

  ss.style.display = 'none'
}

ss.addEventListener('click', countdown)