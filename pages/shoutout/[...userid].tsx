import CommentForm from "@/components/Comment/CommentForm";
import { useRouter } from "next/router";

function ShoutOutDetailPage() {
  const router = useRouter();
  console.log(router.query.userid);
  const userid = router.query.userid;
  return (
    <>
      <CommentForm commentReceiverID={userid} />
    </>
  );
}

export default ShoutOutDetailPage;
