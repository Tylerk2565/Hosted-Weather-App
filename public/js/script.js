const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const select = document.querySelector('select');

// Event listener for form submission
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    const userUnits = select.options[select.selectedIndex].value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    // Fetches weather data from server with provided address
    fetch(`/weather?address=${location}&units=${userUnits}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        })
    })
})