
import { useEffect, useState } from "react";

function Effect () {
    const [userObject, setUserObject] = useState([]);
    const [loadCount, setLoadCount] = useState(1);
    useEffect(() => {
        const getUser = async () => {
            const fetchObj = await fetch("https://randomuser.me/api");
            const userData = await fetchObj.json();
            setUserObject(JSON.stringify(userData, null ,2));
            setLoadCount(prev => prev);
        }
        getUser();
    },[loadCount]);
    const loadRandom = () => {
        setLoadCount(prev => prev+1);
    }
    return (
        <div>
            <h2>Use Effect</h2>
            <h4>Random Object Display</h4>
            <pre>Displays random data on page load (or) on button click</pre>
            <button className="btn" onClick={loadRandom}>{loadCount}</button>
            <p>{userObject ? userObject : null}</p>
        </div>
    );
}

export default Effect;