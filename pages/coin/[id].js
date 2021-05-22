import styles from './CoinPage.module.css';

const CoinPage = ({coin}) => {
    console.log(coin)
    return (
        <div className={styles.coin_page}>
            <div className={styles.coin_container}>
                <img
                    src={coin.image.large}
                    className={styles.coin_image}
                />
                <h1 className={styles.coin_name}>{coin.name}</h1>
                <p className={styles.coin_ticker}>{coin.symbol}</p>
                <p className={styles.coin_current}>
                    {coin.market_data.current_price.usd}
                </p>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query;
  
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
    `);
  
    const data = await res.json();
  
    return {
      props: {
        coin: data
      }
    };
  }
export default CoinPage
