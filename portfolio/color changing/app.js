let colorInput=document.getElementById('color-input');
colorInput.addEventListener('keyup',function(e){
    document.body.style.background=e.target.value;

})