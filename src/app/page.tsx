import { addTask } from "@/actions";
import prisma from "@/lib/db";

export default async function Home() {
  const tasks = await prisma.task.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      <h1 className="text-3xl font-medium">All tasks:</h1>

      <ul className="my-2 text-center">
        {tasks.map((task: any) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <form action={addTask} className="space-x-2 h-4">
        <input type="text" name="title" className="px-3 py-1 rounded text-black" />
        <button type="submit" className="bg-blue-500 px-3 py-1 text-white rounded">Add task</button>
      </form>

    </main>
  );
}
