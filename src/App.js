import React, { useEffect, useState, useCallback } from 'react';
import SearchForm from './SearchForm';
import WeatherCard from './WeatherCard';

const clientID = `?key=${process.env.REACT_APP_API_KEY}`;

const App = () => {
  const [query, setQuery] = useState({});
  const [city, setCity] = useState('Nove Zamky');
  const [loading, setLoading] = useState(true);

  const url = `https://api.weatherbit.io/v2.0/forecast/daily`;
  const restUrl = `&lang=sk&city=${city}&days=3`;
  const mainUrl = `${url}${clientID}${restUrl}`;

  const fetchWeather = useCallback(async url => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setQuery({
        today: {
          temp: data.data[0].temp,
          city: data.data[0].city_name,
          imgCode: data.data[0].weather.icon,
          description: data.data[0].weather.description,
          date: data.data[0].datetime,
        },

        tomorrow: {
          temp: data.data[1].temp,
          city: data.data[1].city_name,
          imgCode: data.data[1].weather.icon,
          description: data.data[1].weather.description,
          date: data.data[1].datetime,
        },
        'day+2': {
          temp: data.data[2].temp,
          city: data.data[2].city_name,
          imgCode: data.data[2].weather.icon,
          description: data.data[2].weather.description,
          date: data.data[2].datetime,
        },
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  });

  const showTempHandler = () => {
    console.log(query);
  };

  useEffect(() => {
    fetchWeather(mainUrl);
  }, [city]);

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <section className="section">
        <SearchForm setCity={setCity} />
        <div className="container">
          {!loading && <WeatherCard data={query.today} />}
          {!loading && <WeatherCard data={query.tomorrow} />}
          {!loading && <WeatherCard data={query['day+2']} />}
        </div>
      </section>
      <button onClick={showTempHandler}>show</button>
    </>
  );
};

export default App;
