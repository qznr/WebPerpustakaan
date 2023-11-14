function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Fetch credentials from the server
    fetchCredentialsFromFile('database/userdata.txt')
        .then(function (credentials) {
            if (credentials[username] && credentials[username] === password) {
                // alert('Login successful! Redirecting...');
                // Redirect to index.html after a brief delay (e.g., 2 seconds)
                setTimeout(function () {
                    window.location.href = 'homepage-after.html';
                }, 0);
            } else {
                alert('Invalid username or password.');
            }
        })
        .catch(function (error) {
            console.error('Error fetching credentials:', error);
        });
}

function fetchCredentialsFromFile(filename) {
    return fetch(filename)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(function (content) {
            var lines = content.split('\n');

            var credentials = {};

            lines.forEach(function (line) {
                var parts = line.split(':');
                if (parts.length === 2) {
                    credentials[parts[0].trim()] = parts[1].trim();
                }
            });

            return credentials;
        });
}
