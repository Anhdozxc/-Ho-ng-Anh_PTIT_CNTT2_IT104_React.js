import { createContext, useContext, useState } from "react";
type Language = "en" | "vi";
type LanguageContextType = {
  language: Language;
  changeLanguage: (lang: Language) => void;
};
const LanguageContext = createContext<LanguageContextType | null>(null);

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const changeLanguage = (lang: Language) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
function LanguageSelector() {
  const context = useContext(LanguageContext)!;
  return (
    <div>
      Ngôn ngữ hiện tại:{" "}
      <select
        value={context.language}
        onChange={(e) => context.changeLanguage(e.target.value as Language)}
      >
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </div>
  );
}
function Greeting() {
  const context = useContext(LanguageContext)!;
  return <h1>{context.language === "en" ? "Hello!" : "Xin chào!"}</h1>;
}
export default function LanguageApp() {
  return (
    <LanguageProvider>
      <LanguageSelector />
      <Greeting />
    </LanguageProvider>
  );
}
