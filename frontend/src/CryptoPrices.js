import React, { useEffect, useState } from "react";

function CryptoPrices() {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd")
      .then(res => res.json())
      .then(data => {
        setPrices(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading prices...</div>;
  return (
    <div>
      <h2>Current Prices</h2>
      <ul>
        <li>Bitcoin: ${prices.bitcoin.usd}</li>
        <li>Ethereum: ${prices.ethereum.usd}</li>
        <li>Solana: ${prices.solana.usd}</li>
      </ul>
    </div>
  );
}

export default CryptoPrices;