function Form1() {
    return (
        <div>
            <form>
                <label htmlFor="username">Minecraft Username:</label>
                <input type="text" id="username" name="username" required></input>
                <br></br>
                <br></br>

                <label htmlFor="favorite-block">Favorite Block:</label>
                <input type="text" id="favorite-block" name="favorite-block"></input>
                <br></br>

                <br></br>
                <label>Favorite Activities (Check all that apply):</label>
                <br></br>
                
                <input type="checkbox" id="building" name="activities" value="building"></input>

                <label htmlFor="building">Building</label>
                <input type="checkbox" id="mining" name="activities" value="mining"></input>
                <label htmlFor="mining">Mining</label>
                <input type="checkbox" id="exploring" name="activities" value="exploring"></input>
                <label htmlFor="exploring">Exploring</label>
                <br></br>
                <br></br>

                <label>Preferred Playstyle:</label>
                <br></br>
                <input type="radio" id="survival" name="playstyle" value="survival" ></input>
                <label htmlFor="survival">Survival</label>
                <input type="radio" id="creative" name="playstyle" value="creative"></input>
                <label htmlFor="creative">Creative</label>
                <input type="radio" id="hardcore" name="playstyle" value="hardcore"></input>
                <label htmlFor="hardcore">Hardcore</label>

                <br></br>
                <br></br>
                <label htmlFor="comments">Any Comments:</label>
                <br></br>
                <textarea id="comments" name="comments" rows={4} cols={40}></textarea>

                <br></br>
                <br></br>

                <label htmlFor="biome">Favorite Biome:</label>
                <select id="biome" name="biome">
                    <option value="plains">Plains</option>
                    <option value="desert">Desert</option>
                    <option value="jungle">Jungle</option>
                    <option value="taiga">Taiga</option>
                    <option value="ocean">Ocean</option>
                </select>
                <br></br>
                <br></br>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form1;