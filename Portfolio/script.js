// Countdown Timer Functionality
function startCountdown(targetDate) {
    // Update Countdown Every Second
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;
  
      // Calculate Days, Hours, Minutes, and Seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      // Update Timer Display
      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;
  
      // Stop the Countdown When Time is Up
      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
  
        // Fade out the timer
        document.getElementById('timer').classList.add('fade-out');
  
        // After fade-out animation, display Happy New Year message
        setTimeout(() => {
          document.getElementById('timer').style.display = 'none';
          document.getElementById('newYearMessage').style.display = 'block';
        }, 1500); // Matches the fadeOut duration
      }
    }, 1000);
  }
  
  // Real Countdown: Target Date for New Year 2025
  const realTargetDate = new Date('January 1, 2025 00:00:00').getTime();
  startCountdown(realTargetDate);
  
  document.getElementById('demoButton').addEventListener('click', function() {
    const timer = document.getElementById('timer');
    const message = document.getElementById('newYearMessage');
    const demoButton = document.getElementById('demoButton');
    const countdownHeading = document.querySelector('#countdown h2');

    // Hide the button and the heading
    demoButton.style.display = 'none';
    countdownHeading.style.display = 'none';

    // Add fade-out class to the timer
    timer.classList.add('fade-out');

    // After the fade-out animation, show the message
    setTimeout(() => {
        timer.style.display = 'none'; // Hide the timer
        message.style.display = 'block'; // Show the "Happy New Year" message
    }, 1500); // Match the duration of the fadeOut animation
  })

particlesJS('particles-js', {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: { enable: true, speed: 6 }
    }
  });
  