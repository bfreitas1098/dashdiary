import Header from "./Header";

export default function Profile() {
  return (
    <div>
      <Header page={"/"} btn={"Home"} />
      <div className="table-container px-10">
        <div className="px-12 py-10 bg-white2 rounded-lg shadow-md">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-body">
              Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-placeholder">
              Personal details and application.
            </p>
          </div>
          <div className="mt-6 border-t border-body">
            <dl className="divide-y divide-lightGray">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-body">
                  Full name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-darkGray sm:col-span-2 sm:mt-0">
                  Barbara Freitas
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-body">
                  Application for
                </dt>
                <dd className="mt-1 text-sm leading-6 text-darkGray sm:col-span-2 sm:mt-0">
                  Backend Developer
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-body">
                  Email address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-darkGray sm:col-span-2 sm:mt-0">
                  margotfoster@example.com
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-body">
                  Salary expectation
                </dt>
                <dd className="mt-1 text-sm leading-6 text-darkGray sm:col-span-2 sm:mt-0">
                  $120,000
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
