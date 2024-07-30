'use client';

import { getRedirectResult, loginWithGoogle } from '@lib/firebase';
import { useEffect, useState } from 'react';

export default function SignIn() {
  const [providerLoading, setProviderLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setProviderLoading(true);

        // Check for existing user
        const result = await getRedirectResult();
        if (result?.user) {
          // User is authenticated
          setUser(result.user);
        } else {
          // No user found, trigger login
          await loginWithGoogle();
        }
      } catch (err) {
        // Handle errors here
        // eslint-disable-next-line no-console
        console.log(err);
      } finally {
        setProviderLoading(false);
      }
    })();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {providerLoading ? (
        <div className="text-center">
          <p>Loading...</p>
        </div>
      ) : user ? (
        <div>
          <p>Welcome, {user.displayName || 'User'}!</p>
          {/* Add additional UI or redirect as needed */}
        </div>
      ) : (
        <div>
          <p>No user found. Please sign in.</p>
        </div>
      )}
    </div>
  );
}
