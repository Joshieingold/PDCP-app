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
          <span className="stat-value">{strength}</span>
        </div>
        <div className="stat">
          <span className="stat-name">Dexterity:</span>
          <span className="stat-value">{dexterity}</span>
        </div>
        <div className="stat">
          <span className="stat-name">Constitution:</span>
          <span className="stat-value">{constitution}</span>
        </div>
        <div className="stat">
          <span className="stat-name">Intelligence:</span>
          <span className="stat-value">{intelligence}</span>
        </div>
        <div className="stat">
          <span className="stat-name">Wisdom:</span>
          <span className="stat-value">{wisdom}</span>
        </div>
        <div className="stat">
          <span className="stat-name">Charisma:</span>
          <span className="stat-value">{charisma}</span>
        </div>
    </div>
  );
};

export default CharacterDisplay;