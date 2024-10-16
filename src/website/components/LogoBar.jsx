import React from "react";
import Frame90 from "/Images/Frame90.png";
import Frame89 from "/Images/Frame89.png";
import Frame88 from "/Images/Frame88.png";
import Frame87 from "/Images/Frame87.png";
import Frame86 from "/Images/Frame86.png";
import Frame85 from "/Images/Frame85.png";
import Frame84 from "/Images/Frame84.png";
import Frame83 from "/Images/Frame83.png";
import Frame82 from "/Images/Frame82.png";
import Frame81 from "/Images/Frame81.png";

const LogoBar = () => {
  return (
    <section className="flex overflow-hidden space-x-20  group">
      <div className="flex space-x-16 space-x-reverse animate-loop-scroll group-hover:paused m-x">
        <img alt="Logo 1" className="h-20 w-20 " src={Frame90} />
        <img alt="Shopify logo" className="h-20 w-20 " src={Frame89} />
        <img alt="Logo 3" className="h-20 w-20 " src={Frame88} />
        <img alt="Opencart logo" className="h-20 w-20 " src={Frame87} />
        <img alt="Logo 5" className="h-20 w-20 " src={Frame86} />
        <img alt="Logo 6" className="h-20 w-20 " src={Frame85} />
        <img alt="Logo 7" className="h-20 w-20 " src={Frame84} />
        <img alt="Logo 8" className="h-20 w-20 " src={Frame83} />
        <img alt="Logo 9" className="h-20 w-20 " src={Frame82} />
        <img alt="Logo 10" className="h-20 w-20 " src={Frame81} />
        
      </div>
    </section>
  );
};

export default LogoBar;
