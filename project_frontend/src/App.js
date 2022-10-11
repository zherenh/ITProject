import { Route, Routes } from "react-router-dom"
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AddPage from "./pages/AddPage";
import SearchPage from "./pages/SearchPage";
import ModifyPage from "./pages/ModifyPage";
import ProfilePage from "./pages/ProfilePage";




function App() {
	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route path={"/"} element={<HomePage></HomePage>}></Route>
					<Route path={"/search"} element={<SearchPage></SearchPage>}></Route>
					<Route path={"/add"} element={<AddPage></AddPage>}></Route>
					<Route path={"/modify"} element={<ModifyPage></ModifyPage>}></Route>
					<Route path={"/Profile"} element={<ProfilePage></ProfilePage>}></Route>
				</Routes>
			</Layout>
		</div>
	);
}

export default App;