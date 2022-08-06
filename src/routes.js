import home from "./routes/home.svelte";
import hello from "./routes/Places To Visit.svelte";

const routes = [
    {
        name : '/',
        component : home,
    },
    {
        name : 'Places_To_Visit',
        component : hello,
    },
]

export {routes}