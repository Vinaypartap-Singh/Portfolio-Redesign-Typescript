import Link from "next/link";
import { FaReact, FaShopify, FaWordpress } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { SiWoocommerce } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

interface Certification {
  title: string;
  driveURL: string;
  icon: React.ReactNode;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: "Web Development 2023 Bootcamp",
      driveURL:
        "https://drive.google.com/file/d/1iBAF6K2vQRMzDKoZGN5y7woF8Uc-LNyj/view?usp=sharing",
      icon: <IoLogoNodejs color="#3C873A" />,
    },
    {
      title: "Shopify Theme Development",
      driveURL:
        "https://drive.google.com/file/d/12u4SqHeiE0N4-Ylz-NDXjx9Hy46MAQxw/view?usp=sharing",
      icon: <FaShopify color="#95BF47" />,
    },
    {
      title: "Mern Stack",
      driveURL:
        "https://drive.google.com/file/d/1CX2dMJLCKuCoF849_yf1wrzWtARl1ZxN/view?usp=sharing",
      icon: <IoLogoNodejs color="#3C873A" />,
    },
    {
      title: "WordPress Theme Development",
      driveURL:
        "https://drive.google.com/file/d/13LVZgmPgWiW5pI4gxP5I_PuYjEKRc9wI/view?usp=sharing",
      icon: <FaWordpress color="#00749C" />,
    },
    {
      title: "WooCommerce Theme Development",
      driveURL:
        "https://drive.google.com/file/d/1dKTuckm0FxOHuFhmHSFfrt0wUddZr6AN/view?usp=sharing",
      icon: <FaShop color="#7F54B3" />,
    },
    {
      title: "Next JS & WordPress as a Headless CMS",
      driveURL:
        "https://drive.google.com/file/d/19zWy6gTjWIEr1B2KHTwhF2y-93Vk9VY6/view?usp=sharing",
      icon: <TbBrandNextjs color="#000000" />,
    },
    {
      title: "React Native",
      driveURL:
        "https://drive.google.com/file/d/19uk3irf9DERDY0QJnNZh0o5UNcbWvjja/view?usp=sharing",
      icon: <FaReact color="#61dbfb" />,
    },
  ];
  return (
    <div id="skills" className="mb-32">
      <div className="max-w-4xl m-auto mt-32 px-10 lg:px-0">
        <h1 className="text-2xl font-bold">
          Certifications{" "}
          <span className="text-sm font-normal">Click to view</span>
        </h1>
        <div className="flex flex-wrap justify-start gap-x-14 pt-12 gap-y-6">
          {certifications.map(({ title, driveURL, icon }, index) => {
            return (
              <Link
                target="_blank"
                href={driveURL}
                key={index}
                className={`flex items-center gap-2 border px-6 py-2 cursor-pointer rounded-md transition-all`}
              >
                {icon}
                {title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
