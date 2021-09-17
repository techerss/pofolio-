

// $(function(){

//     $("#st1").click(function(){
//         $(".html").hide();
//     });
// });
// function run(){
//     document.getElementById("html").style.display = none;
// }
// document.getElementById("st1").addEventListener("click", run);

// window.addEventListener('mousemove', jum);
// function jum(e){
   
//     document.querySelectorAll('.text').forEach(layer => {
//         const speed = layer.getAttrbute('data-speed')

//         const x = (window.innerWidth - e.pageX*speed)/100
//         const y = (window.innerHeight - e.pageY*speed)/100

//         layer.style.transform = `translateX(${x}px) translateY(${y}px)`
//     })
// }

const scroolup = document.querySelector('.scroll-up');
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100){
        scroolup.classList.add('active');
    }else{
        scroolup.classList.remove('active');
    }
});