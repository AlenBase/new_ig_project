// Optional JS — You can add click events here
document.querySelectorAll('.sidebar-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      alert(`Clicked button ${index + 1}`);
    });
  });
  