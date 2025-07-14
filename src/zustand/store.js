import { create } from 'zustand';

export const useStores = create(set => ({
  bears: 0,
  increments: () => set(state => ({ bears: state.bears + 1 })),
  decrements: () => set(state => ({ bears: state.bears - 1 })),
  resets: () => set({ bears: 0 }),
}));
