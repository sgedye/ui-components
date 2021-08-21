import jpgImage from "../assets/images/jpg-image.jpg";
import pngImage from "../assets/images/png-image.png";
import webpImage from "../assets/images/webp-image.webp";

export const Images: React.FC<Record<string, never>> = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center my-5">
      <div className="bg-danger p-3 m-3">
        <img
          src={jpgImage}
          alt="JPG img"
          width={200}
          height={200}
          className="img-fluid"
        />
      </div>
      <div className="bg-warning p-3 m-3">
        <img
          src={pngImage}
          alt="PNG img"
          width={200}
          height={200}
          className="img-fluid"
        />
      </div>
      <div className="bg-info p-3 m-3">
        <img
          src={webpImage}
          alt="WEBP img"
          width={200}
          height={200}
          className="img-fluid"
        />
      </div>
    </div>
  );
};
