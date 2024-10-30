import { Text, View } from "react-native";
import "./styles/home.css";
import { Image } from 'react-native';
import Josh from './styles/josh.png';


export default function Home() {
  return (
    <View>
      <div className="tasks">
        <h1>Tasks</h1>

      </div>
      <div className="characterContainer">
        <Image source={Josh} style={{ width: 200, height: 200 }} />
        <div className="characterStats">my starts will be here</div>
      </div>
    </View>
  );
}
