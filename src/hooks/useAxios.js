import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxios(url, options = null) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => execute(), []);

  const execute = () => {
    setIsLoading(true);

    axios(url, options)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { data, isLoading, errorMessage, execute };
}
