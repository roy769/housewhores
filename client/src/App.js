import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
{/* 0 */}
    <nav className="navbar navbar-expand-sm navbar-light blue-grey lighten">
      <div className="animated fadeIn">
        <h1 className="logo animated bounce infinite ">House Whores</h1>
      </div>
    </nav>
      <div className="container-fluid">
          <div className="row blue-grey lighten-3">
            <div className="col-xl-4 animated fadeIn"><img className="animated slideInLeft" src="https://media.giphy.com/media/pAjfVmRiGARfa/giphy.gif"></img>
          </div>
              <div className= "col-xl-4 animated fadeIn">
                <iframe className="loop" title="massive"></iframe>
              </div>
              <div className="col-xl-4 animated fadeIn right">
                <a className="btn animated rollIn btn-success" data-toggle="col animated fadeInlapsing" href="#col animated fadeInlapseExample" aria-expanded="false" aria-controls="col animated fadeInlapseExample">
       <i class="material-icons">book</i>
   </a>
   <button className="btn animated rollIn btn-success" type="button" data-toggle="col animated fadeInlapse" data-target="#col animated fadeInlapseExample" aria-expanded="false" aria-controls="col animated fadeInlapseExample">
       <i class="material-icons">store</i>
   </button>
 </div>

</div>
</div>
{/*1*/}
      <div className="row align-wrapper">
        <div className="col animated flash infinite">
        <h1 className="logo animated fadeIn infinite center">DJ Devin</h1>
      </div>
      </div>
      <footer>
        <div className="footer-copyright">
        <div className="container-fluid">
            © 2018 Copyright: <a href="esreyconcepts.com"> esreyconcepts<img className="brand" src="https://farm5.staticflickr.com/4600/24162333177_5778c8d26f_t.jpg" width="78" height="100" alt="brand-image"></img></a>

        </div>
    </div>
</footer>

</div>



    );
  }
}

export default App;
