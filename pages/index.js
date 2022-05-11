// Les Librairies
import { useEffect, useState } from 'react';

export default function Index(props) {
    // const [prixBitcoin, setPrixBitcoin] = useState('En chargement');
    // useEffect(() => {
    //     fetch('https://blockchain.info/ticker')
    //         .then((response) => response.json())
    //         .then((data) => setPrixBitcoin(data.EUR.last));
    // }, []);

    return (
        <main>
            <h1>Bienvenue sur mon portfolio</h1>
            <p>{props.prixBitcoin} $</p>
        </main>
    );
}
export async function getStaticProps() {
    let bitcoinEnEuro;
    await fetch('https://blockchain.info/ticker')
        .then((response) => response.json())
        .then((data) => (bitcoinEnEuro = data.USD.last));
    return {
        props: {
            prixBitcoin: bitcoinEnEuro,
        },
    };
}
