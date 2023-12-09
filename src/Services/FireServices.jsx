import app from '../Services/Firebase'

export function getting(table) {
    return app.firestore().collection(`${table}`).get();
}