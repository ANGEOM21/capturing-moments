import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': resolve(root, 'pages'),
      '@components': resolve(root, 'components'),
      '@assets': resolve(root, 'assets'),
      '@hooks': resolve(root, 'hooks'),
      '@data': resolve(root, 'data'),
      '@types': resolve(root, 'types'),
    }
  }
})
