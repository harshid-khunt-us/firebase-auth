'use client';

import { getRedirectResult, loginWithGoogle } from '@lib/firebase';
import { useEffect, useState } from 'react';

export default function SignIn() {
  const [providerLoading, setProviderLoading] = useState(false);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     // eslint-disable-next-line no-console
  //     console.log('Auth state changed:', currentUser);
  //   });

  //   // Cleanup function to unsubscribe when component unmounts
  //   return () => unsubscribe();
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        setProviderLoading(true);
        const res = await getRedirectResult();
        // eslint-disable-next-line no-console
        console.log(res);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      } finally {
        setProviderLoading(false);
      }
    })();
  }, [setProviderLoading]);

  const handleGoogleLogin = async () => {
    try {
      loginWithGoogle();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };
  return (
    <div>
      {providerLoading ? (
        'Loading...'
      ) : (
        <button onClick={handleGoogleLogin}>google</button>
      )}
    </div>
  );
}
