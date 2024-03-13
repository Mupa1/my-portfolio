import { useState, useCallback } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { Document, Page, pdfjs } from 'react-pdf';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { IconButton } from '@mui/material';
import { IComponentProps } from '../../entities/types';
import resume from '../../assets/resume.pdf';
import useStyles from './Resume.styles';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const Resume: React.FC = ({ props }: IComponentProps) => {
  const classes = useStyles(props);
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const resizeObserverOptions = {};
  const maxWidth = 800;

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.setAttribute('download', 'MupaNzaphilaResume.pdf');

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <section className={classes.root} ref={setContainerRef}>
      <IconButton
        edge='end'
        arial-label='download'
        aria-haspopup='true'
        onClick={downloadPdf}
        className={classes.download}
      >
        <DownloadForOfflineIcon fontSize='large' />
      </IconButton>
      <Document file={resume} className={classes.pdf}>
        <Page
          pageNumber={1}
          width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
        />
      </Document>
    </section>
  );
};

export default Resume;