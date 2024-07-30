import { Suspense } from 'react';

import SignIn from './components/SignIn';

const page = () => {
  return (
    <Suspense>
      <SignIn />
    </Suspense>
  );
};

export default page;
