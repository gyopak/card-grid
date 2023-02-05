const BASE_URL = 'rgba(0, 0, 0, .45) url("https://picsum.photos/id/';

// simple mock to grab darkened filler pictures by id and size
export default (id, page, size) => (
  size?.width && size?.height && `${BASE_URL}${10 * (page + 1) + id}/${size?.width}/${size?.height}")`
);
