import { createSlice } from '@reduxjs/toolkit';

export type Language = 'en' | 'ar' |string;

interface LanguageState {
  language: Language;
}

const initialState: LanguageState = {
  language: localStorage.getItem('lang') ?? 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      const lang = localStorage.getItem('lang');
      // console.log(state.language,'lang')
      if(!lang) return localStorage.setItem('lang',state.language)
      lang === "ar" && localStorage.setItem('lang','en') 
      lang === "en" && localStorage.setItem('lang','ar')
      state.language = state.language === 'en' ? 'ar' : 'en';

    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      console.log(action.payload,'--')
      localStorage.setItem('lang',action.payload)

    },
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
