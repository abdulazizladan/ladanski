import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'products/product/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'blog/post/:id',
    renderMode: RenderMode.Server,
  }
];
