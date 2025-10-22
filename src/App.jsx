
import {NavLink, Outlet} from "react-router-dom";


function App() {

    return (
        <div>
            <nav>
                <NavLink to="/" end>Accueil</NavLink> {" "}
                <NavLink to="/Staline">Staline</NavLink> {" "}
                <NavLink to="/Hitler">Hitler</NavLink> {" "}
                <NavLink to="/mao-zedong">Mao Zedong</NavLink> {" "}
                <NavLink to="/pol-pot">Pol Pot</NavLink> {" "}
                <NavLink to="/marchi">Pol Pot</NavLink> {" "}
                <NavLink to="/kim-jong-un">Kim Jong Un</NavLink> {" "}
                <NavLink to="/mussolini">Mussolini</NavLink> {" "}
            </nav>
            <Outlet/>
        </div>

    )
}

export default App