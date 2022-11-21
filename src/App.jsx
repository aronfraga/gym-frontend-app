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
import Landing from './components/Login/Login';
import ThankYou from './components/ThankYou/ThankYou';
import Facilities from './components/Facilities/Facilities';
import Shop from './components/Shop/Shop';
import Shopping from './components/Shopping/Shopping';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='*' element={<PageNotFound />} />
				<Route exact path='/' element={<Landing />} />
				<Route path='/home' element={<Home />} />
				<Route path='/tienda' element={<Shop />} />
				<Route path='/tienda/carrito' element={<Shopping />} />
				<Route path='/rutinas' element={<Routines />} />
				<Route path='/rutinas/:id' element={<DetailRoutine />} />
				<Route path='/rutinas/crear' element={<FormRoutines />} />
				<Route path='/staff' element={<Staff />} />
				<Route path='/instalaciones' element={<Facilities />} />
				{/* <Route path='/seguimiento' element={<Home />} />
				<Route path='/clases' element={<Home />} /> */}
				<Route path='/feedback' element={<FeedBack />} />
				<Route path='/planes' element={<Planes />} />
				{/* <Route path='/:id' element={<Home />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
