import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Lang = "en" | "my";

interface AlertState {
  lang: Lang;
  changeLang: (lang: Lang) => void;
}

export const useLangStore = create<AlertState>()(
  persist(
    (set) => ({
      lang: "en",
      changeLang: (lang: Lang) => set(() => ({ lang: lang })),
    }),
    {
      name: "lang-storage", // LocalStorage key
      //   storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
