import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface NavBarState {
  isMenuOpen: boolean;
  isMember: boolean;
  setIsMenuOpen: () => void;
  setIsMember: (_payload: boolean) => void;

  // increase: (by: number) => void;
}

export const useNavBarStore = create<NavBarState>()(
  devtools(
    persist(
      (set) => ({
        isMenuOpen: false,
        isMember: true,
        setIsMenuOpen: () =>
          set((state) => ({ isMenuOpen: !state.isMenuOpen })),
        setIsMember: (payload) => set((_state) => ({ isMember: payload })),
      }),
      {
        name: 'navBar-storage',
      }
    )
  )
);
