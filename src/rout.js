import Home from './comp/Home';
import About from './comp/About';
import  Info from './comp/Info';
export const rout =[
    {
        path:"/",
        isExact: true,
        component: Home
    },
    {
        path:"/about",
        isExact: true,
        component:About
    },
    {
        path:"/info",
        component: Info
    }
    
]