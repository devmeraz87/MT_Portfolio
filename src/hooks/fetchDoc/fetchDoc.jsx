import { onSnapshot } from "firebase/firestore";

export const fetchDocuments = (_q, setLoading, setPosts, setLastDoc, setNoPosts) => {
    const q = _q;

    onSnapshot(q, snapshot => {
        const isCollectionEmpty = snapshot.size === 0;
        
        if(!isCollectionEmpty) {
            const _newPosts = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            const _lastDoc = snapshot.docs[snapshot.docs.length - 1] ;

            setLoading(false);
            setPosts(prevPost => [...prevPost, ..._newPosts]);
            setLastDoc(_lastDoc);
        } else {
            setLoading(false);
            setNoPosts(true);
        }
    })

}