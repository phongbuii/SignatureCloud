import AsyncStorageUtils from '../utils/storage/index';
import i18n from 'i18n-js';
import en from './en.json';
import vi from './vi.json';
import ja from './ja.json';

i18n.fallbacks = true;
i18n.translations = {en, ja, vi};

// i18n.locale = Localization.locale || "vi"
i18n.locale = 'vi';

export const onChangeLanguage = async (
  value: 'en' | 'ja' | 'vi',
  isInApp?: boolean,
) => {
  i18n.locale = value;
  const obj = {local: value};
  if (isInApp) {
    await AsyncStorageUtils.saveObject(AsyncStorageUtils.KEY.LANGUAGE, obj);
  }
};

export const setLangInApp = async () => {
  const lang: any = await AsyncStorageUtils.getObject(
    AsyncStorageUtils.KEY.LANGUAGE,
  );
  if (lang && lang?.local) {
    i18n.locale = lang?.local ?? 'vi';
  } else {
    i18n.locale = 'vi';
  }
};
/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
type DefaultLocale = typeof vi;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];
