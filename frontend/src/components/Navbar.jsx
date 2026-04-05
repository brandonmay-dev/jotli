import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-200">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary tracking-tight">
            Jotli
          </h1>

          <Link to="/create" className="btn btn-primary">
            <PlusIcon className="size-4" />
            <span>Create Note</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
