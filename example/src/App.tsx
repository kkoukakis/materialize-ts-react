import React from 'react'

import {Button, Card, Row, Container} from 'materialize-ts-react'

import './index.css'
 

const App = () => {
  return <>
       <Container>

      <Row>
      
          <h1>
            Hey
          </h1>

         
        
      </Row>


       <Button id="mybutton" text="hey" onClick={()=>{alert('clicked something')}}/>

       <Card id="1" text="kalhmera" card_title="title"/>

       </Container>
       

  </>
}

export default App
