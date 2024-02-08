import { useEffect, useState } from "react";

const useAxiosFunction = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [controller, setcController] = useState();

  const axiosFetch = async (configObj) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;
    try {
      setLoading(true);
      const ctrl = new AbortController();
      setcController(ctrl);
      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        signal: ctrl.signal
      });
      console.log(res);
      setResponse(res.data);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log(controller);
    //useEffect cleanup
    return () => controller && controller.abort();
  }, [controller]);

  return [response, error, loading, axiosFetch];
};

export default useAxiosFunction;
