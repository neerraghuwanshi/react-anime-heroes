import Loader from "react-loader-spinner"

import styles from '../css/CentredLoader.module.css'


export default function CentredLoader() {
    return (
        <div className={styles.container}>
            <Loader 
                type="Puff" 
                color="white" 
                height={80} 
                width={80} />
        </div>
    )
}
