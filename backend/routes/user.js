const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/favorites', auth, async (req, res) => {
  try {
    const { breed } = req.body;
    const user = await User.findById(req.user.id);
    
    if (!user.favorites.includes(breed)) {
      user.favorites.push(breed);
      await user.save();
    }
    
    res.json({ favorites: user.favorites });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/favorites/:breed', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.favorites = user.favorites.filter(b => b !== req.params.breed);
    await user.save();
    
    res.json({ favorites: user.favorites });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/quiz-results', auth, async (req, res) => {
  try {
    const { breed } = req.body;
    const user = await User.findById(req.user.id);
    
    user.quizResults.push({ breed });
    await user.save();
    
    res.json({ quizResults: user.quizResults });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;