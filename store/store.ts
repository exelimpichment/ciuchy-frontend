import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface NavBarState {
  isMenuOpen: boolean;
  setIsMenuOpen: () => void;
}

export const useNavBarStore = create<NavBarState>()(
  devtools(
    persist(
      (set) => ({
        isMenuOpen: false,
        setIsMenuOpen: () =>
          set((state) => ({ isMenuOpen: !state.isMenuOpen })),
      }),
      {
        name: 'navBar-storage',
      }
    )
  )
);
