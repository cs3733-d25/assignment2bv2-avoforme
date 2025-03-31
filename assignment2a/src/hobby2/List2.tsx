import falinks from '../assets/profiles/Falinks.png'
import jirachi from '../assets/profiles/Jirachi.png'
import mudkip from '../assets/profiles/Mudkip.png'
import munchlax from '../assets/profiles/Munchlax.png'
import qwilfish from '../assets/profiles/Qwilfish.png'

function List2() {
	return (
		<>
			<h3 className="horizontal-img-list-header">Favorite Basic Pokémon:</h3>
			<ul className="horizontal-img-list">
				<li id="first-list-item">Falinks</li>
				<li>Jirachi</li>
				<li>Mudkip</li>
				<li>Munchlax</li>
				<li>Qwilfish</li>
			</ul>
			<ul className="horizontal-img-list">
				<li style={{listStyleType:"none"}}><img src={falinks} alt="Falinks" /></li>
				<li style={{listStyleType:"none"}}><img src={jirachi} alt="Jirachi" /></li>
				<li style={{listStyleType:"none"}}><img src={mudkip} alt="Mudkip" /></li>
				<li style={{listStyleType:"none"}}><img src={munchlax} alt="Munchlax" /></li>
				<li style={{listStyleType:"none"}}><img src={qwilfish} alt="Qwilfish" /></li>
			</ul>
		</>
	)
}

export default List2;