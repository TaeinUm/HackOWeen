import {atom, selector} from "recoil";
import {getAllThreads} from "../api/api";


export const selectedPinAtom = atom({
  key: 'selectedPinAtom',
  default: ""
})

export const selectedThreadsAtom = atom({
  key: 'selectedThreadsAtom',
  default: []
})

export const reloadAllThreadsAtom = atom({
  key: 'reloadAllThreadsAtom',
  default: 0
})

export const allThreadsAtom = atom({
  key: 'allThreadsAtom',
  default: selector({
    key: 'allThreadsAtom/Default',
    get: async ({get}) => {
      get(reloadAllThreadsAtom)
      return await getAllThreads()
    },
  })
})
