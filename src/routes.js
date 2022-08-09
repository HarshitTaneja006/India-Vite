import home from "./routes/Home/home.svelte";
import hello from "./routes/Places To Visit.svelte";
import aboutSvelte from "./routes/Home/subs/about.svelte";
import Culture from "./routes/Home/subs/culture.svelte";

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
        name : 'culture',
        component : Culture,
    },

    {
        name : 'Places_To_Visit',
        component : hello,
    },
]

export {routes}