import { Route, Routes } from "react-router-dom"
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AddPage from "./pages/AddPage";
import SearchPage from "./pages/SearchPage";
import StarterPage from "./pages/StarterPage";
import ModifyPage from "./pages/ModifyPage";

function App() {
	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route path={"/"} element={<HomePage></HomePage>}></Route>
					<Route path={"/starter"} element={<StarterPage></StarterPage>}></Route>
					<Route path={"/search"} element={<SearchPage></SearchPage>}></Route>
					<Route path={"/add"} element={<AddPage></AddPage>}></Route>
					<Route path={"/modify"} element={<ModifyPage></ModifyPage>}></Route>
				</Routes>
			</Layout>
		</div>
	);
}

export default App;