const config = require('./config');
const app = require('./app');
const connectDB = require('./config/db');

const startServer = async () => {
  try {
    // Connect to database
    if (config.mongoUri) {
      await connectDB(config.mongoUri);
    } else {
      console.warn('MONGO_URI is not defined. Proceeding without database connection.');
    }

    const server = app.listen(config.port, () => {
      console.log(`Server running in ${config.nodeEnv} mode on port ${config.port}`);
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (err, promise) => {
      console.log(`Error: ${err.message}`);
      // Close server & exit process
      server.close(() => process.exit(1));
    });
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();
