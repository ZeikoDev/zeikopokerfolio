import { useTranslations, getLangFromUrl, languages } from "@/i18n/utils";

export default function Navbar() {
    const lang = getLangFromUrl(new URL(window.location.href));
    const t = useTranslations(lang);

    const getLocalizedPath = (path: string) => {
        return `/${lang}${path}`;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-blue-700/20">
            <div className="max-w-content mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <a href={getLocalizedPath('/')} className="text-xl font-bold text-electric-blue">
                                ZeikoDev
                            </a>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <a
                                href={getLocalizedPath('/')}
                                className="border-transparent text-light-gray hover:text-electric-blue inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                {t('nav.home')}
                            </a>
                            <a
                                href={getLocalizedPath('/#about')}
                                className="border-transparent text-light-gray hover:text-electric-blue inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                {t('nav.about')}
                            </a>
                            <a
                                href={getLocalizedPath('/#skills')}
                                className="border-transparent text-light-gray hover:text-electric-blue inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                {t('nav.skills')}
                            </a>
                            <a
                                href={getLocalizedPath('/#projects')}
                                className="border-transparent text-light-gray hover:text-electric-blue inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                {t('nav.projects')}
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <select
                            onChange={(e) => {
                                const newLang = e.target.value;
                                const [, ...rest] = window.location.pathname.split('/');
                                window.location.pathname = `/${newLang}/${rest.join('/')}`;
                            }}
                            value={lang}
                            className="bg-slate-900 border border-blue-700/20 rounded-md py-2 px-3 text-sm text-light-gray hover:text-electric-blue focus:outline-none focus:ring-2 focus:ring-blue-700/20"
                        >
                            {Object.entries(languages).map(([code, name]) => (
                                <option key={code} value={code}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    );
} 