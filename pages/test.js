import React, { useState, useEffect, useRef } from 'react'
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import * as THREE from "three";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(CLOUDS({
        el: myRef.current,
        THREE: THREE,
        minHeight: 600.0,
          minWidth: 600.0
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}>
    Foreground content goes here
  </div>
}

export default MyComponent;