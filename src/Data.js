// Generate Random Data:-
const { faker } = require("@faker-js/faker");

const generateRandomSubscribers = (count) => {
  let subscribers = [];

  for (let i = 0; i < count; i++) {
    const subscriber = {
      name: faker.person.fullName(),
      subscribedChannel: faker.company.name(),
    };
    subscribers.push(subscriber);
  }
  return subscribers;
};

// Generate 10 random subscribers:-

const randomSubscribers = generateRandomSubscribers(10);

module.exports = randomSubscribers;
