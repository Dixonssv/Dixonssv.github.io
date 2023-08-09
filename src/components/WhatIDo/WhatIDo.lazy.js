import React, { lazy, Suspense } from 'react';

const LazyWhatIDo = lazy(() => import('./WhatIDo'));

const WhatIDo = props => (
  <Suspense fallback={null}>
    <LazyWhatIDo {...props} />
  </Suspense>
);

export default WhatIDo;
