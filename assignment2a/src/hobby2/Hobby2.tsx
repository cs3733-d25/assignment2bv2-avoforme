import hobbyLogo from '../assets/Pokémon_Trading_Card_Game_logo.png'
import List2 from './List2.tsx'
import Table2 from './Table2.tsx'
import Form2 from './Form2.tsx'
import "./Hobby2.css";

function Hobby2() {

	return (
		<>
			<main className='hobby2'>
				<img src={hobbyLogo} alt="Pokémon TCG Logo" className="banner"></img>
				<p>
					Hello and welcome to my site!
					<br/>
					My name is Cole and I am from New Jersey. I enjoy playing pickup sports, biking, and rocking out to metal / grunge / new wave music. When I'm not out and about, I love reading Spider-Man comics, and collecting Pokémon cards.
				</p>
				<p>
					The Pokémon Trading Card Game is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. I have been collecting cards since I was young and have amassed 
					<a className="pageEM" href="https://www.tcgcollector.com/dashboard/intl?viewUser=Mineral8">quite a collection</a>!
				</p>

				<div className="hobby-body">
					<div className="hobby-info">
						<List2 />
						<Table2 />
					</div>
					<Form2 />
				</div>
				
				<div className="spacer"></div>
			</main>
		</>
	)
}

export default Hobby2;