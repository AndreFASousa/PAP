import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight h-50 d-inline-block">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/barreiro.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text h-50 d-inline-block">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Olá! <br />Sou o André!</h1>
                          <p><a className="btn-primary" href="https://docs.google.com/document/d/1QD45SVa2s6nOveKV3NfDLf7hh4spO6zg_zBjnVAY_is/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Ver o currículo<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text h-50 d-inline-block">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Adoro aprender<br /> coisas novas!!</h1>
                          <p><a className="btn-primary" href="https://github.com/AndreFASousa" target="_blank" rel="noopener noreferrer">Ver <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/miradouromacela.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text h-50 d-inline-block">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Gosto de aprender <br/>coisas novas ... </h1>
                          <p><a className="btn-primary" href="https://www.instagram.com/andrealmeidasousa" target="_blank" rel="noopener noreferrer">Ver o meu IG <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}