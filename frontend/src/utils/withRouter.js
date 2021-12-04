import {useParams} from "react-router-dom"
export function withRouter (Child) {
    return (props) => {
        const id = useParams();
        return(
            <Child {...props} params={id}/>
        )
    }
}