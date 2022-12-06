module.exports = {
  preset: "@testing-library/react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  setupFilesAfterEnv: [
    // "@testing-library/jest-native/extend-expect",
    "./jest-setup.js",
    // "@testing-library/react-native/cleanup-after-each",
  ],
  moduleNameMapper: {
    // "^react-native-reanimated$":
    //   "<rootDir>/node_modules/react-native-reanimated/mock",
  },
};
