import { create } from 'zustand'

const useStore = create((set) => ({
    numnum: 0,
    increaseNumNum: () => set((state) => ({ numnum: state.numnum + 1})),
    minusNumNum: () => set((state) =>({ numnum: state.numnum - 1}))
}));

export default useStore

