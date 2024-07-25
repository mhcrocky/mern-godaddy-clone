import { ReactNode, useEffect, useState } from 'react';
import axios from '../helper/axios';
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null >(null);
    const [loading,setLoading] = useState<boolean>(true);
    // Check authentication status
    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const res = await axios.get(`/api/user-verify`)
                setIsAuthenticated(!!res.data?.data?.email);
                setLoading(false);
            } catch (error) {
                console.error("Error checking authentication status", error);
                setIsAuthenticated(false); // Consider user unauthenticated in case of an error
                setLoading(false);
            }
        };

        checkAuthentication();
    }, []); // Empty dependency array means this runs once when the component mounts

    // Fetch login URL if unauthenticated
    useEffect(() => {
        const fetchLoginUrl = async () => {
            if (isAuthenticated === false) {
                window.location.href = '/login';
            }
        };

        if(!!!loading){
            fetchLoginUrl();
        }
    }, [loading]); // Dependency on isAuthenticated

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // or a loading spinner
    }

    return isAuthenticated ? children : null;
};

export default ProtectedRoute;
