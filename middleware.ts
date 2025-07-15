import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define as rotas públicas que não exigem autenticação.
// Liste todas as rotas que estão dentro do seu grupo (auth) e que não devem ser protegidas.
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',       // Ex: app/(auth)/login/page.tsx
  '/sign-up(.*)',      // Ex: app/(auth)/signup/page.tsx
  // '/forgot-password', // Ex: app/(auth)/forgot-password/page.tsx (se você tiver)
  // '/reset-password',  // Ex: app/(auth)/reset-password/page.tsx (se você tiver)
  // Adicione outras rotas públicas do seu grupo (auth) aqui, se houver
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req))  auth.protect();
});

export const config = {
  matcher: [
    // Isso garante que o middleware seja executado para todas as rotas,
    // exceto as internas do Next.js e arquivos estáticos,
    // permitindo que a lógica acima controle as permissões.
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Garante que o middleware seja executado para rotas de API
    '/(api|trpc)(.*)',
  ],
};