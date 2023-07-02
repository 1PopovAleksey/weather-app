import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <section>
        <div className="container py-5">
          <div className="flex items-center">
            <div className="input-group justify-start">
              <input className="input" type="text" placeholder="Search city" />
              <button className="btn-neutral btn">Search</button>
            </div>
            <div className="input-group justify-end">
              <button className="btn-neutral btn">Metric: °C, m/s</button>
              <button className="btn-neutral btn">Imperial: °F, mph</button>
            </div>
          </div>

          <div className="flex gap-10 py-10">
            <div className="flex w-max flex-col justify-between">
              <div className="mb-2">
                <p className="mb-1 text-xl text-neutral">Jul 2, 10:30am</p>
                <h2 className="text-neutral-dark mb-3 text-2xl font-bold">
                  Novosibirsk, RU
                </h2>
                <h1 className="text-7xl font-light text-neutral">20°C</h1>
              </div>
              <div>
                <div className="mb-2 flex flex-wrap gap-2">
                  <p className="w-max rounded bg-neutral px-2 py-1 text-lg font-medium text-base-100">
                    Cloudy
                  </p>
                  <p className="w-max rounded bg-neutral px-2 py-1 text-lg font-medium text-base-100">
                    Rain
                  </p>
                </div>
                <p className="text-neutral-dark mb-2 text-lg font-medium">
                  Feels like 19°C. Clear sky. Light breeze
                </p>
                <ul className="flex w-[17rem] flex-wrap gap-x-2 border-l-2 border-neutral px-3">
                  <li className="text-base text-neutral">2.0m/s SE</li>
                  <li className="text-base text-neutral">1015hPa</li>
                  <li className="text-base text-neutral">Humidity: 60%</li>
                  <li className="text-base text-neutral">UV: 4</li>
                  <li className="text-base text-neutral">Dew point: 12°C</li>
                  <li className="text-base text-neutral">Visibility: 10.0km</li>
                </ul>
              </div>
            </div>
            <div className="h-80 flex-1 rounded bg-neutral p-5">
              <p className="text-3xl font-bold text-base-100">Карта</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
