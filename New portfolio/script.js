const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show')
      } else {
          entry.target.classList.remove('show')
      }
  });
});





const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));











// -----------Toggle icon ----------
let menuIcon = document.querySelector('#menu-icon');  
let navBar = document.querySelector('.navbar');  

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
}









// scroll section
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')



window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
        navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').
            classList.add('active');
        });
        sec.classList.add('show-animate')
    }
    else{
      sec.classList.remove('show-animate')
    }
    
  });


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    menuIcon.classList.remove('bx-x');
  navBar.classList.remove('active');
};


const box = document.querySelectorAll('#box')
window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes(){
  const trigBottom= window.innerHeight / 5 * 4;
  box.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if(boxTop < trigBottom){
      box.classList.add('show')
    }else{
      box.classList.remove('show')
    }
  })
}

