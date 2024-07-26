const Subscriber = require("../models/subscribers");

// Get All subscribers:-
const getAllSubscribers = async (req, res) => {
  try {
    const subscriber = await Subscriber.find();
    subscriber.length > 0
      ? res.status(200).json(subscriber)
      : res.status(404).json({ message: "Subscribers Not Found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get subscribers with only two fields name and subscribed channel:-
const getSubscriberByNames = async (req, res) => {
  try {
    const subscriber = await Subscriber.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    );
    subscriber.length > 0
      ? res.status(200).json(subscriber)
      : res.status(404).json({ message: "Subscribers Not Found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get subscribers by Id:-

const getSubscriberById = async (req, res) => {
  try {
    const id = req.params.id;
    const subscriber = await Subscriber.findById(id);
    subscriber === null
      ? res
          .status(404)
          .json({ message: "Subscribers Not found by the given Id" })
      : res.status(200).json(subscriber);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllSubscribers, getSubscriberByNames, getSubscriberById };
