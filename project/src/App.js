import { Route, Routes } from "react-router-dom"
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import StarterPage from "./pages/StarterPage";
import UpdatePage from "./pages/UpdatePage";

function App() {
	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route path={"/"} element={<HomePage></HomePage>}></Route>
					<Route path={"/starter"} element={<StarterPage></StarterPage>}></Route>
					<Route path={"/search"} element={<SearchPage></SearchPage>}></Route>
					<Route path={"/profile"} element={<ProfilePage></ProfilePage>}></Route>
					<Route path={"/update"} element={<UpdatePage></UpdatePage>}></Route>
				</Routes>
			</Layout>
		</div>
	);
}

export default App;