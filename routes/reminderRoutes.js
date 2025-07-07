const express = require('express');
const router = express.Router();
const Reminder = require('../models/Reminder');

router.post('/', async (req, res) => {
  const { message, date, time, reminderType } = req.body;

  if (!message || !date || !time || !reminderType) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const dateTime = new Date(`${date}T${time}`);

  try {
    const newReminder = new Reminder({ message, dateTime, reminderType });
    await newReminder.save();
    res.status(201).json({ message: 'Reminder saved successfully', data: newReminder });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save reminder' });
  }
});

module.exports = router;
