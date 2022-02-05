
const DetailsSkeleton = <div className='w-full max-w-3xl mx-auto mt-4 md:mt-8'
>
  <div className="flex flex-col animate-pulse">
    <div className="flex ">
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center">
          <div
           className="mr-2 h-12 w-12 md:w-20 md:h-20 px-5 py-5 rounded-full border-[16px] border-[#F0F6FF] bg-skeleton dark:bg-i-neutral  dark:border-i-neutral-2">
          </div>
          <div className="block">
            <h1 className="h-5 w-28 bg-skeleton dark:bg-i-neutral-2 rounded-full"></h1>
            <h2 className="mt-2 h-4 w-20 bg-skeleton dark:bg-i-neutral-2 rounded-full"></h2>
          </div>
        </div>
        <div className="rounded-full h-12 w-12 bg-skeleton dark:bg-i-neutral-2"></div>
      </div>
    </div>
    <div className="flex-col rounded-md bg-[#f0f6ff] dark:bg-i-neutral-2 px-2 py-2 mt-3 md:px-5 md:py-6">
      <div className="flex-col">
        <div className="mt-3 h-4 w-24 bg-skeleton dark:bg-i-neutral rounded-full ">
        </div>
        <div className="rounded-md mt-8 bg-skeleton dark:bg-i-neutral h-[230px] md:h-[320px]">
        </div>
        <div className="grid grid-cols-4 grid-rows-1 gap-2 md:gap-4 mt-6">
             <div className="h-16 sm:h-20 md:h-24  bg-skeleton dark:bg-i-neutral rounded-md"></div>
             <div className="h-16 sm:h-20 md:h-24 bg-skeleton dark:bg-i-neutral rounded-md"></div>
             <div className="h-16 sm:h-20 md:h-24 bg-skeleton dark:bg-i-neutral rounded-md"></div>
             <div className="h-16 sm:h-20 md:h-24 bg-skeleton dark:bg-i-neutral rounded-md"></div> 
         </div>
        <div className="mt-3 block p-5 bg-white dark:bg-i-neutral rounded-md">
          <h2 className=" h-5 w-28 bg-skeleton dark:bg-i-neutral rounded-md"></h2>
          <h2 className="mt-5 h-3 w-11/12 bg-skeleton dark:bg-i-neutral rounded-md"></h2>
          <h2 className="mt-2 h-3 w-10/12 bg-skeleton dark:bg-i-neutral rounded-md"></h2>
          <h2 className="mt-2 h-3 w-10/12 bg-skeleton dark:bg-i-neutral rounded-md"></h2>
          <h2 className="mt-5 h-8 w-32 bg-skeleton dark:bg-i-neutral rounded-sm"></h2>
        </div>
        <h2 className="h-8 w-32 py-3 px-10 bg-skeleton dark:bg-i-neutral rounded-full mt-5 mb-10"></h2>
      </div>
    </div>
  </div>
</div>

export default DetailsSkeleton