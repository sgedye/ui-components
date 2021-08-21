import infinity from "../assets/svg/infinity.svg";

export const Header: React.FC<Record<string, never>> = () => {
  return (
    <header className="container-fluid bg-light d-flex flex-column flex-md-row align-items-center p-5">
      <img
        src={infinity}
        alt="infinity logo"
        style={{ display: "inline-block", marginRight: "2rem" }}
      />
      <h1 className="d-none d-md-block">
        This is a heading - the infinity logo is an SVG
      </h1>
    </header>
  );
};
