import React from 'react'
import {Menu} from 'semantic-ui-react'
export default function Categories() {
    return ( 
        <div >
             <Menu pointing vertical style={ {marginTop: '3px', marginLeft:"5px"}} >
                <Menu.Item
                name='home'
                
                />
                <Menu.Item
                name='messages'
                
                />
                <Menu.Item
                name='friends'
                
                />
      </Menu>
        </div>
    )
}