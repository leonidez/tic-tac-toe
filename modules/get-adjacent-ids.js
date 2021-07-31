export default function getAdjacentIds(ids) {
  return ids.map((id) => ([
    (id % 10 !== 0) && id - 11,
    id - 10,
    (id % 10 !== 9) && id - 9,
    (id % 10 !== 0) && id - 1,
    id,
    (id % 10 !== 9) && id + 1,
    (id % 10 !== 0) && id + 9,
    id + 10,
    (id % 10 !== 9) && id + 11,
  ].filter((id) => id !== false)))
}