/** Join className strings; extend with `clsx` + `tailwind-merge` if you need conflict resolution. */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
