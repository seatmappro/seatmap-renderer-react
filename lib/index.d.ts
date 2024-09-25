import { IBookingRendererSettings, SeatmapBookingRenderer } from '@seatmap.pro/booking-renderer';
import React from 'react';

interface ISeatmapContainerProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
}
interface SeatmapRendererProps extends ISeatmapContainerProps {
    settings: IBookingRendererSettings;
    onInitialized: (renderer: SeatmapBookingRenderer) => void | Promise<void>;
}
declare const SeatmapRenderer: React.FC<SeatmapRendererProps>;

export { SeatmapRenderer };
