import Link from "next/link";

export default function TutorialPage() {
  return (
    <main className="flex flex-col items-center gap-y-5 pt-10 text-center">
      <h1 className="text-3xl font-bold">How to Use This App</h1>
      <p className="text-lg italic max-w-150">Struggling to find a SWE job? Having trouble sticking to the grind? Well this app is for you! This will help you set and track daily goals to improve your productivity and job search efforts.</p>
      <ol className="list-decimal list-inside max-w-150 space-y-3">
        <li className="text-md">Set daily goals in the <Link className="italic font-semibold" href="/goals">Edit Goals</Link> section!</li>
        <li className="text-md">"Commit" your progress every day on the <Link className="italic font-semibold" href="/">Home Page</Link>!</li>
        <li className="text-md">Check your history to see your progress over time!</li>
      </ol>
    </main>
  );
}