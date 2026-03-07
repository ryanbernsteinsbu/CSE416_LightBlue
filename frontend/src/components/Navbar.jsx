export default function Navbar({ onMenuClick = () => {}, onProfileClick = () => {}}){
    return (
        <header className="navbar">
            <div className="navbar-left">
                <button className="navbar-iconbtn" type="button" onClick={onMenuClick} aria-label="Menu">
                    <i className="fa-solid fa-bars" />
                </button>
                <div className="navbar-brand"> CATCH 23</div>
            </div>
            <button className="navbar-iconbtn" type="button" onClick={onProfileClick} aria-label="Profile">
                <i className="fa-solid fa-user" />
            </button>
        </header>

    );
}