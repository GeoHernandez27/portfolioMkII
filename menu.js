// open and hide menu 

function openNav() {
    document.getElementById('side-nav').style.width = '250px';
    document.getElementById('overlay').style.display = 'block'
    
}

function closeNav() {
    document.getElementById('side-nav').style.width = '0';
    document.getElementById("overlay").style.display = "none";
} 

