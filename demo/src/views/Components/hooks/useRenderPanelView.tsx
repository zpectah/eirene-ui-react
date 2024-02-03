import React, { useMemo, ComponentType } from 'react';
import { useParams } from 'react-router-dom';

export interface UseRenderHashViewProps {
  defaultView: ComponentType;
  apiView: ComponentType;
  playgroundView: ComponentType;
}

export const useRenderPanelView = ({
  defaultView: DefaultView,
  apiView: ApiView,
  playgroundView: PlaygroundView,
}: UseRenderHashViewProps) => {
  const { panel } = useParams();

  const renderHashView = useMemo(() => {
    switch (panel) {
      case 'api':
        return <ApiView />;

      case 'playground':
        return <PlaygroundView />;

      case undefined:
      default:
        return <DefaultView />;
    }
  }, [panel]);

  return { renderHashView };
};
