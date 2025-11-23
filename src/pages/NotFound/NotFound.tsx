import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export const NotFound = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6 max-w-md text-center px-6">
        <h1 className="font-aeonik font-bold text-[#5d4bff] text-6xl">404</h1>

        <div className="flex flex-col gap-2">
          <h2 className="font-aeonik font-medium text-[#5d4bff] text-2xl">
            Page Not Found
          </h2>
          <p className="font-aeonik text-gray-2 text-base">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Button
          onClick={() => navigate("/")}
          className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#5d4bff] rounded-lg hover:bg-[#4d3bef]"
        >
          <span className="font-neuebit text-white text-sm">
            GO TO DASHBOARD
          </span>
        </Button>
      </div>
    </div>
  );
};
