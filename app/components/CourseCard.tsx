export const CourseCard = () => (
  <div className="w-[365px] h-auto h-min-[500px] bg-black border-2">
    <div className="px-10 py-14 flex flex-col gap-8 items-center">
      <span className="text-2xl font-bold text-white">
        Program treningowy 1
      </span>
      <span className="text-xl text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et
        lorem vitae sapien volutpat condimentum. Duis sagittis erat sed
        ultricies venenatis.
      </span>
      <span className="text-xl font-bold text-zp-orange-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      </span>
      <button className="bg-zp-orange-500 text-base font-bold text-white px-14 py-2">
        ZOBACZ OFERTĘ
      </button>
    </div>
  </div>
);
