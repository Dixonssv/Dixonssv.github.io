import React, { lazy, Suspense } from 'react';

const LazyDino = lazy(() => import('./Dino'));

const Dino = props => (
  <Suspense fallback={null}>
    <LazyDino {...props} />
  </Suspense>
);

export default Dino;
