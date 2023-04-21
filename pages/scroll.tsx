import { useScroll, animated } from '@react-spring/web'
import { useEffect } from 'react';

function MyComponent() {
     const { scrollYProgress } = useScroll()
    useEffect(()=>{
       console.log(scrollYProgress);  
    },[scrollYProgress])
 
   
    
  return (
    <animated.div style={{ opacity: scrollYProgress }} className='w-96 h-96 bg-red-400 m-56'>
      Hello World
    </animated.div>
  )
}

export default MyComponent