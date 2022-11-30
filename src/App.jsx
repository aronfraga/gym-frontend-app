import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Planes from './components/Planes/Planes';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Routines from './components/Routines/Routines';
import Staff from './components/Staff/Staff';
import FeedBack from './components/FeedBack/FeedBack';
import FormRoutines from './components/FormRoutines/FormRoutines';
import DetailRoutine from './components/DetailRoutine/DetailRoutine';
import Facilities from './components/Facilities/Facilities';
import Shop from './components/Shop/Shop';
import Shopping from './components/Shopping/Shopping';
import Calendar from './components/Calendar/Calendar';
import Dashboard from './components/Dashboard/Dashboard';
import ProductsDetail from './components/ProductsDetail/ProductsDetail';
import FormProducts from './components/FormProducts/formProducts';
import EditProduct from './components/FormProducts/EditProduct';
import FormCalendar from './components/Calendar/FormCalendar';
import Profile from './components/Profile/Profile';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='*' element={<PageNotFound />} />
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/tienda' element={<Shop />} />
				<Route path='/tienda/:status' element={<Shop />} />
				<Route path='/tienda/carrito' element={<Shopping />} />
				<Route path='/tienda/producto/:id' element={<ProductsDetail />} />
				<Route path='/rutinas' element={<Routines />} />
				<Route path='/rutinas/:id' element={<DetailRoutine />} />
				<Route path='/rutinas/crear' element={<FormRoutines />} />
				<Route path='/staff' element={<Staff />} />
				<Route path='/instalaciones' element={<Facilities />} />
				<Route path='/calendario' element={<Calendar />} />
				<Route path='/calendario/crear' element={<FormCalendar />} />
				<Route path='/admdashboard' element={<Dashboard />} />
				<Route path='/feedback' element={<FeedBack />} />
				<Route path='/planes' element={<Planes />} />
				<Route path='/admdashboard/products/:id' element={<EditProduct />} />
				<Route path='/admdashboard/products' element={<FormProducts />} />
				<Route path='/perfil' element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
