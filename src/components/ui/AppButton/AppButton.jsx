import style from './AppButton.module.css'
const AppButton = ({label = 'Кнопка', buttonSmall = false, buttonOutlined = false}) => {
  return (
    <>
      <button className={ `${style.button} ${buttonSmall ? style.small : ''} ${buttonOutlined ? style.outlined : ''}` }>
        { label }
      </button>
    </>
  )
}

export default AppButton