document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    const parent = document.querySelector('.parent');
    const strengthDisplay = document.getElementById('strength');
    
    // Character pool size
    const charPoolSize = (password.match(/[a-z]/) ? 26 : 0) +
                         (password.match(/[A-Z]/) ? 26 : 0) +
                         (password.match(/[0-9]/) ? 10 : 0) +
                         (password.match(/[^a-zA-Z0-9]/) ? 32 : 0);
    
    const guessesPerSecond = 1e9; // Assumption: 1 billion guesses/sec
    const combinations = Math.pow(charPoolSize, password.length);
    const secondsToCrack = combinations / guessesPerSecond;
  
    // Time conversion function
    function formatTime(seconds) {
      const years = Math.floor(seconds / (365 * 24 * 3600));
      const days = Math.floor((seconds % (365 * 24 * 3600)) / (24 * 3600));
      const hours = Math.floor((seconds % (24 * 3600)) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = Math.floor(seconds % 60);
  
      if (years > 0) return `${years} years, ${days} days`;
      if (days > 0) return `${days} days, ${hours} hours`;
      if (hours > 0) return `${hours} hours, ${minutes} minutes`;
      if (minutes > 0) return `${minutes} minutes, ${secs} seconds`;
      return `${secs} seconds`;
    }
  
    // Display strength
    if (password.length === 0) {
      strengthDisplay.textContent = '';
    } else if (charPoolSize === 0) {
      strengthDisplay.textContent = 'Weak password (no character variety)';
    } else {
        const timeText = formatTime(secondsToCrack);
    
        // Set color based on estimated crack time
        if (secondsToCrack < 3600) { // Less than an hour
          parent.style.backgroundColor = 'red'; // Weak
        } else if (secondsToCrack < 31536000) { // Less than a year
          parent.style.backgroundColor = 'orange'; // Moderate
        } else { // More than a year
          parent.style.backgroundColor = 'green'; // Strong
        }
    
        strengthDisplay.textContent = `It will take a computer : ${timeText} to crack your password `;
      }
  });
  