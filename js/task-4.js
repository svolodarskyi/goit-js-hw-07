const loginForm = document.querySelector('form.login-form')

loginForm.addEventListener('submit', event => { 

    const attr = {}
    event.preventDefault();
    
    const email = loginForm.elements.email.value.trim();
    const password = loginForm.elements.password.value.trim();

    if(email === '' || password === '') {
        alert('All form fields must be filled in')
    } 
    else {
        attr['email'] = email;
        attr['password'] = password;
        console.log(attr)
        loginForm.reset()
    }    
})

