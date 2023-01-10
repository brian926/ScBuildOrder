import { type NextPage } from "next";
import Head from "next/head";

// Using API instead of the standard TRPC naming
import { trpc } from "../utils/trpc";
import { useState } from "react";
import { useRouter } from "next/router"
import { buildTypes } from "./races/[raceName]/match-ups/[opponentRace]";

const SubmitBuildPage: NextPage = () => {
  const createBuildMutation = trpc.builds.createBuild.useMutation()
  
  const [build, setOrder] = useState("")
  const [matchUp, setMatchUp] = useState("zvt")
  const router = useRouter()
  const [style, setStyle] = useState("Macro")
  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  async function handleSubmitBuildOrder(e: React.FormEvent) {
    e.preventDefault()
    await createBuildMutation.mutateAsync({
      matchUp,
      build,
      style,
      title,
      description,
      author,
    })
    router.push("/")
  }

  return (
    <>
      <Head>
        <title>Submit a build Build</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 pb-12 pt-12 text-black dark:bg-gray-800 dark:text-white">
        <h1 className="text-4xl">Submit a Build Order</h1>
        <form className="flex w-full flex-col items-center gap-4" onSubmit={handleSubmitBuildOrder}>
          <div className="grid grid-cols-2">
            <fieldset>
              <label htmlFor="match-up-select" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Match Up</label>

              <select 
                className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={matchUp} 
                onChange={(e) => setMatchUp(e.target.value)}
                id="match-up-select" 
                required
              >
                <option value="zvt">ZvT</option>
                <option value="zvp">ZvP</option>
                <option value="zvz">ZvZ</option>

                <option value="pvt">PvT</option>
                <option value="pvp">PvP</option>
                <option value="pvz">PvZ</option>

                <option value="tvt">TvT</option>
                <option value="tvp">TvP</option>
                <option value="tvz">TvZ</option>
              </select>
            </fieldset>
            
            <fieldset>
              <label
                htmlFor="style"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Style
              </label>
              <select
                className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                id="style"
                required
              >
                {buildTypes.map((buildType) => (
                  <option key={buildType} value={buildType}>
                    {buildType}
                  </option>
                ))}
              </select>
            </fieldset>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <fieldset>
              <label
                htmlFor="author"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Author
              </label>

              <input
                id="author"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>

              <input
                id="title"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </fieldset>
          </div>

          <fieldset className="w-3/4">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>

            <textarea
              id="description"
              className="h-[140px] w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </fieldset>

          <fieldset className="w-3/4">
              <label
                htmlFor="build"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Build Order
              </label>
            <textarea 
              required
              className="h-[400px] w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={build}
              onChange={(e) => setOrder(e.target.value)}
            />
          </fieldset>

          
          <button className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default SubmitBuildPage;
