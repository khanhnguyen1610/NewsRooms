import config from "../config";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import SingleNews from "../pages/SingleNews/SingleNews";
import Contact from "../pages/Contact/Contact";
import singleNewsDetail from "../pages/SingleNewDetail/singleNewsDetail";

const publicRoutes = [
    {path: config.routes.home, component: Home },
    {path: config.routes.categories, component: Categories },
    {path: `${config.routes.singleNewsDetail}/:id`, component: singleNewsDetail },
    {path: config.routes.singleNews, component: SingleNews },
    {path: config.routes.contact, component: Contact },
]

export { publicRoutes }; 