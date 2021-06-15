import {Button} from '../Button/Button';
import Logo from '../../Assets/primary.svg';
// import { useState } from 'react';
function Navbar() {
    // const [props , setprops]= useState('');
    return(
        <>
        <div className="flex justify-between items-center">
            <div className="flex items-center font-semibold">
            <img src={Logo} alt="" />
            <div>WHY EVERNOTE</div>
            <div>FEATURES</div>
            <div>PLANS</div>
            </div>
            <div className= "flex items-center">
                <div>Help</div>
                <div>Log In</div>
                <Button props='nav'/>
            </div>

        </div>
        </>
    );
}

export default  Navbar;