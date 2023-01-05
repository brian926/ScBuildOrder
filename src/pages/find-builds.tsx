import React from "react";
import Head from "next/head"
import Link from "next/link"

const FindBuilds: NextPage = () => {
    return (
        <>
        <Head>
          <title>Create T3 App</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex gap-6 min-h-screen flex-col items-center justify-center text-black dark:bg-gray-800 dark:text-white">
          <h1>Weclome to SC2 Build Order Manager</h1>
  
          <Link href="/submit-build">Submit a new Build</Link>
          <Link href="/builds">View Builds</Link>
        </main>
      </>
    )
}

export default FindBuilds