const chatData= document.getElementById('chat');
const setUpChat = (data) =>{
    let html='';
    data.forEach(doc => {
        const mess = doc.data();
        console.log(mess);
        const currdata=`
        <div class="chat-text"> ${mess.message}</div>
         `;
         html+=currdata;
         chatData.innerHTML=html;
    });
}
db.collection('chats').get().then(snapshot =>{
 setUpChat(snapshot.docs);
});

function sendMessage(){
    const currdata=document.getElementById('input-data').value;
    const messageCurr=`
    <div class="chat-text"> ${currdata}</div>
      `;
      const time = new Date();
    db.collection('chats').add({
        aim:time.toString(),
        message:messageCurr,
    });
    db.collection('chats').get().then(snapshot =>{
        setUpChat(snapshot.docs);
       });
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