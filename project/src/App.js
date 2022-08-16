import { Route, Routes } from "react-router-dom"
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import StarterPage from "./pages/StarterPage";

function App() {
	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route path={"/"} element={<HomePage></HomePage>}></Route>
					<Route path={"/starter"} element={<StarterPage></StarterPage>}></Route>
				</Routes>
			</Layout>
		</div>
	);
}

export default App;