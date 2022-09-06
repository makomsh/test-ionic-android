const config = {
  appId: 'io.ionic.starter',
  appName: 'test',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    "PushNotifications": {
      "presentationOptions": [
        "badge",
        "sound",
        "alert"
      ]
    }
  }
};

module.exports = config;
