import React, { useEffect, useState } from 'react';

function CoditionalReturn(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState("");
    const url = "https://api.github.com/users/zafrulhasankhan"
    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (res.status >= 200 && res.status <= 299){
                    return res.json();
                }
                else{
                    setIsLoading(false);
                    setIsError(true);
                }
            })
            .then((user) => {
                const { login } = user;
                setUser("login");
                setIsLoading(false);
            })
            .catch((error) => console.log(error))

    }, [])
    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    if (isError) {
        return (
            <div>
                Error...
            </div>
        );
    }
    return (
        <>
            <h1>{user}</h1>
        </>
    )
}

export default CoditionalReturn;