export interface IShikigami {
  name: string;
  speed: number;
  completeTime: number;
  camp: CAMP;
  position: number;
}

export enum CAMP {
  RED = 0,
  BLUE = 1
}

// export interface ICamp {
//   type: CAMP;
//   ghost: number;
//   nextAddGhost: 3 | 4 | 5;
//   nowPosition: number;
// }
export type ICamp = {
  [type in CAMP]: {
    ghost: number;
    nextAddGhost: 3 | 4 | 5;
    nowPosition: number;
  };
};