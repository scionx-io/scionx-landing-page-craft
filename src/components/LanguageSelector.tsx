
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
  console.log('Current language object:', currentLanguage);

  return (
    <div className="min-w-[180px]">
      <Select value={language} onValueChange={(value: Language) => {
        console.log('Language changed to:', value);
        setLanguage(value);
      }}>
        <SelectTrigger className="w-full bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/50">
          <div className="flex items-center gap-2 w-full">
            <Globe className="w-4 h-4 flex-shrink-0" />
            <span className="flex-shrink-0">{currentLanguage?.flag}</span>
            <span className="flex-1 text-left truncate">{currentLanguage?.name || 'English'}</span>
          </div>
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
};

export default LanguageSelector;
