import React from 'react';
const Button = React.lazy(() => import('MicroFrontend/Button'));

export default function App() {
  return (
    <div>
      Shell App
      <Button ButtonName="Click here"/>
    </div>
  )
}
