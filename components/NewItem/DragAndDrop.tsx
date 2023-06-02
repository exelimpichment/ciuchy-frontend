import {
  Dispatch,
  DragEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import ImageThumbnail from './ImageThumbnail';
import UploadPhotosButton from './UploadPhotosButton';

function DragAndDrop({
  selectedFiles,
  setSelectedFiles,
}: {
  selectedFiles: File[];
  setSelectedFiles: Dispatch<SetStateAction<File[]>>;
}) {
  const maxFilesNumber = 5;
  const allowedFormats = ['image/jpeg', 'image/png'];
  const [drag, setDrag] = useState<boolean>(false);

  function areFilesUnique(arr: File[]) {
    const names = new Set();
    for (const obj of arr) {
      if (names.has(obj.name)) {
        return false;
      }
      names.add(obj.name);
    }
    return true;
  }

  useEffect(() => {
    if (selectedFiles.length > maxFilesNumber) {
      const fiveItemsList = selectedFiles.slice(0, maxFilesNumber);
      toast.warning('More than 5 files are not allowed');
      setSelectedFiles(fiveItemsList); // Truncate the selected files to the maximum limit
    }

    if (!areFilesUnique(selectedFiles)) {
      const uniqueList = [
        ...new Map(selectedFiles.map((list) => [list['name'], list])).values(),
      ];
      toast.warning('File already uploaded');
      setSelectedFiles(uniqueList);
    }
  }, [selectedFiles, setSelectedFiles]);

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

    let files;
    files = [...e.dataTransfer.files];

    if (files.length > 5) {
      files = files.slice(0, 5); // Truncate the selected files to the maximum limit
    }

    const validFiles = files.filter((file) =>
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
            <UploadPhotosButton
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
            />
          </div>
        )}
      </div>
      <div className="dragAndDropWrapper__thumbnails">
        {selectedFiles.map((file) => (
          <ImageThumbnail
            key={file.name}
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
