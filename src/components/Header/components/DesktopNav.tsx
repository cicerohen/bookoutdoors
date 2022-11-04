export const DesktopNav = () => {
  return (
    <nav className="hidden list-none space-x-1 lg:flex">
      <li>
        <a
          href="#"
          title="Know more about us"
          className="text-sm text-indigo-900 font-semibold rounded-lg px-4 py-3"
        >
          About
        </a>
      </li>
      <li>
        <a
          title="Sign in on your account"
          href="#"
          className="text-sm text-indigo-900 font-semibold rounded-lg px-4 py-3"
        >
          Sign In
        </a>
      </li>
      <li>
        <a
          title="Create your account"
          href="#"
          className="text-sm text-indigo-900 font-semibold rounded-lg px-4 py-3"
        >
          Sign Up
        </a>
      </li>
      <li>
        <a
          title="List your property"
          href="#"
          className="text-sm text-white font-semibold rounded-lg  px-4 py-3 bg-indigo-500"
        >
          List your property
        </a>
      </li>
    </nav>
  );
};
