import { Route, Routes } from "react-router-dom"
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import SearchPage from "./pages/SearchPage";
import StarterPage from "./pages/StarterPage";

function App() {
	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route path={"/"} element={<HomePage></HomePage>}></Route>
					<Route path={"/starter"} element={<StarterPage></StarterPage>}></Route>
					<Route path={"/search"} element={<SearchPage></SearchPage>}></Route>
				</Routes>
			</Layout>
		</div>
	);
}

export default App;