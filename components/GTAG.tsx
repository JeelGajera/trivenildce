'use client';

import React, { useEffect } from 'react';
import { initGA, logPageView } from '../lib/GA';

const GTAG = () => {
    useEffect(() => {
        if (!(window as any).GA_INITIALIZED) {
            initGA();
            (window as any).GA_INITIALIZED = true;
        }
        logPageView();
    }, [])
    return <></>
}

export default GTAG