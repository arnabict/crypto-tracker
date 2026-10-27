import { useParams } from "react-router";
import { fetchCoinData } from "../api/coinGecko";
import { useEffect, useState } from "react";

export default function CoinDetail() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCoinData = async () => {
      try {
        const data = await fetchCoinData();
        setCoin(data);
      } catch (err) {
        console.error("Error fetching crypto: ", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadCoinData();
  }, [id]);

  return <div>CoinDetail</div>;
}
