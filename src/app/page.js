'use client';

import { getRedirectResult, loginWithGoogle } from '@lib/firebase';
import { useEffect, useState } from 'react';

export default function SignIn() {
  const [providerLoading, setProviderLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setProviderLoading(true);
        const result = await getRedirectResult();
        if (result?.user) {
          window.open('https://spell-checker.logicwind.co/');
        } else {
          // No user found, trigger login
          await loginWithGoogle();
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('error', err);
      } finally {
        setProviderLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {providerLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}
