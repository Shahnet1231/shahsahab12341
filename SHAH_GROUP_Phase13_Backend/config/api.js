
const API_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEBAPP_URL_HERE";

async function apiRequest(payload){
  const response = await fetch(API_URL,{
    method:"POST",
    body:JSON.stringify(payload)
  });
  return response.json();
}
