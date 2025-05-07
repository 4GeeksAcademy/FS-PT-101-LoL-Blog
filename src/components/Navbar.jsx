import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import React from "react";

export const Navbar = () => {

const {store, dispatch} = useGlobalReducer()



	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
				<img className="logoHome" src="src/assets/img/logo.png"></img>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
					<button className="btn dropdownButton dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    				Favorites
  					</button>
  					<ul className="dropdown-menu p-0">
						{store.favourite?.map((el, i)=>{
						let champion = ""
						
						switch (el){
							case "Kai'Sa":
							champion="Kaisa"
							break;
							case "Cho'Gath":
							champion="Chogath"
							break;
							case "Kha'Zix":
							champion="Khazix"
							break;
							case "Kog'Maw":
							champion="KogMaw"
							break;
							case "Rek'Sai":
							champion="RekSai"
							break;
							case "Vel'Koz":
							champion="Velkoz"
							break;
							case "Bel'Veth":
							champion="Belveth"
							break;
							case "Dr. Mundo":
							champion="DrMundo"
							break;
							case "K'Sante":
							champion="KSante"
							break;
							case "LeBlanc":
							champion="Leblanc"
							break;
							case "Nunu & Willump":
							champion="Nunu"
							break;
							case "Renata Glasc":
							champion="Renata"
							break;
							case "Wukong":
							champion="MonkeyKing"
							break;
							default:
								if(el.includes(" ")){
									champion = el.replace(" ","")
								}
								else{
									champion = el
								}
								break;
						}
						return(
						<React.Fragment key={i}>
						<li className="p-3 favoritos" >{el}</li>
						{i !== store.favourite.length - 1 && <li className="p-0"><hr className="dropdown-divider m-0 p-0"/></li>}
						</React.Fragment>	
						)}
						)
					}
  					</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};