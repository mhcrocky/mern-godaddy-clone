﻿import React, { ReactNode, useEffect, useState } from 'react';
import axios from '../helper/axios';
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null >(null);

    // Check authentication status
    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const res = await axios.get(`/api/user-verify`)
                setIsAuthenticated(!!res.data?.data?.email);
            } catch (error) {
                console.error("Error checking authentication status", error);
                setIsAuthenticated(false); // Consider user unauthenticated in case of an error
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

        fetchLoginUrl();
    }, [isAuthenticated]); // Dependency on isAuthenticated

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // or a loading spinner
    }

    return isAuthenticated ? children : null;
};

export default ProtectedRoute;
