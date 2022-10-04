
import styles, { layout } from "../style";
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 39.638321,
  lng: -84.068207
};

const Billing = () => (
  <section id="serviceArea" className={layout.sectionReverse}>

    <div className={layout.sectionImgReverse}>
   

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <LoadScript
        googleMapsApiKey="AIzaSyBgbcckWZA_zghJzUAGdJ2iB8XG2EdTpBQ"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Currently serving the <br className="sm:block hidden" /> following locations
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <li>Bellbrook</li>
        <li>Centerville</li>
        <li>Kettering</li>
        <li>Beavercreek</li>
      </p>

      
    </div>
  </section>
);

export default Billing;
