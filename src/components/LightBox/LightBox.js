import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

const LightBox = ({images}) => {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const openLightBox = (index) => {
    setIndex(index)
    setOpen(true)
  }

  return (
    <>
      { images && images.length > 0 && images.map((image, index) => (
        <div key={`${image.alt}_${index}`} className="col-xl-6 col-lg-6 col-md-6">
          <button className="project-details-dimage w-img mb-45" onClick={() => openLightBox(index)}>
            <img className="b-radius" src={image.src || "/assets/img/project/project-d2.jpg"} alt={image.alt} />
          </button>
        </div>
      ))}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        plugins={[Video, Zoom]}
        index={index}
      />
    </>
  );
};

export default LightBox;
