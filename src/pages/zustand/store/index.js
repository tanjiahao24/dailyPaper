import { create } from 'zustand'


const useStore = create(set => ({
  count: 0,
  age: 18,
  incCount: () => set(state => ({count: state.count + 1})),
  decCount: () => set(state => ({count: state.count - 1})),
  timeIncCount: (state) => {
    setTimeout(() => {
      set((state)=> ({count: state.count + 1}))
    },2000)
  },
  timeDecCount: () => {
    setTimeout(() => {
      set(state => ({count: state.count + 1}))
    },2000)
  },
  changeAge: () => set(state => ({age: Math.random().toFixed(2)}))
}))


export default useStore
