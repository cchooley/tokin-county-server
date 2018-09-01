const database = require('../database-connection')

module.exports = {
    list() {
        return database('strain').select()
    },
    read(id) {
        return database('strain').select().where('id', id).first()
    },
    create(strain) {
        return database('strain').insert(strain).returning('*').then(record => record[0])
    },
    update(id, strain) {
        return database('strain').where('id', id).update(strain, '*').then(record => record[0])
    },
    delete(id) {
        return database('strain').where('id', id).del()
    }
}