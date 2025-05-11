"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="text-gray-600 text-sm lg:my-4">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" className="text-[#4B5563] text-[13px] lg:text-lg hover:underline">
            Home
          </Link>
        </li>

        {pathSegments.length > 0 && <span className="text-[#4B5563]text-[13px] lg:text-lg ">›</span>}

        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={href} className="flex items-center">
              {!isLast ? (
                <Link href={href} className="text-[#4B5563] hover:underline capitalize">
                  {decodeURIComponent(segment)}
                </Link>
              ) : (
                <span className="text-[#4B5563]text-[13px] lg:text-lg font-medium capitalize">
                  {decodeURIComponent(segment)}
                </span>
              )}
              {!isLast && <span className="mx-2 text-[#4B5563]">›</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
