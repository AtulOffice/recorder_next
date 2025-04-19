export default function AttractiveLoader() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 z-50">
        <div className="relative p-8">
          <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <div className="absolute inset-0 rounded-full border-t-4 border-b-4 border-indigo-600 animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-r-4 border-l-4 border-purple-600" 
                 style={{animation: "spin 2s linear infinite reverse"}}></div>
            <div className="absolute inset-4 rounded-full border-t-4 border-b-4 border-pink-600"
                 style={{animation: "spin 3s linear infinite"}}></div>
            
            {/* Center dot */}
            <div className="absolute inset-0 m-auto w-6 h-6 md:w-8 md:h-8 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Loading text with animated dots */}
          <div className="mt-8 text-center">
            <div className="text-xl md:text-2xl font-bold relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Loading
              </span>
              <span className="flex absolute -right-7 top-0">
                {/* {[0, 1, 2].map((i) => (
                  <span 
                    key={i}
                    className="w-1.5 h-1.5 ml-0.5 rounded-full bg-indigo-600 dark:bg-purple-500 inline-block animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></span>
                ))} */}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  