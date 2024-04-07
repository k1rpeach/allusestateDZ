import { AppButton } from '../components/UI/AppButton'
import { Heading } from '../components/Typography/Heading'
import { AppInput } from '../components/UI/AppInput'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Welcome = () => {
	const [nameData, setNameData] = useState('')
	const [phoneData, setPhoneData] = useState('')

	const [nameError, setNameError] = useState(false)
	const [phoneError, setPhoneError] = useState(false)

	useEffect(() =>{
		if(!nameData) {
			setNameError(true)

		}
		else {
			setNameError(false)
		}if(!phoneData) {
			setPhoneError(true)
		}
		else {
			setPhoneError(false)
		}
	}, [nameData, phoneData] )

	const navigate = useNavigate()

	const submitHandler = () =>{
		navigate("/step-one")
		localStorage.setItem("username", nameData)
		localStorage.setItem("userphone", phoneData)
	}

	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='welcome'>
					<Heading
						headingType='h1'
						headingText='Добро пожаловать в квиз от лучшего учебного центра'
					/>
					<form className='welcome__form' onSubmit={submitHandler}>
						<AppInput
							inputLabel='Ваше имя'
							id='username'
							inputType='text'
							inputPlacaholder='Ваш ответ'
							errorMessage='Введите имя'
							hasError={nameError}
							onChange={e => setNameData(e.target.value)}
						/>
						<AppInput
							inputLabel='Ваш номер'
							id='phone'
							inputType='number'
							inputPlacaholder='+998 9- --- -- -- '
							errorMessage='Введите номер в правильном формате'
							hasError={phoneError}
							onChange={e => setPhoneData(e.target.value)}
						/>
						
							<AppButton 
							isDisabled={false} 
							buttonText='Далее' 
							/>
						
						
					</form>
				</div>
			</div>
		</div>
	)
}

export default Welcome
