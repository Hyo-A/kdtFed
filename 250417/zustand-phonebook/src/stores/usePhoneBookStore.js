import { create } from "zustand";

const usePhoneBookStore = create((set) => ({
  phoneBook: [],
  addContact: (name, phoneNumber) =>
    set((state) => ({
      phoneBook: [...state.phoneBook, { id: Date.now(), name, phoneNumber }],
    })),
}));
// ()를 붙히지 않으면 실행문이 되어버랜대

export default usePhoneBookStore;
