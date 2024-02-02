import React, { useMemo, ComponentType } from 'react';
import { useLocation } from 'react-router-dom';

export interface UseRenderHashViewProps {
  defaultView: ComponentType;
  documentationView: ComponentType;
  playgroundView: ComponentType;
}

export const useRenderHashView = ({
  defaultView: DefaultView,
  documentationView: DocumentationView,
  playgroundView: PlaygroundView,
}: UseRenderHashViewProps) => {
  const { hash } = useLocation();

  const renderHashView = useMemo(() => {
    switch (hash) {
      case '#documentation':
        return <DocumentationView />;

      case '#playground':
        return <PlaygroundView />;

      case undefined:
      default:
        return <DefaultView />;
    }
  }, [hash]);

  return { renderHashView };
};
