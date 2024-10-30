import { Text, View } from "react-native";
import "./styles/home.css";
import { Image } from "react-native";
import "./styles/josh.png" 
import CharacterDisplay from "./Stats/stats";
import { CharacterProps } from "./Stats/stats";
import TasksContainer from './Tasks/tasks';

const defaultCharacter: CharacterProps = {
  name: "Josh",
  strength: 5,
  dexterity: 12,
  constitution: 10,
  intelligence: 10,
  wisdom: 7,
  charisma: 5,
  
}

export default function Home() {
  return (
    <View>
      <div className="tasks">
        <h1>Tasks</h1>
        <TasksContainer />
      </div>
      <div className="characterContainer">
        <h2>{defaultCharacter.name}</h2>
        
        <div className="stuffContainer">
          <div className="charIcon">
              <Image source={require("./styles/josh.png")} style={{ width: 150, height: 150 }} />
          </div>
          <div className="characterStats">
              <CharacterDisplay {...defaultCharacter} />
          </div>
        </div>

      </div>
    </View>
  );
}
