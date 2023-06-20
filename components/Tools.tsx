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
                        
                        
                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 flex items-center justify-center flex-col">
                            {/* <img src="https://ik.imagekit.io/uti9laa1e/tools-enhancement1.png?updatedAt=1687183724987" alt="Tools enhancement" className='rounded-2xl w-full h-72 sm:h-72' /> */}
                            
                            <ReactCompareSlider
                                itemOne={<ReactCompareSliderImage src="https://ik.imagekit.io/uti9laa1e/blury-1.jpeg?updatedAt=1687242563492"  alt="Image one" />}
                                itemTwo={<ReactCompareSliderImage src="https://ik.imagekit.io/uti9laa1e/blury-1-new.png?updatedAt=1687242564394"  alt="Image two" />}
                                className="sm:w-[300px] h-[300px] rounded-3xl"
                            />

                            <a>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 mt-5">Image Enhancement</h5>
                            </a>
                            <p className="font-normal text-gray-700 sm:mt-10 mt-5">Enhancement your image upto 4x or 8x in seconds, also enhance low light images</p>
                            <a href='/img-enhancement' className="sm:mt-7 mt-5 text-sm font-medium text-center items-center justify-center rounded-xl focus-visible:outline-black focus:outline-none inline-flex bg-black border-2 border-black duration-200 focus-visible:ring-black hover:bg-transparent hover:border-black hover:text-black lg:w-auto px-6 py-3 text-white">
                                Enhance Now
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>

                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 flex items-center justify-center flex-col">
                            {/* <img src="https://ik.imagekit.io/uti9laa1e/bg-removal-updated-new_c6AqAKAkuO?updatedAt=1687183627404" alt="Tools enhancement" className='rounded-2xl w-full h-72 sm:h-72' /> */}
                            
                            <ReactCompareSlider
                                itemOne={<ReactCompareSliderImage src="https://ik.imagekit.io/uti9laa1e/animal-1.jpeg?updatedAt=1687242303027"  alt="Image one" />}
                                itemTwo={<ReactCompareSliderImage src="https://ik.imagekit.io/uti9laa1e/animal-1-new.png?updatedAt=1687242303210"  alt="Image two" />}
                                className="sm:w-[300px] h-[300px] rounded-3xl"
                            /> 
                            
                            <a>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 mt-5">Image Background Removal</h5>
                            </a>
                            <p className="font-normal text-gray-700 mt-5">Extract the main object from a picture with incredible accuracy.</p>
                            <a href='/bg-remove' className="sm:mt-7 mt-5 text-sm font-medium text-center items-center justify-center rounded-xl focus-visible:outline-black focus:outline-none inline-flex bg-black border-2 border-black duration-200 focus-visible:ring-black hover:bg-transparent hover:border-black hover:text-black lg:w-auto px-6 py-3 text-white">
                                Remove Bg
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>

                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 flex items-center justify-center flex-col">
                            {/* <img src="https://ik.imagekit.io/uti9laa1e/tools-restore-old.png?updatedAt=1687184008283" alt="Tools enhancement" className='rounded-2xl' /> */}
                            
                            <ReactCompareSlider
                                itemOne={<ReactCompareSliderImage src="https://ik.imagekit.io/uti9laa1e/d_1.png?updatedAt=1687243000210"  alt="Image one" />}
                                itemTwo={<ReactCompareSliderImage src="https://ik.imagekit.io/uti9laa1e/d_1-new.png?updatedAt=1687243000026"  alt="Image two" />}
                                className="sm:w-[300px] h-[300px] rounded-3xl"
                            />
                            <a>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 mt-12">Restore Old photos</h5>
                            </a>
                            <p className="font-normal text-gray-700 sm:mt-12 mt-5">Restore your old photos, relive those memories again</p>
                            <a href='/restore-old/' className="sm:mt-7 mt-5 text-sm font-medium text-center items-center justify-center rounded-xl focus-visible:outline-black focus:outline-none inline-flex bg-black border-2 border-black duration-200 focus-visible:ring-black hover:bg-transparent hover:border-black hover:text-black lg:w-auto px-6 py-3 text-white">
                                Restore photos
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>

                    </div>

                    <div className="grid sm:grid-cols-3 mt-10 gap-10">
                        
                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 flex items-center justify-center flex-col">
                            {/* <img src="https://ik.imagekit.io/uti9laa1e/cartoon.jpg?updatedAt=1687192720786" alt="Tools enhancement" className='rounded-2xl w-full sm:h-[320px]' /> */}
                            
                            <ReactCompareSlider
                                itemOne={<ReactCompareSliderImage src="https://ik.imagekit.io/uti9laa1e/cartoon-old.jpg?updatedAt=1687243484574"  alt="Image one" />}
                                itemTwo={<ReactCompareSliderImage src="https://ik.imagekit.io/uti9laa1e/cartoon.jpg?updatedAt=1687192720786"  alt="Image two" />}
                                className="sm:w-[300px] h-[300px] rounded-3xl"
                            />
                            <a>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 mt-5">Cartoonify Image</h5>
                            </a>
                            <p className="font-normal text-gray-700 sm:mt-12 mt-5">Cartoonify an image.</p>
                            <a href='/bg-remove' className="sm:mt-14 mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Cartoonify
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>

                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 flex items-center justify-center flex-col">
                            {/* <img src="https://raw.githubusercontent.com/senya-ashukha/senya-ashukha.github.io/master/projects/lama_21/gif_for_lightning_v1_white.gif" alt="Tools enhancement" /> */}
                            
                            <ReactCompareSlider
                                itemOne={<ReactCompareSliderImage src="https://ik.imagekit.io/uti9laa1e/colrize-1.jpeg?updatedAt=1687243778517"  alt="Image one" />}
                                itemTwo={<ReactCompareSliderImage src="https://ik.imagekit.io/uti9laa1e/colrize-new.png?updatedAt=1687243779261"  alt="Image two" />}
                                className="sm:w-[300px] h-[300px] rounded-3xl"
                            />
                            <a>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 mt-12">Colorize Old photos</h5>
                            </a>
                            <p className="font-normal text-gray-700 sm:mt-12 mt-5">Add color to old photos and make then look like alive again</p>
                            <a href='/restore-old/' className="sm:mt-7 mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Colorize photos
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>

                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 flex items-center justify-center flex-col">
                            {/* <img src="https://ik.imagekit.io/uti9laa1e/tools-restore-old.png?updatedAt=1687184008283" alt="Tools enhancement" className='rounded-2xl' /> */}
                            
                            <ReactCompareSlider
                                itemOne={<ReactCompareSliderImage src="https://ik.imagekit.io/uti9laa1e/dark-enhanc-1.png?updatedAt=1687244005864"  alt="Image one" />}
                                itemTwo={<ReactCompareSliderImage src="https://ik.imagekit.io/uti9laa1e/dark-enhanc-1-new.png?updatedAt=1687244006026"  alt="Image two" />}
                                className="sm:w-[300px] h-[300px] rounded-3xl"
                            />
                            <a>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 mt-12">Night Image Enhancement</h5>
                            </a>
                            <p className="font-normal text-gray-700 sm:mt-12 mt-5">Enhance really dark images</p>
                            <a href='/restore-old/' className="sm:mt-7 mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Enhance photos
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div> 

                    </div>
                </div>
            </div>

        </section>
    )
}