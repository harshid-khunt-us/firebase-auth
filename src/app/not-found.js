'use client';

const NotFoundPage = () => {
  return (
    <div className="page-not-found-wrapper">
      <div className="page-not-found-block">
        <div className="page-not-found">
          <h1>404</h1>
          <h4>Oops page not found</h4>
          <p>
            We are very sorry for the inconvenience. It looks like you are
            trying to access a page that either has been deleted or never
            existed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
