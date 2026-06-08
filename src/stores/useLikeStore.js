import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useLikeStore = create(persist((set) => ({
    likedPhotos: [],

    addLikedPhoto: (photo) =>
        set((state) => {
            const alreadyLiked = state.likedPhotos.some((p) => p.url === photo.url);
            if (alreadyLiked) return state;
            return { likedPhotos: [...state.likedPhotos, photo] }
        }),

    removeLikedPhoto: (photoUrl) =>
        set((state) => ({ likedPhotos: state.likedPhotos.filter((photo) => photo.url !== photoUrl) })),

    clearLikedPhotos: () => set({ likedPhotos: [] }),
}),
    {
        name: 'apod-likes',
        partialize: (state) => ({ likedPhotos: state.likedPhotos }),
    }
));