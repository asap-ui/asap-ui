export interface SkeletonProps {
  loading?: boolean;
  title?: boolean;
  card?: boolean;
  avatar?: boolean;
  fullscreen?: boolean;
  fullscreenZIndex?: number | string;
  titleWidth?: number | string;
  cardHeight?: number | string;
  avatarSize?: number | string;
  rows?: number | string;
  rowsWidth?: number[] | string[];
}

export const defaultProps: SkeletonProps = {
  loading: true,
  title: false,
  card: false,
  avatar: false,
  fullscreen: false,
  fullscreenZIndex: 100,
  titleWidth: '50%',
  cardHeight: '160px',
  avatarSize: '34px',
  rows: 3,
  rowsWidth: [],
};
