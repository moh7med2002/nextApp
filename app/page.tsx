import getPosts from "@/lib/getPosts"
import Posts from "./components/Posts";

export default async function Home() {
  const postsRequest : Promise<Blogpost[]> = getPosts();
  const posts = await postsRequest;
  return (
    <main className="">
      <Posts posts={posts}/>
    </main>
  )
}
