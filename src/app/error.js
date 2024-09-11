"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center space-y-2">
        <div className="border border-red-600 p-5 rounded-md">
          <h2 className="text-3xl text-red-500 text-center">
            Something went wrong...
          </h2>
          <h4 className="text-xl text-red-500 text-center">{error?.message}</h4>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <button
            className="btn btn-outline btn-success btn-sm"
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
