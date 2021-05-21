import styles from './SearchBar.module.css';

const index = () => {
    return (
        <div className={styles.searchBarContainer}> 
            <input className={styles.searchBar}  type="text" placeholder="ISO 4217 code"/>
        </div>
    )
}

export default index
