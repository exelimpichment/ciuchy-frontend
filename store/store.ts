import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface NavBarState {
  isMenuOpen: boolean;
  isMember: boolean;
  isSignInWindowOpen: boolean;
  setIsMenuOpen: () => void;
  setIsMember: () => void;
}

export const useNavBarStore = create<NavBarState>()(
  devtools(
    persist(
      (set) => ({
        isMenuOpen: false,
        isMember: false,
        isSignInWindowOpen: true,
        setIsMenuOpen: () =>
          set((state) => ({ isMenuOpen: !state.isMenuOpen })),
        setIsMember: () => set((state) => ({ isMember: !state.isMember })),
      }),
      {
        name: 'navBar-storage',
      }
    )
  )
);
