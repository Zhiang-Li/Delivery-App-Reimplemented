// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, getDoc, updateDoc, query, where, deleteDoc, increment } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Your web app's Firebase configuration
function MyFirebase(){
  const firebaseConfig = {
    apiKey: "AIzaSyAIYSUWf8ywghhJadCWDaGSo0dyCB4jDVY",
    authDomain: "delivery-app-reimplemented.firebaseapp.com",
    projectId: "delivery-app-reimplemented",
    storageBucket: "delivery-app-reimplemented.appspot.com",
    messagingSenderId: "1038186624624",
    appId: "1:1038186624624:web:21f83a28e50b40ad83a6b5"
  };
      
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  
  const me = {};

  me.getCurrentErrands = async () =>{
    const errandsRef = collection(db, "myErrands");
    return (await getDocs(errandsRef)).docs.map( (d) => d.data());
  };

  me.addErrand = async(errand) => {
    const user = auth.currentUser;
    const errandRef = await addDoc(collection(db, "myErrands"), {
      id: +errand.id,
      title: errand.title,
      description: errand.description,
      date: errand.date,
      time: errand.time,
      origin: errand.origin,
      destination: errand.destination,
      compensation: errand.compensation,
      postedBy: user.uid,
    });
    return errandRef.id;
  };

  me.getOngoingErrands = async () =>{
    const errandsRef = collection(db, "ongoingErrands");
    return (await getDocs(errandsRef)).docs.map( (d) => d.data());
  };

  me.cancelErrand = async(errand) => {
    const errandRef = await addDoc(collection(db, "myErrands"), {
      id: +errand.id,
      title: errand.title,
      description: errand.description,
      date: errand.date,
      time: errand.time,
      origin: errand.origin,
      destination: errand.destination,
      compensation: errand.compensation,
      postedBy: errand.postedBy,
    });
    return errandRef.id;
  };

  me.acceptErrand = async(errand) => {
    const user = auth.currentUser;
    const errandRef = await addDoc(collection(db, "ongoingErrands"), {
      id: +errand.id,
      title: errand.title,
      description: errand.description,
      date: errand.date,
      time: errand.time,
      origin: errand.origin,
      destination: errand.destination,
      compensation: errand.compensation,
      postedBy: errand.postedBy,
      acceptedBy: user.uid
    });
    return errandRef.id;
  };

  me.removeErrandFromBoard = async(errand) => {
    const shoppingCartRef2 = collection(db, "myErrands");
    const id = errand.id;
    const q2 = query(shoppingCartRef2, where("id", "==", id));
    const querySnapshot2 = await getDocs(q2);
    if (!querySnapshot2.empty) {
      const deleteRef = querySnapshot2.docs[0].ref;

      await deleteDoc(deleteRef);
    }
  };

  me.getCompletedErrands = async () =>{
    const errandsRef = collection(db, "completedErrands");
    return (await getDocs(errandsRef)).docs.map( (d) => d.data());
  };

  me.completeErrand = async(errand) => {
    const errandRef = await addDoc(collection(db, "completedErrands"), {
      id: +errand.id,
      title: errand.title,
      description: errand.description,
      date: errand.date,
      time: errand.time,
      origin: errand.origin,
      destination: errand.destination,
      compensation: errand.compensation,
      postedBy: errand.postedBy,
      acceptedBy: errand.acceptedBy,
      completedBy: errand.acceptedBy,
    });
    return errandRef.id;
  };

  me.removeErrandFromAccept = async(errand) => {
    const shoppingCartRef2 = collection(db, "ongoingErrands");
    const id = errand.id;
    const q2 = query(shoppingCartRef2, where("id", "==", id));
    const querySnapshot2 = await getDocs(q2);
    if (!querySnapshot2.empty) {
      const deleteRef = querySnapshot2.docs[0].ref;

      await deleteDoc(deleteRef);
    }
  };


  // Add createUser method
  me.createUser = async (email, password) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userRef = await addDoc(collection(db, "users"), {
        uid: userCredential.user.uid,
        email: email, // Store email (optional, since it's also in the Auth user record)
        // You can add more fields here as needed
      });
      // User has been created
      // userCredential.user gives you the user object
      // You might want to return some information or handle the user object here
      return userCredential.user, userRef;
    } catch (error) {
      // Handle errors here, such as email already in use, weak password, etc.
      // error.code and error.message will give you what went wrong
      throw error;
    }
  };

  me.signIn = async (email,password) =>{
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential;
      // ...
      })
      .catch((error) => {
        throw new Error("No account associated with this email and password found!", error);
      });
  };

  me.logOut = async() =>{
    await signOut(auth)
      .then(()=>{
        
      }).catch((error) => {
        // An error happened.
        console.error("Sign out error", error);
      });
  };

  return me;
}

export const myFirebase = new MyFirebase();


