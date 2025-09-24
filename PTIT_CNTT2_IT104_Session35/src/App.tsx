import ViewMode from "./features/bai4/ViewMode";
import Counter from "./features/counter/Counter";
import LanguageSwitcher from "./features/language/LanguageSwitcher";
import Sidebar from "./features/menu/Sidebar";
import RandomList from "./features/random/RandomList";
import ThemeBox from "./features/theme/ThemeBox";

export default function App() {
  return (
    <>
      <Counter />
      <RandomList />
      <ThemeBox />
      <ViewMode />
      <Sidebar />
      <LanguageSwitcher />
    </>
  );
}
