exports.seed = function (knex, Promise) {
  return knex("strain").del().then(() => {
    return knex("strain").insert([{
      id: 1,
      name: 'Weed 1',
      type: 'sativa',
      image: 'img1.jpg',
      price: '9.99',
      description: 'this is a sativa',
    },
    {
      id: 2,
      name: 'Weed 2',
      type: 'indica',
      image: 'img2.jpg',
      price: '10.99',
      description: 'this is an indica',
    },
    {
      id: 3,
      name: 'Weed 3',
      type: 'hybrid',
      image: 'img3.jpg',
      price: '11.99',
      description: 'this is a hybrid',
    }
    ]);
  }).then(() => {
    return knex.raw("ALTER SEQUENCE strain_id_seq RESTART WITH 4;");
  });
};