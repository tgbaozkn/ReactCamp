import React from 'react';
import CartSummary from './CartSummary';
import { Button, Menu,Container } from 'semantic-ui-react'
export default function Navi() {
    return (
        <div>
            <Container>
                <Menu inverted size='mini'>
                    <Menu.Item
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
                </Menu>
            </Container>
        </div>
    )
}