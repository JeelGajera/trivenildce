import { createGitHubReader } from "@keystatic/core/reader/github";
import config from "@/keystatic.config";

export const reader = createGitHubReader(config, {
  repo: "mdhruvil/triveni",
});
