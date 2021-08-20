function AdminComponent(){
    return(
        <div className="container">
            <h1>Top Level : Container</h1>
            <div className="card">
                <h2>Mid Level : Card</h2>
                <div className="card-item">
                    <h3>Low level : card item</h3>
                    <div>
                        <h4>Basement : div sin className</h4>
                    </div>
                </div>
                <div className="card-item">
                    <h3>Low level : card item</h3>
                    <div>
                        <h4>Basement : div sin className</h4>
                    </div>
                </div>
            </div>
        </div>
    ) /* Retorna JSX */
}

export default AdminComponent;