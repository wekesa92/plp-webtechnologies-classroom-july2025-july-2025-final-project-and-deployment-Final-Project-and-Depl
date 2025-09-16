console.log("JS loaded successfully");

// Example: Contact form validation
const form = document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value.trim();
    if(!email.includes('@')){
      alert('Please enter a valid email');
      return;
    }
    alert('Message sent successfully!');
    form.reset();
  });
}

