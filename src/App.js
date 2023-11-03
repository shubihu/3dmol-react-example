import React, { useRef, useEffect }from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const containerRef = useRef(null);
  const $3Dmol = window.$3Dmol;

  useEffect(() => {
    const element = containerRef.current;
    if (element) {
      let viewer = $3Dmol.createViewer(element);

      $3Dmol.download("pdb:1MO8", viewer, { multimodel: true, frames: true }, function () {
        viewer.setStyle({}, { cartoon: { color: 'spectrum' } });
        viewer.render();
      });
    }
  }, []);

  // let viewer = $3Dmol.createViewer( element);
  // let pdbMol = viewer.addModel( content, "pdb" );                       
  // pdbMol.setStyle({}, {cartoon: {color: 'spectrum'}}); 
  // viewer.zoomTo();                                        
  // viewer.render();

  return (
    <div className="App">
      <div className="display-box" id="protein-box" ref={containerRef}></div>
    </div>
  );
}

export default App;
