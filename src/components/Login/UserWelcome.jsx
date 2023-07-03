import { useState, useContext } from 'react';

export default function UserWelcome() {
    const [user, setUser] = useState(null);

    function handleChange(e) {
        setUser(e.target.value);
    }

    return (
        <div>
            <h1>User Welcome</h1>
            <input type="text" onChange={handleChange} />
            <p>{user}</p>
        </div>
    )
}
