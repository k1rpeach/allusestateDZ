import './App.css'
import StepOne from './pages/StepOne'
import Welcome from './pages/Welcome'
import StepTwo from './pages/StepTwo'
import StepThree from './pages/StepThree'
import StepFour from './pages/StepFour'
import Thanks from './pages/Thanks'
import { YourAnswers } from './pages/YourAnswers'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Welcome/>
	},
	{
		path: "/step-one",
		element: <StepOne/>
	},
	{
		path: "/step-two",
		element: <StepTwo/>
	},
	{
		path: "/step-three",
		element: <StepThree/>
	},
	{
		path: "/step-four",
		element: <StepFour/>
	},
	{
		path: "/your-answers",
		element: <YourAnswers/>
	},
	{
		path: "/thanks",
		element: <Thanks/>
	},
	
])

function App() {
	return (
		<div className='App'>
			<RouterProvider router={router}/>
		</div>
	)
}

export default App
