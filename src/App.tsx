import { Images } from "./components";
import { Header, Footer, ArrowBtn } from "./ui";
import { BrowserRouter } from "react-router-dom";

export const App: React.FC<Record<string, never>> = () => {
  return (
    <div className="app position-relative d-flex flex-column">
      <Header />
      <main className="container">
        <Images />
        <div className="bg-warning px-5 py-4 mx-auto">
          <h2 className="text-danger">Change this text!</h2>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Hot reload remembers state"
          />
          <BrowserRouter>
            <ArrowBtn
              linkUrl="/test"
              content="Internal Link"
              className="me-2"
              border
            />
            <ArrowBtn
              linkUrl="www.google.com"
              content="External linkage"
              className="me-2"
              color="#05758f"
              isExternal
            />
            <ArrowBtn
              linkUrl="www.google.com"
              content="External linkage"
              color="green"
              border
            />
          </BrowserRouter>
        </div>
      </main>
      <Footer />
    </div>
  );
};
