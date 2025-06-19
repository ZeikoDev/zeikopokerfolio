import { getCollection } from 'astro:content';
import ui from './ui.json';
import type { TranslationKey } from './types';

export const languages = {
    en: 'English',
    es: 'Español'
};

export const defaultLang = 'en';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in languages) return lang as keyof typeof languages;
    return defaultLang;
}

function getNestedValue(obj: any, path: string): string {
    return path.split('.').reduce((acc, part) => acc?.[part], obj) || '';
}

export function useTranslations(lang: keyof typeof languages) {
    return function t(key: TranslationKey): string {
        const translation = getNestedValue(ui[lang], key) || getNestedValue(ui[defaultLang], key);
        return translation || '';
    };
}

export async function getStaticPaths() {
    const posts = await getCollection('blog');
    const paths = Object.keys(languages).map((lang) => ({ params: { lang } }));
    return paths;
} 