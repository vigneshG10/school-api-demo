require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/user.model');
const config = require('./index');

const sampleUsers = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    status: 1,
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    status: 1,
  },
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    password: 'password123',
    status: 1,
  },
  {
    name: 'Bob Brown',
    email: 'bob@example.com',
    password: 'password123',
    status: 0,
  },
  {
    name: 'Charlie Davis',
    email: 'charlie@example.com',
    password: 'password123',
    status: 1,
  },
  {
    name: 'Eve Wilson',
    email: 'eve@example.com',
    password: 'password123',
    status: 1,
  },
  {
    name: 'Frank Miller',
    email: 'frank@example.com',
    password: 'password123',
    status: 1,
  },
];

const seedDB = async () => {
  try {
    if (!config.mongoUri) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }

    await mongoose.connect(config.mongoUri);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await User.deleteMany({});
    console.log('Cleared existing users.');

    // Seed data
    await User.create(sampleUsers);
    console.log(`Successfully seeded ${sampleUsers.length} users.`);

    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
    process.exit(1);
  }
};

seedDB();
