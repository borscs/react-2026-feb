// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import {loader as eventsLoader} from "./pages/Events";
import { loader as eventDetailLoader, action as deleteEvent} from "./pages/EventsDetail";
import { action as newEventAction} from "./pages/NewEvent";
import { Routes, Route } from 'react-router-dom';

import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import EventsRoot from "./pages/EventsRoot";
import Events from "./pages/Events";
import EventsDetail from "./pages/EventsDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import ErrorPage from "./pages/ErrorPage";

function App() {
	
	const route = createBrowserRouter([
		{
			path: '/',
				element: <RootLayout/>,
				errorElement: <ErrorPage/>,
				children: [
					{
						path: '/',
						element: <Home/>
					},
					{
						path: '/events',
						element: <EventsRoot/>,
						children: [
							{
								index: true,
								element: <Events/>,
								loader: eventsLoader,
							},
							{
								path: 'new',
								element: <NewEvent/>,
								action: newEventAction
							},
							{
								path: ':eventId',
								id: 'event-detail',
								loader: eventDetailLoader,
								children: [
									{
										index: true,
										element: <EventsDetail/>,
										action: deleteEvent,
									},
									{
										path: 'edit',
										element: <EditEvent/>
									}
								]
							},
						]
					}
				]
	}])
	
	return <RouterProvider router={route} />
	
	
// 	return (
// 		<>
// 			<BrowserRouter >
// 			<Routes >
// 				<Route path='/' element={<RootLayout/>} errorElement={<ErrorPage/>}>
// 					<Route path='/' element={<Home/>}/>
// 					<Route path='/events' element={<EventsRoot/>}>
// 						<Route (tabs) element={<Events/>} />
// 						<Route path='new' element={<NewEvent/>} />
// 						<Route path=':eventId' element={<EventsDetail/>} />
// 						<Route path=':eventId/edit' element={<EditEvent/>} />
// 					</Route>
// 				</Route>
// 			</Routes>
// 			</BrowserRouter>
// 		</>
// 	)
 }

export default App;
