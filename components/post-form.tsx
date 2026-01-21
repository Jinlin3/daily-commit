import { createPost } from "@/actions/actions";

export default function PostForm() {
  return (
    <>
      <form action={createPost} className="flex flex-col gap-y-2 w-96 mb-10">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="px-2 py-1 rounded-sm bg-white"
          required
        />
        <textarea
          name="content" 
          rows={5}
          placeholder="Content"
          className="px-2 py-1 rounded-sm bg-white"
          required
        />
        <button
          type="submit"
          className="bg-blue-400 rounded-sm py-2 hover:bg-blue-500 text-white cursor-pointer"
        >
          Create Post
        </button>
      </form>
    </>
  );
}