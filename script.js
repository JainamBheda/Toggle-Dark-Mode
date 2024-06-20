const toggle=document.getElementById('toggledark');
const body=document.querySelector('body');

toggle.addEventListener('click',function(){
    this.classList.toggle('fa-moon')
    if(this.classList.toggle('fa-sun')){
        body.style.transition='1s';
        body.style.background='white';
        body.style.color='black';
    }
    else{
        body.style.background='black';
        body.style.color='white';
        body.style.transition='1s';
    }
});