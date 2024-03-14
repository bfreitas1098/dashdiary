export default function Form() {
  return (
    <div className="px-10 mb-24">
      <form className="px-10 bg-white2 py-8 rounded-lg shadow-md">
        <div className="space-y-12">
          <div className="border-b border-gray pb-12">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold leading-7 text-body">
                Log a Run
              </h2>
              <h3 className="text-1xl font-semibold leading-7 text-darkGray">
                Pace: 12:10/mi
              </h3>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 mr-12">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium leading-6 text-body"
                >
                  Date*
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-lightOrange2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lightOrange sm:max-w-md">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      autoComplete="date"
                      className="block flex-auto px-2 border-0 bg-transparent py-1.5 text-body placeholder:placeholder focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="mm/dd/yy"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2 mr-12">
                <label
                  htmlFor="distance"
                  className="block text-sm font-medium leading-6 text-body"
                >
                  Distance*
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="number"
                    name="distance"
                    id="distance"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-12 text-body ring-1 ring-inset ring-lightOrange2  focus:ring-2 focus:ring-inset focus:lightOrange sm:text-sm sm:leading-6 placeholder:placeholder"
                    placeholder="10"
                    aria-describedby="total-distance"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <span
                      className="text-darkGray sm:text-sm"
                      id="total-distance"
                    >
                      mi
                    </span>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium leading-6 text-body"
                >
                  Duration*
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-lightOrange2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lightOrange sm:max-w-md">
                    <input
                      type="text"
                      name="duration"
                      id="duration"
                      className="block flex-auto px-2 border-0 bg-transparent py-1.5 text-body placeholder:placeholder focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="0h 00min"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 mr-12">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium leading-6 text-body"
                >
                  Location*
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-lightOrange2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lightOrange sm:max-w-md">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      className="block flex-auto px-2 border-0 bg-transparent py-1.5 text-body placeholder:placeholder focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Ex: Miami, FL"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2 mr-12">
                <label
                  htmlFor="bpm"
                  className="block text-sm font-medium leading-6 text-body"
                >
                  Average BPM
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-lightOrange2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lightOrange sm:max-w-md">
                    <input
                      type="number"
                      name="bpm"
                      id="bpm"
                      className="block flex-auto px-2 border-0 bg-transparent py-1.5 text-body focus:ring-0 sm:text-sm sm:leading-6 placeholder:placeholder"
                      placeholder="150"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="cadence"
                  className="block text-sm font-medium leading-6 text-body"
                >
                  Cadence/SPM
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-lightOrange2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lightOrange sm:max-w-md">
                    <input
                      type="number"
                      name="cadence"
                      id="cadence"
                      className="block flex-auto px-2 border-0 bg-transparent py-1.5 text-body focus:ring-0 sm:text-sm sm:leading-6 placeholder:placeholder"
                      placeholder="160"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-10 text-base font-semibold leading-7 text-body">
            Additional Information
          </h2>
          <p className="text-sm leading-6 text-darkGray subtitle">
            Add any more information that you think could be helpful to
            remember.
          </p>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 textareas-container">
            <div className="sm:col-span-2 mr-12">
              <label
                htmlFor="fuel"
                className="block text-sm font-medium leading-6 text-body"
              >
                Fuel Used For Run
              </label>
              <div className="mt-2">
                <textarea
                  rows={4}
                  name="fuel"
                  id="fuel"
                  className="block w-full rounded-md border-0 p-1.5 text-body shadow-sm ring-1 ring-inset ring-lightOrange2 placeholder:placeholder focus:ring-2 focus:ring-inset focus:lightOrange sm:text-sm sm:leading-6"
                  placeholder="Banana, toast, gels, etc..."
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-2 mr-12">
              <label
                htmlFor="fuel-comments"
                className="block text-sm font-medium leading-6 text-body"
              >
                Comments About Fuel
              </label>
              <div className="mt-2">
                <textarea
                  rows={4}
                  name="fuel-comments"
                  id="fuel-comments"
                  className="block w-full rounded-md border-0 p-1.5 text-body shadow-sm ring-1 ring-inset ring-lightOrange2 placeholder:placeholder focus:ring-2 focus:ring-inset focus:lightOrange sm:text-sm sm:leading-6"
                  placeholder="Too heavy? Perfect running fuel? Not enough fuel? Could be helpful to remember."
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="comments"
                className="block text-sm font-medium leading-6 text-body"
              >
                Comments About the Run
              </label>
              <div className="mt-2">
                <textarea
                  rows={4}
                  name="comments"
                  id="comments"
                  className="block w-full rounded-md border-0 p-1.5 text-body shadow-sm ring-1 ring-inset ring-lightOrange2 placeholder:placeholder focus:ring-2 focus:ring-inset focus:lightOrange sm:text-sm sm:leading-6"
                  placeholder="How did it go?"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-end">
          <button
            type="submit"
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-darkOrange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
