import langPL from '../assets/lang/pl.json'
import langEN from '../assets/lang/en.json'
import langRU from '../assets/lang/ru.json'

export const state = () => ({
  selectedLang: 'EN',
  lang: langEN
})

export const mutations = {
  setLanguage (state, langName) {
    if (langName === 'PL') {
      state.lang = langPL
      state.selectedLang = 'PL'
    } else if (langName === 'EN') {
      state.lang = langEN
      state.selectedLang = 'EN'
    } else if (langName === 'RU') {
      state.lang = langRU
      state.selectedLang = 'RU'
    }
  }
}
