const firebaseConfig = {
    apiKey: "AIzaSyBAEcz3vPn9Jva9upLjc9NXlfjOxJH5UQo",
    authDomain: "chat-app-129e5.firebaseapp.com",
    projectId: "chat-app-129e5",
    storageBucket: "chat-app-129e5.firebasestorage.app",
    messagingSenderId: "753486647533",
    appId: "1:753486647533:web:712145a5e5ac2f914efce4",
    measurementId: "G-3CFQWXDCCM"
}

const userData = {
    "userId": [],
    "username": [],
    "password": [],
    "firstName": [],
    "lastName": [],
    "email": []
}

const messageData = {
    "fromUserId": [],
    "toUserID": [],
    "message": []
}

const fetchUser = ({ username, password }) => {
        
}

const sendMessage = ({ fromUserId, toUserId, message }) => {

}

const fetchMessage = ({ fromUserId, toUserId, message }) => {

}

module.exports = { fetchUser, sendMessage, fetchMessage }
