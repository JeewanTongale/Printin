console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});


(function(){


// Initialize firebase

var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appID: "app-id",
};


// Get elements

const upname = document.getElementById('upname');
const upemail = document.getElementById('upemail');
const uppass = document.getElementById('uppass');
const inemail = document.getElementById('inemail');
const inpass = document.getElementById('inpass');
const signup = document.getElementById('signup');

// Add login event
login.addEventListener('click', e => {
	//Get email and pass
	const email = inemail.value;
	const pass = inpass.value;
	const auth = firebase.auth();
	// sign in 
	const promise = auth.signInWithEmailAndPassword(email, pass);
	promise.catch(e => console.log(e.message));


});


// add signup event 
signup.addEventListener('click', e => {
	//Get email and pass
	const email = upemail.value;
	const pass = uppass.value;
	const auth = firebase.auth();
	// sign in 
	const promise = auth.createUserWithEmailAndPassword(email, pass);
	promise.catch(e => console.log(e.message));

});


// add a realtime listner 
firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
		 window.location = 'home.html'; 
		} else {
			console.log('not logged in');
		}
});

});










