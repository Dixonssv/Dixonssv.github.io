import React, { lazy, Suspense } from 'react';

const LazyGitHubButton = lazy(() => import('./GitHubButton'));

const GitHubButton = props => (
  <Suspense fallback={null}>
    <LazyGitHubButton {...props} />
  </Suspense>
);

export default GitHubButton;
