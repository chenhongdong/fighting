import React, { useState } from "react";
import ClickCounter from "./components/ClickCounter";
import FriendStatus from "./components/FriendStatus";
import UseContext from "./components/UseContext";
import UseReducer from "./components/UseReducer";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";



function App() {
    const [flag, setFlag] = useState(true)
    const [id, setId] = useState(1)
    return <div>
        {/* <div>
            <button onClick={() => setFlag(!flag)}>开关</button>
            <button onClick={() => setId(id+1)}>id++</button>
        </div> */}
        {/* { flag && <FriendStatus friendId={id} /> } */}
        {/* <UseContext /> */}
        <UseReducer initialCount={10} />
        {/* <UseMemo /> */}
        {/* <UseCallback /> */}
    </div>
}


export default App