import React from 'react'

import {Button} from 'materialize-ts-react'

import './index.css'
 

const App = () => {
  return <>
       
       <Button id="mybutton" text="hey" onClick={()=>{alert('clicked something')}}/>
  </>
}

export default App
