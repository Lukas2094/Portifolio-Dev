import { HomePage } from "@/components/Home";
import { getFeaturedGitHubProjects } from "@/lib/github";
import React from "react";

export const dynamic = 'force-dynamic'; 

export default async function Home() {
  const featuredRepos = await getFeaturedGitHubProjects();

  return <HomePage featuredRepos={featuredRepos} />;
}
