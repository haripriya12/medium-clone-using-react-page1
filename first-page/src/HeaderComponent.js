import React, { Component } from 'react';
import './App.css';
function HeaderComponent (){
    return(
      <div>
      <div className="main-container">
      <div className="logo">
        <h1>Medium</h1>  
      </div>
      <div className="searchbox">   
        <i className="fas fa-search" />        
      </div>       
      <div className="mem">        
        <a href="#">Become a Member</a>            
      </div>         
      <div className="login-form">                   
        <a href="#">Sign in</a>                           
        <a href="#" className="rect">Get started</a>
      </div>
      </div>
      <div className="tags">
        <a href="#" className="home">HOME</a>
        &nbsp; 
        <a href="#">ONEZERO</a>
        &nbsp;  
        <a href="#">ELEMENTAL</a> 
        &nbsp; 
        <a href="#">HEATED</a>
        &nbsp;
        <a href="#" className="t1">TECH</a> 
        &nbsp; 
        <a href="#" className="t1">STARTUPS</a>
        &nbsp; 
        <a href="#" className="t1">SELF</a> 
        &nbsp; 
        <a href="#" className="t1">POLITICS</a> 
        &nbsp; 
        <a href="#" className="t1">HEALTH</a>
        &nbsp; 
        <a href="#" className="t1">DESIGN</a> 
        &nbsp; 
        <a href="#" className="t1">HUMAN PARTS</a>
        &nbsp; 
        <a href="#" className="t1">MORE</a>           
      </div>
      </div>
       
        // <h4>
        //   <Link to="/search"><i class="fa fa-search"  aria-hidden="true"></i>
        //   </Link>
        //   <Link to="/signin"> LOGIN </Link>
        //   <Link to="/become a member"> Become a member </Link>
        //   <Link to="/become a member"> Become a member </Link>
        // </h4>
    )
}

export default HeaderComponent;