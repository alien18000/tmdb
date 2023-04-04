import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Reactplayer from "react-player";

export default function Videobox({ setShowModal, results, index, setIndex }) {
  const resultSlides = results.map((u) => u.key);



  
  return (
    <div className="modalbox">
      <div className="backdrop" />
      <div className="text-white bg-transparent p-3 rounded-3 contentbox">
        <div className="d-flex justify-content-end">
          <AiOutlineClose
            size="1.8rem"
            className="text-white mt-2"
            style={{ cursor: "pointer" }}
            onClick={() => setShowModal(false)
            }
          />
        </div>
        <div className="position-relative mt-3">
          <div className="d-flex justify-content-center">
            <Reactplayer
              url={`http://www.youtube.com/watch?v=${resultSlides[index]}`}
              controls
              className="reactplayer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
