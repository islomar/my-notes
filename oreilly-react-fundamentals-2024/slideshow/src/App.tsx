import './App.css'
import Slideshow from "./Components/Slideshow.tsx";
import styles from './Button.module.css';

function App() {
    return (
        <div>
            <Slideshow/>
            <button className={styles.blackButton}>Click Me</button>
        </div>
    )
}

export default App
