import React, { Component} from 'react';

class Landing extends Component {

  constructor(props){
    super(props);
    this.codeWorkAnm = {}
  }

  componentDidMount(){
    var pos = window.pageYOffset;
    var height = window.innerHeight || window.clientHeight;

    window.addEventListener('scroll', this.handleScroll);

    window.onresize = (event) => {
      if((window.innerHeight % 150 > 0 && window.innerHeight % 150 < 10) || (window.innerWidth % 50 > 0 && window.innerWidth % 50 < 10) && pos < height){
        clearInterval(this.codeWorkAnm.interval);
        this.handleCodeCanvas();
      }
    };

    this.handleCodeCanvas();
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.codeWorkAnm.interval);
  }

  handleScroll = () => {
      var pos = window.pageYOffset;
      var height = window.innerHeight || window.clientHeight;

      if (pos < height) {
        var html = document.querySelector('.landing__html');
        var css = document.querySelector('.landing__css');
        var js = document.querySelector('.landing__js');
        var php = document.querySelector('.landing__php');
        var ruby = document.querySelector('.landing__ruby');


        html.style.transform = 'translate(' + Math.floor(pos / 8) + '%,' + Math.floor(pos / 5) + '%)';
        css.style.transform = 'translate(' + Math.floor(pos / -8) + '%,' + Math.floor(pos / -5) + '%)';
        js.style.transform = 'translate(' + Math.floor(pos / 8) + '%,' + Math.floor(pos / -12) + '%)';
        php.style.transform = 'translate(' + Math.floor(pos / 8) + '%,' + Math.floor(pos / -42) + '%)';
        ruby.style.transform = 'translate(' + Math.floor(pos / -5) + '%,' + Math.floor(pos / -5) + '%)';

        if (this.codeWorkAnm.running === false) {
          this.codeWorkAnm.interval = setInterval(this.codeWorkAnm.putPixel, 66);
          this.codeWorkAnm.running = true;
        }
      } else if (this.codeWorkAnm.running === true) {
        clearInterval(this.codeWorkAnm.interval);
        this.codeWorkAnm.running = false;
      }
  }

  handleCodeCanvas = () => {
    this.codeWorkAnm.codeCanvas = document.getElementById("code-canvas");
    this.codeWorkAnm.codeCanvas.height = window.innerHeight - 0;
    this.codeWorkAnm.codeCtx = this.codeWorkAnm.codeCanvas.getContext("2d");
    this.codeWorkAnm.codeCanvas.width = window.innerWidth;
    this.codeWorkAnm.floatChar = "0123456789abcdefghijklmnopqrstuvwxyz<>{}%=-+[]#.?".split("");
    this.codeWorkAnm.font_size = window.innerWidth / 40;
    this.codeWorkAnm.col = this.codeWorkAnm.codeCanvas.width;
    this.codeWorkAnm.charDrops = [];
    this.codeWorkAnm.running = true;

    for (var i = 0; i < this.codeWorkAnm.col; i++) {
      this.codeWorkAnm.charDrops[i] = 1;
    }

    this.codeWorkAnm.putPixel = () => {
      this.codeWorkAnm.codeCtx.fillStyle = "rgba(255, 255, 255, 0.05)";
      this.codeWorkAnm.codeCtx.fillRect(0, 0, this.codeWorkAnm.codeCanvas.width, this.codeWorkAnm.codeCanvas.height);
      this.codeWorkAnm.codeCtx.fillStyle = "rgba(0, 0, 0, 0.35)";
      this.codeWorkAnm.codeCtx.font = this.codeWorkAnm.font_size + " arial";
      for (var i = 0; i < this.codeWorkAnm.charDrops.length; i++) {
        var txt = this.codeWorkAnm.floatChar[Math.floor(Math.random() * this.codeWorkAnm.floatChar.length)];
        this.codeWorkAnm.codeCtx.fillText(txt, i * this.codeWorkAnm.font_size, this.codeWorkAnm.charDrops[i] * this.codeWorkAnm.font_size);
        if (this.codeWorkAnm.charDrops[i] * this.codeWorkAnm.font_size > this.codeWorkAnm.codeCanvas.height && Math.random() > 0.975) {
          this.codeWorkAnm.charDrops[i] = 0;
        }
        this.codeWorkAnm.charDrops[i]++;
      }
    }
    this.codeWorkAnm.interval = setInterval(this.codeWorkAnm.putPixel, 66);
  }

  render(){
    return (
      <div className="landing">
        <canvas id="code-canvas"></canvas>
        <img src="images/html.svg" alt="HTML icon" className="landing__html" />
        <img src="images/css.svg" alt="CSS icon" className="landing__css" />
        <img src="images/js.svg" alt="JS icon" className="landing__js" />
        <img src="images/php.svg" alt="PHP icon" className="landing__php" />
        <img src="images/ruby.svg" alt="Ruby icon" className="landing__ruby" />
      </div>
    )
  }
}


export default Landing;
