import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Blackthorn Valley',
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        { label: 'Bem Vindo (a) !', link: '/' },
        {
          label: 'BLACKTHORN ESSENTIALS',
          items: [
            { label: 'Lore', link: '/lore/historia/' },
            { label: 'Regras', link: '/regras/' },
          ],
        },
        { label: 'Hospital', link: '/regras/hospital/' },
        { label: 'Polícia', link: '/regras/policia/' },
        { label: 'Eventos', link: '/regras/eventos/' },
        { label: 'Doações & Exclusivos', link: '/regras/doacoes/' },
      ],
    }),
  ],
});