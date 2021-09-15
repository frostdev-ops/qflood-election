import classnames from 'classnames';
import {FC, memo} from 'react';

interface DiskProps {
  className?: string;
}

const Disk: FC<DiskProps> = memo(({className}: DiskProps) => (
  <svg className={classnames('icon', 'icon--disk', className)} viewBox="0 0 60 60">
    <path d="M40.57,42.43a3.11,3.11,0,1,0-3.11,3.11A3.12,3.12,0,0,0,40.57,42.43Zm9.95,0a3.11,3.11,0,1,0-3.11,3.11A3.12,3.12,0,0,0,50.51,42.43Zm4.35,6.22a1.28,1.28,0,0,1-1.24,1.24H6.38a1.28,1.28,0,0,1-1.24-1.24V36.22A1.28,1.28,0,0,1,6.38,35H53.62a1.28,1.28,0,0,1,1.24,1.24V48.65ZM7.08,30l6.1-18.73a1.77,1.77,0,0,1,1.63-1.17H45.19a1.77,1.77,0,0,1,1.63,1.17L52.92,30H7.08Zm52.76,6.22a9.28,9.28,0,0,0-.62-2.91L51.56,9.76a6.77,6.77,0,0,0-6.37-4.62H14.81A6.77,6.77,0,0,0,8.44,9.76L0.78,33.3a9.31,9.31,0,0,0-.62,2.91V48.65a6.23,6.23,0,0,0,6.22,6.22H53.62a6.24,6.24,0,0,0,6.22-6.22V36.22Z" />
  </svg>
));

Disk.defaultProps = {
  className: undefined,
};

export default Disk;
