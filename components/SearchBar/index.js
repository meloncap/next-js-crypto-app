import styles from './SearchBar.module.css';

const index = ({onChange}) => {
    return (
        <div className={styles.searchBarContainer}> 
            <input className={styles.searchBar}  type="text" placeholder="ISO 4217 code" onChange={onChange}/>
        </div>
    )
}

export default index
