import React, { useRef, useEffect } from "react";

const Clients = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // 🔥 Change speed (1 = normal, 2 = 2x faster)
    }
  }, []);

  return (
    <section className="w-full bg-white py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600">

        </h2>
        <div className="w-20 h-1 bg-yellow-600 mx-auto mt-2 rounded"></div>
      </div>

      {/* Video Section */}
      <div className="flex justify-center px-4">
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg">
          <video
            ref={videoRef}
            src="/images/afera.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
