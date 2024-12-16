const request = require("request");

const forecast = (latitude, longitude, callback, units = "f") => {
  const url =
    "https://api.weatherstack.com/current?access_key=3de945378aaeff24c4d6636d4e484612&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude) +
    "&units=" +
    units;

  // TO_DO: TYLER: Delete me (Lines 12 to 17)
  console.log(
    "⛈️ If you hardcode your units to 'f', it works. What I did above was add a default value to the units param. This way, if the user doesn't provide a value, it will default to 'f'."
  );

  console.log("⛈️ Your units are currently: ", units);

  // Makes a request to weatherstack and handles errors
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees."
      );
    }
  });
};

module.exports = forecast;
