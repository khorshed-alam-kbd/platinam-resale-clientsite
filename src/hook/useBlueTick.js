import { useEffect, useState } from "react";

const useBlueTick = (email) => {
    const [isVerify, setIsVerify] = useState(false)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/users/verify/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsVerify(data.isVerify)
            })
    }, [email])

    return [isVerify]
};

export default useBlueTick;