const numberOfBtn = document.querySelectorAll('.drum').length

for(let i = 0; i < numberOfBtn; i++){
  document.querySelectorAll('.drum')[i].addEventListener('click',function(){
    let buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml)

  })
}
addEventListener('click',function(e){
  makeSound(e.key)
})

addEventListener('keypress',function(e){
  makeSound(e.key)
})

function makeSound(key){
  if(key == 'a'){
    let tom1 = new Audio('../sounds/tom-1.mp3')
    tom1.play()
  }else if(key == 's'){
    let tom2 = new Audio('../sounds/tom-2.mp3')
    tom2.play()
  }else if(key == 'd'){
    let tom2 = new Audio('../sounds/tom-3.mp3')
    tom2.play()
  }else if(key == 'f'){
    let tom2 = new Audio('../sounds/tom-4.mp3')
    tom2.play()
  }else if(key == 'j'){
    let tom2 = new Audio('../sounds/kick-bass.mp3')
    tom2.play()
  }else if(key == 'k'){
    let tom2 = new Audio('../sounds/crash.mp3')
    tom2.play()
  }else if(key == 'l'){
    let tom2 = new Audio('../sounds/snare.mp3')
    tom2.play()
  }
}
