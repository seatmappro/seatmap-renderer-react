import { SeatmapBookingRenderer, IBookingRendererSettings } from '@seatmap.pro/booking-renderer';
import React, { useEffect, useRef } from 'react';

interface ISeatmapContainerProps
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'ref'
  > {}
interface SeatmapRendererProps extends ISeatmapContainerProps {
  settings: IBookingRendererSettings;
  onInitialized: (renderer: SeatmapBookingRenderer) => void | Promise<void>;
}

export const SeatmapRenderer: React.FC<SeatmapRendererProps> = (props) => {
  const { settings, onInitialized, ...rest } = props;
  const seatmapRenderer = useRef<SeatmapBookingRenderer | null>(null);
  const seatmapRefContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!seatmapRefContainer.current) return;

    seatmapRenderer.current = new SeatmapBookingRenderer(
      seatmapRefContainer.current as unknown as HTMLElement,
      settings
    );

    onInitialized(seatmapRenderer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div {...rest} ref={seatmapRefContainer}></div>;
};
