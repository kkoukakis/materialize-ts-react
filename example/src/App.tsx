import React from 'react'

import {
  Button,
  Card,
  Row,
  Container,
  Icon,
  Nav,
  NavLinks,
  NavLink,
  NavLogo,
  Select,
  Option,
  OptGroup
} from 'materialize-ts-react'

import './index.css'

const App = () => {
  return (
    <>
      <Container>
        <h1>Row</h1>

        <Row>
          <h5>I am a row</h5>
        </Row>

        <h1>Button</h1>

        <Button
          id='mybutton'
          text='hey'
          onClick={() => {
            alert('clicked something')
          }}
        />

        <h1>Card</h1>

        <Card id='1' text='kalhmera' card_title='title' />

        <h1>Icon</h1>

        <Icon iconCode='edit' />

        <h1>Nav</h1>

        <Nav>
          <NavLogo text='Brand Logo' alignment='left' />
          <NavLinks alignment='right'>
            <NavLink title='First link' />
            <NavLink title='Second link' />
          </NavLinks>
        </Nav>

        <h1>Select</h1>

        <h2>Options</h2>

        <Select>
          <Option value='1' text='First' />
          <Option value='2' text='Second' />
          <Option value='3' text='Third' disabled />
        </Select>

        <h2>Option Groups</h2>
        
        <Select>
          <OptGroup>
            <Option value='1' text='First' />
            <Option value='2' text='Second' />
          </OptGroup>
          <OptGroup>
            <Option value='3' text='Third' disabled />
            <Option value='4' text='Fourth' disabled />
          </OptGroup>
        </Select>
      </Container>
    </>
  )
}

export default App
