
exports.up = function (knex, Promise) {
    return knex.schema.createTable('strain', (table) => {
        table.increments('id').primary(),
        table.text('name'),
        table.text('type'),
        table.string('image'),
        table.float('price'),
        table.text('description')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('strain')
};