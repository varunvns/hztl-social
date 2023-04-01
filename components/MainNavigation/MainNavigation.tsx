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
    <header className={classes.header}>
      <Link href="/" legacyBehavior>
        <a>
          <div className={classes.logo}>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          {!session && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
