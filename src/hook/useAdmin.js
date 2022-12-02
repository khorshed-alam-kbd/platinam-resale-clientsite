import { useEffect, useState } from 'react';

const useAdmin = (email) => {

    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoding, setIsAdminLoading] = useState(true)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin)
                setIsAdminLoading(false)
            })
    }, [email])

    return [isAdmin, isAdminLoding]
};

export default useAdmin;