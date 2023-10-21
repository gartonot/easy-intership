import styles from './Register.module.css'

const Register = () => {
  return (
    <>
      <section className="rightSection">
      <h4 className="welcomeHeader">Добро пожаловать в</h4>
        <h1 className="easyIntershipHeader">Easy Intership</h1>
          <p>Уникальная возможность пройти стажировку в пару кликов прямо сейчас</p>
      </section>

      <main>
        <div>
          <img src="../assets/logo.svg" alt="" />
        </div>
        <section>
          <div>
            <h2>Регистрация</h2>
            <p> <span >*</span> - обязательные поля</p>
          </div>
            <form action="" >
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Фамилия" />
              <input type="text" placeholder="Дата рождения" />
              <input type="text" placeholder="Номер телефона" />
              <input type="password" placeholder="Пароль" />
              <input type="password" placeholder="Повторите пароль" />
              <button type="submit"> Зарегистрироваться </button>
            </form>
            <p>Уже есть аккаунт?</p>
        </section>
      </main>
    </>
  )
}

export default Register