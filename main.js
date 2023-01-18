//typing effect for h2
const speed = 40
let counter = 0
const text = `Hi, I'm Oladax, a web-developer and cybersecurity enthusiast. Take note, 
All data and information is provided “as is” for informational purposes only,
 and is not intended for trading purposes or financial, investment,
tax, legal, accounting or other advice.
Thanks for your co-operation.`

//function for running h2
function executeword (){
 document.querySelector('p').innerHTML 
 +=text.charAt(counter)
 counter++;  
setTimeout(executeword, speed)
}

executeword();


// carousel code
 const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const images = document.querySelector('.carousel').children;
    const totalImages = images.length;
    
    let index = 0;
    
    prev.addEventListener('click', () => {
            nextImage('next');
    })
    
    next.addEventListener('click', () => {
      nextImage('prev');
    })
    
    function nextImage(direction) {

     

      if(direction == 'next') {
        index++;
        if(index == totalImages) {
          index = 0;
        }
      } else {
        if(index == 0) {
          index = totalImages - 1;
        } else {
          index--;
        }
      }
    
      for(let i = 0; i < images.length; i++) {
        images[i].classList.remove('main');
      }
      images[index].classList.add('main');
    }
   

    //dark mode code
    let changemode = document.getElementById('changemode');
    let moon = document.querySelector('.moon');
    let sun = document.querySelector('.sun');
    let body = document.querySelector('body');
    let introductory = document.querySelector('.introductory');
    let content = document.querySelector('.content');
    let footer = document.querySelector('footer');
    

    function darkmode(){
      changemode.classList.toggle('active');
      moon.classList.toggle('active');
      sun.classList.toggle('active');
      body.classList.toggle('active');
      introductory.classList.toggle('active');
      content.classList.toggle('active');
      footer.classList.toggle('active')
    }

    //function for menu bar and anchor class
    let anchor = document.querySelectorAll('.anchor');
    let menuicon = document.querySelector('.menu-con');


    function menu(){
      menuicon.classList.toggle('active');
      
    }
      
    
   // fo
    anchor.forEach(anchor => {
      anchor.onclick = () =>{
        menuicon.classList.toggle('active');

      }
    })

   