function toggleNav(){
  var ham = document.querySelector('#nav-toggle .hamburger');
  ham.classList.toggle('closed');
  ham.classList.toggle('open');
  document.querySelector('#main-nav-items').classList.toggle('nav-items-shown');
  document.querySelector('#main-content').classList.toggle('main-content-moved');
}

document.querySelector('#nav-toggle').addEventListener('click', function(e){
  toggleNav()
});

document.querySelector('#main-nav-items').addEventListener('click', function(e) {
  if(this.classList.contains('nav-items-shown') && e.target.nodeName == 'A' ){
    toggleNav()
  }
});
