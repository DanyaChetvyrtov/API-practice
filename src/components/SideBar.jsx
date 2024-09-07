export default function SideBar(props){
    const { handleToggleModal, data } = props
    return (
        <div className="sideBar">
        <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sideBarContents">
                <h2>{ data?.title }</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">{ data?.date }</p>
                    <p>
                    { data?.explanation }
                    </p>
                </div>
                <button onClick={ handleToggleModal }>
                    <i class="fa-solid fa-right-long"></i>
                </button>
            </div>
        </div>
    )
}