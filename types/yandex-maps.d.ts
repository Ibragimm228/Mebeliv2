declare namespace ymaps {
  function ready(callback: () => void): void;

  class Map {
    constructor(element: string | HTMLElement, options: MapOptions);
    geoObjects: GeoObjects;
    behaviors: Behaviors;
  }

  class Placemark {
    constructor(
      coordinates: number[],
      properties: PlacemarkProperties,
      options: PlacemarkOptions
    );
  }

  interface MapOptions {
    center: number[];
    zoom: number;
  }

  interface GeoObjects {
    add(object: Placemark): void;
  }

  interface Behaviors {
    disable(behavior: string): void;
  }

  interface PlacemarkProperties {
    balloonContent?: string;
    hintContent?: string;
  }

  interface PlacemarkOptions {
    preset: string;
  }
} 