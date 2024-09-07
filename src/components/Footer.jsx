export default function Footer(props){
    const { handleToggleModal, data } = props

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>API PROJECT</h1>
                <h2>{ data?.title }</h2>
            </div>
            <button onClick={ handleToggleModal }>
            <i className="fa-regular fa-circle-question" onClick={(e) =>
                handleToggleModal()
            }></i>
            </button>
        </footer>
    )
}