const chatData= document.getElementById('chat');
function setUpChat(){
    let html='';
    db1.ref('chats').on('value',function(snapshot){
        snapshot.forEach(element => {
            const currdata=`
            <div class="chat-text"> ${element.val().message}</div>
            `;
            html+=currdata;
        });
        chatData.innerHTML=html;
    });
}


function sendMessage(){
    const currdata=document.getElementById('input-data').value;
    const messageCurr=`
    <div class="chat-text"> ${currdata}</div>
      `;
      const time = new Date();
      var timenow=(time.getHours()*3600)+(time.getMinutes()*60)+(time.getSeconds());
     db1.ref('chats').push({
         message:messageCurr,time:timenow,
     },false);
     setUpChat();
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