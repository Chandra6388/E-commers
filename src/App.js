// import Main_Router from './Routes/Route'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Main_Router from './Routes/Route'

import axios from "axios";

const App = () => {
  const pageRef = useRef(null);
  const dispatch = useDispatch()

  return (
    <div id="App">
      <div ref={pageRef} >
          <Main_Router />
      </div>

    </div>
  )
}

export default App





