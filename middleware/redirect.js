export default function ({ route, redirect }) {
    if (route.fullPath === "/yogacmexa") {
        return redirect('/yogacmexa/history')
    }

    if (route.fullPath === "/services") {
        return redirect('/services/group')
    }

    if (route.fullPath === "/club") {
        return redirect('/club/about')
    }

    if (route.fullPath === "/services/for-business") {
        return redirect('/services/for-business/trainings')
    }
}