import React, { useEffect } from "react";
import solarman from "../assets/solar-man.jpg";
import solartent from "../assets/solar-tent.jpg";
import solarseahouse from "../assets/solar-house-sea.jpg";
import solarhouse from "../assets/solar-house.jpg";
import solarhousebeach from "../assets/solar-house-1.jpg";
import solarrect from "../assets/solarflare-min.png";
import solarsee from "../assets/Rectangle 81-min.png";
import solarmessage from "../assets/solarmessage.png";
import contactuscircle from "../assets/contactuscircle.png";


import {Helmet} from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ReactComponent as Rightarrow} from '../assets/arrow-right.svg';

const Solar  =()=>{
   
  

    useEffect(()=>{
     

        gsap.registerPlugin(ScrollTrigger);
        const j1= gsap.timeline();
        j1.fromTo(".solarorange",{ backgroundColor:"#fefffe" ,scale: 1.5,y:"-50"}, 
        {y:"-800", scale: 1,ease:"Power3.easeInOut",duration: 2.5,display:"none"})
        j1.fromTo(".solarimage",{opacity: 0,width:"0"}, 
        {opacity: 1, width:"100%",duration: 1.5,delay:'-1.5',ease:"Power3.easeInOut", immediateRender: false})
        // .fromTo(".overlaysolar",{ x: "0"}, 
        // {opacity: 1, scale: 1,filter: "saturate(0)", x: "-200px",delay:"-1.1", duration: 3, display:"none"});

        gsap.registerPlugin(ScrollTrigger);

/*
        const j2= gsap.timeline();
        /*

        j2.fromTo(".projectimages .image",{ opacity: 0, scale: 1.5}, 
        {opacity: 1, scale: 1,duration: 1.5, immediateRender: false})


        .fromTo(".overlaysolarcontainer",{ y: "0"}, 
        {opacity:1, y: "+800",display:"none",delay:"-0.5", duration: 1.5, immediateRender: false})

        .from(".solar .solarcontainer .project .projectimages .imagee span",1.5 , {
         y:200,
         ease:"power4.out",
         delay:-1,
         skewY:3,
         stagger:{
           amount:0.3
         },
       });*/

/*
        ScrollTrigger.create({

            trigger: '.solarcontainer',
            start:"-90px 20%", 
            end:"bottom bottom",
            animation: j2,
            toggleActions: "play none none none",
         markers:true

        })
*/

        //   const j3= gsap.timeline();
        //   j3.fromTo(".tablegroup-row",{opacity:0,y:"+10"}, 
        //   {opacity:1, scale: 1,duration: 1.5,y:"0", immediateRender: false})

          
        //     ScrollTrigger.create({
        //         trigger: '.solar-tablesection',
        //         start:"-90px 20%", 
        //         end:"bottom bottom",
        //         animation: j3,
        //         toggleActions: "play none none none",
        //     })

            
        //     const j4= gsap.timeline();
        //     j4.fromTo(".solar-wesell",{opacity:0,y:"+6"}, 
        //     {opacity:1, scale: 1,duration: 1.5,y:"0"})
            
            
        //       ScrollTrigger.create({
        //           trigger: '.solar-wesell',
        //           start:"-90px 20%", 
        //           end:"bottom bottom",
        //           animation: j4,
        //           toggleActions: "play none none none",
                  
        //       });

        //       const j5= gsap.timeline();
        //       j5.fromTo(".solar-stats",{opacity:0,y:"+6"}, 
        //       {opacity:1, scale: 1,duration: 1.5,y:"0"})
    
              
        //       ScrollTrigger.create({
        //         trigger: '.solar-stats',
        //         start:"-90px 20%", 
        //         end:"bottom bottom",
        //         animation: j5,
        //         toggleActions: "play none none none",
        //     })
          
       
          
    },[])
    

        
      
    return(
       <div className="solar">
            <Helmet>

                <meta charSet="utf-8" />
                <title>Solar Energy|bricksroot</title>
                <link rel="shortlink" href="http://www.Bricksroot.com/solar" />

                <link rel="canonical" href="https://www.bricksroot.com/solar" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta
                    name="description"
                    content="Bricksroot solar makes it easy to produce clean, renewable energy for your home or business and to take control of your energy use. Learn more about solar."
                />
                <meta name="keywords" content="Solar, Solar Panels,  Renewable Energy"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="alternate" hreflang="en" href="/solar"/> 
                <meta name="twitter:title" content="Solar Panels | bricksroot"/>

            </Helmet>
            <div className="solarorange"></div>
           <section className="solar-image-first">
                <div className="contaier">
                    <div className="row">
                        <div className="solarimage">
                                <img alt="solarwallimage" src={solarman}/>
                                <div className="overlaysolar"></div>
                            
                                <div>
                                <span>SOLAR ENERGY</span>
                                </div>
                        </div>
                    </div>
                </div>
           </section>

            <section className="justsee-section">
                <div className="container">
                    <div className="justsee-container">
                        <div className="justsee-container-col1">
                            <div className="justsee-headingsection">
                                <div className="justsee-headingsection-absolute">
                                    <div className="justsee-heading">
                                        <span>JUST SEE</span>
                                    </div>
                                    <span>Let<span> SUN  </span>Work For You </span>
                                </div>
                            </div>
                            <div className="justsee-heading-col1-row">
                                <div className="justsee-container-col1-row2heading">
                                    <span>Stats</span>
                                </div>
                                <div className="justsee-container-col1-row2content">
                                    <span>Global grid-connected solar capacity reached 580.1 GW at the end of 2019, along with 3.4 GW of offgrid PV <br></br>Asia is still the leading region for offgrid PV with 1.91 GW deployed. India, China, and Bangladesh host most of this capacity at 1.1 GW, 394 MW, and 209 MW, respectively.</span>
                                </div>
                            </div>

                            <div className="solar-arrow">
                                <Rightarrow/>
                            </div>
                        </div>
                        <div className="justsee-col2">
                            <span><img alt="solarwallimage" src={solarhouse}/></span>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className="solarnumbers">
                <div className="co2emi">
                    <div className="co2space">
                
                    </div>
                    <div className="co2space2">
                        <h2>32,000 mt of co2</h2>
                    </div>
                    <div>
                        <p>
                            emmision by the source as per 2018 world wide a
                        </p>
                        <div>
                            <img alt="solarwallimage" src={solarmessage}/>
                        </div>
                    </div>
                </div>
                <div className="electricity">
                   <div className="eleccol1">
                       <p>
                          <span> 24739.7 twh </span>electricity consume as per sources in 2018
                       </p>

                   </div>
                   <div className="spaceelec">
                        <img alt="solarwallimage" src={solarrect}/>
                      
                    </div>
                    <div className="electricpic">

                    </div>
                </div>
                <div className="howwarm">
                        <div className="howwarnspace1">

                        </div>
                    <div className="warn">
                        <img alt="solarwallimage" src={solarsee}/>

                        <p>
                        <span> How Many Solar Panels Would It Take To Power The World? </span>It would take 51.4 billion 350W solar panels to power the world! Put another way, this is the equivalent of a solar power plant that covers 115,625 square miles. 
                        </p>
                    </div>
                    <a href="mailto:primary@bricksroot.com"><div className="howwarnspace2">
                       <img alt="contactuscircle" src={contactuscircle}/>
                    </div></a>
                </div>
            </section>
            <section className="solarxhorizontal">
                <span>
                    <h1 className="solarxhorizonatal_h1">If we used 350W solar panels, we’d need 51.428 BILLION solar panels</h1>
                </span>
            </section>
            <section className="solarcontainer">
                <div className="container">
                    <div className="row v-center space-between">
                        <div className="project">
                            <div className="projectimages">
                                <div className="imagee"> 
                                    <span className="solarcontainer_discription">
                                        <span>Our target</span>
                                        <span>is we want to install 1GW of solar power with in 3years, our internal goal are aggressive. As per 2020 31st March 34GW of solar power is installed.</span>
                                    </span>
                                </div>
                                <div className="image">
                                    <span><img alt="solarwallimage" src={solartent}/></span>                                
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            
            <section className="solar-tablesection">
                    <div className="tablegroup">
                        <div className="tablegroup-row">
                            <div className="table-1">
                                <div className="table-col-1">
                                    <div className="table-heading">
                                        <span>Rooftop</span>
                                    </div>
                                    <div className="table-content">
                                        <span>
                                            <ol>
                                                <li>ON Grid System</li>
                                                <li>OFF Grid System</li>
                                                <li>Hybrid System</li>
                                                <li>EMI Model</li>
                                            </ol>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="table-1">
                                <div className="table-col-1">
                                    <div className="table-heading">
                                        <span>Ground Mounted</span>
                                    </div>
                                    <div className="table-content">
                                        <span>
                                            <ol>
                                                <li>OPEN Access</li>
                                                <li>Boot Model</li>
                                                <li>Solar Park</li>
                                                <li>Solar PPA</li>
                                            </ol>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="table-1">
                                <div className="table-col-1">
                                    <div className="table-heading">
                                        <span>Solar Panels</span>
                                    </div>
                                    <div className="table-content">
                                        <span>
                                            <ol>
                                                <li>Module Manufacturing</li>
                                                <li>OEM Partnership</li>
                                                <li>Trading</li>
                                                <li>Import/Export</li>
                                            </ol>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="table-1">
                                <div className="table-col-1">
                                    <div className="table-heading">
                                        <span>Products</span>
                                    </div>
                                    <div className="table-content">
                                        <span>
                                            <ol>
                                                <li>Module Mounting Structures</li>
                                                <li>Batteries</li>
                                                <li>Inverters</li>
                                                <li>Cables</li>
                                            </ol>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="solar-wesell">
                    <div className="solar-wesell-container">
                        <div className="solar-wesell-container-col1">
                            <div className="solar-arrow">
                                <Rightarrow/>
                            </div>
                            <div className="solar-wesell-container-col1-row2heading">
                                <span>Solar EPC Services</span>
                            </div>
                            <div className="solar-wesell-container-col1-row2content">
                                <span>We as a Brand are the top most prior partners for Solar EPC Installations across the nation with experienced in-house team.</span>
                            </div>
                        </div>

                        <div className="solar-wesell-container-col2">
                            <div className="solar-wesell-container-img">
                                <span><img alt="solarwallimage" src={solarseahouse}/></span>
                            </div>
                            <div className="solar-wesell-container-img2">
                                <span>We Design, Procure, Install, Build and Commission your Solar Power Plant with high quality as per international standards.</span>
                            </div>
                        </div>
                    </div>
                    <div className="solar-wesell-container-content">
                        <div className="solar-wesell-container-content-1">
                            <span>We Operate and Maintain the existing as well as new Solar Power plants with experienced O&M team encapsulating each and every corner of the power output as well</span>
                        </div>
                    </div>
                </section>

                <section className="solar-stats">
                    <div className="solar-stats-container">
                        <div className="solar-stats-col1">
                            <div className="solar-stats-col1-row">
                                <div className="solar-stats-col1-rowsub">
                                    <div className="solar-stats-col1-rowsub-heading"><span>Value</span></div>
                                    <span>1 Unit or kWh cost average 4.65Rs as per Discom, If Solar Installed 1 Kw generates 5 Units per day.<br></br> you can earn or save 150x 4.65 = 697.5 Rs per month</span>
                                </div>
                            </div>
                            <div className="solar-stats-col1-row2">
                                <div className="solar-stats-col1-row2sub">
                                    <div className="solar-stats-col1-row2sub-heading"><span>Efficiency</span></div>
                                    <span>
                                        Bricksroot have High efficiency for panel and intigrated systems.<br></br> A solar panel with 20% efficiency and an area of 1 m2 will produce 200 kWh/yr at Standard                                      
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="solar-stats-col2">
                            <div className="solar-stats-col2-row">                          
                                <div className="solar-stats-col2-rowsub">
                                    <div className="solar-stats-col2-rowsub-heading"><span>Design</span></div>                    
                                    <span>
                                        Bricksroot focus on Design. we aim to deliver simple design.  <br></br>       
                                    </span>
                                       
                                    <br></br>   
                                    we keep interactin between sun and solar simple        
                                </div>
                            </div>
                            <div className="solar-stats-col2-row2">
                            
                                <div className="solar-stats-col2-row2sub">
                                    <div className="solar-stats-col2-row2sub-heading"><span>Installation</span></div>
                                    
                                    <span>
                                    <br></br>   

                                        Bricksroot target is to install any order with in 24hr after order.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>    
                </section>

                <section className="ordernow-section">
                    <div className="container">
                        <div className="ordernow-container">
                            <div className="ordernow-container-col1">
                                <div className="ordernow-headingsection">
                                    <div className="ordernow-heading">
                                        <span>Tell Us</span>
                                    </div>
                                    <span>Where we have to install</span>
                                </div>
                                <div className="ordernow-heading-col1-row">
                                    <div className="ordernow-container-col1-row2heading">
                                        <span>Just a start</span>
                                    </div>
                                    <div className="ordernow-container-col1-row2content">
                                        <span>I know you will ordre<br></br>Just show us refferences for new age of thinking <br></br> </span>
                                    </div>
                                    <div className="ordernow-container-col1-row3content">
                                        <span><a href="tel:7799432208">Order Now</a> <Rightarrow/></span>
                                    </div>
                                </div>

                                <div className="solar-arrow">
                                   
                                </div>
                            </div>
                            <div className="ordernow-col2">
                                <span><img alt="solarwallimage" src={solarhousebeach}/></span>
                            </div>
                        </div> 
                    </div>
                </section>

                <section className="contact">
                    <div className="contact-container">
                        <div className="contact-rowandcol">
                            <div className="contact-col-1">
                                <div className="contact-subcol">
                                    <div className="contact-subcol-headingmain"><span>OFFICE</span></div>
                                    <div className="contact-subcol-heading">
                                    <span>India</span>
                                    </div>
                                    <div className="contact-subcol-1-content">
                                        <p><span>100ft ring road shiridi sai nagar AP</span><br></br>
                                        <span><a href="tel:917799432208">+91-7799432208</a> </span>
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="contact-col-2">
                                <div className="contact-subcol">

                                    <div className="contact-subcol-headingmain"><span>CONTACT</span></div>

                                    <div className="contact-subcol-content">
                                        <div className="contact-subcol-heading">
                                        <span>Web Agency</span>
                                        </div>
                                        <div className="contact-subcol-1-content">
                                            <span ><a href="mailto:webagency@bricksroot.com "> <span  role="img" aria-label="computer">💻💻💻💻💻 </span> </a> </span> 
                                        </div>
                                    </div>
                                    <div className="contact-subcol-content">
                                        <div className="contact-subcol-heading">
                                        <span>Solar</span>
                                        </div>
                                        <div className="contact-subcol-1-content">
                                            <span ><a href="mailto:solarenergy@bricksroot.com"> <span role="img" aria-label="sun">🌞🌞🌞🌞🌞🌞🌞</span></a> </span> 
                                        </div>
                                    </div>
                                    <div className="contact-subcol-content">
                                        <div className="contact-subcol-heading">
                                        <span>Cc camera</span>
                                        </div>
                                        <div className="contact-subcol-1-content">
                                            <span><a href="mailto:cccamera@bricksroot.com"><span  role="img" aria-label="camera">🎥📸📷📷📷📷📷📷📷📷</span></a> </span> 
                                        </div>
                                    </div>
                                    <div className="contact-subcol-content">
                                        <div className="contact-subcol-heading">
                                        <span>Work with us?</span>
                                        </div>
                                        <div className="contact-subcol-1-content">
                                            <span><a href="mailto:careers@bricksroot.com"><span  role="img" aria-label="power hand">💪💪💪💪💪💪💪💪</span></a> </span> 
                                        </div>
                                    </div>
                                </div>                       
                        </div>
                        <div className="contact-col-3">
                            <div className="contact-subcol">

                                <div className="contact-subcol-headingmain"><span>FOLLOW US</span></div>

                                <div className="contact-subcol-content">
                                    <div className="contact-subcol-heading">
                                    <span></span>
                                    </div>
                                    <div className="contact-subcol-1-content">
                                        <span><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bricksroot/">Instagram</a> </span> 
                                    </div>
                                </div>
                                <div className="contact-subcol-content">
                                    <div className="contact-subcol-heading">
                                    <span></span>
                                    </div>
                                    <div className="contact-subcol-1-content">
                                        <span><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/bricksroot">Twitter</a> </span> 
                                    </div>
                                </div>
                               
                                <div className="contact-subcol-content">
                                    <div className="contact-subcol-heading">
                                    <span></span>
                                    </div>
                                    <div className="contact-subcol-1-content">
                                        <span><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bricksroot/">Behance</a> </span> 
                                    </div>
                                </div>
                                <div className="contact-subcol-content">
                                    <div className="contact-subcol-heading">
                                    <span></span>
                                    </div>
                                    <div className="contact-subcol-1-content">
                                        <span><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/bricksroot-power">LinkedIn</a> </span> 
                                    </div>
                                </div>
                            </div>                       
                        </div>
                        </div>
                    </div>
                </section>

       </div>
    );
}


export default Solar;