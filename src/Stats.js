const stats = [
  { name: "Total Miles This Week", stat: "20" },
  { name: "Total Miles This Month", stat: "52" },
  { name: "Total Miles This Year", stat: "150" },
];

export default function Stats() {
  return (
    <>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 px-10 mb-20">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white2 px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-placeholder mb-3">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-bold tracking-tight text-body">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
