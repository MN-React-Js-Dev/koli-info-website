import React from "react";

function LoaderComponent() {
  return (
    <div class="loader-container">
      <div className="loader">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t.rotation {\n\t\tanimation: loading 5s infinite;\n\t}\n\n\t@keyframes loading {\n\t\t50% {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n",
          }}
        />
        <div className="rotation">
          <svg
            xmlSpace="preserve"
            style={{
              height: "100%",
              width: "100%",
              background: "rgba(0, 0, 0, 0)",
            }}
            viewBox="0 0 16 16"
            y="0px"
            x="0px"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            version="1.1"
            width="209px"
            height="209px"
          >
            <g
              className="ldl-scale"
              style={{
                transformOrigin: "50% 50%",
                transform: "rotate(0deg) scale(0.92,0.92)",
              }}
            >
              <g
                class="ldl-ani"
                style={{
                  transformOrigin: "8px 8px",
                  transform: "rotate(0deg)",
                  animation:
                    "1.72414s linear 0s 3 alternate-reverse forwards running spin-e21b756d-c8a8-4a4c-b02d-5ab0c10fefb5",
                }}
                
              >
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n\t\t\t\t\t.st0 {\n\t\t\t\t\t\tfill: url(#SVGID_1_);\n\t\t\t\t\t}\n\n\t\t\t\t\t.st1 {\n\t\t\t\t\t\tfill: url(#SVGID_2_);\n\t\t\t\t\t}\n\n\t\t\t\t\t.st2 {\n\t\t\t\t\t\tfill: url(#SVGID_3_);\n\t\t\t\t\t}\n\n\t\t\t\t\t.st3 {\n\t\t\t\t\t\tfill: url(#SVGID_4_);\n\t\t\t\t\t}\n\t\t\t\t",
                  }}
                />
                <g className="ldl-layer">
                  <g className="ldl-ani">
                    <g>
                      <linearGradient
                        y2="8.9367"
                        x2="12.6099"
                        y1="4.9859"
                        x1="0.7086"
                        gradientUnits="userSpaceOnUse"
                        id="SVGID_1_"
                      >
                        <stop
                          style={{ stopColor: "rgb(34, 50, 100)" }}
                          offset="0.0401"
                        />
                        <stop
                          style={{ stopColor: "rgb(111, 162, 211)" }}
                          offset="0.7971"
                        />
                      </linearGradient>
                      <g className="ldl-layer">
                        <g className="ldl-ani">
                          <path
                            d="M12.6,8.75c0.01-0.02,0.01-0.05,0.01-0.07c-0.05,0.39-0.13,0.77-0.24,1.13c-0.03,0.08-0.05,0.15-0.08,0.23
                                          c-0.03,0.08-0.05,0.15-0.08,0.22c-0.03,0.08-0.06,0.15-0.1,0.23c-0.03,0.06-0.06,0.13-0.09,0.19c0,0,0,0.01,0,0.01
                                          c-0.03,0.06-0.06,0.12-0.1,0.18c-0.03,0.06-0.06,0.12-0.1,0.18c-0.14,0.25-0.3,0.49-0.48,0.71c-0.91,1.17-2.21,2-3.7,2.3
                                          c-0.52,0.11-1.07,0.15-1.63,0.12C4.7,14.1,3.5,13.62,2.53,12.87C1.04,11.71,0.1,9.91,0.1,7.91c0-0.07,0-0.14,0-0.21
                                          c0-0.05,0-0.11,0.01-0.16c0-0.05,0.01-0.11,0.01-0.16c0.01-0.06,0.01-0.13,0.02-0.19c0.01-0.06,0.01-0.13,0.02-0.19
                                          c0.01-0.06,0.02-0.13,0.03-0.19C0.2,6.76,0.2,6.72,0.21,6.68c0.01-0.05,0.02-0.1,0.03-0.15c0.02-0.09,0.04-0.19,0.06-0.28
                                          C0.3,6.21,0.31,6.18,0.32,6.14C0.34,6.07,0.35,6,0.37,5.93c0.01-0.03,0.02-0.07,0.03-0.1c0.02-0.08,0.05-0.16,0.07-0.24
                                          C0.5,5.5,0.53,5.41,0.56,5.33c0.02-0.05,0.04-0.1,0.06-0.15c0.02-0.06,0.05-0.12,0.07-0.18c0.02-0.05,0.04-0.11,0.07-0.16
                                          c0.03-0.06,0.05-0.13,0.08-0.19C0.86,4.61,0.88,4.57,0.9,4.53C0.93,4.46,0.96,4.4,1,4.34C1.02,4.3,1.04,4.25,1.07,4.21
                                          c0.07-0.13,0.15-0.26,0.23-0.39c0.12-0.19,0.25-0.38,0.38-0.56c0.04-0.05,0.07-0.1,0.11-0.14C1.82,3.07,1.86,3.03,1.9,2.98
                                          c0.04-0.05,0.08-0.09,0.12-0.14C2.05,2.79,2.09,2.75,2.13,2.7c0.03-0.03,0.05-0.06,0.08-0.09C2.32,2.5,2.43,2.39,2.55,2.28
                                          c0.03-0.03,0.06-0.06,0.09-0.09c0.04-0.04,0.09-0.08,0.13-0.12c0.04-0.04,0.09-0.08,0.14-0.12c0.07-0.06,0.15-0.12,0.22-0.18
                                          c0.07-0.05,0.13-0.1,0.2-0.15C3.35,1.61,3.36,1.6,3.37,1.6c0.09-0.06,0.17-0.12,0.26-0.18c0,0,0.01,0,0.01-0.01
                                          c0.09-0.06,0.18-0.12,0.27-0.17c0.01-0.01,0.02-0.01,0.03-0.02c0.09-0.05,0.17-0.1,0.26-0.15c0.19-0.11,0.39-0.2,0.58-0.29
                                          c0.3-0.13,0.61-0.25,0.92-0.34C5.8,0.41,5.91,0.38,6.01,0.35c0.21-0.05,0.42-0.1,0.64-0.14c0.01,0,0.02,0,0.02,0
                                          c0.11-0.02,0.21-0.03,0.32-0.05c0.1-0.01,0.21-0.03,0.31-0.03c0.02,0,0.03,0,0.05,0c0.09-0.01,0.18-0.01,0.26-0.02
                                          c0.02,0,0.03,0,0.05,0C7.77,0.1,7.88,0.1,7.99,0.1c0.1,0,0.2,0,0.31,0.01c0,0,0,0,0,0c0.05,0,0.11,0,0.16,0.01
                                          c0.05,0,0.11,0.01,0.16,0.01c0.04,0,0.07,0.01,0.11,0.01c0.06,0.01,0.12,0.01,0.19,0.02c0.06,0.01,0.12,0.01,0.18,0.02
                                          C9.16,0.18,9.22,0.19,9.29,0.2c0.06,0.01,0.12,0.02,0.19,0.03C7.42-0.14,5.41,0.52,4,1.87C3.11,2.71,2.46,3.82,2.19,5.12
                                          c-0.11,0.55-0.16,1.1-0.13,1.63c0.08,1.52,0.71,2.93,1.72,4c0.73,0.77,1.66,1.35,2.73,1.67c0.02,0.01,0.05,0.01,0.07,0.02
                                          c0.01,0,0.02,0.01,0.03,0.01c0.03,0.01,0.06,0.02,0.09,0.03c0.03,0.01,0.07,0.02,0.11,0.03c0.04,0.01,0.07,0.02,0.11,0.03
                                          c0.04,0.01,0.08,0.02,0.12,0.03c0.04,0.01,0.07,0.01,0.1,0.02c0.04,0.01,0.08,0.02,0.12,0.02c0.03,0.01,0.07,0.01,0.1,0.01
                                          c0.02,0,0.03,0,0.05,0.01l0.01,0c0,0,0.01,0,0.01,0c0.03,0,0.06,0.01,0.09,0.01c0.02,0,0.03,0,0.05,0
                                          c0.05,0.01,0.11,0.01,0.16,0.01c0.03,0,0.05,0,0.08,0c0.05,0,0.11,0.01,0.16,0c0.03,0,0.06,0,0.09,0c0.12,0,0.24-0.01,0.36-0.02
                                          c0.07-0.01,0.14-0.01,0.21-0.02c0.07-0.01,0.14-0.02,0.2-0.03c0.07-0.01,0.14-0.02,0.2-0.04c0.06-0.01,0.12-0.03,0.19-0.04
                                          c0.01,0,0.01,0,0.02-0.01c0.05-0.01,0.1-0.03,0.15-0.04c0.2-0.06,0.39-0.14,0.57-0.22c0.04-0.02,0.08-0.04,0.12-0.06
                                          c0.1-0.05,0.2-0.1,0.29-0.16c0.04-0.02,0.08-0.05,0.12-0.08c0.12-0.08,0.24-0.16,0.35-0.24c0.05-0.04,0.11-0.08,0.16-0.12
                                          c0.19-0.16,0.37-0.34,0.54-0.53c0.04-0.04,0.07-0.08,0.11-0.13c0-0.01,0.01-0.01,0.01-0.02c0.04-0.05,0.07-0.09,0.11-0.14
                                          c0.04-0.05,0.07-0.1,0.11-0.15c0.04-0.05,0.07-0.1,0.1-0.16c0.2-0.32,0.35-0.66,0.47-1.02c0.01-0.02,0.02-0.05,0.02-0.07
                                          c0.01-0.02,0.02-0.05,0.02-0.07c0.03-0.1,0.05-0.2,0.08-0.3c0.01-0.03,0.01-0.06,0.02-0.09C12.59,8.84,12.6,8.79,12.6,8.75z"
                            className="st0"
                          />
                        </g>
                      </g>
                      <linearGradient
                        y2="7.1154"
                        x2="13.651"
                        y1="13.1732"
                        x1="2.2469"
                        gradientUnits="userSpaceOnUse"
                        id="SVGID_2_"
                      >
                        <stop
                          style={{ stopColor: "rgb(34, 50, 100)" }}
                          offset="0.0401"
                        />
                        <stop
                          style={{ stopColor: "rgb(111, 162, 211)" }}
                          offset="0.7971"
                        />
                      </linearGradient>
                      <g className="ldl-layer">
                        <g className="ldl-ani">
                          <path
                            d="M13.94,9.25c0.03,0.53-0.01,1.08-0.13,1.63c-0.27,1.29-0.93,2.41-1.82,3.25c-1.41,1.34-3.42,2-5.47,1.63
                                          c-0.05-0.01-0.11-0.02-0.16-0.03c-0.05-0.01-0.11-0.02-0.16-0.04c-0.11-0.03-0.22-0.05-0.33-0.08c0,0-0.01,0-0.01,0
                                          c-0.11-0.03-0.22-0.06-0.33-0.1c0,0-0.01,0-0.01,0c-0.09-0.03-0.17-0.06-0.26-0.09c-0.03-0.01-0.06-0.02-0.09-0.04
                                          c-0.08-0.03-0.16-0.06-0.23-0.09c-0.04-0.01-0.07-0.03-0.11-0.05c-0.07-0.03-0.15-0.07-0.22-0.1c-0.02-0.01-0.03-0.01-0.05-0.02
                                          c-0.07-0.03-0.13-0.07-0.2-0.1C4.32,15,4.28,14.98,4.24,14.95c-0.08-0.04-0.15-0.08-0.22-0.12c0,0-0.01-0.01-0.02-0.01
                                          c-0.07-0.04-0.14-0.09-0.21-0.13c-0.03-0.02-0.05-0.03-0.08-0.05c-0.05-0.03-0.1-0.07-0.15-0.1c-0.05-0.03-0.1-0.07-0.15-0.1
                                          c-0.05-0.04-0.1-0.07-0.15-0.11c-0.05-0.04-0.09-0.07-0.14-0.11c-0.05-0.04-0.09-0.07-0.14-0.11s-0.09-0.08-0.14-0.12
                                          c-0.19-0.17-0.38-0.34-0.56-0.53c-0.03-0.03-0.06-0.06-0.09-0.1c-0.04-0.04-0.08-0.09-0.12-0.13c-0.04-0.04-0.08-0.09-0.12-0.14
                                          c-0.04-0.05-0.08-0.1-0.12-0.15c-0.03-0.04-0.07-0.08-0.1-0.12c-0.05-0.06-0.1-0.13-0.15-0.19c-0.06-0.08-0.11-0.16-0.17-0.24
                                          c-0.01-0.02-0.03-0.04-0.04-0.06c-0.05-0.07-0.09-0.14-0.14-0.22c-0.06-0.1-0.12-0.21-0.18-0.31c-0.05-0.09-0.1-0.19-0.15-0.28
                                          c-0.04-0.08-0.08-0.17-0.12-0.25c-0.05-0.11-0.1-0.23-0.14-0.34c-0.04-0.1-0.08-0.2-0.11-0.31c-0.02-0.07-0.05-0.14-0.07-0.21
                                          c-0.01-0.04-0.03-0.08-0.04-0.12C0.41,10.19,0.38,10.1,0.35,10C0.31,9.82,0.27,9.64,0.23,9.45c-0.02-0.1-0.04-0.2-0.05-0.31
                                          C0.17,9.08,0.16,9.02,0.15,8.96C0.15,8.9,0.14,8.83,0.13,8.77C0.13,8.71,0.12,8.65,0.12,8.58C0.11,8.52,0.11,8.46,0.11,8.39
                                          c0-0.05-0.01-0.11-0.01-0.16c0-0.02,0-0.05,0-0.07c0-0.08,0-0.17,0-0.25c0,2,0.94,3.8,2.43,4.96c0.97,0.75,2.17,1.23,3.49,1.31
                                          c0.56,0.03,1.11-0.01,1.63-0.12c1.49-0.3,2.79-1.13,3.7-2.3c0.18-0.22,0.34-0.46,0.48-0.71c0.04-0.06,0.07-0.12,0.1-0.18
                                          c0.03-0.06,0.06-0.12,0.1-0.18c0,0,0-0.01,0-0.01c0.03-0.06,0.06-0.13,0.09-0.19c0.03-0.08,0.07-0.15,0.1-0.23
                                          c0.03-0.07,0.06-0.15,0.08-0.22c0.03-0.08,0.06-0.15,0.08-0.23c0.14-0.42,0.23-0.86,0.27-1.31c0-0.02,0-0.04,0-0.06
                                          c0.01-0.06,0.01-0.11,0.01-0.17v0c0-0.05,0.01-0.11,0.01-0.16c0-0.06,0-0.11,0-0.17c0-0.07,0-0.13-0.01-0.2v0
                                          c0-0.03,0-0.06-0.01-0.1c-0.01-0.11-0.02-0.21-0.04-0.32c-0.01-0.09-0.03-0.18-0.05-0.27C12.56,7,12.55,6.95,12.53,6.89
                                          c0,0,0,0,0-0.01c0,0,0-0.01,0-0.01c-0.01-0.04-0.02-0.08-0.04-0.13c0-0.02-0.01-0.04-0.02-0.06c-0.01-0.04-0.03-0.09-0.04-0.13
                                          c-0.01-0.02-0.02-0.05-0.02-0.07c-0.04-0.13-0.09-0.25-0.14-0.37c-0.01-0.02-0.01-0.03-0.02-0.04c-0.02-0.04-0.04-0.09-0.06-0.13
                                          c-0.04-0.09-0.08-0.17-0.13-0.25s-0.1-0.17-0.15-0.25c-0.01-0.03-0.03-0.05-0.05-0.07c0-0.01-0.01-0.01-0.02-0.02
                                          c0,0-0.01-0.01-0.01-0.01c-0.07-0.1-0.14-0.2-0.22-0.29c-0.09-0.11-0.18-0.21-0.28-0.31c-0.06-0.07-0.13-0.13-0.19-0.19
                                          C11.1,4.51,11.05,4.47,11,4.43c-0.04-0.03-0.07-0.06-0.11-0.09c-0.04-0.03-0.08-0.06-0.12-0.09c-0.03-0.02-0.06-0.04-0.09-0.06
                                          c-0.05-0.04-0.11-0.07-0.16-0.11c-0.04-0.02-0.08-0.05-0.11-0.07C10.4,4,10.38,3.99,10.37,3.98c-0.06-0.03-0.11-0.06-0.17-0.1
                                          c-0.06-0.03-0.12-0.07-0.18-0.09C9.95,3.76,9.89,3.73,9.83,3.71C9.77,3.68,9.71,3.66,9.64,3.63C9.55,3.6,9.46,3.57,9.36,3.54
                                          c0.46,0.13,0.89,0.3,1.3,0.52c0.07,0.04,0.14,0.08,0.21,0.12c0.07,0.04,0.14,0.08,0.21,0.13c0.06,0.04,0.11,0.08,0.17,0.12
                                          c0,0,0.01,0,0.01,0.01c0.06,0.04,0.11,0.08,0.17,0.12c0.05,0.04,0.11,0.08,0.16,0.12c0.23,0.18,0.44,0.37,0.63,0.58
                                          C13.24,6.33,13.86,7.74,13.94,9.25z"
                            className="st1"
                          />
                        </g>
                      </g>
                      <linearGradient
                        y2="10.773"
                        x2="16.0104"
                        y1="7.5498"
                        x1="3.7922"
                        gradientUnits="userSpaceOnUse"
                        id="SVGID_3_"
                      >
                        <stop
                          style={{ stopColor: "rgb(111, 162, 211)" }}
                          offset={0}
                        />
                        <stop
                          style={{ stopColor: "rgb(34, 50, 100)" }}
                          offset={1}
                        />
                      </linearGradient>
                      <g className="ldl-layer">
                        <g className="ldl-ani">
                          <path
                            d="M15.9,8.09c0,0.07,0,0.14,0,0.21c0,0.05,0,0.11-0.01,0.16c0,0.05-0.01,0.11-0.01,0.16
                                          c-0.01,0.06-0.01,0.13-0.02,0.19C15.85,8.88,15.85,8.94,15.84,9c-0.01,0.1-0.03,0.19-0.04,0.28c-0.03,0.16-0.06,0.31-0.09,0.47
                                          c-0.01,0.04-0.02,0.07-0.03,0.11c-0.01,0.06-0.03,0.13-0.05,0.19c-0.01,0.02-0.01,0.05-0.02,0.07c-0.01,0.03-0.02,0.06-0.03,0.09
                                          c-0.02,0.06-0.03,0.12-0.05,0.17c-0.01,0.03-0.02,0.06-0.03,0.09c-0.02,0.07-0.04,0.13-0.07,0.2c-0.02,0.05-0.04,0.1-0.06,0.15
                                          c-0.02,0.06-0.04,0.11-0.07,0.17c-0.02,0.06-0.05,0.11-0.07,0.17c-0.02,0.06-0.05,0.11-0.07,0.17c-0.03,0.06-0.05,0.11-0.08,0.17
                                          c-0.03,0.05-0.05,0.11-0.08,0.16c-0.02,0.04-0.04,0.09-0.07,0.13c-0.06,0.12-0.13,0.23-0.2,0.34c-0.13,0.21-0.26,0.41-0.41,0.6
                                          c-0.04,0.05-0.07,0.1-0.11,0.14c-0.04,0.05-0.07,0.09-0.11,0.14c-0.04,0.05-0.08,0.09-0.12,0.14c-0.04,0.04-0.08,0.09-0.12,0.14
                                          c-0.03,0.03-0.05,0.06-0.08,0.09c-0.11,0.12-0.22,0.23-0.33,0.34c-0.03,0.03-0.06,0.06-0.09,0.09c-0.04,0.04-0.09,0.08-0.13,0.12
                                          c-0.04,0.04-0.09,0.08-0.14,0.12c-0.07,0.06-0.15,0.12-0.22,0.18c-0.16,0.13-0.33,0.25-0.5,0.36c-0.01,0-0.01,0.01-0.02,0.01
                                          c-0.09,0.06-0.18,0.11-0.27,0.17c-0.09,0.06-0.19,0.11-0.28,0.16c-0.19,0.11-0.39,0.2-0.58,0.29c-0.3,0.13-0.61,0.25-0.92,0.34
                                          c-0.31,0.1-0.63,0.17-0.95,0.23c-0.01,0-0.02,0-0.02,0c-0.11,0.02-0.21,0.03-0.32,0.05c-0.11,0.01-0.21,0.03-0.32,0.03
                                          c-0.01,0-0.02,0-0.03,0c-0.11,0.01-0.21,0.02-0.32,0.02c0,0,0,0,0,0C8.23,15.9,8.12,15.9,8.01,15.9h0c-0.1,0-0.2,0-0.31-0.01
                                          c-0.04,0-0.09,0-0.13-0.01c-0.01,0-0.02,0-0.03,0c-0.05,0-0.11-0.01-0.16-0.01c-0.1-0.01-0.2-0.02-0.3-0.03
                                          c-0.05-0.01-0.11-0.01-0.16-0.02c-0.07-0.01-0.14-0.02-0.21-0.03c-0.06-0.01-0.12-0.02-0.19-0.03c2.05,0.38,4.06-0.28,5.47-1.63
                                          c0.89-0.85,1.54-1.96,1.82-3.25c0.11-0.55,0.16-1.1,0.13-1.63c-0.08-1.51-0.7-2.93-1.72-4c-0.19-0.21-0.41-0.4-0.63-0.58
                                          c-0.05-0.04-0.11-0.09-0.16-0.12c-0.05-0.04-0.11-0.08-0.17-0.12c0,0-0.01,0-0.01-0.01c-0.06-0.04-0.11-0.08-0.17-0.12
                                          c-0.07-0.04-0.14-0.09-0.21-0.13c-0.07-0.04-0.14-0.08-0.21-0.12C10.21,3.81,9.72,3.62,9.2,3.49C9.13,3.47,9.05,3.46,8.98,3.44
                                          c0,0-0.01,0-0.01,0C8.94,3.43,8.91,3.42,8.89,3.42C8.85,3.42,8.82,3.41,8.79,3.4C8.75,3.4,8.7,3.39,8.66,3.38
                                          c-0.01,0-0.02,0-0.04-0.01c-0.01,0-0.01,0-0.02,0C8.55,3.37,8.49,3.36,8.44,3.35C8.38,3.35,8.31,3.34,8.25,3.34
                                          c-0.07,0-0.15-0.01-0.23-0.01c-0.03,0-0.07,0-0.1,0c-0.11,0-0.23,0.01-0.34,0.02c-0.01,0-0.01,0-0.02,0c-0.01,0-0.01,0-0.02,0
                                          c0,0,0,0-0.01,0c-0.01,0-0.01,0-0.02,0C7.44,3.37,7.36,3.38,7.28,3.39c0,0,0,0-0.01,0s-0.01,0-0.01,0c-0.03,0-0.06,0.01-0.1,0.02
                                          c-0.01,0-0.01,0-0.02,0c-0.01,0-0.02,0-0.03,0c-0.01,0-0.01,0-0.02,0c-0.01,0-0.02,0.01-0.03,0.01c-0.01,0-0.01,0-0.02,0
                                          C7,3.44,6.95,3.45,6.9,3.47C6.87,3.47,6.84,3.48,6.81,3.49c-0.01,0-0.02,0-0.03,0.01c-0.02,0-0.03,0.01-0.05,0.01
                                          c-0.01,0-0.01,0-0.02,0.01c-0.01,0-0.02,0-0.03,0.01c-0.02,0-0.03,0.01-0.05,0.01c-0.02,0-0.04,0.01-0.05,0.02
                                          c-0.01,0-0.03,0.01-0.04,0.01c-0.01,0-0.02,0.01-0.03,0.01c-0.01,0-0.02,0.01-0.03,0.01c0,0,0,0,0,0C6.45,3.6,6.41,3.61,6.37,3.63
                                          C6.36,3.63,6.35,3.64,6.33,3.65c-0.01,0-0.03,0.01-0.04,0.01c-0.01,0-0.02,0.01-0.04,0.01C6.23,3.68,6.19,3.7,6.16,3.71
                                          C6.14,3.72,6.12,3.73,6.11,3.74c0,0,0,0,0,0c-0.01,0-0.02,0.01-0.03,0.01c-0.01,0-0.02,0.01-0.03,0.01C6.03,3.77,6.01,3.78,6,3.79
                                          c-0.01,0-0.02,0.01-0.03,0.01c-0.01,0-0.01,0.01-0.02,0.01C5.94,3.81,5.93,3.82,5.92,3.82c0,0-0.01,0-0.01,0.01
                                          c-0.01,0-0.02,0.01-0.03,0.01C5.86,3.85,5.84,3.87,5.81,3.88C5.79,3.89,5.77,3.9,5.75,3.91C5.74,3.92,5.73,3.92,5.72,3.93
                                          C5.71,3.94,5.69,3.94,5.68,3.95C5.66,3.96,5.65,3.97,5.63,3.98C5.61,3.99,5.59,4.01,5.57,4.02c0,0-0.01,0-0.01,0.01
                                          C5.54,4.04,5.52,4.05,5.5,4.06C5.47,4.08,5.44,4.1,5.42,4.12C5.4,4.13,5.38,4.14,5.36,4.16C5.34,4.16,5.33,4.17,5.32,4.18
                                          C5.29,4.2,5.25,4.23,5.22,4.26c0,0-0.01,0-0.02,0.01C5.18,4.29,5.15,4.31,5.12,4.33c-0.08,0.06-0.16,0.13-0.24,0.2
                                          C4.86,4.55,4.85,4.56,4.83,4.58C4.82,4.58,4.82,4.59,4.81,4.6C4.77,4.63,4.74,4.67,4.7,4.7l0,0C4.68,4.72,4.67,4.74,4.65,4.75
                                          C4.64,4.76,4.63,4.77,4.62,4.78C4.61,4.79,4.6,4.81,4.58,4.83C4.58,4.83,4.57,4.84,4.56,4.85C4.55,4.86,4.54,4.87,4.53,4.88
                                          c0,0,0,0,0,0C4.5,4.91,4.48,4.93,4.46,4.96C4.46,4.96,4.45,4.97,4.44,4.98C4.43,4.99,4.42,5.01,4.41,5.02v0
                                          C4.39,5.04,4.38,5.06,4.36,5.08C4.35,5.1,4.33,5.12,4.32,5.14C4.3,5.16,4.28,5.18,4.26,5.21C4.25,5.22,4.24,5.24,4.23,5.25
                                          C4.22,5.27,4.2,5.29,4.19,5.31c0,0,0,0,0,0.01C4.16,5.35,4.14,5.37,4.12,5.4C4.11,5.43,4.09,5.45,4.07,5.48
                                          C4.07,5.49,4.06,5.5,4.06,5.51c0,0-0.01,0.01-0.01,0.01C4.04,5.53,4.04,5.53,4.03,5.55c0,0,0,0,0,0c0,0,0,0.01,0,0.01
                                          c0,0,0,0.01-0.01,0.01C4.01,5.59,3.99,5.61,3.98,5.64c0,0,0,0,0,0.01c-0.02,0.03-0.04,0.07-0.06,0.1c0,0,0,0,0,0.01
                                          C3.9,5.78,3.88,5.81,3.86,5.85C3.86,5.85,3.85,5.86,3.85,5.87c0,0,0,0.01-0.01,0.01C3.84,5.9,3.83,5.91,3.82,5.92
                                          C3.81,5.95,3.8,5.97,3.79,5.99c0,0.01-0.01,0.01-0.01,0.02C3.77,6.03,3.76,6.06,3.75,6.08C3.74,6.1,3.73,6.11,3.73,6.12
                                          C3.71,6.17,3.69,6.21,3.67,6.26c0,0.01-0.01,0.02-0.01,0.03C3.65,6.31,3.65,6.32,3.64,6.34c0,0.01-0.01,0.02-0.01,0.03
                                          C3.62,6.4,3.61,6.43,3.59,6.47C3.59,6.49,3.58,6.51,3.57,6.54c0,0.01-0.01,0.02-0.01,0.02c0,0,0,0.01,0,0.01
                                          C3.55,6.6,3.54,6.63,3.53,6.66C3.53,6.67,3.52,6.69,3.52,6.7c0,0.01,0,0.02-0.01,0.03c0,0.01,0,0.02-0.01,0.02
                                          C3.49,6.8,3.48,6.85,3.47,6.9C3.46,6.92,3.46,6.94,3.45,6.96c0,0,0,0.01,0,0.01c0,0,0,0.01,0,0.01c0,0.01,0,0.02-0.01,0.03
                                          c0,0.01,0,0.01,0,0.02c0,0.01,0,0.02-0.01,0.04c0,0.01,0,0.01,0,0.02C3.42,7.12,3.41,7.16,3.4,7.19c0,0.01,0,0.01,0,0.02
                                          c0,0.02-0.01,0.03-0.01,0.05c0.15-1.13,0.6-2.16,1.26-3.01c0.91-1.17,2.21-2,3.7-2.3c0.52-0.11,1.07-0.15,1.63-0.11
                                          c1.32,0.08,2.51,0.55,3.48,1.31C14.96,4.28,15.9,6.09,15.9,8.09z"
                            className="st2"
                          />
                        </g>
                      </g>
                      <linearGradient
                        y2="11.527"
                        x2="-2.1368"
                        y1="5.2507"
                        x1="9.2414"
                        gradientUnits="userSpaceOnUse"
                        id="SVGID_4_"
                      >
                        <stop
                          style={{ stopColor: "rgb(34, 50, 100)" }}
                          offset="7.680121e-03"
                        />
                        <stop
                          style={{ stopColor: "rgb(111, 162, 211)" }}
                          offset="0.8463"
                        />
                      </linearGradient>
                      <g className="ldl-layer">
                        <g className="ldl-ani">
                          <path
                            d="M15.9,7.84c0,0.08,0,0.17,0,0.25c0-2-0.94-3.81-2.43-4.96C12.5,2.38,11.3,1.9,9.98,1.82
                                          C9.42,1.79,8.88,1.83,8.35,1.94c-1.49,0.31-2.79,1.14-3.7,2.3C3.99,5.09,3.54,6.12,3.39,7.25c0,0.01,0,0.02,0,0.03
                                          c0,0.02-0.01,0.05-0.01,0.07c0,0.01,0,0.02,0,0.03v0.01c0,0.01,0,0.01,0,0.02c0,0,0,0.01,0,0.01c0,0.02,0,0.04-0.01,0.05
                                          c0,0.02-0.01,0.04-0.01,0.06c0,0.01,0,0.02,0,0.04c0,0.03-0.01,0.05-0.01,0.08c0,0.03,0,0.05-0.01,0.08c0,0.01,0,0.01,0,0.02
                                          c0,0.05,0,0.1-0.01,0.15c0,0.01,0,0.03,0,0.04c0,0,0,0,0,0c0,0.01,0,0.02,0,0.02c0,0,0,0.01,0,0.01c0,0.02,0,0.04,0,0.06
                                          c0,0.01,0,0.01,0,0.02v0c0,0.02,0,0.04,0,0.06c0,0.01,0,0.03,0,0.04c0,0.01,0,0.01,0,0.02c0,0.01,0,0.02,0,0.02
                                          c0,0.01,0,0.02,0,0.03c0,0.02,0,0.03,0,0.04c0,0.04,0.01,0.09,0.01,0.13c0,0.01,0,0.02,0,0.04c0.01,0.07,0.01,0.13,0.02,0.2
                                          c0,0.01,0,0.03,0.01,0.04c0,0.02,0,0.03,0.01,0.05c0,0,0,0.01,0,0.01c0,0.02,0,0.03,0.01,0.05c0,0.01,0,0.03,0.01,0.04
                                          c0.01,0.07,0.03,0.15,0.04,0.22c0.01,0.05,0.02,0.1,0.04,0.15c0,0.01,0.01,0.02,0.01,0.04C3.52,9.3,3.54,9.36,3.56,9.42
                                          c0.01,0.04,0.02,0.07,0.04,0.11C3.6,9.56,3.61,9.6,3.63,9.63c0,0.01,0,0.01,0.01,0.02c0.03,0.07,0.05,0.14,0.08,0.21
                                          c0.05,0.11,0.1,0.23,0.16,0.34c0.02,0.04,0.04,0.07,0.06,0.11c0.03,0.05,0.05,0.09,0.08,0.14c0.04,0.06,0.08,0.12,0.12,0.18
                                          c0.04,0.05,0.07,0.11,0.11,0.16c0.01,0.01,0.01,0.02,0.02,0.03c0.01,0.01,0.02,0.03,0.03,0.04c0.02,0.03,0.04,0.06,0.07,0.09
                                          c0.01,0.02,0.02,0.03,0.04,0.05c0.02,0.03,0.04,0.05,0.06,0.07c0.01,0.01,0.02,0.02,0.03,0.03c0.01,0.01,0.02,0.02,0.03,0.03
                                          c0.06,0.07,0.12,0.14,0.19,0.2c0.07,0.07,0.14,0.13,0.21,0.2c0.01,0.01,0.02,0.02,0.03,0.03c0.1,0.08,0.19,0.16,0.3,0.24
                                          c0.02,0.02,0.05,0.04,0.07,0.05c0.01,0.01,0.03,0.02,0.04,0.03c0.05,0.03,0.09,0.06,0.14,0.09c0.02,0.01,0.03,0.02,0.05,0.03
                                          c0.03,0.02,0.05,0.03,0.08,0.05c0.01,0,0.02,0.01,0.02,0.01c0.01,0,0.02,0.01,0.03,0.02c0.01,0.01,0.03,0.02,0.04,0.02
                                          c0.03,0.02,0.06,0.03,0.09,0.05c0.02,0.01,0.04,0.03,0.07,0.04C5.93,12.18,5.97,12.2,6,12.22c0.02,0.01,0.04,0.02,0.06,0.03
                                          c0.01,0,0.01,0.01,0.02,0.01c0.03,0.01,0.05,0.02,0.08,0.03c0.01,0.01,0.02,0.01,0.04,0.01c0.03,0.01,0.05,0.02,0.08,0.04
                                          c0.01,0,0.02,0.01,0.03,0.01c0.02,0.01,0.04,0.01,0.05,0.02c0.03,0.01,0.06,0.02,0.09,0.03c0.01,0,0.02,0.01,0.02,0.01
                                          c0.01,0,0.03,0.01,0.04,0.02c-1.07-0.32-2-0.91-2.73-1.67c-1.02-1.07-1.64-2.49-1.72-4C2.03,6.21,2.07,5.67,2.19,5.12
                                          C2.46,3.82,3.11,2.71,4,1.87c1.41-1.34,3.42-2.01,5.47-1.63c0.03,0,0.05,0.01,0.08,0.01c0.03,0.01,0.05,0.01,0.08,0.02
                                          c0.04,0.01,0.08,0.02,0.12,0.03c0.01,0,0.03,0.01,0.04,0.01c0.11,0.03,0.23,0.05,0.34,0.09c0.11,0.03,0.22,0.06,0.33,0.1
                                          c0.1,0.03,0.2,0.07,0.3,0.11c0.02,0.01,0.04,0.01,0.06,0.02c0.09,0.04,0.18,0.07,0.26,0.11c0.01,0,0.01,0,0.02,0.01
                                          c0.1,0.04,0.2,0.09,0.3,0.13c0.09,0.04,0.17,0.08,0.25,0.13C11.68,1,11.7,1.01,11.72,1.03c0.09,0.04,0.18,0.09,0.26,0.14
                                          c0,0,0.01,0.01,0.02,0.01c0.09,0.05,0.18,0.11,0.26,0.16c0.06,0.04,0.12,0.08,0.18,0.12c0.05,0.03,0.1,0.07,0.15,0.1
                                          c0.05,0.04,0.11,0.08,0.16,0.12c0.04,0.03,0.08,0.06,0.12,0.09c0.15,0.12,0.3,0.25,0.45,0.38c0.08,0.07,0.16,0.15,0.24,0.22
                                          c0.05,0.05,0.11,0.11,0.16,0.16c0.03,0.03,0.06,0.06,0.09,0.1c0.15,0.16,0.29,0.33,0.43,0.51c0.05,0.06,0.1,0.13,0.14,0.19
                                          c0.01,0.01,0.02,0.03,0.03,0.04c0.06,0.09,0.12,0.17,0.18,0.26c0,0,0,0.01,0,0.01c0.06,0.08,0.11,0.17,0.16,0.26
                                          c0.01,0.01,0.02,0.03,0.03,0.04c0.05,0.09,0.1,0.17,0.15,0.26c0.05,0.1,0.1,0.19,0.15,0.29c0.05,0.1,0.1,0.19,0.14,0.29
                                          c0.04,0.1,0.08,0.2,0.12,0.3c0,0,0,0,0,0.01c0.04,0.1,0.08,0.2,0.11,0.31c0.04,0.1,0.07,0.2,0.1,0.3c0,0,0,0.01,0,0.01
                                          c0.03,0.1,0.06,0.2,0.08,0.3c0.01,0.04,0.02,0.08,0.03,0.12c0.02,0.07,0.03,0.14,0.05,0.21c0.02,0.07,0.03,0.15,0.04,0.22
                                          c0.02,0.09,0.03,0.18,0.05,0.27c0,0.02,0.01,0.03,0.01,0.04c0.01,0.05,0.02,0.1,0.02,0.16c0.01,0.07,0.02,0.13,0.02,0.2
                                          c0.01,0.06,0.01,0.12,0.02,0.19c0.01,0.06,0.01,0.13,0.01,0.19c0,0.05,0.01,0.11,0.01,0.16C15.9,7.79,15.9,7.81,15.9,7.84z"
                            className="st3"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LoaderComponent;
