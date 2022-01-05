import React from 'react';

const WeatherCard = ({ data }) => {
  const { temp, imgCode, description, date } = data;

  return (
    <div className="card">
      <h3>{temp} C</h3>
      <h4>{date}</h4>
      <img
        src={`https://www.weatherbit.io/static/img/icons/${imgCode}.png`}
        alt={description}
      />
      <p>{description}</p>
    </div>
  );
};

export default WeatherCard;
