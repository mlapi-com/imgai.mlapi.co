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
                    <div className="grid sm:grid-cols-3 mt-10 gap-10">
                        
                        
                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                            <img src="https://ik.imagekit.io/uti9laa1e/tools-enhancement1.png?updatedAt=1687183724987" alt="Tools enhancement" className='rounded-2xl w-full h-72 sm:h-72' />
                            <a>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 mt-5">Image Enhancement</h5>
                            </a>
                            <p className="font-normal text-gray-700 sm:mt-10 mt-5">Enhancement your image upto 4x or 8x in seconds, also enhance low light images</p>
                            <a href='/img-enhancement' className="mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Enhance Now
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>

                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                            <img src="https://ik.imagekit.io/uti9laa1e/bg-removal-updated-new_c6AqAKAkuO?updatedAt=1687183627404" alt="Tools enhancement" className='rounded-2xl w-full h-72 sm:h-72' />
                            <a>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 mt-5">Image Background Removal</h5>
                            </a>
                            <p className="font-normal text-gray-700 mt-5">Extract the main object from a picture with incredible accuracy.</p>
                            <a href='/bg-remove' className="sm:mt-7 mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Remove Bg
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>

                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 ">
                            <img src="https://ik.imagekit.io/uti9laa1e/tools-restore-old.png?updatedAt=1687184008283" alt="Tools enhancement" className='rounded-2xl' />
                            <a>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 mt-12">Restore Old photos</h5>
                            </a>
                            <p className="font-normal text-gray-700 sm:mt-12 mt-5">Restore your old photos, relive those memories again</p>
                            <a href='/restore-old/' className="sm:mt-7 mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Restore photos
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>

                    </div>

                    {/* <div className="grid sm:grid-cols-2 mt-10 gap-10">
                        
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

                    </div> */}
                </div>
            </div>

        </section>
    )
}