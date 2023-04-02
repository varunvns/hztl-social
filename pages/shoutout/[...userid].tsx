import CommentForm from "@/components/Comment/CommentForm";
import Hero from "@/components/Hero/Hero";

import { profilehero } from "@/models/marketing/profilehero";
import { useRouter } from "next/router";

function ShoutOutDetailPage() {
  const router = useRouter();
  console.log(router.query.userid);
  const userid = router.query.userid;
  return (
    <>
      <Hero {...profilehero} title="Shoutout Detail Page" />
      <CommentForm commentReceiverID={userid} />
    </>
  );
}

export default ShoutOutDetailPage;
