import React ,{useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {ReactComponent as Rightarrow} from '../assets/arrow-right.svg';
import Contactimg from '../assets/curology-mmin.png';
import creative from '../assets/creative.png';

import will from "../assets/wallpaper2.png";
import handshake from "../assets/mdi_handshake.png";
import Itpic from "../assets/Group3.png";
import solarproject from "../assets/solar-project.png";
import fotoartizproject from "../assets/fotoartiz-project.png";
import clothingproject from "../assets/clothing-project.png";
import sriomkaliproject from "../assets/sriomkali-project.png";
import bricksrootcirle from "../assets/bricksroot-circle.png";


const Wallpaper=()=>{
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        const t3=gsap.timeline();
        
        t3.to(".itsection",{background:"#f0efef"})

        .fromTo(".discription", { opacity: 0, scale: 0.8, y: "+=5"}, 
        {opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false})

        .fromTo(".itimgwidth", {opacity:0, width:"0%"}, 
        {opacity:1,delay:-1, width:"90%", duration: 1.5,ease:"Expo.easeInOut", immediateRender: false})

        .from(".discription-span span",0.8, { y:200,delay:-1,ease:"power4.out",skewY:10, stagger:{
            amount:"0.4"
        }})
        
        .from(".discription span div span", 1.8,{ y:200,ease:"power4.out",delay:-1,skewY:20, 
        stagger:{
            amount:"0.8"
        },
        });


        ScrollTrigger.create({
            trigger: '.itsection',
            start:"-60px 50%", 
            end:"bottom bottom",
            animation: t3,
            toggleActions: "play none none none"
             
        })

      
    },[]);
    
    useEffect(()=>{
        const t31=gsap.timeline();
        t31.to(".exactly",{background:"#f0efef"})

        .fromTo(".discriptionn span div span",1.8,{opacity:0, y:200,ease:"power4.out",skewY:20, 
        stagger:{
            amount:"0.8"
        },
        },{
            opacity:1,
            y:0,ease:"power4.out",skewY:0, 
            stagger:{
                amount:"0.8"
            },

        });
      

        ScrollTrigger.create({
        trigger: '.exactly',
        start:"-60px 50%", 
        end:"bottom bottom",
        animation: t31,
        toggleActions: "play none none none"
        })
        
    })
    //wallpaper(first section animation)//
    useEffect(()=>{
            //gsap animatin//
            const tl = gsap.timeline();
            tl.from(".prev",{ opacity: 0, scale: 1.5}, 
            {opacity: 1, scale: 1,filter: "saturate(0)",duration: 1.5, immediateRender: false})
            .fromTo(".prevoverlay",{ x: "0"}, 
            {opacity: 1, scale: 1, x: "-1800",delay:"-1", duration: 1.5, immediateRender: false})
            .from("div .companyname .discription-about span",1.8 , {
                y:100,
                ease:"power4.out",
                delay:-1,
                skewY:7,
                stagger:.3
              });

        },[]);

        //horizontal scrollig 
        useEffect(()=>{
            gsap.registerPlugin(ScrollTrigger);
            const t4=gsap.timeline();

            t4.to(".pagee",
            {background:"#fefefe", immediateRender: false})
            t4.to('.firststroke', {
                xPercent: -60,
                ease: " Power4.easeOut",
                scrollTrigger: {
                  trigger: ".xhori",
                  start: "top center",
                  end: "bottom top",
                  scrub: true
                }
              })   
              t4.to('.secstroke', {
                xPercent: -60,
                ease: "none",
                scrollTrigger: {
                  trigger: ".xhori",
                  start: "top center",
                  end: "bottom top",
                  scrub: true
                }
              })   
         
            
        })
        
      useEffect(()=>{

        const tt1= gsap.timeline();
        tt1.to(".creativity",{background:"#f0efef"})
        .fromTo(".itimgigcreativity", {opacity:0, width:"0%"}, 
        {opacity:1, width:"90%", duration: 2,ease:"Expo.easeInOut", immediateRender: false})

        
        ScrollTrigger.create({
            trigger: '.creativity',
            start:"-60px 50%", 
            end:"bottom bottom",
            animation: tt1,
            toggleActions: "play none none none"
            })
      })



     

        useEffect(()=>{

            gsap.registerPlugin(ScrollTrigger);
            const t5= gsap.timeline();

            t5.to(".projects1",{background:"#fefefe",  immediateRender: false})   
            
            .fromTo(".projects1 .project-heading", { opacity: 0, skewY: 0, x: "-=100"}, 
            {opacity: 1, skewY: 1, x: "0" , duration: 0.8, immediateRender: false})

            .fromTo(".projects1 .projectimages .image",{opacity:0,y:"+10"}, 
            {opacity:1, scale: 1,duration: 1.5,y:"0"})
            
            .fromTo(".projects1 .projectimages .imagee",{opacity:0,y:"+10"}, 
            {opacity:1, scale: 1, delay:-1,duration: 1.5,y:"0"})
            
                ScrollTrigger.create({
                trigger: '.projects1',
                start:"-60px 50%", 
                end:"bottom bottom",
                animation: t5,
                toggleActions: "play none none none"
              })
             

              const t6= gsap.timeline();
              t6.fromTo(".projects2", {background:"#fefefe"}, 
              {background:"#fefefe", duration: 0.3, immediateRender: false})
            
              .fromTo(".projects2 .projectimages .imagee", {opacity:0,y:"+10"}, 
              {opacity:1, scale: 1,duration: 1.5,y:"0"})
  
              .fromTo(".projects2 .projectimages .image span", {opacity:0,width:"0px"}, 
              {opacity:1,delay:"-1",duration: 1.5,width:"80%"})
  
              
                
               ScrollTrigger.create({
                trigger: '.projects2',
                start:"-60px 50%", 
                end:"bottom bottom",
                animation: t6,
                toggleActions: "play none none none"
              })
           
        
              


        /*----------------------------project 4------------------ */

              const t8= gsap.timeline();
              t8.fromTo(".projects4", {background:"#fefefe"}, 
              {background:"#fefefe", duration: 0.3, immediateRender: false})
            
              .fromTo(".projects4 .projectimages .image", {opacity:0,y:"+10"}, 
              {opacity:1, scale: 1,duration: 1.5,y:"0"})

               .fromTo(".projects4 .projectimages .imagee",
               {opacity:0,y:"+10"}, 
               {opacity:1, scale: 1,delay:-1,duration: 1.5,y:"0"})
                
               ScrollTrigger.create({
                trigger: '.projects4',
                start:"-60px 50%", 
                end:"bottom bottom",
                animation: t8,
                toggleActions: "play none none none"
              })
        })

        useEffect(()=>{
           
        });

        /*----------------------------project 3------------------ */
        useEffect(()=>{

            const t7= gsap.timeline();
            t7.fromTo(".projects3", {background:"#fefefe"}, 
            {background:"#fefefe", duration: 0.3, immediateRender: false})
          
            .fromTo(".projects3 .projectimages .image", {opacity:0,y:"+10"}, 
            {opacity:1, scale: 1,duration: 1.5,y:"0"})

             .fromTo(".projects3 .projectimages .imagee",
             {opacity:0,y:"+10"}, 
             {opacity:1, scale: 1,delay:-1,duration: 1.5,y:"0"})
              
             ScrollTrigger.create({
              trigger: '.projects3',
              start:"-60px 50%", 
              end:"bottom bottom",
              animation: t7,
              toggleActions: "play none none none"
            })

        })


    return(
        <div className="pagee">
            <section id="pagee_unclear">
                    <div className="prevoverlay"></div>
                    <div className="wallpaper-bricksroot prev disble"> 
                    <img alt="bricksroot zindex" src={will}/>

                    </div>

                

                    <div className="handshake">
                        <img alt="bricksroot zindex" src={handshake}/>
                    </div> 
                    
                    <div className='companyname disccription'>
                        <div className="bricksrootcircle">
                            <img alt="bricksroot logo circle" src={bricksrootcirle}/>
                        </div>
                        <div className="company-name">
                            <span>Bricksroot</span>
                        </div>

                        <div className="discription-about">
                            <span>
                                <div><span> Bricksroot is accelerating the world's </span></div>
                                <div><span> transition to digital experience with web  </span></div>
                                <div><span> design and branding, sustainable energy </span></div>
                                <div><span> with solar for homes and businesses, and </span></div>
                                <div><span> the CC camera world. </span></div>
                            </span> 
                           
                        </div>

                        <div className="cases-navigation">
                            <div className="cases-arrow next "> <Rightarrow/> </div>
                        </div>
                        
                    </div>

            </section>
            <section className="xhori">
                    <div><span className="secstroke">webdevelopment <span>webdevelopment</span>     webdevelopment      <span>webdevelopment</span>    webdevelopment  <span>webdevelopment</span> webdevelopment<span>webdevelopment</span> webdevelopment </span></div>
                    <div><span className="firststroke">bricksroot <span>bricksroot</span>     bricksroot      <span>bricksroot</span>    bricksroot  <span>bricksroot</span> bricksroot bricksroot bricksroot bricksroot</span></div>
                    <div><span className="secstroke">SOLAR PANELS <span>SOLAR PANELS</span>     SOLAR PANELS      <span>SOLAR PANELS</span>    SOLAR PANELS  <span>SOLAR PANELS</span> SOLAR PANELS <span>SOLAR PANELS</span> bricksroot <span>SOLAR PANELS</span></span></div>
                    <div><span className="firststroke">CC Camera <span>bricksroot</span>     CC Camera       <span>CC Camera </span>    CC Camera   <span>bricksroot</span> CC Camera  CC Camera  bricksroot CC Camera </span></div>                
            </section>

            <section className="itsection">
         
                {/* css will be in itinfo.scss */}
                <div className="container">
                    <div className="space-between v-center row block">
                        
                        <div className="discription">
                            <div className="discription-span">                          
                                <span className="discription-spaninside" role="img" aria-label="sheep">We are...! 👀</span>   
                            </div>
                          
                            <span> 
                                <br></br>
                              <div><span>  Leading digital agency with solid design </span></div>
                              <div><span>  and development expertise. We build </span></div>
                              <div><span>  websites, mobile applications, and </span></div>
                              <div><span>  elaborate online business services.</span></div>
                              <div><span> We Want to create millions</span></div>
                              <div><span>   in startup value by incubating and </span></div>
                              <div><span>   guiding disruptive companies through </span></div>
                              <div><span>   todays evolving digital era.</span></div>                 
                            </span>
                        </div>
                        <div id="itimgig" className="itimg">
                            <div className="itimgwidth">
                              
                                <img  alt="bricksroot creative" src={Itpic}/>                            
                            </div>
                        </div>
                    </div>                                              
                </div>
            </section>



            <section className="exactly">
         
                {/* css will be in itinfo.scss */}
                <div className="container">
                    <div className="space-between v-center row block">
                        
                        <div className="discriptionn">
                            <div className="discription-span">                          
                               <span role="img" aria-label="sheep">We do...! 👀   </span> 
                            </div><br></br>

                            <span> 
                                <div><span> A screen doesn’t mean scroll, it means jump in.</span></div> 
                                <div><span>We are software development company</span></div>
                                <div><span>located in AP. We help companies at any </span></div>
                                <div><span>stage of the product software development cycle: </span></div>
                                <div><span>from R&D and building MVP from scratch, </span></div>
                                <div><span>to scaling, UX analyzing and improving. We Want </span></div>
                                <div><span>to create millions in startup value by </span></div>
                                <div><span>incubating and guiding disruptive companies</span></div>
                                <div><span>through todays evolving digital era.</span></div>
                            </span>
                        </div>
                        <div id="itimgig" className="itimg">
                            <span>
                                <ul>
                                    <li>Strategy</li>
                                    <li>Brand Identity</li>
                                    <li> UI/UX Design</li>
                                    <li>Back End</li>
                                    <li>Front End</li>
                                </ul> 
                            </span>                           
                        </div>
                    </div>                                              
                </div>
            </section>




            <section className="creativity">
                
                {/* css will be in itinfo.scss */}
                <div className="container ">
                    <div className="space-between v-center row block">
                    <div id="itimgig" className="itimg">
                            <div className="itimgigcreativity">
                                <img  alt="bricksroot creative" src={creative}/>                 
                            </div> 
                        </div>

                        <div className="discription">
                            <span className="discription-span">                          
                                Creativity is at the heart of all our projects.
                            </span><br></br>
                            <span> 
                                We specialize in creating visual identities for products and brands. Whether it’s a birth or an evolution, we will put our industry expertise and passion for creativity to work for your project. 
                                
                            <br></br>Sincere core 	values are key to connecting with real 	people in a digital‑first society. As an agency that exists to create remarkably beautiful things that make an impact, shape culture and connect people, 
                            </span>
                        </div>
                        
                    </div>                                              
                </div>
            </section>


         
            
            <section className="projects projects1">
                <div className="container">
                    <div className="row v-center space-between">
                        <div className="project">
                            <div className="project-heading">
                                <div><span role="img" aria-label="sheep">🎊</span> Our Projects</div>
                            </div>
                            <div className="projectimages">
                                <div className="image">
                                    <span> <img alt="solarwallimage" src={solarproject}/>
                                    </span>   
                                </div>

                                <div className="imagee">
                                    <span> <span> Solar Module Manufacturing Company</span><span >Our challenge was to motivate Consumers and make this company to reach World</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            
            <section className="projects2">
                <div className="container">
                    <div className="row v-center space-between">
                        <div className="project">
                            <div className="project-heading">
                                <div></div>
                            </div>

                            <div className="projectimages">
                                <div className="imagee"> 
                                    <span> Sri Om Kali is lpg bottling plant and services company
                                        <span>Given goal is to make it global and make this company to recognized in digital area. We started to find solutions by interviewing consumers and managers</span></span>
                                </div>
                                <div className="image">
                                    <span><img className="project2img" alt="sriomkaliproject" src={sriomkaliproject}/></span>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="projects3">
                <div className="container">
                    <div className="row v-center space-between">
                        <div className="project">
                            <div className="project-heading">
                                <div></div>
                            </div>

                            <div className="projectimages">
                                <div className="imagee"> 
                                    <span> Fotoartiz is a Startup.It is e-commerce website, <br></br>where we used to sell customized portfolio arts.We used wordpress for this.  
                                        </span>
                                </div>
                                <div className="image">
                                    <span><img alt="solarwallimage" src={fotoartizproject}/></span>
                                    <div className="imagee"> 
                                        <span> Wordpress templates are robust and structured layouts. Room to learn for starters.<br></br>
                                            We used woocommerce for this webiste
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>


            <section className="projects4">
                <div className="container">
                    <div className="row v-center space-between">
                        <div className="project">
                            <div className="project-heading">
                                <div></div>
                            </div>

                            <div className="projectimages">
                                <div className="imagee"> 
                                    <span>Its a Local Clothing brand which has digital reach <br></br>
                                       Our given goal is to make it popular and effective to customers</span>
                                </div>
                                <div className="image">
                                    <span><img alt="solarwallimage" src={clothingproject}/></span>
                                    <div className="imagee"> 
                                        <span>We made a ecommerce website for clothing brand just in 2 months.<br></br>
                                        We moderninzed the whole webiste with on shop clothing showcase
                                         </span>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            

            <section className="contact_us">
                <div className="container">
                    <div className="row v-center space-between">
                        <div className="mailme">
                            <span>
                                lets create
                            </span>
                            <span>
                                something awsme
                            </span>
                            <span>
                                <a href="mailto:primary@bricksroot.com">@MailMe</a>
                            </span>
                            <span className="redspot"></span>
                            <div className="social_account">
                                <div>
                                   <span> <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/bricksroot">twitter</a></span>
                                   <span> <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/bricksroot-solarenergy">LindedIn</a></span>
                                </div>
                                <div>
                                <span> <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bricksroot/">Instagram</a></span>
                                <span> <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCymAamAco8LOqfw5QAw9MZg">Youtube</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="contactus_image">
                            <img alt="bricksroot" src={Contactimg}/>
                        </div>
                    </div>
                </div>
            </section>


        </div>
        
    );
}

export default Wallpaper;