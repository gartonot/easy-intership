import styles from './AppTextField.module.css'
import PenIcon from "../../icons/PenIcon/PenIcon.jsx";

const AppTextField = ({label, type = "text", placeholder, icon = false}) => {
  return (
    <>
     <div className={styles.textField}>
       {
         label ?
           (
             <label>
               { label }
             <input
               className={styles.textFieldInput }
               type={type}
               placeholder={placeholder}
             />
             </label>
           )
         :
           (
             <input
               className={styles.textFieldInput }
               type={type}
               placeholder={placeholder}
             />
           )
       }
       {
         icon ?
           (
             <div className={styles.icon}>
               <PenIcon style={{ color: 'currentColor' }} />
             </div>
           )
         : ''
       }

     </div>
    </>
  )
}

export default AppTextField