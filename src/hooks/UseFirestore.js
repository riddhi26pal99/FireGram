import { useEffect, useState } from "react"
import { db } from "../firebase";


function UseFirestore(collection) {

    const [docs, setDocs] = useState([]); 

    useEffect(() => {
        // takes snap of the moment the every time a new url of the img is uploaded in collection 
        // listens to the db realtime for every update // initially takes a snap too at the beginnign
        // unsub stores a function which helps in stopping the use effect to happen when provoked
        const unsub =  db.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {  // onSnapshot is a method which takes snap of the db and snap is the parameter kinda 
                let documents = [];
                // we will loop through each element in the snap and push it in the documment array of objects
                // each obj has all the data of the doc and the id 
                snap.forEach( snap => {
                    documents.push({ ...snap.data(), id: snap.id });
                });
                setDocs(documents);
            })

            return () => unsub(); // unsubs from the collection when we dont want it to render in the images comp 

    }, [collection])

    return ({ docs })
}

export default UseFirestore
