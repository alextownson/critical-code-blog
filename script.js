let menu = false;

function hamburger(x) {
    x.classList.toggle('change');
    if (menu === false){
        document.getElementById('links').style.display = 'block';
        menu = true;
    }else{
        document.getElementById('links').style.display = 'none';
        menu = false;
    };
};