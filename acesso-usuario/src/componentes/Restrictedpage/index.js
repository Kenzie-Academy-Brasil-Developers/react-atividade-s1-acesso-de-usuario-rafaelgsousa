import "./style.css"

function Restrictedpage({isLoggedIn, user, Login, Logout}) {

    return (
        <>
            {isLoggedIn ?
            <>
                <h1>Bem vindo {user}</h1>
                <button onClick={Logout}>logout</button>
            </>
            :
            <>
                <h1>Você não pode acessar essa página</h1>
                <button onClick={Login}>login</button>
            </>
            }
        </>
            
    )
}

export default Restrictedpage