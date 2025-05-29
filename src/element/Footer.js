import './css/styles.scss'

/**
 * Footer component
 * This component represents the footer section of the application.
 *
 * @returns {JSX.Element} The JSX element representing the footer.
 */
export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="footer-legal">
                    <p> Page Authored by Alex Pettipas | Hosted by Netlify | 2024</p>
                </div>
            </div>
        </footer>
    )
}


