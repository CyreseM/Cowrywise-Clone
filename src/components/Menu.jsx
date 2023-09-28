import {IoIosArrowDown} from "react-icons/io"
function Menu(){
    return(
        <>
            <div className="nav_menu">
                <div>Personal <span><IoIosArrowDown /></span></div>
                <div>Business <span><IoIosArrowDown /></span></div>
                <div>Developer <span><IoIosArrowDown /></span></div>
                <div>learn</div>
            </div>
        </>
    )
}

export default Menu;