import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      href: "https://instagram.com",
      color: "hover:bg-pink-500/20 hover:text-pink-400",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:bg-blue-500/20 hover:text-blue-400",
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      label: "YouTube",
      href: "https://youtube.com",
      color: "hover:bg-red-500/20 hover:text-red-400",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:bg-blue-600/20 hover:text-blue-500",
    },
  ];
  return (
    <div>
      <h3 className="text-lg font-semibold text-textcolor mb-4">
        تابعنا على وسائل التواصل
      </h3>
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-3 rounded-xl bg-background/80 border border-foreground/20 text-secondary/70 transition-all duration-300 ${social.color}`}
          >
            {social.icon}
            <span className="text-sm font-medium text-textcolor">
              {social.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
export default SocialLinks;
