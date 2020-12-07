import React from 'react'

import {Button, Card, Row, Container, Icon, Nav, NavLinks, NavLink, NavLogo} from 'materialize-ts-react'

import './index.css'
 

const App = () => {
  return <>
       <Container>
      
      <h1>Row</h1>

      <Row>
      
          <h5>
            I am a row
          </h5>   
        
      </Row>

      <h1>Button</h1>

       <Button id="mybutton" text="hey" onClick={()=>{alert('clicked something')}}/>

      <h1>Card</h1>

       <Card id="1" text="kalhmera" card_title="title"/>

      <h1>Icon</h1>

       <Icon iconCode="edit" />
      
      <h1>Nav</h1>

       <Nav>
         <NavLogo text="Brand Logo" alignment="left" />
         <NavLinks alignment="right">
           <NavLink title="First link" />
           <NavLink title="Second link" />
         </NavLinks>
       </Nav>

       </Container>
       

  </>
}

export default App
