import React from 'react'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Login from './signUp';
import SignUp from './signUp';
import { Link } from 'react-router-dom';

const MyAccount = () => {
    // const [showModel, setShowModel] = useState(false);
    // const closeModel = () => setShowModel(false)

    return (
        <>
            <div className="iconuser icon" onClick={() => <SignUp/>}>
                <Link to="./signup"><FontAwesomeIcon icon={faUser} color="black" /></Link>
            </div>
            

        </>
    )
}

export default MyAccount
