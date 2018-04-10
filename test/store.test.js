const assert = require('assert');
const Stores = require('../lib/store');

describe('store memory database', () => {

    it('saves store', () => {
        const store = new Stores();
        const toSave = store.save({ name: 'Ralphs', type: 'grocery' });
        assert.ok(toSave._id);

    });

    it('get id', () => {
        const store = new Stores();
        const ralphs = store.save({ name: 'Ralphs', type: 'grocery' });
        const macys = store.save({ name: 'Macys', type: 'clothing' });
        const id = store.getId(ralphs._id);
        assert.deepEqual(id, ralphs);
    });

    it('get all objects', () => {
        const store = new Stores();
        const ralphs = store.save({ name: 'Ralphs', type: 'grocery' });
        const macys = store.save({ name: 'Macys', type: 'clothing' });
        const all = store.getAll();
        assert.deepEqual(all, [ralphs, macys]);
    });


    it('remove false', () => {
        const store = new Stores();
        const ralphs = store.save({ name: 'Ralphs', type: 'grocery', _id: '()' });
        const macys = store.save({ name: 'Macys', type: 'clothing', _id:'()' });
        const removed = store.remove('2');
        assert.deepEqual(removed, { removed: false });
    });
}); 