import i18next from 'i18next'
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector'

const init = (path: string = "/locales/{{lng}}/{{ns}}.json") => i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: path
    },
    resources: {
      en: {
        translation: {
          'key': 'hello world'
        }
      }
    }
  })

export default init
