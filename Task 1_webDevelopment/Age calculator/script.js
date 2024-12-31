// script.js
document.getElementById('calculate').addEventListener('click', function () {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
  
    if (!day || !month || !year) {
      document.getElementById('result').textContent = "Please enter a valid date.";
      return;
    }
  
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    if (age < 0) {
      document.getElementById('result').textContent = "Invalid birth date.";
    } else {
      document.getElementById('result').textContent = `You are ${age} years old.`;
    }
  });
  