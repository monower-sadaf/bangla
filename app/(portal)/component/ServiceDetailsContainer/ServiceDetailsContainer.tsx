"use client";

import { useState } from "react";
import Image from "next/image";
import { relative_image_path } from "@/helper";
import Accordion2 from "@/app/_components/Accordion/Accordion2";
import { IoRocket } from "react-icons/io5";

const ServiceDetailsContainer = () => {
  const [tab, setTab] = useState(0);
  const [tab1, setTab1] = useState(0);

  const accordionItems = [
    {
      title: "Documentation",
      children: [
        { label: "User Documentation", href: "#link1.1" },
        { label: "API Documentation", href: "#link1.2" },
      ],
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-5 lg:gap-10 lg:grid-cols-5">
      <div>
        <ul className="flex flex-col gap-2">
          <li>
            <button
              onClick={() => setTab(0)}
              className={`hover:bg-primary transition-all duration-500 text-white py-1 rounded-sm w-full text-left pl-2 ${
                tab == 0 ? "bg-primary" : "bg-primary/50"
              }`}
            >
              Description
            </button>
          </li>
          <li>
            <button
              onClick={() => setTab(1)}
              className={`hover:bg-primary transition-all duration-500 text-white py-1 rounded-sm w-full text-left pl-2 ${
                tab == 1 ? "bg-primary" : "bg-primary/50"
              }`}
            >
              Buy Now
            </button>
          </li>
          <li>
            <div>
              <Accordion2
                items={accordionItems}
                active={tab == 2 || tab == 3}
                setTab={setTab}
                preTab={1}
              />
            </div>
          </li>
          <li>
            <button
              onClick={() => setTab(4)}
              className={`hover:bg-primary transition-all duration-500 text-white py-1 rounded-sm w-full text-left pl-2 ${
                tab == 4 ? "bg-primary" : "bg-primary/50"
              }`}
            >
              Video Tutorial
            </button>
          </li>
        </ul>
      </div>
      <div className="lg:col-span-4 pb-5">
        {/* <div className="flex gap-4 pb-5">
          <Image
            className="w-36 h-32 rounded-sm"
            src={relative_image_path("voice_service.png")}
            width={1000}
            height={1000}
            alt="Bangla"
          />
          <div>
            <h3 className="text-48">সঠিক</h3>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              eligendi qui soluta molestias dolores cupiditate consequatur
            </p>
          </div>
        </div> */}
        <div>
          {tab == 0 && (
            <div className="">
              <div className="flex flex-col lg:flex-row gap-4 pb-5">
                <Image
                  className="w-20 h-16 lg:w-36 lg:h-32 rounded-sm"
                  src={relative_image_path("voice_service.png")}
                  width={1000}
                  height={1000}
                  alt="Bangla"
                />
                <div>
                  <h3 className="text-24 lg:text-48">সঠিক</h3>
                  <p className="max-w-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi eligendi qui soluta molestias dolores cupiditate
                    consequatur
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pb-3">
                <button
                  onClick={() => setTab1(0)}
                  className={`pb-2 text-20 hover:border-b hover:border-red-400 ${
                    tab1 == 0 ? "border-b border-red-400" : ""
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setTab1(1)}
                  className={`pb-2 text-20 hover:border-b hover:border-red-400 ${
                    tab1 == 1 ? "border-b border-red-400" : ""
                  }`}
                >
                  Support
                </button>
                <button
                  onClick={() => setTab1(2)}
                  className={`pb-2 text-20 hover:border-b hover:border-red-400 ${
                    tab1 == 2 ? "border-b border-red-400" : ""
                  }`}
                >
                  Review
                </button>
              </div>

              {tab1 == 0 && (
                <p className="text-justify text-[#424242] text-18">
                  tab1 part 1
                </p>
              )}
              {tab1 == 1 && (
                <p className="text-justify text-[#424242] text-18">
                  tab1 part 2
                </p>
              )}
              {tab1 == 2 && (
                <p className="text-justify text-[#424242] text-18">
                  tab1 part 3
                </p>
              )}
            </div>
          )}

          {tab == 1 && (
            <div className="">
              <p className="text-justify text-[#424242] text-18">
                tab2 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur aliquid magnam quaerat dolorum officia! Saepe nostrum
                fugiat repudiandae nisi officiis, quas nam odit ullam asperiores
                labore, itaque illo ipsam animi?
              </p>
            </div>
          )}

          {tab == 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-0">
              <div>
                <h3 className="text-14 font-bold">Table of Contents</h3>
                <ul>
                  <li>
                    <a href="#intro">Introduction</a>
                  </li>
                  <li>
                    <a href="#video-tutorial">Video Tutorial</a>
                  </li>
                  <li>
                    <a href="#guidelines">Guidelines</a>
                  </li>
                  <li>
                    <a href="#faqs">FAQs</a>
                  </li>
                  <li>
                    <a href="#support">Support</a>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-6">
                <section
                  id="intro"
                  className="bg-white rounded-lg mx-auto mb-6 max-w-4xl"
                >
                  <h2 className="text-3xl font-semibold mb-4">
                    Welcome to the Documentation
                  </h2>
                  <p className="mb-4">
                    This user guide will help you navigate the software,
                    providing a step-by-step tutorial through video and detailed
                    written instructions.
                  </p>
                  <p>
                    Refer to the{" "}
                    <a href="#faqs" className="text-blue-600 hover:underline">
                      FAQs
                    </a>{" "}
                    section for common questions or visit the{" "}
                    <a
                      href="#support"
                      className="text-blue-600 hover:underline"
                    >
                      support
                    </a>{" "}
                    page for more help.
                  </p>
                </section>

                <section
                  id="video-tutorial"
                  className="bg-white rounded-lg p-6 mx-auto mb-6 max-w-4xl"
                >
                  <h2 className="text-3xl font-semibold mb-4">
                    Video Tutorial
                  </h2>
                  <p className="mb-4">
                    Watch the following video for a comprehensive walkthrough of
                    the software:
                  </p>
                  <video
                    controls
                    className="w-full max-w-3xl mx-auto border border-gray-300 rounded"
                  >
                    <source src="your-video-file.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p className="text-sm text-gray-500 mt-4">
                    Note: Ensure you have the latest version of your browser to
                    view the video correctly.
                  </p>
                </section>

                <section
                  id="guidelines"
                  className="bg-white rounded-lg p-6 mx-auto mb-6 max-w-4xl"
                >
                  <h2 className="text-3xl font-semibold mb-4">
                    Step-by-Step Guidelines
                  </h2>
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <strong>Step 1: Installation and Setup</strong>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          Download the software from the{" "}
                          <a
                            href="download-link"
                            className="text-blue-600 hover:underline"
                          >
                            official website
                          </a>
                          .
                        </li>
                        <li>
                          Run the installer and follow the on-screen
                          instructions.
                        </li>
                        <li>Ensure that you meet the system requirements.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Step 2: Interface Overview</strong>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          After installation, launch the software and
                          familiarize yourself with the interface.
                        </li>
                        <li>
                          The <strong>navigation bar</strong> is located at the
                          top of the screen, giving you access to various
                          features.
                        </li>
                        <li>
                          On the left-hand side, you will see the{" "}
                          <strong>menu panel</strong>, where you can switch
                          between different sections of the software.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Step 3: First Task</strong>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          Start by creating a new project using the{" "}
                          <strong>File</strong> menu.
                        </li>
                        <li>
                          Follow the prompts to name your project and choose the
                          file format.
                        </li>
                        <li>
                          Begin adding content or data by clicking the{" "}
                          <strong>Add New</strong> button.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Step 4: Saving and Exporting</strong>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          Once you are done, click on <strong>Save</strong> to
                          store your project locally.
                        </li>
                        <li>
                          To export the project in different formats, go to{" "}
                          <strong>File Export</strong> and choose the desired
                          format.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </section>

                <section
                  id="faqs"
                  className="bg-white rounded-lg p-6 mx-auto mb-6 max-w-4xl"
                >
                  <h2 className="text-3xl font-semibold mb-4">
                    Frequently Asked Questions (FAQs)
                  </h2>
                  <dl className="space-y-4">
                    <div>
                      <dt className="font-bold">
                        Q: How do I update the software?
                      </dt>
                      <dd className="ml-4">
                        A: Go to the <strong>Help</strong> section in the menu
                        bar and click <strong>Check for Updates</strong>. Follow
                        the instructions to install any available updates.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold">
                        Q: Can I use the software on multiple devices?
                      </dt>
                      <dd className="ml-4">
                        A: Yes, as long as you have a valid license for each
                        device. Check the licensing terms for more details.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold">
                        Q: What are the system requirements?
                      </dt>
                      <dd className="ml-4">
                        A: The software requires at least 4 GB of RAM, 500 MB of
                        free storage, and a modern processor. It runs on
                        Windows, macOS, and Linux.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold">
                        Q: Where are my files stored?
                      </dt>
                      <dd className="ml-4">
                        A: By default, files are saved in the{" "}
                        <strong>Documents</strong> folder. You can change the
                        default save location in{" "}
                        <strong>Settings File Locations</strong>.
                      </dd>
                    </div>
                  </dl>
                </section>

                <section
                  id="support"
                  className="bg-white rounded-lg p-6 mx-auto mb-6 max-w-4xl"
                >
                  <h2 className="text-3xl font-semibold mb-4">
                    Contact Support
                  </h2>
                  <p className="mb-4">
                    If you encounter any issues or need further assistance, you
                    can contact our support team:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>
                      Email:{" "}
                      <a
                        href="mailto:support@yourcompany.com"
                        className="text-blue-600 hover:underline"
                      >
                        support@yourcompany.com
                      </a>
                    </li>
                    <li>Phone: +1-800-123-4567</li>
                    <li>
                      Live Chat:{" "}
                      <a
                        href="live-chat-link"
                        className="text-blue-600 hover:underline"
                      >
                        Start a live chat
                      </a>
                    </li>
                  </ul>
                  <p className="mt-4">
                    Our support team is available 24/7 to help you with any
                    inquiries.
                  </p>
                </section>
              </div>
            </div>
          )}

          {tab == 3 && (
            <div className="">
              <div className="flex items-center gap-2 border-b border-gray-300 pb-3">
                <IoRocket size={20} />
                <h3 className="text-20 font-bold">How To Use</h3>
              </div>
              <div className="pl-6">
                <div>
                  <h3 className="pb-2">1. Clone Repository or Download</h3>
                  <div className="pl-4">
                    <p className="text-14 bg-gray-200 p-1 rounded">
                      $ git clone
                      https://github.com/fajarghifar/laravel-point-of-sale
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="pb-2">2. Setup</h3>
                  <div className="pl-4">
                    <p className="text-14 bg-gray-200 p-1 rounded">
                      # Go into the repository <br /> $ cd laravel-point-of-sale{" "}
                      <br /> <br /> # Install dependencies <br /> $ composer
                      install <br /> <br /> # Open with your text editor $ code
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab == 4 && (
            <div className="">
              <p className="text-justify text-[#424242] text-18">
                tab5 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur aliquid magnam quaerat dolorum officia! Saepe nostrum
                fugiat repudiandae nisi officiis, quas nam odit ullam asperiores
                labore, itaque illo ipsam animi?
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsContainer;
