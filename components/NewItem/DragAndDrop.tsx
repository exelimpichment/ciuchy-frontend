import { DragEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ImageThumbnail from './ImageThumbnail';
import UploadPhotosButton from './UploadPhotosButton';

function DragAndDrop() {
  const maxFilesNumber = 5;
  const allowedFormats = ['image/jpeg', 'image/png'];
  const [drag, setDrag] = useState<boolean>(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  useEffect(() => {
    if (selectedFiles.length > maxFilesNumber) {
      setSelectedFiles(selectedFiles.slice(0, maxFilesNumber)); // Truncate the selected files to the maximum limit
    }

    console.log(selectedFiles);
  }, [selectedFiles]);

  const dragStartHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
    const files = [...e.dataTransfer.files];

    let fileList = Array.from(files);

    if (fileList.length > 5) {
      fileList = fileList.slice(0, 5); // Truncate the selected files to the maximum limit
    }

    const validFiles = fileList.filter((file) =>
      allowedFormats.includes(file.type)
    );

    setSelectedFiles([...selectedFiles, ...validFiles]);
  };

  const previewFile = (file: File): string => {
    return URL.createObjectURL(file);
  };

  const deleteThumbnail = (thumbnail: string) => {
    const filteredFiles = selectedFiles.filter((file) => {
      return file.name !== thumbnail;
    });
    setSelectedFiles(filteredFiles);
  };

  return (
    <DragAndDropWrapper>
      <div className="dragAndDropWrapper__inner">
        {drag ? (
          <div
            className="dragAndDropWrapper__drop-field"
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            onDrop={(e) => onDropHandler(e)}
          >
            <p className="dragAndDropWrapper__text">Drop your photos here</p>
          </div>
        ) : (
          <div
            className="dragAndDropWrapper__drag-field"
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
          >
            <UploadPhotosButton />
          </div>
        )}
      </div>
      <div className="dragAndDropWrapper__thumbnails">
        {selectedFiles.map((file) => (
          <ImageThumbnail
            key={uuidv4()}
            url={previewFile(file)}
            fileName={file.name}
            deleteThumbnail={deleteThumbnail}
          />
        ))}
      </div>
    </DragAndDropWrapper>
  );
}

export default DragAndDrop;

const DragAndDropWrapper = styled.div`
  .dragAndDropWrapper__inner {
    padding: 2rem;
  }

  .dragAndDropWrapper__drag-field {
    border: 1px dashed #c45f55;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dragAndDropWrapper__drop-field {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed #c45f55;
    min-height: 200px;
    font-size: 1.8rem;
    color: rgb(117, 117, 117);
  }

  .dragAndDropWrapper__thumbnails {
    padding: 0 2rem 0 2rem;
    display: flex;
    align-items: center;
  }
`;
