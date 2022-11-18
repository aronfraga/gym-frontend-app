import React from 'react';
import { BrowserRouter, Routes, Route, useMatches } from 'react-router-dom';
import Home from './components/Home/Home';
import Planes from './components/Planes/Planes';
import NoMatch from './components/NoMatch/NoMatch';
import Routines from './components/Routines/Routines';
import Staff from './components/Staff/Staff';
import FeedBack from './components/FeedBack/FeedBack';
import FormRoutines from './components/FormRoutines/FormRoutines';
import DetailRoutine from './components/DetailRoutine/DetailRoutine';
import ThankYou from './components/ThankYou/ThankYou';
//import Facilities from "./components/Facilities/Facilities";
import { useMatches } from 'react-router-dom';
import Shop from './components/Shop/Shop';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='*' element={<NoMatch />} />
				<Route path='/' element={<Home />} />
				<Route path='/tienda' element={<Shop />} />
				<Route path='/rutinas' element={<Routines />} />
				<Route path='/rutinas/crear' element={<FormRoutines />} />
				<Route path='/rutinas/:id' element={<DetailRoutine />} />
				<Route path='/staff' element={<Staff />} />
				{/* <Route path="/instalaciones" element={<Facilities />} /> */}
				<Route path='/seguimiento' element={<Home />} />
				<Route path='/approve' element={<ThankYou />} />
				<Route path='/clases' element={<Home />} />
				<Route path='/feedback' element={<FeedBack />} />
				<Route path='/planes' element={<Planes />} />
				<Route path='/:id' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
