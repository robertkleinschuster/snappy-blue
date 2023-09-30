import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  banner: {
    js: "'use client'",
  },
  esbuildOptions(esbuildOptions) {
    esbuildOptions.external = [
        '@nextui-org/react',
    ];
  },
  loader: {
    '.ttf': 'file'
  },
  ...options,
}));
