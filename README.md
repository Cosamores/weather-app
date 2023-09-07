# Weather App

Welcome to the Weather App, a mobile application built using React Native and Expo. This app allows users to view the current weather conditions of various cities, adjust text sizes for accessibility, toggle the sound effects, set screen brightness, and switch between Celsius and Fahrenheit temperature units.

## Features

- **Dynamic Weather Display**: View the current weather conditions of various cities, including temperature, weather description, and an icon representing the current weather.
- **Search Functionality**: Add new cities to the main screen by searching for them.
- **Settings**: Adjust the text size for better readability and switch between Celsius and Fahrenheit temperature units.
- **Responsive Design**: The app's design is responsive and adjusts based on the screen's orientation (portrait or landscape).
- **Swipe to Delete**: Swipe left on a city's weather card to delete it from the main screen.

## Technologies
- React Native
- Expo
- Context API
- React Navigation

## Getting Started

1. Clone the Repository:
```
git clone [repository-url]
cd [repository-name]
```

2. ### Install Dependencies:
```
npm install
```

3. ### Environment Variables:

* Install react-native-dotenv:
```
npm install react-native-dotenv
```

* Create a .env file in the root directory and add your variables:
```
WEATHER_API_KEY=your_weather_api_key
GEONAMES_USERNAME=your_geonames_username
```

* Modify your Babel configuration (babel.config.js) to include the react-native-dotenv plugin:
```
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv']
    ]
  };
};
```

* 4. ### Run with Expo:
```
expo start
```

5. ### Scan the QR code with the Expo Go app on your device or use a simulator.

## Testing
Console logs were utilized for testing. Ensure the console is open to view logs when running the app.

## License
MIT License.

## References

- [Weather API: ](https://www.weatherapi.com/)
- [Geonames API: ](https://www.geonames.org/)
- [React Native Styling Buttons: ](https://docs.expo.dev/ui-programming/react-native-styling-buttons/)
- [React Native Screen Brightness: ](https://www.npmjs.com/package/react-native-screen-brightness/)