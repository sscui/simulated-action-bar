import React, { useState } from 'react';
import { ActionBar } from './components/ActionBar';
import { CAMP, ICamp } from './components/interface';
// type: CAMP;
//   shikigami: IShikigami[];
//   ghost: number;
// export interface IShikigami {
//   name: string;
//   speed: number;
//   camp: CAMP;
// }
// const defaultCamps: ICamp[] = [{
//   CAMP.BLUE,
//   ghost: 4,
//   nowPosition: 0,
//   nextAddGhost: 3,
// }, {
//   type: CAMP.RED,
//   ghost: 4,
//   nowPosition: 0,
//   nextAddGhost: 3,
// }]


const defaultCamps: ICamp = {
  [CAMP.BLUE]: {
    ghost: 4,
    nowPosition: 0,
    nextAddGhost: 3,
  },
  [CAMP.RED]: {
    ghost: 4,
    nowPosition: 0,
    nextAddGhost: 3,
  }
}

const defaultShikigami = [{
  name: "blue1",
  speed: 145,
  camp: CAMP.BLUE,
  position: 0,
  completeTime: 100 / 145,
}, {
  name: "blue2",
  speed: 211,
  camp: CAMP.BLUE,
  position: 0,
  completeTime: 100 / 211,
}, {
  name: "blue3",
  speed: 109,
  camp: CAMP.BLUE,
  position: 0,
  completeTime: 100 / 109,
}, {
  name: "red1",
  speed: 198,
  camp: CAMP.RED,
  position: 0,
  completeTime: 100 / 198,
}, {
  name: "red2",
  speed: 157,
  camp: CAMP.RED,
  position: 0,
  completeTime: 100 / 157,
}, {
  name: "red3",
  speed: 123,
  camp: CAMP.RED,
  position: 0,
  completeTime: 100 / 123,
}]

export const MyApp: React.FC<{}> = () => {
  const [camps, setCamps] = useState(defaultCamps);
  const [shikigamis, setShikigamis] = useState(defaultShikigami)
  return <ActionBar camps={camps} setCamps={setCamps} shikigamis={shikigamis} setShikigamis={setShikigamis} />
} 