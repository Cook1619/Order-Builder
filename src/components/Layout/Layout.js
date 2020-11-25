import React from 'react';
import Aux from '../../hoc/Aux';

const Layout = (props) => {
    return (
        <Aux>
            Components go here
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;