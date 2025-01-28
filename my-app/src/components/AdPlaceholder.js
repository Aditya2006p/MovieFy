import React, { useEffect } from "react";

const AdPlaceholder = () => {
  useEffect(() => {
    const loadAds = () => {
      try {
        console.log("Pushing adsbygoogle");
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    };

    if (!window.adsbygoogle) {
      console.log("Loading adsbygoogle script");
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1640287360293029";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = loadAds;
      document.body.appendChild(script);
    } else {
      loadAds();
    }
  }, []);

  return (
    <div className="ad-placeholder" style={{ backgroundColor: '#f0f0f0', height: '250px', margin: '20px 0', textAlign: 'center', lineHeight: '250px', fontSize: '20px', color: '#888' }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1640287360293029"
        data-ad-slot="6401216849"
        data-ad-format="autorelaxed"
      ></ins>
    </div>
  );
};

export default AdPlaceholder;