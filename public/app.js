document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app)
});

//this operation happens asynchronously which means it returns a promise
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopul(provider)
            .then(result => {
                const user = result.user;
                document.write(`Hello ${user.displayName}`);
                console.log(user)
            })
            .catch(console.log)

}