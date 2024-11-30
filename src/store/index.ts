import { create } from "zustand";

interface StoreState {
  q: string;
  page: number;
  totalItems: number;
  rowsPerPage: number;
  sort: string;
  setQ: (q: string) => void;
  setPage: (page: number) => void;
  setTotalItems: (totalItems: number) => void;
  setRowsPerPage: (rowsPerPage: number) => void;
  setSort: (sort: string) => void;
}

const useStore = create<StoreState>((set) => ({
  q: "",
  page: 0,
  totalItems: 0,
  rowsPerPage: 5,
  sort: "",
  setQ: (q) => set({ q }),
  setPage: (page) => set({ page }),
  setTotalItems: (totalItems) => set({ totalItems }),
  setRowsPerPage: (rowsPerPage) => set({ rowsPerPage }),
  setSort: (sort) => set({ sort }),
}));

export default useStore;
