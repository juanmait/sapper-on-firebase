import * as sapper from '@sapper/app';

// Loading firebase stuff like this makes sapper
// to yeld about bundle sizes, so a better way
// would be to use dynamic imports instead only
// when needed.
import firebase from 'firebase/app';
import 'firebase/functions';

// To get a filled in version of this code snippet, go to the
// Firebase console (https://console.firebase.google.com/)
// for your app and click on "Add Firebase to your web app".
window.app = firebase.initializeApp({
  appId: '<your-app-key>',
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  projectId: '<your-cloud-firestore-project>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-sender-id>',
});

sapper.start({
  target: document.querySelector('#sapper'),
});
