import { use, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import "../../globals.css";

type ResponseType = {
  name: string;
  job_title: string;
  email_address: string;
  strength: string;
  weaknesses: string;
  overall_comment: string;
  compatibility: number;
};

export default function Form3({
  resume,
  jobTitle,
  jobDescription,
}: {
  resume: string;
  jobTitle: string;
  jobDescription: string;
}) {
  const [response, setResponse] = useState<ResponseType>({
    name: "",
    job_title: "",
    email_address: "",
    strength: "",
    weaknesses: "",
    overall_comment: "",
    compatibility: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (resume) {
      const fetchData = async () => {
        const prompt = `You are a helpful recruiter called Maron. You are very strict in your ranking since you have 500 other applicants to go through. You write clear and concise paragraphs when adding descriptions like weaknesses, strengths, and comments (100-200 words); for integer ranking, it's out of 100. You receive job descriptions and resumes in JSON formats, then make a strict but thorough assessment. This is for applicant ranking compared to other applicants right now. Factor in the years of experience too.`;
        const userPrompt = `Give me something like this please
        {"job_title":"Title of the job", "name":"name of the applicant here",
          "email_address":"email address of the user", "strength": "strengths of the applicant for this role", "weaknesses":"weaknesses of the applicant for this role": "overall_comment":"overall what do you think of this applicant?","compatibility": 100}
          Resume of the applicant: ${resume}
          Job Description: {jobTitle: ${jobTitle}, jobDescriptions: ${jobDescription}}
        }`;

        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer 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",
            },
            body: JSON.stringify({
              messages: [
                { role: "system", content: prompt },
                { role: "user", content: userPrompt },
              ],
              model: "gpt-4",
              temperature: 0.7,
              max_tokens: 500,
            }),
          }
        );

        if (response.ok) {
          const result = await response.json();
          const data = result?.choices?.[0]?.message?.content;
          if (data) {
            setResponse(JSON?.parse(data));
          }
        } else {
          console.error("Failed to fetch data:", await response.text());
        }
        setIsLoading(false);

      };

      fetchData();
    }
  }, [resume]);

  if (isLoading || !resume) {
    return (
      <>
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-opacity-50 bg-black">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          <div className="absolute text-black text-2xl font-bold">
            Loading
          </div>
        </div>
      </>
    );
  }
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
              {response?.name}
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
                    {response?.compatibility}% Match
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
                      {response?.job_title}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd className="mt-1 flex items-center text-sm text-gray-900">
                      {response?.email_address}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Maron Strengths
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {response?.strength}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Maron Weaknesses
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {response?.weaknesses}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {response?.overall_comment}
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
