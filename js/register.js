function register() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    if (validateRegistrationInputs(username, password)) {
        console.log('käyttäjä rekiströity')
        window.location.href = 'login.html'
    } else {
        console.log('Invalid')
    }
}

function validateRegistrationInputs() {
    
}
function checkUsernameAvailability() {
    const username = document.getElementById('username').value

    fetch('/checkForUsernameAvailability', {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username }),
    })
    .then(response => response.json())
    .then(data => {
        const availabilityMessage = document.getElementById('usernameAvailability')
        if (data.available) {
            availabilityMessage.textcontent = 'Username is available'
        } else {
            availabilityMessage.textcontent = 'Username is not available'
        }
    })
    .catch(error => console.error('Error checking username availability', error))
}