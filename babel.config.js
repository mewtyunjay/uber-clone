module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module:react-native-dotenv", // we installed react-native-dotenv separately so we need to add it to our babel.config.js file
        {
          "moduleName": "@env", // this is the name of the module that will be created that we import in our project
          "path": ".env", // this is the path to the .env file
        }
      ]
    ],
  };
  // we need to add this plugin so that we can use the .env file in our project 
  // it needs to get bundled with the app when we build it
};