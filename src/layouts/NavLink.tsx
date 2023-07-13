import Link from "next/link";
import { usePathname } from "next/navigation";

interface Item {
  id: string;
  path: string;
  title: string;
  children?: Item[];
}

interface NavLinkProps {
  item: Item;
}

const NavLink: React.FC<NavLinkProps> = ({ item }) => {
  const pathname = usePathname();
  return (
    <li className="group float-left mr-7 box-border">
      <Link
        href={item.path}
        className={`${
          pathname == item.path
            ? "font-normal text-[var(--global-color-primary)]"
            : "font-light text-[#949494]"
        } box-border text-lg font-[Noto_Sans_Thai] leading-[50px] hover:block`}
      >
        {item.title}
        {item.children && (
          <b className="ml-0.5 inline-block h-0 w-0 border-x-4 border-t-4 border-dashed border-x-transparent border-t-[\9] align-middle text-[#ffc74c]" />
        )}
      </Link>

      {item.children && (
        <ul className="absolute top-12  z-50 mt-2 hidden list-none overflow-hidden rounded-lg bg-orange-300 text-start shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
          {item.children.map((dropDownItem) => (
            <li
              key={dropDownItem.id}
              className="cursor-pointer p-2 text-white hover:bg-orange-400"
            >
              <Link href={dropDownItem.path} className="block w-full">
                {dropDownItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavLink;
