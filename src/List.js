const people = [
  {
    date: "March 1st, 2024",
    distance: "6 mi",
    duration: "1h 19mins",
    pace: "13:26/mi",
    id: "2024-03-01T20:23Z",
  },
  {
    date: "March 3rd, 2024",
    distance: "3 mi",
    duration: "0h 39min",
    pace: "13:14/mi",
    id: "2024-03-03T16:00Z",
  },
];

export default function List() {
  return (
    <div className="px-10 mb-48">
      <ul className="divide-y divide-gray bg-white2 rounded-lg shadow-md">
        {people.map((person) => (
          <li
            key={person.id}
            className="flex justify-between gap-x-6 py-5 px-8"
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-body">
                  {person.date}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-darkGray">
                  {person.distance}
                </p>
              </div>
            </div>
            <div className="lg:flex md:flex lg:flex-row md:flex-row lg:items-center md:items-center shrink-0 gap-8 sm:items-end">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-body">{person.duration}</p>
                <p className="mt-1 text-xs leading-5 text-placeholder">
                  <time dateTime={person.id}>{person.pace}</time>
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
