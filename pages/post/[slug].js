export async function getServerSideProps(context) {
  const url = 'http://localhost:3000/';
  const slug = context.query.slug;

  const res = await fetch(url + `posts?slug=${slug}`);
  const data = await res.json();
  const post = data.length > 0 ? data[0] : null;
   let output = {
    props: {
      post,
    },
  };

  // const posts = await Axios.get(url + `posts?slug=${slug}`);  
  // const post = posts.data.length > 0 ? posts.data[0] : null;
  // let output = {
  //   props: {
  //     post: post,
  //   },
  // };

  if (!post) {
    context.res.statusCode = 404;
    return output;
  }

  const comments = await Axios.get(url + `comments?post=${ post.id }`);
  return output.props.comments = comments.data.length > 0 ? comments.data : null;

  //return output;
}
