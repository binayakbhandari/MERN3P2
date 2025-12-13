

const Floating404 = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-20 text-center">
      
      <h1 className="text-9xl font-extrabold text-red-500 float">404</h1>
      <p className="text-2xl font-semibold mt-4 float">Error</p>
      <p className="text-lg text-gray-500 mt-2 float">Books Not Found</p>

      {/* Inline styles for floating animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Floating404;
