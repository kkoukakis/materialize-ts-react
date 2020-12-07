import React from 'react'

// import {Button, Container, Switch, Badge } from 'materialize-ts-react'
import {  Container, Switch,   } from 'materialize-ts-react'
 
import './index.css'

const App = () => {
  return <>
    <Container>
      {/* <Button id="mybutton" text="hey" onClick={()=>alert('clicked something')}/> */}
      {/* <Badge new={true} style={{color : "red"}}> OK </Badge> */}
      <Switch leftLabel={""} checked={false} rightLabel={"on"} enabled={true} onChange={(nice : string)=>alert(nice)}/>
    </Container>
  </>
}

export default App
