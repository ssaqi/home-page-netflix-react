import React from 'react'
import'./Home.css'
import IMG from '../assesst/yes.jpg'
import IMG1 from '../assesst/tv.png'
import IMG2 from '../assesst/mobile-0819.jpg'
import IMG3 from '../assesst/kids.png'
import Main from '../Main/Main'
function Home() {
  return (
    <>

<div className='container-fuild bg-dark bg' >

  <div className='container'>

  <nav className="navbar navbar-expand-lg ">
  <div className="container-md">
    <a className="navbar-brand text-white bold-4" href="#">
      Navbar
    </a>
  <button className='btn btn-danger'>
    Sign up
    
    </button>

  </div>
</nav>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<center>
<h1 className="card-title text-white f">Unlimited movies, TV </h1>
<h1 className="card-title text-white f">shows, and more.</h1>
<br/>
<p className="card-text text-white p">Watch anywhere. Cancel anytime.
</p>
<p className="card-text text-white p2">Ready to watch? Enter your email to create or restart your membership.
</p>
<br></br>
 
  <button type="button" Link to ='../Main/Main' className="btn btn-danger btn-lg">
 <a href='../Main/Main.jsx'>Start</a> 
  </button>




</center>

</div>    
</div>

<div className='container-fluid bg-dark'>
 //main div   
<div className='container-fluid bg-black'>
    <br></br><br></br>
    <br></br><br></br>
<div className='container'>
<div className="card mb-3 bg-black" style={{ maxWidth: 1200 }}>
  <div className="row g-0">
    <div className="col-md-8">
      <div className="card-body bg-black">
        <h5 className="card-title text-white f">Enjoy on your TV.</h5>
        <p className="card-text text-white p">
        Watch on Smart TVs,
        <br/>
        Playstation, Xbox, Chromecast,
        Apple TV, <br/>
        Blu-ray players, and more..
        </p>
        <p className="card-text text-white">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
    <div className="col-md-4 ">
      <img src={IMG1} className="img-fluid rounded-start" alt="..." />
      <br></br><br></br>
      <br></br><br></br>
    </div>
  </div>
</div>
</div>
</div>

<div className='container-fluid bg-black'>
    <br></br><br></br>
    <br></br><br></br>
<div className='container'>
<div className="card mb-3 bg-black" style={{ maxWidth: 1200 }}>
  <div className="row g-0">
  <div className="col-md-4 ">
      <img src={IMG2} className="img-fluid rounded-start" alt="..." />
      <br></br><br></br>
      <br></br><br></br>
    </div>
    <div className="col-md-8">
      <div className="card-body bg-black">
        <h5 className="card-title text-white f">Download your shows <br/> to watch offline.</h5>
        <p className="card-text text-white p">
       Save your favorites easily and always have something to watch.
        </p>
        <p className="card-text text-white">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
</div>

<div className='container-fluid bg-black'>
    <br></br><br></br>
    <br></br><br></br>
<div className='container'>
<div className="card mb-3 bg-black" style={{ maxWidth: 1200 }}>
  <div className="row g-0">
  <div className="col-md-4 ">
      <img src={IMG3} className="img-fluid rounded-start" alt="..." />
      <br></br><br></br>
      <br></br><br></br>
    </div>
    <div className="col-md-8">
      <div className="card-body bg-black">
      <br></br>
        <h5 className="card-title text-white m-3 f">
            
           Create profiles for kids.
            </h5>
        <p className="card-text text-white p">
          
          Send kids on adventures with their favorite characters <br/>in a space made just for them—free with your membership.
        </p>
        <p className="card-text text-white">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
</div>

</div>    
    </>
  )
}

export default Home