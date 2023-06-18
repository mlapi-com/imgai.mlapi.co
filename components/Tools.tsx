import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function Tools(){
    return (
        <section
            id='Tools' className="pt-10 pb-10"
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto md:text-center">
                    <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl flex items-center justify-center">
                        Tools
                    </h1>
                    <div className="flex items-center justify-center mt-10 sm:flex-row flex-col ml-10">
                        
                        
                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                            <a>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">Image Enhancement</h5>
                            </a>
                            <p className="font-normal text-gray-700 mt-5">Enhancement your image upto 4x or 8x in seconds, also enhance low light images</p>
                            <a className="mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Enhance Now
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>

                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 sm:ml-10 sm:mt-0 mt-10">
                            <a>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">Image Background Removal</h5>
                            </a>
                            <p className="font-normal text-gray-700 mt-5">Extract the main object from a picture with incredible accuracy.</p>
                            <a className="mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Remove Bg
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>

                    </div>

                    <div className="flex items-center justify-center mt-10 sm:flex-row flex-col ml-10">
                        
                        
                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                            <a>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">Object Removal</h5>
                            </a>
                            <p className="font-normal text-gray-700 mt-5">Remove Objects, people, text and defects from your pictures automatically</p>
                            <a className="mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Remove Object
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>

                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 sm:ml-10 sm:mt-0 mt-10">
                            <a>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">Restore Old photos</h5>
                            </a>
                            <p className="font-normal text-gray-700 mt-5">Restore your old photos, relive those memories again</p>
                            <a className="mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Restore photos
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}