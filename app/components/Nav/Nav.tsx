import { NAV_ITEMS } from "@/constant";
import Image from 'next/image';
import logo from "@/public/logo.png";
import {NavItem }from "./NavItem";
import Link from "next/link";
export default function Nav()
{
    return (
      <div>
        <Link href={'/'}>
          <Image src={logo} alt="logo" className="w-40" />
        </Link>
        <nav className="space-y-4 mt-4">
          {NAV_ITEMS.map((navItem) => (
            <NavItem key={navItem.alt} {...navItem} />
          ))}
        </nav>
      </div>
    );
}