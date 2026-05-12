

const LoadingPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

      <p className="mt-4 text-lg font-medium">Loading...</p>
    </div>
  );
};

export default LoadingPage;
