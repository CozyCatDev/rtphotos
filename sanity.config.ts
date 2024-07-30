import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

const config = defineConfig({
    projectId: 'bg7jylyc',
    dataset: 'production',
    title: 'rtphotos',
    apiVersion: '2024-07-30',
    basePath: '/admin', // path for Sanity studio
    plugins: [structureTool()],
    schema: {}
})

export default config