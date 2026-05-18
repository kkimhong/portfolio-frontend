import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramLine,
  RiMapPinLine,
  RiTiktokFill,
  RiTwitterXFill,
} from "@remixicon/react";
import profileImg from "../assets/img/morty_profile.png";
const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: <RiFacebookFill className="size-4" />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <RiInstagramLine className="size-4" />,
  },
  {
    name: "TikTok",
    href: "#",
    icon: <RiTiktokFill className="size-4" />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: <RiTwitterXFill className="size-4" />,
  },
  {
    name: "GitHub",
    href: "#",
    icon: <RiGithubFill className="size-4" />,
  },
];
export function HeroSection() {
  return (
    <div>
      <section className="relative flex min-h-screen items-center justify-center">
        <div className="text-center space-y-6">
          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur-md shadow-xl">
            <img
              src={profileImg.src}
              alt="Profile"
              className="h-36 w-36 rounded-full object-cover"
            />
          </div>
          <h1 className="text-7xl font-bold text-white bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Kimhong Kruy
          </h1>
          <p className=" text-2xl text-white/80">I love playing video games.</p>
          <div className="flex items-center justify-center mx-auto gap-2 text-white/70">
            <RiMapPinLine className="size-4 animate-bounce" />
            <h1>Mean Chey, Phnom Penh</h1>
          </div>
          <div>
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                flex items-center gap-2 rounded-full border border-white/20
                bg-white/10 px-4 py-2 text-sm font-medium text-white/80
                backdrop-blur-md transition-all duration-300
                hover:-translate-y-1 hover:bg-white/20 hover:text-white
              ">
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <footer className="mt-8 py-6 text-center text-sm text-white/80">
            &copy; {new Date().getFullYear()} Kimhong Kruy.
          </footer>
        </div>
      </section>
    </div>
  );
}
