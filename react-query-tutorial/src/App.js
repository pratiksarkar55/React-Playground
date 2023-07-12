import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQSuperHero from "./components/RQSuperHero";
import DynamicParallelPage from "./components/DynamicParallel.page";
import DependentQueryPage from "./components/DependentQuery.page";
import PaginatedQueryPage from "./components/PaginatedQuery.page";
import InfiniteQueryPage from "./components/InfiniteQuery.page";
import MutationQueryPage from "./components/MutationQuery.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
              <li>
                <Link to="/add-hero">Add Super Hero</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/add-hero" element={<MutationQueryPage />} />
            <Route path="/paginated-query" element={<PaginatedQueryPage />} />
            <Route path="/infinite-query" element={<InfiniteQueryPage />} />
            <Route
              path="/dependent-query"
              element={
                <DependentQueryPage email="pratiksarkar.573@gmail.com" />
              }
            />
            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallelPage heroIds={[1, 3]} />}
            />
            <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
