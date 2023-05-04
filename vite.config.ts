import solid from "solid-start/vite";
import { defineConfig } from "vite";
import vercel from "solid-start-vercel";
import devtools from 'solid-devtools/vite';

export default defineConfig(() => {
  return {
    plugins: [
      solid({ ssr: true, adapter: vercel({ edge: false }) }),
      devtools({
        locator: {
          targetIDE: 'vscode',
          componentLocation: true,
          jsxLocation: true,
        },
        autoname: true, // e.g. enable autoname
      }),
    ],
    ssr: { external: ["@prisma/client"] },
    test: {
      testTimeout: 60_000,
      hookTimeout: 60_000,
    },
  };
});
  