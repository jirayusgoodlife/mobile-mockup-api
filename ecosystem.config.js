module.exports = {
    apps: [
      {
        name: 'mobile-exam',          // Name of your application
        script: './app.js',      // Path to the main file to run
        instances: 1,            // Number of instances (or set to 'max' for auto scaling)
        autorestart: true,       // Auto restart on crashes
        watch: false,            // Set to true to enable file watching for auto restart
      }
    ]
  };
  