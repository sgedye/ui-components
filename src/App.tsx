import { Images } from "./components";
import { Header, Footer } from "./ui";

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
        </div>
      </main>
      <Footer />
    </div>
  );
};
