import { Option2 } from '../components/Option'
import { Heading } from '../components/Typography/Heading'
import { AppButton } from '../components/UI/AppButton'

const Thanks = () => {
	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='thanks'>
					<Option2 
						optionImg='./img/bell.png'
						altText='bell' optionText={''} 
						inputType={''} 
						id={''} />
					<Heading
						headingType='h1'
						headingText='Спасибо за прохождение опроса!'
					/>
					<p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
					<AppButton buttonText='Получить ссылку' />
				</div>
			</div>
		</div>
	)
}

export default Thanks
