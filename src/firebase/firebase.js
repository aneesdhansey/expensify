import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDWb-yN8LAVcN-K1kpR1U8G78OdeQ2S-nQ",
    authDomain: "expensify-637da.firebaseapp.com",
    databaseURL: "https://expensify-637da.firebaseio.com",
    projectId: "expensify-637da",
    storageBucket: "expensify-637da.appspot.com",
    messagingSenderId: "616796761127"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name : 'Anees Dhansey',
    age : 26,
    isSingle : false,
    location : {
        city : 'Mhasla',
        country : 'India'
    }
});

database.ref('age').set(27);

database.ref('location/city').set('Pune');

database.ref('attributes').set({
    height : 133,
    weight : 85
});