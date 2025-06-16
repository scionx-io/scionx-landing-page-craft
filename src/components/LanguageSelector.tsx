
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
  const timestamp = Date.now();
  console.log('LanguageSelector component is rendering - TIMESTAMP:', timestamp);
  
  const { language, setLanguage } = useLanguage();
  console.log('Current language - TIMESTAMP:', timestamp, 'Language:', language);
  
  const currentLanguage = languages.find(lang => lang.code === language);
  console.log('Current language object - TIMESTAMP:', timestamp, 'Object:', currentLanguage);
  
  return (
    <div className="language-selector-container" style={{ border: '2px solid red', padding: '4px' }}>
      <Select value={language} onValueChange={(value: Language) => {
        console.log('Language changing to - TIMESTAMP:', timestamp, 'New language:', value);
        setLanguage(value);
      }}>
        <SelectTrigger className="w-[180px] bg-slate-800/50 border-slate-700 text-white hover:bg-slate-700/50">
          <div className="flex items-center gap-2">
            <Globe size={16} />
            <span className="text-sm">{currentLanguage?.flag} {currentLanguage?.name}</span>
          </div>
        </SelectTrigger>
        <SelectContent className="bg-slate-800 border-slate-700 z-[60]">
          {languages.map((lang) => (
            <SelectItem 
              key={`${lang.code}-${timestamp}`}
              value={lang.code}
              className="text-white hover:bg-slate-700 focus:bg-slate-700 cursor-pointer"
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
