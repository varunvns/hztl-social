import AuthForm from "@/components/Auth/AuthForm";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

function AuthPage() {
  const router = useRouter();
  const [isLoading, SetIsLoading] = useState(true);
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/profile");
      }else{
        SetIsLoading(false);
      }
    });
  }, []);
  if(isLoading){
    return <p>Loading....</p>
  }
  return <AuthForm />;
}

export default AuthPage;
