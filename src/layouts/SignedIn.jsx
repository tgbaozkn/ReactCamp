import React from 'react'
import { Menu,Image,Dropdown } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced ="right" src="https://i.sozcu.com.tr/wp-content/uploads/2019/04/23/iecrop/wonder-woman-3-modern_16_9_1556031324.jpg"/>
                <Dropdown pointing="top left" text="Tugba">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>

                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
    
            
        </div>
    )
}
