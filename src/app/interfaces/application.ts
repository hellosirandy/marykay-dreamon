import { Member } from './member';

export interface Application {
  teamname: string;
  leader: Member;
  members: Member[];
  impression: string;
  motivation: string;
  date: number;
  reverseDate: number;
}
