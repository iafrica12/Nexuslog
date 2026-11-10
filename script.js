const form=document.querySelector('#login');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const message=document.querySelector('#message');
const toggle=document.querySelector('#toggle');
const remember=document.querySelector('#remember');
try{email.value=localStorage.getItem('nexusEmail')||'';remember.checked=Boolean(email.value);}catch{}
toggle.addEventListener('click',()=>{const show=password.type==='password';password.type=show?'text':'password';toggle.textContent=show?'Hide':'Show';toggle.setAttribute('aria-label',show?'Hide password':'Show password');toggle.setAttribute('aria-pressed',String(show));});
document.querySelector('#help').addEventListener('click',()=>{message.textContent='Use student@nexus.dev and Nexus123! to try the demo. No real account is required.';});
form.addEventListener('submit',event=>{event.preventDefault();message.textContent='';if(!email.validity.valid||!email.value.trim()){message.textContent='Please enter a valid email address.';email.focus();return;}if(!password.value){message.textContent='Please enter your password.';password.focus();return;}if(email.value.trim().toLowerCase()!=='student@nexus.dev'||password.value!=='Nexus123!'){message.textContent='Incorrect demo credentials. Use the details shown above.';return;}try{if(remember.checked)localStorage.setItem('nexusEmail',email.value.trim());else localStorage.removeItem('nexusEmail');}catch{}password.value='';form.hidden=true;document.querySelector('#success').hidden=false;document.querySelector('#welcome').textContent='Access granted';document.querySelector('#logout').focus();});
document.querySelector('#logout').addEventListener('click',()=>{form.hidden=false;document.querySelector('#success').hidden=true;document.querySelector('#welcome').textContent='Welcome back';message.textContent='You have signed out of the demo.';password.type='password';toggle.textContent='Show';toggle.setAttribute('aria-label','Show password');toggle.setAttribute('aria-pressed','false');email.focus();});
