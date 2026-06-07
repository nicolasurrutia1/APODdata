import { create } from 'zustand'

export const useLikeStore = create((set) => ({
    likedPhotos: [],
    addLikedPhoto: (photo) =>
        set((state) => ({ likedPhotos: [...state.likedPhotos, photo] })),

    removeLikedPhoto: (photoUrl) =>
        set((state) => ({ likedPhotos: state.likedPhotos.filter((photo) => photo.url !== photoUrl) })),

    clearLikedPhotos: () => set({ likedPhotos: [] }),
}))