/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {
      id: 1,
      title: 'The Fantastic Adventures of Mr Moisty & The Boys',
      image:
        'https://cdn.vox-cdn.com/thumbor/L7N7MCfmXOfKzCpJU-xQBi-9hFA=/0x0:3000x2000/1570x883/filters:focal(1230x515:1710x995):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69303818/Shrek2.0.jpg',
      rating: 3,
    },
    {
      id: 2,
      title: 'The Fantastic Adventures of Mr Moisty & The Boys II',
      image:
        'https://cdn.vox-cdn.com/thumbor/L7N7MCfmXOfKzCpJU-xQBi-9hFA=/0x0:3000x2000/1570x883/filters:focal(1230x515:1710x995):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69303818/Shrek2.0.jpg',
      rating: 6,
    },
    {
      id: 3,
      title: 'The Fantastic Adventures of Mr Moisty & The Boys III',
      image:
        'https://cdn.vox-cdn.com/thumbor/L7N7MCfmXOfKzCpJU-xQBi-9hFA=/0x0:3000x2000/1570x883/filters:focal(1230x515:1710x995):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69303818/Shrek2.0.jpg',
      rating: 9,
    },
    {
      id: 4,
      title: 'The Fantastic Adventures of Mr Moisty & The Boys IV',
      image:
        'https://cdn.vox-cdn.com/thumbor/L7N7MCfmXOfKzCpJU-xQBi-9hFA=/0x0:3000x2000/1570x883/filters:focal(1230x515:1710x995):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69303818/Shrek2.0.jpg',
      rating: 7,
    },
  ])
}
