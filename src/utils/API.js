import axios from 'axios';
const headers = {
    'Content-Type': 'application/json'
}
const url = "http://localhost:8000"

export default {
    login : function( pseudo,
                      firstName,
                      lastName,
                      age,
                      mail,
                      genre,
                      avatarUrl,
                      avatarFile,
                      presentation,
                      preferences ) {
        return axios.post(url + '/user/login',{
            'pseudo'    : pseudo,
            'firstName' : firstName,
            'lastName'  : lastName,
            'age'       : age,
            'mail'      :mail ,
            'genre'     :genre ,
            'avatarUrl' :avatarUrl ,
            'avatarFile':avatarFile ,
            'presentation':presentation ,
            'preferences' : preferences
            
        },{
            headers: headers
        })
    },
    signup : function(send){
        return axios.post(url + '/user/signup',send,{headers: headers})
    },
    
    isAuth : function() {
        return (localStorage.getItem('token') !== null);
    },
    logout : function() {
        localStorage.clear();
    }
}
