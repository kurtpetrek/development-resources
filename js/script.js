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

var codeWorkAnm = {};

var headingChanger = {
  el: document.querySelector('#main-heading__changer'),
  changing: true,
  text1: 'Begins'.split(''),
  text2: 'Continues'.split(''),
  text3: 'Never Ends'.split(''),
  current: 1,
  interFun: function(){
    if (headingChanger.current == 1){
      var text = headingChanger.text1.slice();
      headingChanger.current++;
    } else if (headingChanger.current == 2) {
      var text = headingChanger.text2.slice();
      headingChanger.current++;
    } else {
      var text = headingChanger.text3.slice();
      headingChanger.current = 1;
    }

    text.forEach(function(x, i, a) {
      if (x !== ' '){
        a[i] = '<span style="animation-delay: ' + i / 5 + 's;">' + a[i] + '</span>';
      }
    });
    text = text.join('');
    headingChanger.el.innerHTML = text;

    setTimeout(function(){
      var text = headingChanger.el.innerText.split('')
      text.forEach(function(x, i, a) {
        if (x !== ' '){
          a[i] = '<span style="animation-direction: reverse">' + x + '</span>';
        }
      });
      text = text.join('');
      headingChanger.el.innerHTML = text;

    }, 5000);
  }
};

headingChanger.interFun();
headingChanger.inter = window.setInterval(headingChanger.interFun, 9000);

/* Code Canvas
==================================== */
function codeCanvas() {
  codeWorkAnm.codeCanvas = document.getElementById("code-canvas");
  codeWorkAnm.codeCanvas.height = window.innerHeight - 0;
  codeWorkAnm.codeCtx = codeWorkAnm.codeCanvas.getContext("2d");
  codeWorkAnm.codeCanvas.width = window.innerWidth;
  codeWorkAnm.floatChar = "0123456789abcdefghijklmnopqrstuvwxyz<>{}%=-+[]#.?".split("");
  codeWorkAnm.font_size = window.innerWidth / 40;
  codeWorkAnm.col = codeWorkAnm.codeCanvas.width;
  codeWorkAnm.charDrops = [];
  codeWorkAnm.running = true;

  for (var i = 0; i < codeWorkAnm.col; i++) {
    codeWorkAnm.charDrops[i] = 1;
  }

  codeWorkAnm.putPixel = function () {
    codeWorkAnm.codeCtx.fillStyle = "rgba(255, 255, 255, 0.05)";
    codeWorkAnm.codeCtx.fillRect(0, 0, codeWorkAnm.codeCanvas.width, codeWorkAnm.codeCanvas.height);
    codeWorkAnm.codeCtx.fillStyle = "rgba(0, 0, 0, 0.35)";
    codeWorkAnm.codeCtx.font = codeWorkAnm.font_size + " arial";
    for (var i = 0; i < codeWorkAnm.charDrops.length; i++) {
      var txt = codeWorkAnm.floatChar[Math.floor(Math.random() * codeWorkAnm.floatChar.length)];
      codeWorkAnm.codeCtx.fillText(txt, i * codeWorkAnm.font_size, codeWorkAnm.charDrops[i] * codeWorkAnm.font_size);
      if (codeWorkAnm.charDrops[i] * codeWorkAnm.font_size > codeWorkAnm.codeCanvas.height && Math.random() > 0.975) {
        codeWorkAnm.charDrops[i] = 0;
      }
      codeWorkAnm.charDrops[i]++;
    }
  }
  codeWorkAnm.interval = setInterval(codeWorkAnm.putPixel, 66);
}

codeCanvas();









window.onresize = function (event) {
  if((window.innerHeight % 150 > 0 && window.innerHeight % 150 < 10) || (window.innerWidth % 50 > 0 && window.innerWidth % 50 < 10)){
    clearInterval(codeWorkAnm.interval);
    codeCanvas();
  }
};

window.addEventListener('scroll', function (e) {
  var pos = window.pageYOffset;
  var width = window.innerHeight || window.clientHeight;

  if (pos < width) {
    var html = document.querySelector('.landing__html');
    var css = document.querySelector('.landing__css');
    var js = document.querySelector('.landing__js');
    var php = document.querySelector('.landing__php');
    var ruby = document.querySelector('.landing__ruby');
    var scale = 1;
    // if (pos > 1 && Math.round((pos / 200) * 10) / 10 > 1) {
    //   scale = Math.round((pos / 200) * 10) / 10;
    // }

    html.style.transform = 'translate(' + Math.floor(pos / 8) + '%,' + Math.floor(pos / 5) + '%)';
    css.style.transform = 'translate(' + Math.floor(pos / -8) + '%,' + Math.floor(pos / -5) + '%)';
    js.style.transform = 'translate(' + Math.floor(pos / 8) + '%,' + Math.floor(pos / -12) + '%)';
    php.style.transform = 'translate(' + Math.floor(pos / 8) + '%,' + Math.floor(pos / -42) + '%)';
    ruby.style.transform = 'translate(' + Math.floor(pos / -5) + '%,' + Math.floor(pos / -5) + '%)';

    if (codeWorkAnm.running === false) {
      codeWorkAnm.interval = setInterval(codeWorkAnm.putPixel, 66);
      codeWorkAnm.running = true;
    }
  } else if (codeWorkAnm.running === true) {
    clearInterval(codeWorkAnm.interval);
    codeWorkAnm.running = false;
  }

})
