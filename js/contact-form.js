document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let form = this;
    let submitButton = form.querySelector('input[type="submit"]');
    let originalButtonText = submitButton.value;
    submitButton.value = 'Sending...';
    submitButton.disabled = true;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        if (data.includes('Thank You')) {
            form.reset();
        }
    })
    .catch(error => {
        alert('Error sending message. Please try again.');
        console.error('Error:', error);
    })
    .finally(() => {
        submitButton.value = originalButtonText;
        submitButton.disabled = false;
    });
});
