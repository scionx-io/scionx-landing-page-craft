
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it' as Language, name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt' as Language, name: 'Português', flag: '🇵🇹' },
  { code: 'zh' as Language, name: '中文', flag: '🇨🇳' },
  { code: 'ja' as Language, name: '日本語', flag: '🇯🇵' },
  { code: 'ko' as Language, name: '한국어', flag: '🇰🇷' },
  { code: 'ar' as Language, name: 'العربية', flag: '🇸🇦' }
];

const LanguageSelector = () => {
  // Outer try/catch to visibly crash if context is not available
  try {
    console.log('[LanguageSelector DEBUG] Rendering LanguageSelector...');
    const { language, setLanguage } = useLanguage();
    console.log('[LanguageSelector DEBUG] Current language:', language);

    const currentLanguage = languages.find(lang => lang.code === language);
    console.log('[LanguageSelector DEBUG] Current language object:', currentLanguage);

    return (
      <div className="min-w-[180px] border-4 border-green-500 bg-green-100 p-1">
        <div className="text-black text-xs mb-1 font-bold">LANGUAGE SELECTOR DEBUG</div>
        <Select value={language} onValueChange={(value: Language) => {
          console.log('Language changed to:', value);
          setLanguage(value);
        }}>
          <SelectTrigger className="w-full bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
            <SelectValue>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>{currentLanguage?.flag || '🇺🇸'}</span>
                <span>{currentLanguage?.name || 'English'}</span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-slate-600 z-[9999] min-w-[180px]">
            {languages.map((lang) => (
              <SelectItem 
                key={lang.code} 
                value={lang.code}
                className="text-white hover:bg-slate-700 focus:bg-slate-700 cursor-pointer"
              >
                <div className="flex items-center gap-2 w-full">
                  <span className="flex-shrink-0">{lang.flag}</span>
                  <span className="flex-1">{lang.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  } catch (e) {
    console.error('[LanguageSelector ERROR] Rendering failed:', e);
    return (
      <div className="bg-red-800 text-white font-bold p-2 rounded">
        LANGUAGE SELECTOR: RENDER ERROR — See console
      </div>
    );
  }
};

export default LanguageSelector;
