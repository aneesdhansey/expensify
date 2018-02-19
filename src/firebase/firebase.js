import * as firebase from 'firebase'
import moment from 'moment'
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }

//database.ref('expenses').on('child_removed', (snapshot) => console.log(snapshot.key, snapshot.val()));

//database.ref('expenses').on('child_changed', (snapshot) => console.log(snapshot.key, snapshot.val()));

//database.ref('expenses').on('child_added', (snapshot) => console.log(snapshot.key, snapshot.val()));

// database.ref('expenses').push({
//     description : 'Gum',
//     note : 'Yummy Gum',
//     amount : 195,
//     createdAt : moment().subtract(4,'days').valueOf()
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('notes/-L5ifc33c5aV2EGAwx5X').update({
//     body : 'Buy food'
// });

// database.ref('notes/-L5ifc33c5aV2EGAwx5X').remove();

// database.ref('notes').push({
//     title : 'Coure Topics',
//     body : 'Ikebana'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const {name, job : { title, company} } = snapshot.val();
//     console.log(`${name} is a ${title} at ${company}`)
// });

// setTimeout(() => {
//     database.ref('name').set('Mike');
// }, 3500);

// setTimeout(() => {
//     database.ref().off();
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location/city').once('value')
//               .then((snapshot) => console.dir(snapshot.val()))
//               .catch((err) => console.log('Error fetching data', err));

// database.ref().set({
//     name : 'Anees Dhansey',
//     age : 26,
//     stressLevel : 6,
//     job : {
//         title : 'Software developer',
//         company : 'Google'
//     },
//     location : {
//         city : 'Mhasla',
//         country : 'India'
//     }
// });

// database.ref().update({
//     stressLevel : 9,
//     "job/company" : 'Amazon',
//     "location/city" : 'Seattle'
// }).then(() => console.log('data updated...'));

// database.ref().update({
//     stressLevel : 9
// }).then(() => console.log('updated data...'));

// database.ref('location/city').remove()
//                         .then(() => console.log('removed relationship status'))
//                         .catch((error) => console.log('Error',error));