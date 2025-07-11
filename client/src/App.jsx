import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrendingSection from './components/TrendingSection';
import PopularSection from './components/PopularSection';
import MoviePage from './components/MoviePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-dm">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TrendingSection />
                <PopularSection />
              </>
            }
          />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;