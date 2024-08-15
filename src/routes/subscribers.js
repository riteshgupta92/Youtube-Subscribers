const express = require("express");
const router = express.Router();
const {
  getAllSubscribers,
  getSubscriberByNames,
  getSubscriberById,
} = require("../controllers/subscribers");


/**
 * @swagger
 * /subscribers:
 *   get:
 *     summary: Get all subscribers
 *     responses:
 *       200:
 *         description: An array of subscribers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: 64dc34e2e87c5b001f1a2d0e
 *                   name:
 *                     type: string
 *                     example: John Doe
 *                   subscribedChannel:
 *                     type: string
 *                     example: Tech Channel
 *                   subscribeDate:
 *                     type: string
 *                     format: date-time
 *                     example: 2024-08-12T14:53:30.345Z
 *       404:
 *         description: Subscribers Not Found
 */
router.route("/").get(getAllSubscribers);

/**
 * @swagger
 * /subscribers/names:
 *   get:
 *     summary: Get subscribers with only names and subscribed channels
 *     responses:
 *       200:
 *         description: An array of subscribers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: John Doe
 *                   subscribedChannel:
 *                     type: string
 *                     example: Tech Channel
 *       404:
 *         description: Subscribers Not Found
 */
router.route("/names").get(getSubscriberByNames);

/**
 * @swagger
 * /subscribers/{id}:
 *   get:
 *     summary: Get a subscriber by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subscriber ID
 *     responses:
 *       200:
 *         description: A single subscriber
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 64dc34e2e87c5b001f1a2d0e
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 subscribedChannel:
 *                   type: string
 *                   example: Tech Channel
 *                 subscribeDate:
 *                   type: string
 *                   format: date-time
 *                   example: 2024-08-12T14:53:30.345Z
 *       404:
 *         description: Subscriber Not Found
 *       400:
 *         description: Invalid ID supplied
 */
router.route("/:id").get(getSubscriberById);

module.exports = router;