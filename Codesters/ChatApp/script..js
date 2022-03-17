const firebaseConfig = {
    apiKey: "AIzaSyCtTohCevGuiqE3QWJG3iNcBMVbIK24n3s",
    authDomain: "chat-app-3ad17.firebaseapp.com",
    projectId: "chat-app-3ad17",
    storageBucket: "chat-app-3ad17.appspot.com",
    messagingSenderId: "1088050710109",
    appId: "1:1088050710109:web:e3847cde88477c7c1d6fb4",
    measurementId: "G-5M5T1BPMQF"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  var database = firebase.firestore();
  let current = 0;
  let chanar = ['HmTVNlougLL8W7ZP9Bph', 'NiQz4tucOdxq4Es09toB', 'mdstmSrz4mjUTYn3pofV', 'rISTVgOAvnZCDh3g5ZSX'];
  let feedback = document.querySelector('#feedback');
  let auth = document.querySelector('.auth');
  let chatApp = document.querySelector(".chatApp");
  let chatlog = document.querySelector('.chatlog');
  let back = document.querySelector('.back');
  let signUpButton = document.querySelector('.signup');
  let loginInButton = document.querySelector('.login');
  let inputs = document.querySelectorAll('input');
  let enter = document.querySelector('.enterBut');
  let channelsHtml = document.querySelectorAll('li');
  let channelName = document.querySelector('.chat>h1');
  let themebtn = document.querySelector('.theme');
  const h1 = document.querySelectorAll("h1");

  function changeTheme() {
    document.body.classList.add('dark-theme');
    h1.classList.add('white');
  }
  
  
  channelsHtml.forEach((item, ind) => {
    item.addEventListener('click', function () {
      changeSellection(ind);
      current = ind;
      loadMessages();
    });
  });
  function changeSellection(ind) {
    channelsHtml[current].classList.remove('sellected');
    channelsHtml[ind].classList.add('sellected');
    channelName.innerText = channelsHtml[ind].innerText;
  }
  
  signUpButton.addEventListener('click', function () {
    let email = inputs[0].value;
    let password = inputs[1].value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        feedback.style.visibility = 'hidden';
        var user = userCredential.user;
        auth.style.display = 'none';
        chatApp.style.display = 'flex';
        loadMessages();
      })
      .catch((error) => {
        var errorCode = error.code;
        feedback.innerHTML = error.message;
        feedback.style.visibility = 'visible';
      });
  
  });
  
  loginInButton.addEventListener('click', function () {
    let email = inputs[0].value;
    let password = inputs[1].value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        feedback.style.visibility = 'hidden';
        var user = userCredential.user;
        auth.style.display = 'none';
        chatApp.style.display = 'flex';
  
        loadMessages();
      })
      .catch((error) => {
        feedback.style.visibility = 'visible';
        var errorCode = error.code;
        feedback.innerHTML = error.message;
      });
  
  });
  
  back.addEventListener('click', goBack);
  function goBack() {
    chatApp.style.display = 'none';
    auth.style.display = 'block';
  }
  document.addEventListener("keypress", function (event) {
    var key = event.keyCode || event.which;
    if (event.keyCode == 13) {
      sendMes();
    }
  });
  enter.addEventListener('click', sendMes);
  function sendMes() {
    let txtmes = inputs[2].value;
    let div = document.createElement('div');
    div.classList.add('log');
    let userN = document.createElement('span');
    userN.classList.add('name');
    userN.innerHTML = document.querySelector('.email').value + ': ';
    div.appendChild(userN);
    let text = document.createElement('span');
    text.classList.add('texted');
    text.innerHTML = txtmes;
    div.appendChild(text);
    let tim = document.createElement('span');
    tim.classList.add('time');
    tim.innerHTML = new Date().toLocaleTimeString();
    div.appendChild(tim);
    chatlog.appendChild(div);
  
    var userData = {
      "message": txtmes,
      "user": firebase.auth().currentUser.email,
      "timestamp": firebase.firestore.FieldValue.serverTimestamp()
    };
    database.collection("channels").doc(chanar[current]).collection('messages').add(userData);
    inputs[2].value = '';
  
  }
  
  function loadMessages() {
    currentMessagesData = [];
    database.collection("channels").doc(chanar[current]).collection('messages').orderBy("timestamp")
      .onSnapshot((querySnapshot) => {
        chatlog.innerHTML = '';
        querySnapshot.forEach((doc) => {
          currentMessagesData.push(doc.data());
          let div = document.createElement('div');
          div.classList.add('log');
          let userN = document.createElement('span');
          userN.classList.add('name');
          userN.innerHTML = doc.data().user + ': ';
          div.appendChild(userN);
          let text = document.createElement('span');
          text.classList.add('texted');
          text.innerHTML = doc.data().message;
          div.appendChild(text);
          let tim = document.createElement('span');
          tim.classList.add('time');
          tim.innerHTML = doc.data().timestamp.toDate().toLocaleTimeString();
          div.appendChild(tim);
          chatlog.appendChild(div);
        });
      });
  }
  
  