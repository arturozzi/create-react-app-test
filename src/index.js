import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { OrbitControls, TrackballControls  } from '@react-three/drei'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { useSpring, animated, config } from '@react-spring/three';
import "./style.css";


function MyRotatingBox() {
  const myMesh = useRef();
  const [active, setActive] = useState(false);

  const { scale } = useSpring({
    scale: active ? 3 : 1,
    config: config.wobbly
  });

  useFrame(({ clock }) => {
    const a = Math.sin(clock.getElapsedTime());
    myMesh.current.rotation.x = a;
    myMesh.current.rotation.y = a;
    // console.log(a)
  });

  return (
    <animated.mesh
      position={[0, 0, 0]}
      scale={scale}
      onClick={() => setActive(!active)}
      ref={myMesh}
    >
      {/* <TrackballControls /> */}
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </animated.mesh>
  );
}


function SotKazz() {
  return (
    <p
      onClick={() => alert("Fa' attentione Ue!")}
    >
      Sollazzi?!
    </p>
  );
}




function App() {
  return (
    <div id="canvas-container" className="App">
      <SotKazz />
      <Canvas>
        <MyRotatingBox />
        <ambientLight intensity={0.1} />
        <directionalLight />
      </Canvas>
    </div>
  );

}


ReactDOM.render(
  <App />,// what we want create
  document.getElementById('root') // where we want to render
);





// function App() {
//   const [status, setStatus] = useState("open"); // a use state is a built in hook to handle state changes
//                         // remember that the frst value i returned is the state value and the second value
//                         // the function to change taht value
//   return (
//     <>
//       <h1>STatus: {status}</h1>
//       <button onClick={() => setStatus("Open")}>open</button>
//       <button onClick={() => setStatus("Closed")}>bree</button>

//     </>
//   );
// }

// function App() {
  //   const [manager, setManager] = useState("Alex")
  //   const [status, setStatus] = useState("open");
  //   return (
  //     <>
  //       <div>
  //         <h1>auanagana {manager}</h1>
  //         <button onClick={()=> setManager("ramona")}>altri?</button>
  //       </div>
  //       <div>
  //         <h1>STatus: {status}</h1>
  //         <button onClick={() => setStatus("Open")}>open</button>
  //         <button onClick={() => setStatus("Closed")}>bree</button>

  //       </div>
  //     </>
  //   );
  // }


  // function CheckBox(){
    //   const [checked, setChecked] = useState(false)
    //   return (
    //     <>
    //       <input type="checkbox" value={checked} onChange={()=> setChecked(checked => !checked)}/>
    //       {checked ? "checked" : "not checked"}
    //     </>
    //   );
    // }