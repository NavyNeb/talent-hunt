import "./App.css";
import Header from "./components/molecules/Header";
import HeaderSection from "./components/organisms/HeaderSection";
import OurStorySection from "./components/organisms/OurStorySection";
import TalentsTrending from "./components/organisms/TalentsTrending";

function App() {
  return (
    <main className="space-y-[90px]">
      {/* Hero area */}
      <div>
        <Header />
        <HeaderSection />
      </div>
      {/* Our story */}
      <OurStorySection />
      {/* Trending Talents */}
      <TalentsTrending />
      
    </main>
  );
}

export default App;
