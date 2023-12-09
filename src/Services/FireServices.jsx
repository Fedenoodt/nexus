import firebase from '../Services/Firebase'

export function getting(table) {
    return firebase.firestore().collection(`${table}`).get();
}