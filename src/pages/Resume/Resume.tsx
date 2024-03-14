import { useState, useEffect, useCallback } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { Document, Page, pdfjs } from 'react-pdf';
import DownloadIcon from '@mui/icons-material/Download';
import { IconButton, Tooltip } from '@mui/material';
import { IComponentProps } from '../../entities/types';
import useStyles from './Resume.styles';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume: React.FC = ({ props }: IComponentProps) => {
  const classes = useStyles(props);
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();
  const [showDownloadButton, setShowDownloadButton] = useState<boolean>(false);

  const resizeObserverOptions = {};
  const maxWidth = 800;

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  const handleOnLoadSuccess = () => {
    setShowDownloadButton(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={classes.root} ref={setContainerRef}>
      {showDownloadButton && (
        <Tooltip title='Download' placement='bottom'>
          <a
            href='./resume.pdf'
            download='MupaNzaphilaResume.pdf'
            className={classes.download}
          >
            <IconButton arial-label='download'>
              <DownloadIcon fontSize='medium' />
            </IconButton>
          </a>
        </Tooltip>
      )}
      <Document
        className={classes.document}
        file='./resume.pdf'
        onLoadSuccess={handleOnLoadSuccess}
      >
        <Page
          pageNumber={1}
          width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
        />
      </Document>
    </section>
  );
};

export default Resume;
