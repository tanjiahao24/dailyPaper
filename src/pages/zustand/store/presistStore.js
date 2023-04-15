import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const usePersistStore = create(persist(
    set => ({
      name: 'jj',
      age: 18
    })
))
