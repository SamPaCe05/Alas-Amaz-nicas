import { getFirestore,  doc, getDoc } from 'firebase/firestore'
import  { useState, useEffect } from 'react'
import { appFirebase, auth } from '@/firebase/firebaseconfig'
export default function Home() {
    const fireStore = getFirestore(appFirebase);

    const [userDetails, setUserDetails] = useState(null)

    async function fetchUserData() {
        auth.onAuthStateChanged(async (user) => {
            const docRef = doc(fireStore, "usuarios", user.uid)
            const docSnapShot = await getDoc(docRef)
            if (docSnapShot.exists()) {
                setUserDetails(docSnapShot.data())
            } else {
                console.log();

            }
        })
    }
    useEffect(() => {
        fetchUserData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    async function handleLogout() {
        try {
            await auth.signOut();
            window.location.href = "/";
            console.log("User logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    }
    return (
        <div>
            <h1>Home Page Profile </h1>
            {userDetails ? (
                <main>
                    <h3>Welcome {userDetails.username} 🙏🙏</h3>
                    <div>
                        <p>Email: {userDetails.correo}</p>
                        <p>First Name: {userDetails.rol}</p>
                    </div>
                    <button className="btn btn-primary" onClick={handleLogout}>
                        Logout
                    </button>
                </main>

            ) : (

                <p>loading</p>
            )}
        </div>
    )
}
