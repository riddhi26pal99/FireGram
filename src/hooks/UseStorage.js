import { useEffect, useState } from 'react'
import { storage, db, timestamp } from '../firebase'

function useStorage(file) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect( () => {
        //sets reference of the image which will be stored in storage 
        const storageRef = storage.ref(file.name);
        const collectionRef = db.collection('Images');

        storageRef.put(file).on('state_changed', 
            (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100 ;
                setProgress(percentage);
            },
            (err) => {
                setError(err)
            },
            async () => {
                const url = await storageRef.getDownloadURL();
                const createdAt = timestamp();
                collectionRef.add({ url, createdAt});
                setUrl(url);
            }
        )
    }, [file]);

    return { progress, error, url } 
}

export default useStorage;
