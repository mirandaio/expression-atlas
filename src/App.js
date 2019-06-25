import React from 'react';
import ExpressionAtlasHeatmap from 'expression-atlas-heatmap-highcharts';
import './App.css';

function App() {
  return (
    <div className="App">
    <ExpressionAtlasHeatmap query={{species: 'homo sapiens', gene: 'ENSG00000091831'}}/>
    </div>
  );
}

export default App;
