import * as React from 'react';


const App = (): JSX.Element => {
  return (
  <>
    <div className="animate-pulse">
      <div className="bg-slate-100 dark:bg-i-gray-2 w-full h-48 rounded-xl"></div>
      <div className="flex justify-between items-center py-3">
        <span className="block"><div className="w-32 h-3 rounded-full bg-slate-100 dark:bg-i-gray-2">
        </div>
          <span className="w-16 h-2 bg-slate-100 dark:bg-i-gray-2 rounded-full block mt-2">
          </span></span>
        <span className="h-10 w-10 rounded-full bg-slate-100 block dark:bg-i-gray-2"></span>
      </div>
      <div className="flex justify-between items-center py-1">
        <div className="bg-slate-100 dark:bg-i-gary-2 w-28 h-10 rounded-full"></div>
        <span className="flex items-center space-x-3">
          <span className="block bg-slate-200 dark:bg-i-gray h-6 w-6 rounded-full">
          </span>
          <span className="block w-20 h-4 rounded-full bg-slate-200 dark:bg-i-gray-2"></span>
        </span>
      </div>
    </div>
  </>
  )
}

export default App;
