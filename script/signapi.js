const backend_base_url = "http://127.0.0.1:5000"
const frontend_base_url = "http://127.0.0.1:5500"

// 회원가입 함수
async function handleSignup(){

    const signupData = {
        username : document.getElementById("username").value,
        userid : document.getElementById("userid").value,
        password : document.getElementById("userpw").value
    }
    const response = await fetch(`${backend_base_url}/signup`,{
        method:'POST',
        body:JSON.stringify(signupData)
    }
    )
    response_json = await response.json()
    
    if (response.status == 200){
        window.location.replace(`${frontend_base_url}/login.html`);
    }else {
        alert(response.status)
    }
}


//로그인 함수
async function handleLogin(){
    const loginData = {
        userid : document.getElementById("userid").value,
        password : document.getElementById("userpw").value
    }
    
    const response = await fetch(`${backend_base_url}/login`,{
        method:'POST',
        body:JSON.stringify(loginData)
    }
    )
    response_json = await response.json()
    
    localStorage.setItem("token", response_json.token)

    if (response.status == 200){
        window.location.replace(`${frontend_base_url}/mainpage.html`);
    }else {
        alert(response.status)
    }
}

function logout(){
    localStorage.removeItem("token")
    window.location.replace(`${frontend_base_url}/login.html`);
}

