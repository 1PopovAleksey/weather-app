import { FC } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const weather = {
  city: "London", // Choose your city
  api: "04e0ff6a5bb18c2a686c6becd886c64e",
  units: "metric", // "imperial" or "metric"
  lang: "en", // "en" or "ru"
};

const Home: FC = () => {
  const url = `https://api.openweathermap.org/data/1.5/weather?q=${weather.city}&appid=${weather.api}&units=${weather.units}&lang=${weather.lang}`;
  const { isLoading, error, data } = useQuery("weatherData", () =>
    axios.get(url).then((res) => res.data),
  );

  if (isLoading)
    return (
      <>
        <div className="container flex justify-center py-5">
          <h2 className="text-neutral-dark text-2xl font-bold">Loading...</h2>
        </div>
      </>
    );

  if (error)
    return (
      <>
        <div className="container flex justify-center py-5">
          <h2 className="text-neutral-dark text-2xl font-bold">
            {"Error: " + error}
          </h2>
        </div>
      </>
    );

  return (
    <>
      <section>
        <div className="container flex flex-col items-center justify-center py-5">
          <div className="input-group flex w-full justify-center">
            <input className="input-primary input" />
            <button className="btn-accent btn">Search</button>
          </div>
          <div className="flex gap-10 py-10">
            <div className="flex w-max flex-col justify-between">
              <div className="mb-2">
                <h2 className="text-neutral-dark mb-3 text-2xl font-bold">
                  {data.name}, {data.sys.country}
                </h2>
                <h1 className="text-7xl font-light text-neutral">
                  {Math.floor(data.main.temp)} °
                </h1>
              </div>
              <div>
                <div className="mb-2 flex flex-wrap gap-2">
                  <p className="w-max rounded bg-neutral px-2 py-1 text-lg font-medium text-base-100">
                    {data.weather[0].main}
                  </p>
                </div>
                <p className="text-neutral-dark mb-2 text-lg font-medium">
                  Feels like {data.main.feels_like}.{" "}
                  {data.weather[0].description}
                </p>
                <ul className="flex w-[17rem] flex-wrap gap-x-2 border-l-2 border-neutral px-3">
                  <li className="text-base text-neutral">
                    {data.main.pressure}hPa
                  </li>
                  <li className="text-base text-neutral">
                    Humidity: {data.main.humidity}%
                  </li>
                  <li className="text-base text-neutral">
                    Visibility: {Math.floor(data.visibility / 1000)}km
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
