let html='';
function sendMessage(){
    const currdata=document.getElementById('input-data').value;
    const mess =` 
        <div class="chat-text"> ${currdata}</div>
    `;
    html+=mess;
    document.getElementById('chat').innerHTML=html;
}

document.getElementById('btn').addEventListener('click',e=>{
    if(document.getElementById('input-data').value!=""){
        sendMessage();
        document.getElementById('chat').scrollTo(0,document.getElementById('chat').scrollHeight);
    
         document.getElementById('input-data').value="";
    }
});
document.getElementById('input-data').addEventListener('keypress',function(event){
   if(event.key==='Enter'){
       document.getElementById('btn').click();
   }
});