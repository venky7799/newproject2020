import { useState, useEffect } from "react";

export default function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  
 
// let kk=window.location;
  
//   const[location,setLocation]=useState(kk);

   
    
//     function handleResize() {
//     setWindowSize(getSize());
//   }

 
//     if (location=== "http://localhost:3000/solar") {
//       setLocation("kk");
//       console.log(location);
//       handleResize()
//     };
  

 
 

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }
    
    document.addEventListener("click", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {window.removeEventListener("resize", handleResize)
    
  }
  }, []);

  return windowSize;
}