import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Sidenav from "./components/sidenav/Sidenav";
import Projects from "./pages/projects/Projects";
import ProjectView from "./pages/projects/ProjectView";
import Me from "./pages/myinfo/Me";
function App() {
  return (
    <Router>
      <Sidenav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectView />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </Router>
  );
}

export default App;
