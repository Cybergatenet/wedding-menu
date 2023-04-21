const loginbtn = document.querySelector('#login')
const signupbtn = document.querySelector('#signup')
const loginform = document.querySelector('#loginform')
const signupform = document.querySelector('#signupform')

// forms
const signInForm = document.querySelector('#signInForm')
const signUpForm = document.querySelector('#signUpForm')

var header = document.querySelector('.background');

var backgrounds = new Array(
    'url(img/artichoke_background.jpg)',
    'url(img/fishy_background.jpg)',
    'url(img/kabob_background.jpg)',
    'url(img/mandaring_background.jpg)',
    'url(img/waffles_background.jpg)',
    'url(img/chinese_background.jpg)',
    'url(img/ribs_background.jpg)'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.style.backgroundImage = backgrounds[current];
}
setInterval(nextBackground, 2000);


header.style.backgroundImage = backgrounds[0];


// handle submittion of form

const checkuser = () => {
    loginbtn.innerHTML = 'Processing...please wait'
    loginbtn.style.color = 'red'

    // User data
    const login = {
        email: document.querySelector('#login_email').value,
        pwd: document.querySelector('#login_pwd').value,
    }

    const storage = localStorage

    const user = storage.getItem('user')

    setTimeout(() => {
        if(user == '' || user == null || !user){
            alert("Login Failed. No user Found")

            window.location.href = '/'
        }else{
            if(user == login.email){
                alert("Login Success")
                // redirect to Home page
                window.location.href = './html/main.html'
            }else{
                alert("Invalid Credential")
                loginbtn.innerHTML = 'Login'
                loginbtn.style.color = 'white'
            }
        }

        console.log(login)
    }, 3000)
}

const createAccount = () => {;
    signupbtn.innerHTML = 'Creating Account...'
    signupbtn.style.color = 'red'

    const signup = {
        username: document.querySelector('#signup_username').value,
        email: document.querySelector('#signup_email').value,
        pwd: document.querySelector('#signup_pwd').value,
    }

    const storage = localStorage

    const user = storage.getItem('user')

    setTimeout(() => {
        if(user == '' || user == null){
            // add user to Db
            storage.setItem('user', signup.username);
            
            alert("Account Created")
            // redirect to Home page
            window.location.href = './html/main.html'
        }else{
            alert("User Already Exist")

            // redirect to Home page
            window.location.href = './html/main.html'
        }

        console.log(signup)
    }, 3000)
}

// showhide form
const showHide = (e) => {
    // alert('clicked '+ e +' button')
    if(e == "Sign Up"){
        signupform.style.display = 'flex'
        loginform.style.display = 'none'

        signupform.style.visibility = 'visible'
        loginform.style.visibility = 'hidden'
    }
    if(e == "Login"){
        loginform.style.display = 'flex'
        signupform.style.display = 'none'

        signupform.style.visibility = 'hidden'
        loginform.style.visibility = 'visible'

    }
}