import { create } from 'zustand';
import { getBotUrlSender } from '../helpers';
import { PHONE_NUMBER, MESSAGE } from '../constants';

export interface IStore {
  botUrlSender: string;
}
export const useLandingBotStore = create<IStore>(() => ({
  botUrlSender: getBotUrlSender(PHONE_NUMBER, MESSAGE),
}));
