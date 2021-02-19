import React from 'react';
import { CAMP, ICamp, IShikigami } from '../interface';
import "./index.css";
interface IProps {
  camps: ICamp;
  setCamps: (camps: ICamp) => void;
  shikigamis: IShikigami[],
  setShikigamis: (camps: IShikigami[]) => void;
}


export const ActionBar: React.FC<IProps> = ({ camps, setCamps, shikigamis, setShikigamis }) => {
  const campChange = (campKey: CAMP) => {
    camps[campKey].nowPosition++;
    if (camps[campKey].nowPosition > 5) {
      camps[campKey].nowPosition -= 5;
      let nextAddGhost = camps[campKey].nextAddGhost;
      let ghost = camps[campKey].ghost + nextAddGhost;
      camps[campKey].ghost = ghost > 8 ? 8 : ghost;
      camps[campKey].nextAddGhost = nextAddGhost === 5 ? 5 : nextAddGhost + 1 as 4 | 5;
      setCamps(camps);
    }
  }

  // const changeActionBar = (nums: number, indexSet: number[]) => {

  // }

  const handleClick = () => {
    const minCompleteTime = Math.min.apply(Math, shikigamis.map(item => item.completeTime));
    const newShikigami = shikigamis.map((item) => {
      if (item.completeTime === minCompleteTime) {
        campChange(item.camp);
      }
      const completeTime = item.completeTime - minCompleteTime || 100 / item.speed;
      const position = item.completeTime === minCompleteTime ? 100 : (item.position + item.speed * minCompleteTime) % 100;

      return {
        ...item,
        position,
        completeTime,
      }
    })
    setShikigamis(newShikigami);
  }
  return (
    <div className="ActionBarContainer">
      <div className="ActionBar">
        <span>{'0'}</span>
        <span>{'100'}</span>
      </div>
      <div className="ShikigamiPosition">
        {shikigamis.map((shikigami, index) => {
          const color = ['lightpink', 'lightblue']
          return <div key={shikigami.name} className="ShikigamiPositionContainer" style={{ left: `calc(${shikigami.position}% - 50px)`, zIndex: Math.floor(shikigami.position) }}>
            <div style={{ color: `${color[shikigami.camp]}` }}>{"|"}</div>
            <div className="ShikigamiDetail" style={{ backgroundColor: `${color[shikigami.camp]}` }}>
              <div>{shikigami.name}</div>
              <div> {`剩余 ${camps[shikigami.camp].ghost} 火`}</div>
              <div> {camps[shikigami.camp].nextAddGhost}</div>
              <div> {camps[shikigami.camp].nowPosition}</div>
            </div>
          </div>
        })}
      </div>
      <button onClick={handleClick} style={{ marginTop: '200px' }}>{`开始跑条`}</button>
    </div>
  );
} 