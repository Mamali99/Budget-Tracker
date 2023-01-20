import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);


  const sumPrices = (arr) => {
    return arr.reduce((total, item) => {
        return total + Number(item.price);
    }, 0);
  }

  useEffect(() => {
    
    axios
      .get("http://localhost:8000/budget")
      .then((response) => {
        const data = response.data.sort((a, b) => {
          return b.id - a.id || b.id > a.id
        });
        
        setData(data);
        setTotalPrice(sumPrices(data))
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, [url]);
  return { data, isPending, error, totalPrice };
};
export default useFetch;
