import React, { useEffect, useRef } from 'react';
import ReactPlayer from "react-player";
import styled from "styled-components";

const Video = styled.video`
  width: 440px;
  height: 440px;
  margin-top: 0%;

`;


const StyledVideoPlayer = styled(ReactPlayer)`
  width: 100%;
  height: 5010px;
  border: 10px solid #ccc;
  /* Agrega cualquier otro estilo que desees */
`;





function App() {


  const videoRef = useRef(null);
  const projectVideo = `https://youtu.be/sPyAQQklc1s?si=bZasVcYlWVvMDpdx`;

  useEffect(() => {
    // Accede al elemento de video utilizando videoRef.current
    const videoElement = videoRef.current;

    // Verifica si el video está pausado y si no lo está, llama al método play()
    if (videoElement && videoElement.paused) {
      videoElement.play();
    }

   
  }, []);

  const videoElement = videoRef.current;

    // Verifica si el video está pausado y si no lo está, llama al método play()
    if (videoElement && videoElement.paused) {
      videoElement.play();
    }

  return (
    <div>
      <h1>Video de YouTube en Vite y React</h1>
     
    

<StyledVideoPlayer
                    className="video"
                    url={projectVideo}
                    controls
                    loop
                    width="100%"
                    height="800px"
                  />
    </div>
  );
}

export default App;