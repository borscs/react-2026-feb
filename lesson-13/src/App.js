import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes,} from "react-router";
import HomePage from "./pages/HomePage";
import ProductionsPage from "./pages/ProductionsPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductionDetailsPage from "./pages/ProductionDetailsPage";


const App2 = () => {
	return (
		<BrowserRouter >
			<Routes>
				<Route path='/' element={<RootLayout/>} errorElement={<ErrorPage/>} >
					<Route path='/' element={<HomePage/>}/>,
					<Route path='/products' element={<ProductionsPage/>}/>,
					<Route path='/products/:productId' element={<ProductionDetailsPage/>}/>
				</Route>
			
			</Routes>
		</BrowserRouter>
	)
}

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <RootLayout/>,
// 		errorElement: <ErrorPage/>,
// 		children: [
// 			{
// 				path: '/',
// 				element: <HomePage/>
// 			},
// 			{
// 				path: '/products',
// 				element: <ProductionsPage/>
// 			},
// 			{
// 				path: '/products/:productId',
// 				element: <ProductionDetailsPage/>
// 			}
// 		]
// 	}
// ])

function App() {
	return <App2/>
}


export default App;
