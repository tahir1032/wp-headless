import './App.css';
// import Posts from './components/PostContent.jsx';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from './components/Footer';
import Blogs from "./pages/Blog";
import SinglePost from "./pages/SinglePost";

export default function App() {
  return (
    <>
      <Header />
      
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:slug" element={<SinglePost />} />
        </Routes>
      </main>
          <Footer/>
    </>
  );
}
