import Link from "next/link";
import { useRouter } from "next/router";

interface Item {
  id: string;
  path: string;
  title: string;
  children?: Item[];
}

interface NavLinkProps {
  item: Item;
}

const MobileNavLink: React.FC<NavLinkProps> = ({ item }) => {
  const router = useRouter();
  return (
    <>
      {!item.children ? (
        <li className="border-b border-gray-200">
          <Link
            href={item.path}
            className={`${
              router.pathname == item.path
                ? "border-l-4 border-orange-300 font-normal text-[var(--global-color-primary)]"
                : "font-light text-gray-500"
            } flex w-full items-center justify-between py-5 pl-5 pr-2  text-left font-[Noto_Sans_Thai]`}
          >
            {item.title}
          </Link>
        </li>
      ) : (
        <li className={`#accordion-flush-heading-${item.id}`}>
          <button
            type="button"
            className={`${
              router.pathname == item.path
                ? "border-l-4 border-orange-300 border-b-gray-200 font-normal text-[var(--global-color-primary)]"
                : "font-light text-gray-500"
            } flex w-full items-center justify-between border-b border-gray-200 py-5 pl-5 pr-2 text-left font-[Noto_Sans_Thai]`}
            data-accordion-target={`#accordion-flush-body-${item.id}`}
            aria-expanded="false"
            aria-controls={`#accordion-flush-body-${item.id}`}
          >
            {item.title}
            <svg
              data-accordion-icon
              className="h-6 w-6 shrink-0 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            id={`accordion-flush-body-${item.id}`}
            className="hidden "
            aria-labelledby={`accordion-flush-heading-${item.id}`}
          >
            <ul className="border-b border-gray-200 py-5 dark:border-gray-700">
              {item.children.map((dropDownItem) => (
                <li key={dropDownItem.id} className="cursor-pointer pb-5">
                  <Link
                    href={dropDownItem.path}
                    className={`${
                      router.pathname == dropDownItem.path
                        ? "border-l-4 border-orange-300 font-normal text-[var(--global-color-primary)]"
                        : "font-light text-blue-600"
                    } flex w-full items-center justify-between pl-10 pr-2 text-left font-[Noto_Sans_Thai]`}
                  >
                    {dropDownItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      )}
    </>
  );
};

export default MobileNavLink;
