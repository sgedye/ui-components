import australia from "../assets/images/australia.png";

export const Footer: React.FC<Record<string, never>> = () => {
  return (
    <footer
      className="container-fluid bg-dark text-center p-5 position-absolute"
      style={{ bottom: 0 }}
    >
      <div className="">
        <img
          src={australia}
          alt="Australia"
          width={300}
          height={300}
          className="img-fluid"
        />
      </div>
    </footer>
  );
};
