const btn = document.getElementsByClassName('question');

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(){
        const x = this.nextElementSibling;
        this.classList.toggle('active');
        if (x.style.display === 'block') {
            x.style.display = 'none';
        }
        else {
            x.style.display = 'block';
            
        }
    })
}