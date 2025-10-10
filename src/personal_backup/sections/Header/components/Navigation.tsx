export const Navigation = () => {
  return (
    <nav className="box-border caret-transparent gap-x-8 flex min-h-0 min-w-0 gap-y-8 md:min-h-[auto] md:min-w-[auto]">
      <a
        href="/en"
        className="font-medium box-border caret-transparent block min-h-0 min-w-0 capitalize md:min-h-[auto] md:min-w-[auto] hover:text-emerald-400"
      >
        Professional
      </a>
      <a
        href="/en/personal"
        className="text-emerald-400 font-medium box-border caret-transparent block min-h-0 min-w-0 capitalize border-emerald-400 border-b-2 border-solid md:min-h-[auto] md:min-w-[auto]"
      >
        Personal
      </a>
      <a
        href="/en/contact"
        className="font-medium box-border caret-transparent block min-h-0 min-w-0 capitalize md:min-h-[auto] md:min-w-[auto] hover:text-emerald-400"
      >
        Contact
      </a>
    </nav>
  );
};
