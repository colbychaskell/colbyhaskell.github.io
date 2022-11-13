import logo from './logo.svg';
import './App.css';
import { TitleBar } from "./components/TitleBar";
import { ProjectPreview } from './components/ProjectPreview';
import { Profile } from "./components/Profile";
import { ProjectsFeed } from './containers/ProjectsFeed';
import { Footer } from "./containers/Footer";
import { ProjectFeatureSection } from './containers/ProjectFeatureSection';
import { TitledSection } from './containers/TitledSection';

function App() {
  return (
    <div className="App">
      <TitleBar name="Colby Haskell" />
      <Profile />
      <ProjectFeatureSection /> {/* This should slide in from side */}
      <TitledSection title="Recent Projects" subtitle="An automated feed of my top GitHub projects!" backgroundColor={"rgb(241, 244, 247)"}>
        <ProjectsFeed />
      </TitledSection>
      {/* TODO: Add skills section */}
      {/* <TitledSection title="Skills">
        <h3>Learn more about my ___ skills</h3>
        <p>Stats from GitHub (languages, etc.)</p>
      </TitledSection> */}
      <Footer />
    </div>
  );
}

export default App;
