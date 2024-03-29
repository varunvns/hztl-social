import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const MainNavigation: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);
  function logoutHandler() {
    signOut({
      redirect: false,
    });
    router.replace("/");
  }
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          <span>Horizontal</span> Social
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            {session && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" href="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/shoutout">
                    Shout out
                  </Link>
                </li>
              </>
            )}
            {session && (
              <li className="nav-item">
                <button style={{ margin: "25px 20px" }} onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
