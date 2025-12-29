import Github from "../img/Github_black.png"
import linkedin from "../img/LinkedIN_black.png"
import GoogleBlack from "../img/Google_black.png"

function Footer() {
    return (
        <>
            <div className="p-6 bg-brown-200">
                <div className="flex justify-center items-center gap-4">
                    <p className="text-center text-body">Get in touch</p>
                    <img src={linkedin} alt="linkedinIcon" className="w-6 h-6 grayscale" />
                    <img src={Github} alt="GithubIcon" className="w-6 h-6 grayscale" />
                    <img src={GoogleBlack} alt="GoogleBlackIcon" className="w-6 h-6 grayscale" />
                </div>
                <div className="flex justify-center">
                    <button className="text-body underline">Home page</button>
                </div>
            </div>
        </>
    )
}

export default Footer