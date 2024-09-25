# seatmap-renderer-react

React wrapper for the https://seatmap.pro js library

## Prerequisites

To use this package, you must have access to Seatmap.pro private npm packages. Please contact us by email [hello@seatmap.pro](mailto:hello@seatmap.pro) to request access.

## How to Use

This React component accepts a `settings` prop similar to the Seatmap.pro pure JavaScript solution. You can find an example [here](https://booking.seatmap.pro/). Once the component is mounted, it returns the renderer instance via the `onInitialized` callback.

Below is an example of how to use the component:

### Example

```jsx
import { SeatmapRenderer } from '@seatmap.pro/react-renderer';

function App() {
  const settings = {
    publicKey: '<public key string value>',
    onSeatMouseEnter: function (seat) {
      console.log('onSeatMouseEnter', seat);
    },
    onSeatDebouncedEnter: function (seat) {
      console.log('onSeatDebouncedEnter', seat);
    },
    onSeatMouseLeave: function () {
      console.log('onSeatMouseLeave');
    },
    onSeatSelect: function (seat) {
      console.log('onSeatSelect', seat);
    },
    onSeatDeselect: function (seat) {
      console.log('onSeatDeselect', seat);
    },
    onCartChange: function (cart) {
      console.log('onCartChange', cart);
    },
    onSectorMouseEnter: function (sector) {
      console.log('onSectorMouseEnter', sector);
    },
    onSectorMouseLeave: function () {
      console.log('onSectorMouseLeave');
    },
    onSectorClick: function (sector) {
      console.log('onSectorClick', sector);
    },
    onBeforeZoom: function (to, from) {
      console.log('onBeforeZoom', to, from);
    },
    onAfterZoom: function (to, from) {
      console.log('onAfterZoom', to, from);
    },
    onPan: function (delta, isEnd) {
      console.log('onPan', delta, isEnd);
    }
  };

  const handleInitialized = (renderer) => {
    renderer.loadEvent('<event id string>');
  };

  return <SeatmapRenderer settings={settings} onInitialized={handleInitialized} />;
}

export default App;
```

Customize the `settings` prop to fit your seatmap solution, and use the `onInitialized` callback to access the renderer instance.
