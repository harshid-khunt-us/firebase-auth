'use client';

import { Button } from 'antd';

export default function Error({ reset }) {
  return (
    <div className="page-not-found-wrapper">
      <div className="page-not-found-block">
        <div className="page-not-found">
          <h2>Something went wrong!</h2>
          <br />
          <div className="text-center">
            <Button onClick={() => reset()} type="primary">
              Try again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
