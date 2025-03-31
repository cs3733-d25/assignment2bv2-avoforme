import List1 from "./list1";
import Table1 from "./table1";
import Form1 from "./form1";

function Hobby1() { 
  return (
    <div className="hobby1">
      <p>I, Thanh Ho, have been playing Minecraft for a long time, and I have learned a lot about the game. I enjoy building and exploring new worlds, and I love the creativity that Minecraft allows.
        I have also made many friends through Minecraft, and we often play together on different servers. One of my favorite servers is Hypixel, where I can play mini-games and compete with other players.
      </p>

      <div id="banner">
        <img src="/banner.jpg" width="640" alt="wpi image"/>
      </div>

      <List1 />
      <Table1 />
      <Form1 />
    </div>
  );
}

export default Hobby1;  // Export the Hobby1 component