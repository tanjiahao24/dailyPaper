import {create} from 'zustand'
import {immer} from "zustand/middleware/immer";

const useNestStore = create(immer(set => ({
  class: [
    {
      name: 'Vue.js',
      isSale: true
    },
    {
      name: 'React.js',
      isSale: true
    },
    {
      name: 'Angular',
      isSale: true
    },
    {
      name: 'Redux',
      isSale: true
    }
  ],
  changeSale: (name) => (set(state => {
    for(let item of state.class) {
      if (item.name === name) {
        item.isSale = !item.isSale
      }
    }
  }))
})))
export default useNestStore