import {atom, selector, selectorFamily} from "recoil";
import {getAllThreads} from "../api/api";


export const selectedPinAtom = atom({
  key: 'selectedPinAtom',
  default: ""
})

export const selectedThreadsAtom = atom({
  key: 'selectedThreadsAtom',
  default: []
})

export const allThreadsAtom = atom({
  key: 'allThreadsAtom',
  default: selector({
    key: 'allThreadsAtom/Default',
    get: async () => {
      return await getAllThreads()
    },
  })
})
