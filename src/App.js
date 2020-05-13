import React from 'react';

const IAmLazy = React.lazy(() => import("./IAmLazy"))

function App() {
  return (
    <React.Suspense fallback={null}>
      <div style={{display: "flex"}}>
        <IAmLazy />
      </div>
    </React.Suspense>
  );
}

export default App;
