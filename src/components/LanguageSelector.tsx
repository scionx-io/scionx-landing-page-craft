
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
  const { language, setLanguage } = useLanguage();
  console.log('LanguageSelector rendering, current language:', language);

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="min-w-[180px]">
      <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
        <SelectTrigger className="w-full bg-slate-800/50 border-slate-600 text-white">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>{currentLanguage?.flag}</span>
            <SelectValue />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-slate-800 border-slate-600 z-[100]">
          {languages.map((lang) => (
            <SelectItem 
              key={lang.code} 
              value={lang.code}
              className="text-white hover:bg-slate-700 focus:bg-slate-700"
            >
              <div className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
