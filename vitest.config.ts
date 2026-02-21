import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: ['packages/adapter-d1', 'packages/adapter-libsql'],
    reporters: process.env.CI === 'true' ? ['default', ['junit', { outputFile: './junit.xml' }]] : ['default'],
  },
})
