import { useEffect, useState } from 'react';

const useSeller = (email) => {

    const [isSeller, setIsSeller] = useState(false)
    const [isSellerLoding, setIsSellerLoading] = useState(true)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/users/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsSeller(data.isSeller)
                setIsSellerLoading(false)
            })
    }, [email])

    return [isSeller, isSellerLoding]
};

export default useSeller;