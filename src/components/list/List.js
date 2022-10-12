import {Link} from "react-router-dom";
import "./List.css"

const List = (props) => {
    const {items, title} = props
    return (
        <div className="w-1/4">
            <h3 className="pb-3">{title}</h3>
            <ul className=" flex flex-col flex-nowrap gap-1 m-0 p-0">
                {
                    items && items.map((item, index) =>
                        <ListItem key={index} {...item}/>
                    )
                }
            </ul>
        </div>
    )
}

const ListItem = (props) => {
    let route = props.route || "not-available-now"
    let name = props.name || props
    return (
        <li>
            <Link className="hover:text-asheh-kok hover:underline" to={route}>
                {name}
            </Link>
        </li>
    )
}

export default List