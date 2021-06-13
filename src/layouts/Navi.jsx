import React from 'react';
import CartSummary from './CartSummary';
import { Button, Menu,Container } from 'semantic-ui-react'
import "../App.css"
export default function Navi() {
    return (
        <div>
        <Menu inverted fixed="top">
            <Container  >
                
                    <Menu.Item className="navi"
                        name='home'
                        

                    />
                    <Menu.Item
                        name='messages'

                    />

                    <Menu.Menu position='right'>
                        <CartSummary/>
                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
               
            </Container>
            </Menu>
        </div>
    )
}