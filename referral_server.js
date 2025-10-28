const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.get('/referral', (req, res) => {
  const code = req.query.code;

  if (code) {
    console.log("REDIRECT");
    // Redirect to your custom URI
    res.redirect(`myapp://referral?code=${code}`);
  } else {
    res.send('No referral code provided.');
  }
});

app.listen(PORT, () => console.log(`Server running at http://192.168.1.97:${PORT}`));
