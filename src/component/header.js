import React, { useEffect, useState } from "react";
import gsap from "gsap";
import {ReactComponent as UparrowCircle} from "../assets/circlearrow.svg";
import {NavLink,withRouter} from "react-router-dom";


const Header=({history, dimensions})=>{

    useEffect(()=>{
      //gsap animatin//
      const tl = gsap.timeline();
      tl.from(".header",2 , {
        opacity:0,
        ease:"power4.out",
        delay:1,
        skewY:1,
        stagger:{
          amount:0.3
        }
      });

    },[]);


    let tl2 = gsap.timeline();

    //we should know when the menu is open and we trigger animation 
    const [menuState, setMenuState]= useState({menuOpened: false });

    useEffect(()=>{

      //
      history.listen(()=>{
          setMenuState({menuOpened: false});
      })

      //if menu is opened
      if(menuState.menuOpened === true){
        
        //run open menu animation
        gsap.to("nav",{css:{display:"block"}});
        gsap.to('body',{css:{overflow:"hidden"}});
        
        tl2.to('.App',{duration:1,
        y: dimensions.width <= 654 ? "70vh" : (dimensions.height/1.3)+window.scrollY,
      ease:"expo.inOut"})
      .to('.nav-toggle span',{
        duration:0.3,
        delay:-1,
        scaleX:0,
        transformOrigin:"50% 0%",
        ease:"expo.inOut"
      }).to('#Path_1',{
        duration:0.6,
        delay:-0.6,
        css:{
          strokeDashoffset:10,
          strokeDasharray:5
        }
      }).to('#Path_2',{
        duration:0.6,
        delay:-0.6,
        css:{
          strokeDashoffset:10,
          strokeDasharray:20
        }
      }).to('#Line_1',{
        duration:0.6,
        delay:-0.6,
        css:{
          strokeDashoffset:40,
          strokeDasharray:18
        }
      }).to('#circle',{
        duration:0.6,
        delay:-0.8,
        css:{
          strokeDashoffset:0
         
        }
      }).to('.hamburger-close',{
        duration:0.6,
        delay:-0.8,
        css:{
          display:"block",
         
        }
      })
      //if menu is closing
      }else{
        //run close menu animation
        tl2.to('.App',{
          duration:1,
          y:0,
          ease:'expo.inOut'
        }).to('#circle',{
          duration:.6,
          delay:-.6,
          css:{
            strokeDashoffset:-193,
            strokeDasharray:227
          }
        }).to('#Path_1',{
          duration:0.4,
          delay:-.6,
          css:{
            strokeDashoffset:10,
            strokeDasharray:10
          }
        }).to('#Path_2',{
          duration:.4,
          delay:-0.6,
          css:{
            strokeDashoffset:10,
            strokeDasharray:10
          }
        }).to('#Line_1',{
          duration:.4,
          delay:-0.6,
          css:{
            strokeDashoffset:40,
            strokeDasharray:40
          }
        }).to('.nav-toggle span',{
          duration:0.6,
          delay:-0.6,
          scaleX:1,
          transformOrigin:"50% 0%",
          ease:"expo.inOut"
        }).to('.hamburger-close',{
         
          css:{
            display:"none"
          }
        }).to("body",{
          css:{overflow:"auto"}
        }).to("nav",{
          css:{
            display:"none"
          }
        });
      }
    })

    return(
       <div className="header">
           <div className="container">
               <div className="v-center row space-between">
                   <div className="logo">
                     <NavLink to="/">Bricksroot</NavLink>
                       
                   </div>
                   <div className="nav-toggle">
                        <div onClick={()=>setMenuState({menuOpened:true})} className="hamburger-menu">
                            <span></span>
                            <span></span>
                            <span></span>

                        </div>
                        <div onClick={()=>setMenuState({menuOpened:false})} className="hamburger-close">
                            <UparrowCircle/>
                        </div>
                    </div>
                  
               </div>
           </div>
       </div>
       
    )
}

export default withRouter(Header) ;