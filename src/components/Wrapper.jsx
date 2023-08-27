/* eslint-disable react/prop-types */
import { Header } from "./Header.jsx"

function Wrapper(props) {

    return (
        <>
            <Header />
            {props.children}
        </>
    )
}

export default Wrapper
