'use client';

import { useRef, useState } from 'react';
import { CgAttachment } from 'react-icons/cg';

interface ArchiveInputProps {
  label:string;
  name:string;
  sendValue:(value:any) => void;
  description:string;
}

export const ArchiveInput = ({label, sendValue, name, description}: ArchiveInputProps) => {
  const [fileName, setFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      sendValue({
        value: file,
        name: name
      })
    }
  }

  const handleLabelClick = () => {
    fileInputRef.current?.click()
  }

  return(
    <fieldset className="mb-8">
      <div className="app-input" onClick={handleLabelClick}>{label}<CgAttachment /></div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {fileName ? <span className="file-name">{fileName}</span> : <span className="description" >{description}</span>}
    </fieldset>
  )
}