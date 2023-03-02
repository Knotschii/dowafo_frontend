import SideNav, {Toggle, NavItem, SideNavActionContext, NavText, NavIcon, NavLink}  from 
"@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";


function TheSideNav() {
    const navigate = useNavigate();
    return (<SideNav
    onSelect={selected =>{
    console.log(selected);
    navigate("/"+selected)
}}
className="thesidenav"
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">

        
            <NavItem eventKey="home">
            
                <NavIcon><i className="fa fa-fw fa-home" sytle={{fontSize: "1.5em"}}></i>
                </NavIcon>
                <NavText>Home</NavText>
                
            </NavItem>
        

        <NavItem eventKey="stock">
            <NavIcon><i className="fa fa-fw fa-rectangle-list" sytle={{fontSize: "1.5em"}}></i>
            </NavIcon>
            <NavText>Stock</NavText>
        </NavItem>

        <NavItem eventKey="shopinglist">
            <NavIcon><i className="fa fa-fw fa-list-check" sytle={{fontSize: "1.5em"}}></i>
            </NavIcon>
            <NavText>Shopinglist</NavText>
        </NavItem>

        <NavItem eventKey="signup">
            <NavIcon><i className="fa fa-fw fa-user-plus" sytle={{fontSize: "1.5em"}}></i>
            </NavIcon>
            <NavText>Signup</NavText>
        </NavItem>

        <NavItem eventKey="login">
            <NavIcon><i className="fa fa-fw fa-arrow-right-to-bracket" sytle={{fontSize: "1.5em"}}></i>
            </NavIcon>
            <NavText>Login</NavText>
        </NavItem>

    </SideNav.Nav>
</SideNav>
    )};
export default TheSideNav;