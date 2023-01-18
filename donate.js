 //typing effect for donate speech
 const velocity = 40
 let num = 0
 const speech = `My apologies! being a self taught programmer, 
 I experience a variety of challenges due to inadequate funds; and this affects my productivity and efficiency.
  I would be glad, if I’m donated to. Thanks. `
 
 //function for running h2
 function runspeech (){
  document.getElementById('donate-speech').innerHTML 
  +=speech.charAt(num)
  num++;  
 setTimeout(runspeech, velocity)
 }
 
 runspeech();
 