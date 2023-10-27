import {atom, selector, selectorFamily} from "recoil";
import {getAllMarkers, getAllThreads} from "../api/api";


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

export const allMarkersAtom = atom({
  key: 'allMarkerAtom',
  default: selector({
    key: 'allMarkersAtom/Default',
    get: async () => {
      return await getAllMarkers()
    },
  })
})
