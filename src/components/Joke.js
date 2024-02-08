import useAxios from "../hooks/useAxios";
import axios from "../apis/dadJokes";

const Joke = () => {
  const [joke, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Accept: "application/json"
      }
    }
  });
  console.log(joke?.joke);

  return (
    <article>
      <h2>Random Dad Joke</h2>

      {loading && <p>Loading...</p>}

      {!loading && error && <p className="errMsg">{error}</p>}

      {!loading && !error && joke && <p>{joke?.joke}</p>}

      {!loading && !error && !joke && <p>No dad joke to display</p>}

      <button onClick={() => refetch()}>Get Jokes</button>
    </article>
  );
};

export default Joke;
