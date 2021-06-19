import React from "react";
import BingMapsReact from "bingmaps-react";

function BingMap() {
  return (
    <BingMapsReact
      bingMapsKey="Au9m_nz5mrOODSqFbFXqi1WXNlphoeQKltJOQFB-nKpM9aXnrfoGfobXlhgm9zED"
      height="500px"
      mapOptions={{
        navigationBarMode: "square",        
      }}
      width="500px"
      viewOptions={{          
        center: [ 47.60357, -71.058884 ],
        mapTypeId: "grayscale",
      }}
    />
  );
}

export default BingMap