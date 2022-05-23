const backend_base_url = "http://127.0.0.1:5000"
const frontend_base_url = "http://127.0.0.1:5500"

//이름 형식 한글만 입력함수
function check_name(asValue){
    const regname = /^(?=.*[가-힣])[가-힣]{2,}$/;
    return regname.test(asValue);
}

//아이디 형식 함수
function check_id(asValue){
    const regid = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{2,10}$/;
    return regid.test(asValue);
}

// 회원가입 함수
async function handleSignup(){

    const signupData = {
        username : document.getElementById("username").value,
        userid : document.getElementById("userid").value,
        password : document.getElementById("userpw").value
    }
    const repass = document.getElementById("repass").value
    const uid = signupData['userid']
    const uname = signupData['username']
    const upassword = signupData['password']
    
    //정규표현식 비밀번호 8자리 대소문자, 특수문자포함
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    //빈칸, 형식X, 일때 알림창
    if (uname == "") {
        alert('이름을 입력해주세요.')
        $('#username').focus()
        return;
    }
    if (!check_name(uname)) {
        $('#help-uname').text('이름은 한글로 2자이상 입력')
        $('#username').focus()
        $('#username').val('')
        return;
    }
    if (uid == "") {
        alert('아이디를 입력해주세요.')
        $('#userid').focus()
        return;
    }
    if (!check_id(uid)) {
        $('#help-uid').text('영문/숫자/특수문자(._-)가능. 2-10자 입력')
        $('#userid').focus()
        $('#userid').val('')
        return;
    }
    if (upassword == "") {
        alert('비밀번호를 입력해주세요.')
        $('#userpw').focus()
        return;
    } 
    if (!upassword.match(regExp)) {
        alert('비밀번호는 최소8자리 대소문자,특수문자 포함 입력해주세요.')
        $('#help-upw').text('비밀번호는 최소8자리 대소문자,특수문자 포함')
        $('#userpw').focus()
        $('#userpw').val('')
        return;
    }
    if (upassword !== repass) {
        alert('비밀번호가 일치하지 않습니다.')
        $('#help-pw-same').text('비밀번호를 다시 확인해주세요')
        $('#repass').focus()
        $('#repass').val('')
        
        
        return;
    }
        

    const response = await fetch(`${backend_base_url}/signup`,{
        method:'POST',
        body:JSON.stringify(signupData)
    }
    )
    response_json = await response.json()
    
    
    
    if (response_json["result"] == "success"){
        window.alert(response_json["msg"])
        window.location.replace(`${frontend_base_url}/login.html`);
    }else {
        window.alert(response_json["msg"])
        $('#userid').focus()
        $('#userid').val('')
        return;
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

    if (response_json["result"] == "success"){
        window.location.replace(`${frontend_base_url}/mainpage.html`);
    }else {
        alert(response_json["msg"])
        $('#userid').focus()
        return;
    }
}

function logout(){
    localStorage.removeItem("token")
    window.location.replace(`${frontend_base_url}/mainpage.html`);
}


// 유저 이름, 포인트 불러오는 함수
async function getUserInfo(){
    const response = await fetch(`${backend_base_url}/getuserinfo`, {
        headers:{
            'Authorization' : localStorage.getItem("token")
        }
    }
    )
    if (response.status == 200) {
        response_json = await response.json()
        return [response_json.name, response_json.point]
    }  
    else{
        return null
    }
}
