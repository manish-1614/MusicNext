import Link from "next/link";

const quickLinks = [
    {   
        title: "Home",
        link: "/",
    },
    {
        title: "Courses",
        link: "/courses",
    },
    {
        title: "About Us",
        link: "/about",
    },
    {
        title: "Contact Us",
        link: "/contact",
    },
];

const followOn = [
    {
        title: "Facebook",
        link: "https://www.facebook.com/musicacademy",
    },
    {
        title: "Twitter",
        link: "https://www.twitter.com/musicacademy",
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/musicacademy",
    },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/mkprajapati1614",
    },
];

export default function Footer() {
    return (
        <footer id="footer" className="w-11/12 p-4">
            <div className="p-6 mx-auto text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h1 className="text-white text-lg font-semibold mb-4">About us</h1>
                    <p className="text-sm text-gray-400">Music School is a premier institution dedicated to teaching the art
                        and science of music. We nurture talent from the ground up,
                        fostering a vibrant community of musicians.
                    </p>
                </div>
                <div>
                    <h1 className="text-white text-lg font-semibold mb-4">Quick Links</h1>
                    <ul className="text-sm text-gray-400">
                        {quickLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.link} className="hover:text-white">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h1 className="text-white text-lg font-semibold mb-4">Follow on</h1>
                    <ul className="text-sm text-gray-400">
                        {followOn.map((link, index) => (
                            <li key={index}>
                                <Link href={link.link} className="hover:text-white">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h1 className="text-white text-lg font-semibold mb-4">Contact Us</h1>
                    <p className="text-sm text-gray-400">
                        Kadru Kumhar Toli, Ranchi, Jharkhand, 834002
                    </p>
                </div>

            </div>
            <div className="p-2 mx-auto text-center text-gray-400 text-xs">
                <p className="font-bold">©️ Made with ❣️ by Manish Prajapati</p>
            </div>
        </footer>
    );
}