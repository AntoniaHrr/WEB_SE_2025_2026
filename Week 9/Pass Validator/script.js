let pass = document.querySelector('input');
let submitButton = document.querySelector('input-card button');
let message = document.getElementById('message');
let strength = document.getElementById('strength');

pass.addEventListener('input', function(){
    if(pass.value.length> 0){
        message.style.display = 'block';
    }
    else{
        message.style.display = 'none';
    }

    if(pass.value.length < 4){
        strength.innerHTML = "weak";
        message.style.color = '#ff5925';
        pass.style.borderColor = '#ff5925';
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        strength.innerHTML = "medium";
        message.style.color = 'yellow';
        pass.style.borderColor = 'yellow';
    }
    else{
        strength.innerHTML = "strong";
        message.style.color = '#26d730';
        pass.style.borderColor = '#26d730';
    }

})
