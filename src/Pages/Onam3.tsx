
const Onam3 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-400 to-red-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Onam Celebration</h1>
      <p className="text-lg mb-6">
        Wishing you a colorful and joyous Onam celebration filled with happiness and unity!
      </p>
      <div className="animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-arrow-down text-xl"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8.646 14.854a.5.5 0 0 0 .708 0l6-6a.5.5 0 0 0-.708-.708L8 13.293l-5.646-5.647a.5.5 0 1 0-.708.708l6 6z"
          />
          <path
            fillRule="evenodd"
            d="M8 0a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13A.5.5 0 0 0 8 0z"
          />
        </svg>
      </div>
      <div className="mt-8 flex items-center justify-center space-x-4">
        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
          🥥
        </div>
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
          🎭
        </div>
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
          🌼
        </div>
      </div>
    </div>
  );
};

export default Onam3;
