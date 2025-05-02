import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { ChampionCard } from "../components/card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
	const { store } = useGlobalReducer();
	let value = store?.champions?.data
	let list = value ? Object.values(value) : [];

	return (
		<div className="text-center mt-5">
			<h1 className="colorFuente">League of Legends Champions</h1>
			<div className="row">
			{list.map((el,i) => <ChampionCard key={i} name={el.name}/>)}
			</div>
		</div>
	);
}; 