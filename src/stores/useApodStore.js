import { create } from 'zustand';
import axios from 'axios';
import { nasaClient } from '../api/axiosClient';

const apodParams = {
    api_key: import.meta.env.VITE_API_KEY,
    count: "9",
    thumbs: "true",
};

let abortController = null;

export const useApodStore = create((set, get) => ({
    data: null,
    loading: true,
    error: null,
    isRefetching: false,

    fetchApod: async (isRefetching = false) => {
        if (abortController) abortController.abort();
        abortController = new AbortController();

        set(isRefetching ? { isRefetching: true, error: null } : { loading: true, error: null });
        try {
            const response = await nasaClient.get("", {
                signal: abortController.signal,
                params: apodParams,
            });
            set({ data: response.data })
        } catch (err) {
            if (axios.isCancel(err)) return;
            const message = err.response ? `NASA API responded with${err.response.status}` : err.message;
            set({ error: message })
        } finally {
            set(isRefetching ? { isRefetching: false } : { loading: false })
        }
    },

    reloadData: () => get().fetchApod(true),
}))