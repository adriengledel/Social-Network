import axios from 'axios';
import { socket } from 'Pages/ProfilPage/ProfilPage';

const headers = {
    'Content-Type': 'application/json'
}
const url = "http://localhost:8000"

export default {
    login : function(send){
        return axios.post(url + '/login',send,{headers: headers})
    },
    signup : function(send){
        return axios.post(url + '/signup',send,{headers: headers})
    },
    
    isAuth : function() {
        return (localStorage.getItem('token') !== null);
    },
    logout : function() {
        localStorage.clear();
    },
    update : function(){
        return axios.post(url + '/update');
    },
    friendRequest : function(send){
        return socket.emit("friendRequest", send);
    },
    updateFriendRequest : function(send){
        return socket.emit("updateFriend", send);
    },
    recommendFriendRequest : function(send){
        return socket.emit("recommendFriend", send);
    },
    validRecommendFriendRequest : function(send){
        return socket.emit("validRecommendFriend", send);
    },
    messageRequest : function(send){
        return socket.emit("messageRequest", send);
    }

}
