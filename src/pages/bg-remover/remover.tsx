/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

// @ts-ignore
import { saveAs } from "file-saver";
import axios from "axios";
import { useLoading } from "../../App";
import bgRemImg from "../../assets/bg-rem.png";

const bgStyle = {
  backgroundImage:
    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAABlBMVEX////09PQtDxrOAAAAE0lEQVQI12P4f4CBKMxg/4EYDAAFkR1NiYvv7QAAAABJRU5ErkJggg==)",
};

export const BgRemover = () => {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [responseImage, setResponseImage] = useState<string>();
  const { toggleLoading } = useLoading();

  useEffect(() => {
    if (!selectedImage) return;
    toggleLoading(true);
    const formData = new FormData();
    const reader = new FileReader();

    formData.append("size", "auto");
    formData.append("image_file", selectedImage);
    reader.onloadend = function () {
      console.log(reader.result);
      setResponseImage(reader.result as string);
    };

    // @ts-ignore
    axios({
      method: "post",
      url: "https://api.remove.bg/v1.0/removebg",
      data: formData,
      responseType: "blob",
      encoding: null,
      headers: {
        "X-Api-Key": "DrY2ZAHsC5RaUDe4DaTVdwKE",
      },
    })
      .then((res) => {
        if (res.status !== 200) alert("error, reload");
        reader.readAsDataURL(res.data);
      })
      .catch((err) => {
        alert("error, reload");
        toggleLoading(false);
      });
  }, [selectedImage]);

  useEffect(() => {
    toggleLoading(false);
  }, [responseImage]);

  return (
    <div className="card pb-16">
      {!!responseImage ? (
        <>
          <div className={"flex justify-center"} style={bgStyle}>
            <img src={responseImage} height="200" alt="preview..." />
          </div>
          <div className={"flex justify-end mt-12"}>
            <button
              type="submit"
              className="rounded-lg bg-white py-3 px-8 font-semibold text-blue-500"
              onClick={() => {
                setResponseImage("");
              }}
            >
              Upload new image
            </button>
            <button
              type="submit"
              className="rounded-lg bg-primary-500 py-3 px-8 font-semibold text-white"
              onClick={() => {
                saveAs(responseImage, "image.jpg");
              }}
            >
              Download image
            </button>
          </div>
        </>
      ) : (
        <>
          <header className="flex items-center gap-10">
            <div className="shrink">
              <img src={bgRemImg} alt="Terms and Conditions Generator" />
            </div>
            <h2 className="text-black font-semibold text-4xl shrink-[2]">
              Instantly remove the background from your photos, free
            </h2>
          </header>
          <h3 className="mt-12">Background remover</h3>
          <p className="text-slate-600 mt-2">
            Simply enter a term that describes your business or service, and
            generate catchy slogans.
          </p>
          <div className="mt-12 border border-dashed flex justify-center ">
            <div className="my-12">
              <label
                htmlFor="file-upload"
                className="rounded-lg bg-primary-500 py-3 px-8 font-semibold text-white cursor-pointer"
              >
                Upload Image
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={(event) => {
                  // @ts-ignore
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </div>
          </div>
          <hr className="my-12" />
          <h3>How it works</h3>
          <div className="grid md:grid-cols-3 text-slate-500 mt-3 gap-3">
            <div>
              <h5 className="font-semibold mb-3">1. Select your image</h5>
              <p className="text-sm">
                Upload an image from your computer or drag and drop it right
                here.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">2. Image Processing</h5>
              <p className="text-sm">
                Wait for a few seconds as we process your image and remove the
                background.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">3. Download your image</h5>
              <p className="text-sm">
                Once the process is complete, download your image in HD.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
