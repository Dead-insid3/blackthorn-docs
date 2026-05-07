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
        { label: 'Índice', link: '/indice/' },
        { label: 'LORE',
          items: [
           { label: 'Fundação', link: '/lore/historia/fundacao/' },
          ] 
        },
        { label: 'REGRAS GERAIS',
          items: [ 
          { label: 'Avisos Importantes', link: '/regras/' },
          { label: 'Regras Gerais', link: '/regras/geral/'},
          { label: 'Regras Discord', link: '/regras/geral/discord/'},
          { label: 'Regras de Roleplay', link: '/regras/geral/roleplay/'},
          { label: 'Regras para PEDs e RP de Animais', link: '/regras/geral/peds/'},
          { label: 'Regras para Streamers e Influencers', link: '/regras/geral/streamers/'},
           ] },
        {
          label: 'REGRAS ESPECÍFICAS',
          items: [        
            { label: 'Hospital', link: '/regras/hospital/' },
            { label: 'Polícia', link: '/regras/policia/' },
            { label: 'Eventos', link: '/regras/eventos/' },
            { label: 'Doações & Exclusivos', link: '/regras/doacoes/' },
            
          ],
        },
      ],
    }),
  ],
});