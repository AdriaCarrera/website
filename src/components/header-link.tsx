import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

export type HeaderLinkProps = {
  label: string;
  url: string;
  target?: HTMLAttributeAnchorTarget;
} & {
  onClick?: () => void;
};

export function HeaderLink({ label, url, target, onClick }: HeaderLinkProps) {
  return (
    <Link href={url} target={target} onClick={onClick} className="text-black font-semibold hover:text-black/60">
      {label}
    </Link>
  );
}
