import express from "express";
import { faker } from "@faker-js/faker";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Function to create a user
const createUser = () => ({
  _id: faker.database.mongodbObjectId(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

// Function to create a company
const createCompany = () => ({
  _id: faker.database.mongodbObjectId(),
  name: faker.company.name(),
  address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country(),
  },
});

// Routes
app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
  res.json({
    user: createUser(),
    company: createCompany(),
  });
});

// Start server
app.listen(PORT, () => console.log(`🔥 Server is running on port ${PORT}`));
