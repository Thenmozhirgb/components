import React from 'react';
import logo from './logo.svg';
import './App.css';
import Classlifecyclemethod from './Classlifecyclemethod';
import Functioncomponentfunctiondeclaration from './Functioncomponentfunctiondeclaration';
import Classcomponentfunctiondeclaration from './Classcomponentfunctiondeclaration';
import Functioncomponentstate from './Functioncomponentstate';
import Classcomponentstate from './Classcomponentstate';
import Functionprops from './Functionprops';
import Classprops from './Classprops';
import Functioncomponentuseeffect from './Functioncomponentuseeffect';
import Functioncomponentupdate from './Functioncomponentupdate';

function App() {
  return (
    <div>
      <Functioncomponentfunctiondeclaration />
      <Classcomponentfunctiondeclaration />
      <Functioncomponentstate />
      <Classcomponentstate />
      <Functionprops />
      <Classprops />
      <Functioncomponentuseeffect />
      <Functioncomponentupdate />
      <Classlifecyclemethod />

    </div>
  );
}

export default App;
