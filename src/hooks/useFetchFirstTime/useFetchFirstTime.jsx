import { onSnapshot } from "firebase/firestore";

export const useFecthFirstTime = (_q, setLoading, setPosts, setLastDoc, setNoPosts) => {
    onSnapshot(_q, snapshot => {
        const isCollectionEmpty = snapshot.size === 0;

        if(!isCollectionEmpty) {
            const posts = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            const lastDoc = snapshot.docs[snapshot.docs.length - 1];
            setLoading(false)
            setPosts(posts);
            setLastDoc(lastDoc);
        } else {
            setLoading(false);
            setNoPosts(true);
        }
    })
}