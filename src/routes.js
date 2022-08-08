import home from "./routes/Home/home.svelte";
import hello from "./routes/Places To Visit.svelte";
import aboutSvelte from "./routes/Home/subs/about.svelte";

const routes = [
    {
        name : '/',
        component: home,
    },

    {
        name : 'about',
        component : aboutSvelte,
    },

    {
        name : 'Places_To_Visit',
        component : hello,
    },
]

export {routes}