import { createSlice } from '@reduxjs/toolkit';

export type Language = 'en' | 'ar';

interface LanguageState {
  language: Language;
}

const initialState: LanguageState = {
  language: localStorage.getItem('lang'),
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      const lang = localStorage.getItem('lang');
      console.log(lang,'---')
      lang === "ar" && localStorage.setItem('lang','en') 
      lang === "en" && localStorage.setItem('lang','ar')
      state.language = state.language === 'en' ? 'ar' : 'en';
      // console.log(action.payload,'payload')
// 
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      console.log(action.payload,'payload')
      // localStorage.setItem('lang',action.payload)

    },
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
