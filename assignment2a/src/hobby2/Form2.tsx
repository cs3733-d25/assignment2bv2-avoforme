import "./Hobby2.css";

function Form2() {

	return (
		<>
			<form>
				<h2 id="form-header">Pokémon Questionnaire:</h2>

				<fieldset>
					<label htmlFor="favorite">What is your favorite basic Pokémon?</label><br/>
					<input className="basic-pkm-form" id="favorite"/><br/>
					<label htmlFor="reasoning">Tell us a little about them:</label><br/>
					<textarea className="basic-pkm-form" id="reasoning" rows={10} cols={30}></textarea><br/>
				</fieldset>
				
				<div className="center-img">
					<img id="form-logo" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f720bb6e-b303-4877-bffb-d61df0ab183f/d3b98cf-4fc5c76b-2a99-47fc-98b6-d7d4ee8d9d9f.png" alt="Pokéball Logo"/>
				</div>

				<div className="spacer"></div>

				<label htmlFor="region">Please select your favorite region(s) and your favorite starter from those regions:</label>
				<table id="region-table">
					<tr>
						<th className="regionName"> Kanto <input type="checkbox" /> </th>
						<td className="fire"> <label htmlFor="Charmander">Charmander</label> <input type="radio" id="Charmander" name="kanto" value="HTML"/> </td>
						<td className="water"> <label htmlFor="Squirtle">Squirtle</label> <input type="radio" id="Squirtle" name="kanto" value="HTML"/> </td>
						<td className="grass"> <label htmlFor="Bulbasaur">Bulbasaur</label> <input type="radio" id="Bulbasaur" name="kanto" value="HTML"/> </td>
					</tr>
					<tr>
						<th className="regionName"> Johto <input type="checkbox"/> </th>
						<td className="fire"> <label htmlFor="Cyndaquil">Cyndaquil</label> <input type="radio" id="Cyndaquil" name="Johto" value="HTML"/> </td>
						<td className="water"> <label htmlFor="Totodile">Totodile</label> <input type="radio" id="Totodile" name="Johto" value="HTML"/> </td>
						<td className="grass"> <label htmlFor="Chikorita">Chikorita</label> <input type="radio" id="Chikorita" name="Johto" value="HTML"/> </td>
					</tr>
					<tr>
						<th className="regionName"> Hoenn <input type="checkbox"/> </th>
						<td className="fire"> <label htmlFor="Torchic">Torchic</label> <input type="radio" id="Torchic" name="Hoenn" value="HTML"/> </td>
						<td className="water"> <label htmlFor="Mudkip">Mudkip</label> <input type="radio" id="Mudkip" name="Hoenn" value="HTML"/> </td>
						<td className="grass"> <label htmlFor="Treecko">Treecko</label> <input type="radio" id="Treecko" name="Hoenn" value="HTML"/> </td>
					</tr>
				</table>

				<div className="spacer"></div>

				<label htmlFor="og-sets">What is your favorite original set?</label>
				<select name="og-sets" id="og-sets">
					<option value="Base Set">Base Set</option>
					<option value="Jungle">Jungle</option>
					<option value="Fossil">Fossil</option>
					<option value="Base Set 2">Base Set 2</option>
					<option value="Team Rocket">Team Rocket</option>
					<option value="Gym Heroes">Gym Heroes</option>
					<option value="Gym Challenge">Gym Challenge</option>
				</select>

				<div className="spacer"></div>

				<label htmlFor="name">What is your name?</label>
				<input className="basic-pkm-form" id="name"/><br/>

				<div className="spacer"></div>

				<button type="submit"> Submit </button>

			</form>
		</>
	)
}

export default Form2;