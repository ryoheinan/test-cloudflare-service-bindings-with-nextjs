import type { Fetcher } from "@cloudflare/workers-types";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVICE: Fetcher;
    }
  }
}
