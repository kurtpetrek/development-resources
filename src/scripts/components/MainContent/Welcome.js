import React, {Component} from 'react';

class Welcome extends Component {
  
  constructor(props){
    super(props);
    this.headingChanger = {};
  }

  componentDidMount() {
    this.handleChanger();
  }

  componentWillUnmount() {
    clearInterval(this.headingChanger.inter);
  }

  handleChanger = () => {
    this.headingChanger = {
    el: document.querySelector('#main-heading__changer'),
    changing: true,
    text1: 'Begins'.split(''),
    text2: 'Continues'.split(''),
    text3: 'Never Ends'.split(''),
    current: 1,
    interFun: () => {
      var text = '';
      if (this.headingChanger.current === 1){
        text = this.headingChanger.text1.slice();
        this.headingChanger.current++;
      } else if (this.headingChanger.current === 2) {
        text = this.headingChanger.text2.slice();
        this.headingChanger.current++;
      } else {
        text = this.headingChanger.text3.slice();
        this.headingChanger.current = 1;
      }

      text.forEach(function(x, i, a) {
        if (x !== ' '){
          a[i] = '<span style="animation-delay: ' + i / 5 + 's;">' + a[i] + '</span>';
        }
      });
      text = text.join('');
      this.headingChanger.el.innerHTML = text;

      setTimeout( () => {
        var text = this.headingChanger.el.innerText.split('');
        text.forEach(function(x, i, a) {
          if (x !== ' '){
            a[i] = '<span style="animation-direction: reverse">' + x + '</span>';
          }
        });
        text = text.join('');
        this.headingChanger.el.innerHTML = text;

      }, 4000);
    }
    };

    this.headingChanger.interFun();
    this.headingChanger.inter = window.setInterval(this.headingChanger.interFun, 7000);
  }

  render() {
    return (
      <div>
        <h1 id="main-heading">
          The Journey
          <br />
          <span id="main-heading__changer">Begins</span>
        </h1>

        <p>
          This is a site of resources to help you on your web development journey. These are all resources that I have used and continue to use as I strive to become a better developer.
        </p>
        <p>
          Contact me at <a href="//kurtpetrek.com/contact" target="_blank" rel="noopener noreferrer">KurtPetrek.com/contact</a> to add additional resources that have helped you.
        </p>
      </div>
    )
  }
}

export default Welcome;
