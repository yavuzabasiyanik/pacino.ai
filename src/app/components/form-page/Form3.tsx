import { use, useEffect, useState } from "react";
import { GetServerSideProps } from "next";

interface pages {
  name: string;
  href: string;
  current: boolean;
}

export default function Form3({
  jobApplicantData,
}: {
  jobApplicantData: any;
}) {
 

  return (
        <>
          {/* Page header */}
          <div className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                    alt="Your Company"
                  />
                  <span
                    className="absolute inset-0 rounded-full shadow-inner"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {"Yavuz" +
                    " " +
                    "Abasiyanik"}
                </h1>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2 lg:col-start-1">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2
                          id="applicant-information-title"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Applicant Information
                        </h2>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          Personal details and application.
                        </p>
                      </div>
                      <span
                        style={{ height: "fit-content" }}
                        className="inline-block h-auto rounded bg-green-500 px-2 py-1 text-sm text-white"
                      >
                        100% Match
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Job Title
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          Job Title here
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Email address
                        </dt>
                        <dd className="mt-1 flex items-center text-sm text-gray-900">
                         abasiyanikyavuz@gmail.com
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Maron Strengths
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          Maron strengths
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Maron Weaknesses
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          maron weaknesess
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">
                          About
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          maron comments
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">
                          Skills
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {[{title:"java"}, {title:"javascript"}].map(
                            (skill, index) => (
                              <div key={index} className="skillTagDiv">
                                {skill.title}
                              </div>
                            )
                          )}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>

              {/* Comments*/}
              {/* <Notes
                jobApplicationSlug={jobApplicantData.slug}
                timeline={timelines}
              /> */}
            </div>

            {/* <Timeline
              timelines={timelines}
              handleNextEvent={handleNextEvent}
              status={status}
            /> */}
          </div>
        </>
  );
}
