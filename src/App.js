import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadPicture from './comps/UploadPicture'

function App() {

  const [selectedImg, setSelectedImg] = useState("")

  return (
    <div className="App">
      <Title/>
      <UploadPicture />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
