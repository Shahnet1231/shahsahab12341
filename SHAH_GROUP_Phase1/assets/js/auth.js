document.getElementById('loginForm').addEventListener('submit',e=>{
e.preventDefault();
if(username.value==='admin' && password.value==='123456'){
location.href='pages/dashboard.html';
}else{alert('Invalid Login');}
});