import React, { useState } from "react";
import ClickCounter from "./components/ClickCounter";

function App() {
    const [flag, setFlag] = useState(true)
    return <div>
        <div>
            <button onClick={() => setFlag(!flag)}>开关</button>
        </div>
        { flag && <ClickCounter /> }
    </div>
}


export default App