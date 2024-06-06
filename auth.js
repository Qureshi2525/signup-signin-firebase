document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('register-form')) {
        document.getElementById('register-form').addEventListener('submit', function (event) {
            event.preventDefault();
            var name = document.getElementById('name').value;
            var fatherName = document.getElementById('father-name').value;
            var contact = document.getElementById('contact').value;
            var address = document.getElementById('address').value;
            var email = document.getElementById('register-email').value;
            var password = document.getElementById('register-password').value;

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Display additional user details in the console (in real application, store them in Firestore)
                    console.log('User Details:', {
                        name: name,
                        fatherName: fatherName,
                        contact: contact,
                        address: address,
                        email: email
                    });
                    alert('Registration successful!');
                    window.location.href = 'signin.html';
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }

    if (document.getElementById('signin-form')) {
        document.getElementById('signin-form').addEventListener('submit', function (event) {
            event.preventDefault();
            var email = document.getElementById('signin-email').value;
            var password = document.getElementById('signin-password').value;

            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    alert('Sign in successful!');
                    window.location.href = 'welcome.html';
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }

    if (document.getElementById('logout-button')) {
        document.getElementById('logout-button').addEventListener('click', function () {
            firebase.auth().signOut().then(() => {
                alert('Logout successful!');
                window.location.href = 'signin.html';
            }).catch((error) => {
                alert(error.message);
            });
        });
    }

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            if (window.location.pathname.endsWith('welcome.html')) {
                document.getElementById('welcome-message').textContent = `WELCOME, ${user.email}`;
            }
        } else {
            if (window.location.pathname.endsWith('welcome.html')) {
                window.location.href = 'signin.html';
            }
        }
    });
});
