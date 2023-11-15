import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className="text-gray-500 text-2xl">Hello world from nyongho! This Project was created with NextJS and Yarn Berry.</p>
      <section className="py-5">
      <p className="text-gray-900">I'm so excited to develop this project.</p>
      <p>At the future, I want to Deploy this project to Vercel.</p>
      <p>In this project, I will try something good development habbits, like good git commit conventions or write test code with Jest Library.</p>
      <p>I hope this experiences improve my skills and knowledges, finally i want i can perfectfully control this project.</p>
      </section>
      <p className="mt-5">This is the git commit convention i will use in this project</p>
      <a href="https://velog.io/@msung99/Git-Commit-Message-Convension" target="_blank" className="text-purple-700 font-bold">Link</a>
    </main>
  );
}
