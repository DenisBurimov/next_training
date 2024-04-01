import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVBAR_NAMES, PATH_NAMES } from "@/app/constants/params";

interface IHeaderNavBar {}

export const HeaderNavBar: React.FC<IHeaderNavBar> = () => {
  const pathname = usePathname();
  const navBarData = [
    {
      name: NAVBAR_NAMES.Esports,
      href: PATH_NAMES[NAVBAR_NAMES.Esports],
      active: pathname === PATH_NAMES[NAVBAR_NAMES.Esports],
    },
    {
      name: NAVBAR_NAMES.Products,
      href: PATH_NAMES[NAVBAR_NAMES.Products],
      active: pathname === PATH_NAMES[NAVBAR_NAMES.Products],
    },
    {
      name: NAVBAR_NAMES.Community,
      href: PATH_NAMES[NAVBAR_NAMES.Community],
      active: pathname === PATH_NAMES[NAVBAR_NAMES.Community],
    },
  ];

  return (
    <nav>
      <ul className="flex gap-2">
        {navBarData.map((navBar) => (
          <li key={navBar.name}>
            <Link href={navBar.href}>{navBar.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
