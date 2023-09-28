import cowrywise from '../assets/images/cowrywise.svg'
import Menu from './Menu'
import '@fontsource/poppins';

function Nav(){
    return(
        <>
            <header>
                <img className="logo" src={cowrywise} alt="cowrywise logo" />
                <Menu/>
                <div className='nav_buttons'>
                    <div>
                        <p>Log In</p>
                    </div>
                    <button>Sign Up For Free</button>
                </div>
            </header>
        </>
    )
}

export default Nav