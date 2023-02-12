import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface NavBarState {
  isMenuOpen: boolean;
  isMember: boolean;
  isSignInWindowOpen: boolean;
  setIsMenuOpen: () => void;
}

export const useNavBarStore = create<NavBarState>()(
  devtools(
    persist(
      (set) => ({
        isMenuOpen: false,
        isMember: true,
        isSignInWindowOpen: true,
        setIsMenuOpen: () =>
          set((state) => ({ isMenuOpen: !state.isMenuOpen })),
      }),
      {
        name: 'navBar-storage',
      }
    )
  )
);
