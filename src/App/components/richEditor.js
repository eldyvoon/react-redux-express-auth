import React from 'react'

import 'froala-editor/js/froala_editor.pkgd.min.js'

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'

// Require Font Awesome.
import 'font-awesome-webpack'

import FroalaEditor from 'react-froala-wysiwyg'

const FroalaEditorComponent = ({body, modelChange, height, disable}) => {

  let config = {
    placeholderText: null,
    toolbarButtons: ['bold', 'italic', 'paragraphFormat','align','insertImage', 'insertLink', 'insertTable', 'fullscreen'],
    imageEditButtons: ['imageAlt', 'imageSize', 'imageAlign', 'imageDisplay', 'imageRemove'],
    imageDefaultAlign: 'left',
    imageDefaultDisplay: 'block',
    imageAllowedTypes: ['jpeg', 'jpg', 'png'],
    imageUploadURL: 'http://localhost:3001/api/upload-image',
    linkList: [],
    paragraphFormat: {
      N: 'Normal',
      H2: 'Heading 2',
      H3: 'Heading 3'
    },
    height: height
  }

  if(disable) {
    config.events = {
      'froalaEditor.initialized' : function(e, editor) {
        editor.edit.off()
      }
    }
  }

  return(
    <FroalaEditor 
      model={body} 
      onModelChange={modelChange} 
      config={config} 
    />
  )
}

export default FroalaEditorComponent
