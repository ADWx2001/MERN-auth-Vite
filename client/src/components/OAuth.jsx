import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import { app } from "../firebase";

export default function OAuth() {
  const handleGoogleClick = async() => {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app); 
        const result = await signInWithPopup(auth, provider);
        
        const res = await fetch ('api/auth/google',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:result.user.displayName,
                email:result.user.email,
                photo:result.user.photoURL,
            }),
        });
        const data = await res.json();
        
    } catch (error) {
        console.log("Couldn't sign with google", error);
    }
  };

  return (
    <button
      type="button" onClick={handleGoogleClick}
      className="text-white bg-red-600 uppercase p-3 rounded-lg hover:opacity-95"
    >
      with google account
    </button>
  );
}
