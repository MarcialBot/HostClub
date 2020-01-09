const events = [
    {event: `Party at Khris's House`, done: true},
    {event: `Party at Khris's House`, done: true},
    {event: `Party at Khris's House`, done: false},
    {event: `Party at Khris's House`, done: true},
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getOne(id) {
    return events[id];
}

function getAll() {
    return events;
}

function create(event) {
    events.push(event);
}

function deleteOne(id) {
    events.splice(id, 1);
}