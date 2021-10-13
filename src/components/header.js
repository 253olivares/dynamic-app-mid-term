import React from'react';
import { Link } from 'gatsby';
import { Menu, Icon} from 'semantic-ui-react'

const Header = () => {
    return (
        <React.Fragment>
           <Menu color="black" size="massive">
                <Menu.Item>
                <Link to="/" >
                    <Icon name='home' color="black" size="large">

                    </Icon>
                </Link>
                </Menu.Item>
                <Menu.Item>
                <Link to="/games" >
                    <Icon name='gamepad' color="black" size="large">

                    </Icon>
                </Link>
                </Menu.Item>
                <Menu.Item>
                <Link to="/contact">
                    <Icon name='users' color="black" size="large">

                    </Icon>
                </Link>
                </Menu.Item>
               </Menu> 
        </React.Fragment>
    );
};

export default Header;