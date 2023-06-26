import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import CountUp from "react-countup";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import { CompareSlider } from "./CompareSlider";
import ResizablePanel from "./ResizablePanel";
import Toggle from "./Toggle";
import appendNewToName from "../utils/appendNewToName";
import downloadPhoto from "../utils/downloadPhoto";
import NSFWPredictor from "../utils/nsfwCheck";
import LoadingDots from "./LoadingDots";


// Configuration for the uploader
const uploader = Uploader({
  apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    : "free",
});
const options = {
  maxFileCount: 1,
  mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
  editor: { images: { crop: false } },
  styles: { colors: { primary: "#000" } },

//   TO enable the NSFW Predictor uncomment the following code
//   onValidate: async (file: File): Promise<undefined | string> => {
//     let isSafe = false;
//     try {
//       isSafe = await NSFWPredictor.isSafeImg(file);
//     } catch (error) {
//       console.error("NSFW predictor threw an error", error);
//     }
//     return isSafe
//       ? undefined
//       : "Detected a NSFW image which is not allowed. If this was a mistake, please contact me at rahul@imgai.co";
//   },
};

// To take user inputs
interface HomeProps {
    versionID: string;
    processingText: string;
  }

const Home: React.FC<HomeProps> = ({ versionID, processingText }) => {
  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false);
  const [sideBySide, setSideBySide] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string | null>(null);

  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(file) => {
        if (file.length !== 0) {
          setPhotoName(file[0].originalFile.originalFileName);
          setOriginalPhoto(file[0].fileUrl.replace("raw", "thumbnail"));
          generatePhoto(file[0].fileUrl.replace("raw", "thumbnail"));
        }
      }}
      width="670px"
      height="250px"
    />
  );

  async function generatePhoto(fileUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoading(true);
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          imageUrl: fileUrl,
          verionText: versionID }),
      });

      let newPhoto = await res.json();
      console.log("responsePhoto url or error is: ", newPhoto);
      if (res.status !== 200) {
        setError(newPhoto);
      } else {
        setRestoredImage(newPhoto);
      }
      setLoading(false);
  }

  return (
    <div className="flex w-full mx-auto  sm:mt-20 mt-10">

      <main className="flex flex-1 w-full text-center"
      id="processing">
        
        <ResizablePanel>
          <AnimatePresence exitBeforeEnter>
            <motion.div className="flex justify-between items-center w-full flex-col">
              <Toggle
                className={`${restoredLoaded ? "visible" : "invisible"}`}
                sideBySide={sideBySide}
                setSideBySide={(newVal) => setSideBySide(newVal)}
              />
              {restoredLoaded && sideBySide && (
                <CompareSlider
                  original={originalPhoto!}
                  restored={restoredImage!}
                />
              )}
              {!originalPhoto && <UploadDropZone />}
              {originalPhoto && !restoredImage && (
                <Image
                  alt="original photo"
                  src={originalPhoto}
                  className="rounded-2xl"
                  width={475}
                  height={475}
                />
              )}
              {restoredImage && originalPhoto && !sideBySide && (
                <div className="flex sm:space-x-4 sm:flex-row flex-col">
                  <div>
                    <h2 className="mb-1 font-medium text-lg sm:mt-5 mt-10">Original Photo</h2>
                    <Image
                      alt="original photo"
                      src={originalPhoto}
                      className="rounded-2xl relative"
                      width={475}
                      height={475}
                    />
                  </div>
                  <div className="sm:mt-0 mt-8">
                    <h2 className="mb-1 font-medium text-lg sm:mt-5 mt-10">{processingText} Photo</h2>
                    <a href={restoredImage} target="_blank" rel="noreferrer">
                      <Image
                        alt="restored photo"
                        src={restoredImage}
                        className="rounded-2xl relative sm:mt-0 mt-2 cursor-zoom-in"
                        width={475}
                        height={475}
                        onLoadingComplete={() => setRestoredLoaded(true)}
                      />
                    </a>
                  </div>
                </div>
              )}
              {loading && (
                <button
                  disabled
                  className="bg-black rounded-full text-white font-medium px-4 pt-2 pb-3 mt-8 hover:bg-black/80 w-40"
                >
                  <span className="pt-4">
                    <LoadingDots color="white" style="large" />
                  </span>
                </button>
              )}
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mt-8"
                  role="alert"
                >
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              <div className="flex space-x-2 justify-center mb-10">
                {originalPhoto && !loading && (
                  <button
                    onClick={() => {
                      setOriginalPhoto(null);
                      setRestoredImage(null);
                      setRestoredLoaded(false);
                      setError(null);
                    }}
                    className="bg-black rounded-full text-white font-medium px-4 py-2 mt-8 hover:bg-black/80 transition"
                  >
                    Upload New Photo
                  </button>
                )}
                {restoredLoaded && (
                  <button
                    onClick={() => {
                      downloadPhoto(
                        restoredImage!,
                        appendNewToName(photoName!)
                      );
                    }}
                    className="bg-white rounded-full text-black border font-medium px-4 py-2 mt-8 hover:bg-gray-100 transition"
                  >
                    Download Photo
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main>
    </div>
  );
};

export default Home;
