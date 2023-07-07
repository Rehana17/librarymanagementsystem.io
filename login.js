// Login route
app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user by email
      const user = users.find(user => user.email === email);
      if (!user) {
        return res.status(401).send('Invalid credentials');
      }
  
      // Compare entered password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).send('Invalid credentials');
      }
  
      // Create a session or token to maintain user authentication
  
      res.status(200).send('Login successful');
    } catch (error) {
      res.status(500).send('Error logging in');
    }
  });
  function loginWithGmail() {
    // Implement the logic to handle login with Gmail
    // You can redirect the user to the appropriate login flow or handle it via an API
  
    // For example, you can use the Google Sign-In API
    // Redirect the user to the Google Sign-In page
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile';
  }
  
  function loginWithPhoneNumber() {
    // Implement the logic to handle login with phone number
    // You can redirect the user to the appropriate login flow or handle it via an API
  
    // For example, you can redirect the user to a phone number login page
    window.location.href = '/phone-login'; // Replace with the appropriate URL for phone number login
  }
  