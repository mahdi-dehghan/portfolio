import { useState, useEffect, useCallback } from 'react';

export interface RouteState {
  path: string;
  projectSlug: string | null;
  section: string | null;
}

export function useHashRoute() {
  const parseHash = (): RouteState => {
    const raw = window.location.hash.replace(/^#\/?/, '');
    if (!raw) {
      return { path: '/', projectSlug: null, section: null };
    }

    // Handles #/project/:slug or #project/:slug
    if (raw.startsWith('project/')) {
      const slug = raw.replace('project/', '').split('?')[0].split('/')[0];
      return { path: `/project/${slug}`, projectSlug: slug, section: null };
    }

    // Handles #work, #about, #services, #contact
    return { path: `/${raw}`, projectSlug: null, section: raw };
  };

  const [route, setRoute] = useState<RouteState>(parseHash);

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = parseHash();
      setRoute(newRoute);

      // Scroll handling
      if (!newRoute.projectSlug && newRoute.section) {
        const el = document.getElementById(newRoute.section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (!newRoute.projectSlug) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToProject = useCallback((slug: string) => {
    window.location.hash = `/project/${slug}`;
  }, []);

  const navigateToHome = useCallback((section?: string) => {
    if (section) {
      window.location.hash = `/${section}`;
    } else {
      window.location.hash = '/';
    }
  }, []);

  return {
    route,
    navigateToProject,
    navigateToHome,
    isDetailOpen: Boolean(route.projectSlug),
    currentSlug: route.projectSlug,
  };
}
