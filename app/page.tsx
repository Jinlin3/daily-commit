import { createPost } from '@/actions/actions';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { auth } from '@/auth';
import PostForm from '@/components/post-form';

export default async function Home() {

  const session = await auth();
  const email = session?.user?.email;
  const name = session?.user?.name;
  const display = name ? name : email;

  // Allows the author's email to be fetched along with posts
  const allPosts = await prisma.post.findMany({
    include: {
      author: {
        select: {
          email: true,
          name: true,
        }
      }
    }
  });

  // total number of posts in the database
  const postsCount = await prisma.post.count();

  return (
    <main className="flex flex-col items-center gap-y-5 pt-10 text-center">

      <h1 className="text-3xl font-semibold">All Posts ({postsCount})</h1>

      <div className="border-t border-b border-black/10 grid grid-cols-3 gap-x-10 gap-y-10 mb-5 p-5 min-w-4xl min-h-80">
        {allPosts && allPosts.map((post) => (
          <Link href={`/${post.slug}`} key={post.id} className="p-5 bg-white rounded-2xl flex flex-col items-center justify-center hover:shadow-md min-h-40">
            <div className="font-semibold">{post.title}</div>
            <div className="italic">by {post.author.name ?? post.author.email ?? "Anonymous"}</div>
          </Link>
        ))}
      </div>

      {email ? (
        <PostForm />
      ) : (
        <div className="text-lg italic">Sign in to create a post.</div>
      )}
      
    </main>
  );
}