import React,{useEffect, useRef, useState} from "react";
import {Route} from "react-router-dom";
import "./styles/App.scss";
import Header from "./component/header";
import gsap from "gsap/gsap-core";
import Navigation from "./component/navigation";
import useWindowSize from "./hooks/useWindowSize";
import ReactGa from "react-ga";

/*import {TweenMax, Power3} from "gsap";
import ScrollMagic from "scrollmagic";
import addIndicators from "scrollmagic";
*/
//pages
import Home from "./pages/home"
import Services from "./pages/services"
import Cc from "./pages/cc"
import Solar from "./pages/solar"
import About from "./pages/aboutus"



const routes=[
  {path:'/',name:'Home', Component:Home},
  {path:'/services' , name:'Services', Component:Services},
  {path:'/Cc' , name:'Cc', Component:Cc},
  {path:'/solar' , name:'Solar', Component:Solar},
  {path:'/about' , name:'About', Component:About},

];


// this funtion used wait for a sec and then refresh the when resize with height and width
function debounce(fn,ms) {
  let timer;
  return()=>{
    clearTimeout(timer);
    timer= setTimeout(()=>{
      timer=null;
      fn.apply(this,arguments);
    },ms);
  };
}



function App(){ 
  

  useEffect(()=>{
    ReactGa.initialize("UA-192985470-1");

    //to report
    ReactGa.pageview('/')
  },[]);


  //for skew scrolling//
  //hook
  const size= useWindowSize();
  
  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {


    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  
  }





  //preventing flash from happening.//  
  gsap.to("body",0,{css:{visibility:"visible"}});

//this is capturing height and width and setting it to height and widht properties
  const[dimensions, setDimensions]=useState({
    height : window.innerHeight,
    width : window.innerWidth
  });
  useEffect(()=>{
    //grab inner height of window fro mobile reasons when dealing with vh
    let vh = dimensions.height*0.01;
    //set css varible vh
    document.documentElement.style.setProperty("--vh",`${vh}px`);


   //******************** */
    //create a function that sets the state to height and widht 
   
    const debounceHandleResize= debounce(function handleResize() {
      setDimensions({
        height:window.innerHeight,
        width:window.innerWidth
      });
    },1000);
    window.addEventListener("resize",debounceHandleResize);

    //removes event listener from window
    return()=>{
      window.removeEventListener("resize", debounceHandleResize);
    };

    //***************************** */
   
    

  
    
})



  return (
    <div ref={app} className="aap">
      <div ref={scrollContainer} className="scroll">
    
        <Header dimensions={dimensions} />
        
          <div className="App">
            {routes.map(({path,Component})=>(
              <Route key={path} exact path={path}>
                <Component/>
              </Route>
            ))}
          </div>
        <Navigation/>
    
      </div>
    </div>
  );
}

export default App;
