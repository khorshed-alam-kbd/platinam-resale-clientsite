import { useEffect, useState } from 'react';

const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false)
    const [isBuyerLoding, setIsBuyerLoading] = useState(true)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/users/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsBuyer(data.isBuyer)
                setIsBuyerLoading(false)
            })
    }, [email])

    return [isBuyer, isBuyerLoding]
};

export default useBuyer;