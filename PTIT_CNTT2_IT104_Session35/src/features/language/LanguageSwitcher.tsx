import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store";
import { setLanguage, toggleLanguage } from "./languageSlice";

const text = {
  vi: {
    school: "Học viện Rikkei",
    vietnamese: "Vietnamese",
    english: "English",
  },
  en: {
    school: "Rikkei Academy",
    vietnamese: "Vietnamese",
    english: "English",
  },
};

export default function LanguageSwitcher() {
  const lang = useSelector((s: RootState) => s.language.current);
  const dispatch = useDispatch<AppDispatch>();
  const t = text[lang];

  return (
    <div style={{ padding: 16 }}>
      <button onClick={() => dispatch(setLanguage("vi"))}>
        {t.vietnamese}
      </button>
      <button onClick={() => dispatch(setLanguage("en"))}>{t.english}</button>
      <button onClick={() => dispatch(toggleLanguage())}>Toggle</button>

      <h2 style={{ marginTop: 16 }}>{t.school}</h2>
    </div>
  );
}
