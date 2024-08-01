'use client';

import api from '@lib/api';
import { getRedirectResult, loginWithGoogle } from '@lib/firebase';
import { Spin } from 'antd';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SignIn() {
  const searchParams = useSearchParams();
  const writeKey = searchParams.get('writeKey');

  useEffect(() => {
    (async () => {
      try {
        if (writeKey) {
          localStorage.setItem('writeKey', writeKey);
        }

        const result = await getRedirectResult();
        // eslint-disable-next-line no-console
        console.log('User', result?.user);
        const user = result?.user;
        if (user) {
          const googleIdToken = await user.getIdToken();
          const writeKey = localStorage.getItem('writeKey');
          const body = {
            token: `Bearer ${googleIdToken}`,
            writeKey,
          };

          const res = await api.post('/', body);
          if (res?.data) {
            window.location.href = 'https://spell-checker.logicwind.co/';
          }
        } else {
          await loginWithGoogle();
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('error', err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sign-in-wrapper">
      <Spin size="large" />
    </div>
  );
}
