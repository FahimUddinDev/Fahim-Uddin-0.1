import React from "react";
import { SocialMedia } from "../Component/Buttons";
import ContactForm from "../Component/Form/Contact";
import { FiFacebook, FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";
import { socialLinks } from "../Data/Portfolio";
import welcome from "../Assets/blogImage/contact1.png";
import Heading from "../Component/Heading";
function Contact({ mode }) {
  return (
    <>
      <hr
        id="contact"
        style={{
          borderBlockColor:
            mode === "dark" ? "var(--color-tertiary)" : "var(--color-lightn)",
          margin: "50px 5%",
        }}
      />
      <div className="flex gap-10 flex-col m-10 md:m-28 justify-center items-center">
        <Heading
          name="Contact"
          heading="Contact with me"
          size={8}
          align="center"
          mode={mode}
        />
        <div className="flex gap-10 flex-col md:flex-row  justify-center items-center">
          <div
            className="flex flex-col  gap-10 p-10 rounded-xl md:py-20"
            style={{
              boxShadow:
                mode === "dark" ? "var(--shadow-1)" : "var(--shadow-white-3)",
              background:
                mode === "dark"
                  ? "var(--background-color-1)"
                  : "var(--gradient-box-w)",
            }}
          >
            <div className="overflow-hidden rounded-xl">
              <img
                className="w-full rounded-xl hover:scale-110 duration-500"
                src={welcome}
                alt="welcome"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p
                className="text-6xl font-semibold"
                style={{
                  color:
                    mode === "dark"
                      ? "var(--color-lightn)"
                      : "var(--color-heading-wv)",
                }}
              >
                Fahim Uddin
              </p>
              <p
                className="text-3xl"
                style={{
                  color:
                    mode === "dark"
                      ? "var(--color-body)"
                      : "var(--color-body-white)",
                }}
              >
                React Developer
              </p>
            </div>
            <p
              className="text-3xl"
              style={{
                color:
                  mode === "dark"
                    ? "var(--color-body)"
                    : "var(--color-body-white)",
              }}
            >
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>
            <div
              className="text-3xl"
              style={{
                color:
                  mode === "dark"
                    ? "var(--color-body)"
                    : "var(--color-body-white)",
              }}
            >
              <p>
                Phone:{" "}
                <span
                  style={{
                    color:
                      mode === "dark"
                        ? "var(--color-lightn)"
                        : "var(--color-body-white)",
                  }}
                >
                  +8801704880254
                </span>
              </p>
              <p>
                Email:{" "}
                <span
                  style={{
                    color:
                      mode === "dark"
                        ? "var(--color-lightn)"
                        : "var(--color-body-white)",
                  }}
                >
                  faysalmahamud186@gmail.com
                </span>
              </p>
            </div>
            <div className="flex gap-10">
              <SocialMedia
                icon={<FiFacebook />}
                link={socialLinks.facebook}
                mode={mode}
              />
              <SocialMedia
                icon={<FiLinkedin />}
                link={socialLinks.linkdin}
                mode={mode}
              />
              <SocialMedia
                icon={<FiInstagram />}
                link={socialLinks.instagram}
                mode={mode}
              />
              <SocialMedia
                icon={<FiGithub />}
                link={socialLinks.github}
                mode={mode}
              />
            </div>
          </div>
          <div
            className="flex flex-col w-full md:w-3/5  p-10 rounded-xl"
            style={{
              boxShadow:
                mode === "dark" ? "var(--shadow-1)" : "var(--shadow-white-3)",
            }}
          >
            <ContactForm mode={mode} />
          </div>
        </div>
      </div>
      <hr
        style={{
          borderBlockColor:
            mode === "dark" ? "var(--color-tertiary)" : "var(--color-lightn)",
          margin: "50px 5%",
        }}
      />
    </>
  );
}

export default Contact;
