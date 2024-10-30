import StatBar from "../Statbar/statbar";


export interface CharacterProps {
    name: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  }




const CharacterDisplay: React.FC<CharacterProps> = ({ name, strength, dexterity, constitution, intelligence, wisdom, charisma }) => {
  return (
      <div className="stats">
        <div className="stat">
          <span className="stat-name">Strength:</span>
          <StatBar statName="Strength" statValue={strength} barColor="red" />
        </div>
        <div className="stat">
          <span className="stat-name">Dexterity:</span>
          <StatBar statName="Strength" statValue={dexterity} barColor="#FFFF00" />
        </div>
        <div className="stat">
          <span className="stat-name">Constitution:</span>
          <StatBar statName="Constitution" statValue={constitution} barColor="brown" />
        </div>
        <div className="stat">
          <span className="stat-name">Intelligence:</span>
          <StatBar statName="Intelligence" statValue={intelligence} barColor="blue" />
        </div>
        <div className="stat">
          <span className="stat-name">Wisdom:</span>
          <StatBar statName="Wisdom" statValue={wisdom} barColor="purple" />
        </div>
        <div className="stat">
          <span className="stat-name">Charisma:</span>
          <StatBar statName="Charisma" statValue={charisma} barColor="pink" />
        </div>
    </div>
  );
};

export default CharacterDisplay;