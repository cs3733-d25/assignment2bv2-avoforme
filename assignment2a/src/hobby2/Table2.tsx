import f_falinks from "../assets/cards/f_falinks.jpg" 
import lf_falinks from "../assets/cards/lf_falinks.jpg"
import f_jirachi from "../assets/cards/f_jirachi.jpg" 
import lf_jirachi from "../assets/cards/lf_jirachi.jpg"
import f_mudkip from "../assets/cards/f_mudkip.jpg"
import lf_mudkip from "../assets/cards/lf_mudkip.jpg" 
import f_munchlax from "../assets/cards/f_munchlax.jpg"
import lf_munchlax from "../assets/cards/lf_munchlax.jpg"
import f_qwilfish from "../assets/cards/f_qwilfish.jpg"
import lf_qwilfish from "../assets/cards/lf_qwilfish.jpg"
import "./Hobby2.css";

function Table2() {
	
	return (
		<>
			<table id="pkm-cards" className="collapse">
				<tr>
					<th>Pokémon</th>
					<th>Favorite Card</th>
					<th>Least Favorite Card</th>
				</tr>
				<tr>
					<td>Falinks</td>
					<td><img src={f_falinks} alt="Favorite Falinks Card" /></td>
					<td><img src={lf_falinks} alt="Least Favorite Falinks Card" /></td>
				</tr>
				<tr>
					<td>Jirachi</td>
					<td><img src={f_jirachi} alt="Favorite Jirachi Card" /></td>
					<td><img src={lf_jirachi} alt="Least Favorite Jirachi Card" /></td>
				</tr>
				<tr>
					<td>Mudkip</td>
					<td><img src={f_mudkip} alt="Favorite Mudkip Card" /></td>
					<td><img src={lf_mudkip} alt="Least Favorite Mudkip Card" /></td>
				</tr>
				<tr>
					<td>Munchlax</td>
					<td><img src={f_munchlax} alt="Favorite Munchlax Card" /></td>
					<td><img src={lf_munchlax} alt="Least Favorite Munchlax Card" /></td>
				</tr>
				<tr>
					<td>Qwilfish</td>
					<td><img src={f_qwilfish} alt="Favorite Qwilfish Card" /></td>
					<td><img src={lf_qwilfish} alt="Least Favorite Qwilfish Card" /></td>
				</tr>
			</table>
		</>
	)
}

export default Table2;