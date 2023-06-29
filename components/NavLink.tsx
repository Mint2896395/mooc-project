import Link from "next/link";
import { useRouter } from 'next/router';

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
  const router = useRouter();
  return (
    <li className='group float-left mr-7 box-border'>
      <Link href={item.path} className={`${router.pathname == item.path ? "font-normal text-[var(--global-color-primary)]" : "font-light text-[#949494]"} box-border text-lg hover:block font-[Noto_Sans_Thai] leading-[50px]`} >
        {item.title}
        {item.children && (
          <b className="ml-0.5 inline-block h-0 w-0 border-x-4 border-t-4 border-dashed border-x-transparent border-t-[\9] align-middle text-[#ffc74c]" />
        )}
      </Link>

      {item.children && (
        <ul className='group-hover:block hidden  absolute list-none text-start top-12 bg-orange-300 z-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden mt-2'>
          {item.children.map((dropDownItem) => (
            <li
              key={dropDownItem.id}
              className='text-white p-2 hover:bg-orange-400 cursor-pointer'
            >
              <Link href={dropDownItem.path} className='w-full block'>
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
