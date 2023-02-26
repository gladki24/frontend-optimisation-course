{
  "lighthouseVersion": "9.6.8",
  "requestedUrl": "https://frontend-optimisation-course-three.vercel.app/news-single.html",
  "finalUrl": "https://frontend-optimisation-course-three.vercel.app/news-single.html",
  "fetchTime": "2023-02-26T16:52:56.170Z",
  "gatherMode": "navigation",
  "runWarnings": [
    "Chrome extensions negatively affected this page's load performance. Try auditing the page in incognito mode or from a Chrome profile without extensions."
  ],
  "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
  "environment": {
    "networkUserAgent": "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4695.0 Mobile Safari/537.36 Chrome-Lighthouse",
    "hostUserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
    "benchmarkIndex": 2883.5,
    "credits": {
      "axe-core": "4.4.1"
    }
  },
  "audits": {
    "is-on-https": {
      "id": "is-on-https",
      "title": "Uses HTTPS",
      "description": "All sites should be protected with HTTPS, even ones that don't handle sensitive data. This includes avoiding [mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), where some resources are loaded over HTTP despite the initial request being served over HTTPS. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more](https://web.dev/is-on-https/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "service-worker": {
      "id": "service-worker",
      "title": "Does not register a service worker that controls page and `start_url`",
      "description": "The service worker is the technology that enables your app to use many Progressive Web App features, such as offline, add to homescreen, and push notifications. [Learn more](https://web.dev/service-worker/).",
      "score": 0,
      "scoreDisplayMode": "binary"
    },
    "viewport": {
      "id": "viewport",
      "title": "Has a `<meta name=\"viewport\">` tag with `width` or `initial-scale`",
      "description": "A `<meta name=\"viewport\">` not only optimizes your app for mobile screen sizes, but also prevents [a 300 millisecond delay to user input](https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away). [Learn more](https://web.dev/viewport/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "warnings": []
    },
    "first-contentful-paint": {
      "id": "first-contentful-paint",
      "title": "First Contentful Paint",
      "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://web.dev/first-contentful-paint/).",
      "score": 0.39,
      "scoreDisplayMode": "numeric",
      "numericValue": 3328.99215,
      "numericUnit": "millisecond",
      "displayValue": "3.3 s"
    },
    "largest-contentful-paint": {
      "id": "largest-contentful-paint",
      "title": "Largest Contentful Paint",
      "description": "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more](https://web.dev/lighthouse-largest-contentful-paint/)",
      "score": 0,
      "scoreDisplayMode": "numeric",
      "numericValue": 16535.498700000004,
      "numericUnit": "millisecond",
      "displayValue": "16.5 s"
    },
    "first-meaningful-paint": {
      "id": "first-meaningful-paint",
      "title": "First Meaningful Paint",
      "description": "First Meaningful Paint measures when the primary content of a page is visible. [Learn more](https://web.dev/first-meaningful-paint/).",
      "score": 0.66,
      "scoreDisplayMode": "numeric",
      "numericValue": 3328.99215,
      "numericUnit": "millisecond",
      "displayValue": "3.3 s"
    },
    "speed-index": {
      "id": "speed-index",
      "title": "Speed Index",
      "description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://web.dev/speed-index/).",
      "score": 0.9,
      "scoreDisplayMode": "numeric",
      "numericValue": 3328.99215,
      "numericUnit": "millisecond",
      "displayValue": "3.3 s"
    },
    "screenshot-thumbnails": {
      "id": "screenshot-thumbnails",
      "title": "Screenshot Thumbnails",
      "description": "This is what the load of your site looked like.",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "filmstrip",
        "scale": 3000,
        "items": [
          {
            "timing": 300,
            "timestamp": 4716487827,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 600,
            "timestamp": 4716787827,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 900,
            "timestamp": 4717087827,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 1200,
            "timestamp": 4717387827,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 1500,
            "timestamp": 4717687827,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 1800,
            "timestamp": 4717987827,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 2100,
            "timestamp": 4718287827,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 2400,
            "timestamp": 4718587827,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 2700,
            "timestamp": 4718887827,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 3000,
            "timestamp": 4719187827,
            "data": "data:image/jpeg;base64,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"
          }
        ]
      }
    },
    "final-screenshot": {
      "id": "final-screenshot",
      "title": "Final Screenshot",
      "description": "The last screenshot captured of the pageload.",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "screenshot",
        "timing": 847,
        "timestamp": 4717035105,
        "data": "data:image/jpeg;base64,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"
      }
    },
    "total-blocking-time": {
      "id": "total-blocking-time",
      "title": "Total Blocking Time",
      "description": "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more](https://web.dev/lighthouse-total-blocking-time/).",
      "score": 0.99,
      "scoreDisplayMode": "numeric",
      "numericValue": 74.5,
      "numericUnit": "millisecond",
      "displayValue": "70 ms"
    },
    "max-potential-fid": {
      "id": "max-potential-fid",
      "title": "Max Potential First Input Delay",
      "description": "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more](https://web.dev/lighthouse-max-potential-fid/).",
      "score": 0.97,
      "scoreDisplayMode": "numeric",
      "numericValue": 92,
      "numericUnit": "millisecond",
      "displayValue": "90 ms"
    },
    "cumulative-layout-shift": {
      "id": "cumulative-layout-shift",
      "title": "Cumulative Layout Shift",
      "description": "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more](https://web.dev/cls/).",
      "score": 0.62,
      "scoreDisplayMode": "numeric",
      "numericValue": 0.19798971093750004,
      "numericUnit": "unitless",
      "displayValue": "0.198",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "cumulativeLayoutShiftMainFrame": 0.19798971093750004,
            "totalCumulativeLayoutShift": 0.19798971093750004
          }
        ]
      }
    },
    "errors-in-console": {
      "id": "errors-in-console",
      "title": "Browser errors were logged to the console",
      "description": "Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more](https://web.dev/errors-in-console/)",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "sourceLocation",
            "itemType": "source-location",
            "text": "Source"
          },
          {
            "key": "description",
            "itemType": "code",
            "text": "Description"
          }
        ],
        "items": [
          {
            "source": "javascript",
            "description": "Access to fetch at 'https://va.tawk.to/v1/session/start' from origin 'https://frontend-optimisation-course-three.vercel.app' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.",
            "sourceLocation": {
              "type": "source-location",
              "url": "https://frontend-optimisation-course-three.vercel.app/news-single.html",
              "urlProvider": "network",
              "line": 0,
              "column": 0
            }
          },
          {
            "source": "network",
            "description": "Failed to load resource: net::ERR_FAILED",
            "sourceLocation": {
              "type": "source-location",
              "url": "https://va.tawk.to/v1/session/start",
              "urlProvider": "network",
              "line": 0,
              "column": 0
            }
          }
        ]
      }
    },
    "server-response-time": {
      "id": "server-response-time",
      "title": "Initial server response time was short",
      "description": "Keep the server response time for the main document short because all other requests depend on it. [Learn more](https://web.dev/time-to-first-byte/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "numericValue": 68.273,
      "numericUnit": "millisecond",
      "displayValue": "Root document took 70 ms",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "responseTime",
            "valueType": "timespanMs",
            "label": "Time Spent"
          }
        ],
        "items": [
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/news-single.html",
            "responseTime": 68.273
          }
        ],
        "overallSavingsMs": -31.727000000000004
      }
    },
    "interactive": {
      "id": "interactive",
      "title": "Time to Interactive",
      "description": "Time to interactive is the amount of time it takes for the page to become fully interactive. [Learn more](https://web.dev/interactive/).",
      "score": 0.45,
      "scoreDisplayMode": "numeric",
      "numericValue": 7701.958100000002,
      "numericUnit": "millisecond",
      "displayValue": "7.7 s"
    },
    "user-timings": {
      "id": "user-timings",
      "title": "User Timing marks and measures",
      "description": "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more](https://web.dev/user-timings/).",
      "score": null,
      "scoreDisplayMode": "notApplicable",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "critical-request-chains": {
      "id": "critical-request-chains",
      "title": "Avoid chaining critical requests",
      "description": "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn more](https://web.dev/critical-request-chains/).",
      "score": null,
      "scoreDisplayMode": "informative",
      "displayValue": "10 chains found",
      "details": {
        "type": "criticalrequestchain",
        "chains": {
          "3272518C66C057CB355E80B89F9272AA": {
            "request": {
              "url": "https://frontend-optimisation-course-three.vercel.app/news-single.html",
              "startTime": 4716.189061,
              "endTime": 4716.258226,
              "responseReceivedTime": 4716.257795,
              "transferSize": 5264
            },
            "children": {
              "26504.2": {
                "request": {
                  "url": "https://frontend-optimisation-course-three.vercel.app/assets/css/homework/app.css",
                  "startTime": 4716.264251,
                  "endTime": 4716.299047,
                  "responseReceivedTime": 4716.297358999999,
                  "transferSize": 21979
                }
              },
              "26504.3": {
                "request": {
                  "url": "https://js.stripe.com/v3/",
                  "startTime": 4716.264759,
                  "endTime": 4716.312545,
                  "responseReceivedTime": 4716.30267,
                  "transferSize": 107649
                }
              },
              "26504.4": {
                "request": {
                  "url": "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,900;1,100;1,200;1,300;1,400;1,500",
                  "startTime": 4716.264887,
                  "endTime": 4716.300426,
                  "responseReceivedTime": 4716.2994690000005,
                  "transferSize": 967
                },
                "children": {
                  "26504.49": {
                    "request": {
                      "url": "https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2",
                      "startTime": 4716.350488,
                      "endTime": 4716.370111,
                      "responseReceivedTime": 4716.363822,
                      "transferSize": 30932
                    }
                  }
                }
              },
              "26504.5": {
                "request": {
                  "url": "https://use.typekit.net/lna1ryl.js",
                  "startTime": 4716.264966,
                  "endTime": 4716.274141,
                  "responseReceivedTime": 4716.273757999999,
                  "transferSize": 6894
                }
              },
              "26504.6": {
                "request": {
                  "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/jquery/dist/jquery.min.js",
                  "startTime": 4716.265037,
                  "endTime": 4716.316096,
                  "responseReceivedTime": 4716.299292,
                  "transferSize": 31708
                }
              },
              "26504.7": {
                "request": {
                  "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/requirejs/require.js",
                  "startTime": 4716.265168,
                  "endTime": 4716.31631,
                  "responseReceivedTime": 4716.315855,
                  "transferSize": 6774
                }
              },
              "26504.80": {
                "request": {
                  "url": "https://use.typekit.net/af/bc719c/00000000000000000001499c/23/l?subset_id=2&fvd=n7&v=3",
                  "startTime": 4716.346913,
                  "endTime": 4716.356316,
                  "responseReceivedTime": 4716.355138,
                  "transferSize": 14838
                }
              },
              "26504.83": {
                "request": {
                  "url": "https://use.typekit.net/af/c60268/0000000000000000000148a9/23/l?subset_id=2&fvd=i7&v=3",
                  "startTime": 4716.347222,
                  "endTime": 4716.357897,
                  "responseReceivedTime": 4716.357381000001,
                  "transferSize": 18658
                }
              },
              "26504.86": {
                "request": {
                  "url": "https://use.typekit.net/af/42fca5/0000000000000000000148a4/23/l?subset_id=2&fvd=n4&v=3",
                  "startTime": 4716.347285,
                  "endTime": 4716.358868,
                  "responseReceivedTime": 4716.358692,
                  "transferSize": 17291
                }
              },
              "26504.89": {
                "request": {
                  "url": "https://use.typekit.net/af/37c6ec/0000000000000000000148a5/23/l?subset_id=2&fvd=i4&v=3",
                  "startTime": 4716.347345,
                  "endTime": 4716.357251,
                  "responseReceivedTime": 4716.356513,
                  "transferSize": 18742
                }
              }
            }
          }
        },
        "longestChain": {
          "duration": 181.05000000014115,
          "length": 3,
          "transferSize": 30932
        }
      }
    },
    "redirects": {
      "id": "redirects",
      "title": "Avoid multiple page redirects",
      "description": "Redirects introduce additional delays before the page can be loaded. [Learn more](https://web.dev/redirects/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0
      }
    },
    "installable-manifest": {
      "id": "installable-manifest",
      "title": "Web app manifest or service worker do not meet the installability requirements",
      "description": "Service worker is the technology that enables your app to use many Progressive Web App features, such as offline, add to homescreen, and push notifications. With proper service worker and manifest implementations, browsers can proactively prompt users to add your app to their homescreen, which can lead to higher engagement. [Learn more](https://web.dev/installable-manifest/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "numericValue": 1,
      "numericUnit": "element",
      "displayValue": "1 reason",
      "warnings": [],
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "reason",
            "itemType": "text",
            "text": "Failure reason"
          }
        ],
        "items": [
          {
            "reason": "Page has no manifest <link> URL"
          }
        ],
        "debugData": {
          "type": "debugdata",
          "manifestUrl": null
        }
      }
    },
    "apple-touch-icon": {
      "id": "apple-touch-icon",
      "title": "Does not provide a valid `apple-touch-icon`",
      "description": "For ideal appearance on iOS when users add a progressive web app to the home screen, define an `apple-touch-icon`. It must point to a non-transparent 192px (or 180px) square PNG. [Learn More](https://web.dev/apple-touch-icon/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "warnings": []
    },
    "splash-screen": {
      "id": "splash-screen",
      "title": "Is not configured for a custom splash screen",
      "description": "A themed splash screen ensures a high-quality experience when users launch your app from their homescreens. [Learn more](https://web.dev/splash-screen/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "explanation": "Failures: No manifest was fetched.",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "failures": [
              "No manifest was fetched"
            ],
            "isParseFailure": true,
            "parseFailureReason": "No manifest was fetched"
          }
        ]
      }
    },
    "themed-omnibox": {
      "id": "themed-omnibox",
      "title": "Does not set a theme color for the address bar.",
      "description": "The browser address bar can be themed to match your site. [Learn more](https://web.dev/themed-omnibox/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "explanation": "Failures: No manifest was fetched,\nNo `<meta name=\"theme-color\">` tag found.",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "failures": [
              "No manifest was fetched",
              "No `<meta name=\"theme-color\">` tag found"
            ],
            "themeColor": null,
            "isParseFailure": true,
            "parseFailureReason": "No manifest was fetched"
          }
        ]
      }
    },
    "maskable-icon": {
      "id": "maskable-icon",
      "title": "Manifest doesn't have a maskable icon",
      "description": "A maskable icon ensures that the image fills the entire shape without being letterboxed when installing the app on a device. [Learn more](https://web.dev/maskable-icon-audit/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "explanation": "No manifest was fetched"
    },
    "content-width": {
      "id": "content-width",
      "title": "Content is sized correctly for the viewport",
      "description": "If the width of your app's content doesn't match the width of the viewport, your app might not be optimized for mobile screens. [Learn more](https://web.dev/content-width/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "image-aspect-ratio": {
      "id": "image-aspect-ratio",
      "title": "Displays images with correct aspect ratio",
      "description": "Image display dimensions should match natural aspect ratio. [Learn more](https://web.dev/image-aspect-ratio/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "image-size-responsive": {
      "id": "image-size-responsive",
      "title": "Serves images with appropriate resolution",
      "description": "Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity. [Learn more](https://web.dev/serve-responsive-images/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "preload-fonts": {
      "id": "preload-fonts",
      "title": "Fonts with `font-display: optional` are preloaded",
      "description": "Preload `optional` fonts so first-time visitors may use them. [Learn more](https://web.dev/preload-optional-fonts/)",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "deprecations": {
      "id": "deprecations",
      "title": "Avoids deprecated APIs",
      "description": "Deprecated APIs will eventually be removed from the browser. [Learn more](https://web.dev/deprecations/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "mainthread-work-breakdown": {
      "id": "mainthread-work-breakdown",
      "title": "Minimize main-thread work",
      "description": "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/mainthread-work-breakdown/)",
      "score": 0.87,
      "scoreDisplayMode": "numeric",
      "numericValue": 2143.0079999999925,
      "numericUnit": "millisecond",
      "displayValue": "2.1 s",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "groupLabel",
            "itemType": "text",
            "text": "Category"
          },
          {
            "key": "duration",
            "itemType": "ms",
            "granularity": 1,
            "text": "Time Spent"
          }
        ],
        "items": [
          {
            "group": "other",
            "groupLabel": "Other",
            "duration": 778.1239999999973
          },
          {
            "group": "scriptEvaluation",
            "groupLabel": "Script Evaluation",
            "duration": 775.5759999999951
          },
          {
            "group": "styleLayout",
            "groupLabel": "Style & Layout",
            "duration": 216.2840000000002
          },
          {
            "group": "parseHTML",
            "groupLabel": "Parse HTML & CSS",
            "duration": 148.876
          },
          {
            "group": "paintCompositeRender",
            "groupLabel": "Rendering",
            "duration": 115.75199999999994
          },
          {
            "group": "scriptParseCompile",
            "groupLabel": "Script Parsing & Compilation",
            "duration": 96.25600000000001
          },
          {
            "group": "garbageCollection",
            "groupLabel": "Garbage Collection",
            "duration": 12.139999999999992
          }
        ]
      }
    },
    "bootup-time": {
      "id": "bootup-time",
      "title": "JavaScript execution time",
      "description": "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/bootup-time/).",
      "score": 0.98,
      "scoreDisplayMode": "numeric",
      "numericValue": 724.3639999999998,
      "numericUnit": "millisecond",
      "displayValue": "0.7 s",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "total",
            "granularity": 1,
            "itemType": "ms",
            "text": "Total CPU Time"
          },
          {
            "key": "scripting",
            "granularity": 1,
            "itemType": "ms",
            "text": "Script Evaluation"
          },
          {
            "key": "scriptParseCompile",
            "granularity": 1,
            "itemType": "ms",
            "text": "Script Parse"
          }
        ],
        "items": [
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/news-single.html",
            "total": 922.136,
            "scripting": 211.06799999999984,
            "scriptParseCompile": 2.044
          },
          {
            "url": "Unattributable",
            "total": 285.4080000000012,
            "scripting": 10.139999999999995,
            "scriptParseCompile": 0
          },
          {
            "url": "chrome-extension://kjacjjdnoddnpbbcjilcajfhhbdhkpgk/content.js",
            "total": 188.19600000000005,
            "scripting": 146.72400000000005,
            "scriptParseCompile": 35.86
          },
          {
            "url": "https://unpkg.com/tailwindcss@%5E2/dist/tailwind.min.css",
            "total": 146.612,
            "scripting": 0,
            "scriptParseCompile": 0
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/TweenMax.min.js",
            "total": 143.93999999999986,
            "scripting": 72.34399999999991,
            "scriptParseCompile": 3.124
          },
          {
            "url": "https://www.googletagmanager.com/gtag/js?id=G-VG76XBJDZM&l=dataLayer&cx=c",
            "total": 96.21999999999997,
            "scripting": 74.596,
            "scriptParseCompile": 7.344
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-common.js",
            "total": 95.92400000000006,
            "scripting": 87.80000000000005,
            "scriptParseCompile": 6.608
          },
          {
            "url": "https://js.stripe.com/v3/",
            "total": 78.70400000000001,
            "scripting": 51.48000000000001,
            "scriptParseCompile": 15.232
          }
        ],
        "summary": {
          "wastedMs": 724.3639999999998
        }
      }
    },
    "uses-rel-preload": {
      "id": "uses-rel-preload",
      "title": "Preload key requests",
      "description": "Consider using `<link rel=preload>` to prioritize fetching resources that are currently requested later in page load. [Learn more](https://web.dev/uses-rel-preload/).",
      "score": null,
      "scoreDisplayMode": "notApplicable",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0
      }
    },
    "uses-rel-preconnect": {
      "id": "uses-rel-preconnect",
      "title": "Preconnect to required origins",
      "description": "Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn more](https://web.dev/uses-rel-preconnect/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0
      }
    },
    "font-display": {
      "id": "font-display",
      "title": "Ensure text remains visible during webfont load",
      "description": "Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://web.dev/font-display/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "warnings": [],
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "wastedMs",
            "itemType": "ms",
            "text": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "https://use.typekit.net/af/bc719c/00000000000000000001499c/23/l?subset_id=2&fvd=n7&v=3",
            "wastedMs": 9.403000000020256
          },
          {
            "url": "https://use.typekit.net/af/c60268/0000000000000000000148a9/23/l?subset_id=2&fvd=i7&v=3",
            "wastedMs": 10.674999999537249
          },
          {
            "url": "https://use.typekit.net/af/42fca5/0000000000000000000148a4/23/l?subset_id=2&fvd=n4&v=3",
            "wastedMs": 11.583000000428001
          },
          {
            "url": "https://use.typekit.net/af/37c6ec/0000000000000000000148a5/23/l?subset_id=2&fvd=i4&v=3",
            "wastedMs": 9.906000000228232
          },
          {
            "url": "https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2",
            "wastedMs": 19.623000000137836
          }
        ]
      }
    },
    "diagnostics": {
      "id": "diagnostics",
      "title": "Diagnostics",
      "description": "Collection of useful page vitals.",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "numRequests": 66,
            "numScripts": 28,
            "numStylesheets": 3,
            "numFonts": 5,
            "numTasks": 1313,
            "numTasksOver10ms": 11,
            "numTasksOver25ms": 5,
            "numTasksOver50ms": 2,
            "numTasksOver100ms": 1,
            "numTasksOver500ms": 0,
            "rtt": 0.0091,
            "throughput": 200243799.0534002,
            "maxRtt": 0.0691,
            "maxServerLatency": 185.61390000000003,
            "totalByteWeight": 4263792,
            "totalTaskTime": 535.7519999999986,
            "mainDocumentTransferSize": 5264
          }
        ]
      }
    },
    "network-requests": {
      "id": "network-requests",
      "title": "Network Requests",
      "description": "Lists the network requests that were made during page load.",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "protocol",
            "itemType": "text",
            "text": "Protocol"
          },
          {
            "key": "startTime",
            "itemType": "ms",
            "granularity": 1,
            "text": "Start Time"
          },
          {
            "key": "endTime",
            "itemType": "ms",
            "granularity": 1,
            "text": "End Time"
          },
          {
            "key": "transferSize",
            "itemType": "bytes",
            "displayUnit": "kb",
            "granularity": 1,
            "text": "Transfer Size"
          },
          {
            "key": "resourceSize",
            "itemType": "bytes",
            "displayUnit": "kb",
            "granularity": 1,
            "text": "Resource Size"
          },
          {
            "key": "statusCode",
            "itemType": "text",
            "text": "Status Code"
          },
          {
            "key": "mimeType",
            "itemType": "text",
            "text": "MIME Type"
          },
          {
            "key": "resourceType",
            "itemType": "text",
            "text": "Resource Type"
          }
        ],
        "items": [
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/news-single.html",
            "protocol": "h2",
            "rendererStartTime": 0,
            "startTime": 0.849000000016531,
            "endTime": 70.01399999990099,
            "finished": true,
            "transferSize": 5264,
            "resourceSize": 23001,
            "statusCode": 200,
            "mimeType": "text/html",
            "resourceType": "Document",
            "priority": "VeryHigh",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/css/homework/app.css",
            "protocol": "h2",
            "rendererStartTime": 72.84400000025926,
            "startTime": 76.0389999995823,
            "endTime": 110.83500000040658,
            "finished": true,
            "transferSize": 21979,
            "resourceSize": 113121,
            "statusCode": 200,
            "mimeType": "text/css",
            "resourceType": "Stylesheet",
            "priority": "VeryHigh",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://js.stripe.com/v3/",
            "protocol": "h2",
            "rendererStartTime": 73.1050000003961,
            "startTime": 76.54699999966397,
            "endTime": 124.33299999975134,
            "finished": true,
            "transferSize": 107649,
            "resourceSize": 448062,
            "statusCode": 200,
            "mimeType": "text/javascript",
            "resourceType": "Script",
            "priority": "High",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,900;1,100;1,200;1,300;1,400;1,500",
            "protocol": "h2",
            "rendererStartTime": 73.24200000039127,
            "startTime": 76.6750000002503,
            "endTime": 112.21399999976711,
            "finished": true,
            "transferSize": 967,
            "resourceSize": 19747,
            "statusCode": 200,
            "mimeType": "text/css",
            "resourceType": "Stylesheet",
            "priority": "VeryHigh",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://use.typekit.net/lna1ryl.js",
            "protocol": "h2",
            "rendererStartTime": 73.36899999972957,
            "startTime": 76.75399999970978,
            "endTime": 85.92899999985093,
            "finished": true,
            "transferSize": 6894,
            "resourceSize": 17286,
            "statusCode": 200,
            "mimeType": "text/javascript",
            "resourceType": "Script",
            "priority": "High",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/jquery/dist/jquery.min.js",
            "protocol": "h2",
            "rendererStartTime": 73.48199999978533,
            "startTime": 76.82500000009895,
            "endTime": 127.88399999953981,
            "finished": true,
            "transferSize": 31708,
            "resourceSize": 84280,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "High",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/requirejs/require.js",
            "protocol": "h2",
            "rendererStartTime": 73.58600000043225,
            "startTime": 76.9559999998819,
            "endTime": 128.09800000013638,
            "finished": true,
            "transferSize": 6774,
            "resourceSize": 15106,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "High",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/logo.svg",
            "protocol": "h2",
            "rendererStartTime": 73.70100000025559,
            "startTime": 142.78899999953865,
            "endTime": 174.44499999965046,
            "finished": true,
            "transferSize": 1979,
            "resourceSize": 5000,
            "statusCode": 200,
            "mimeType": "image/svg+xml",
            "resourceType": "Image",
            "priority": "High",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/post.png",
            "protocol": "h2",
            "rendererStartTime": 73.75799999954324,
            "startTime": 152.95100000003004,
            "endTime": 242.8650000001653,
            "finished": true,
            "transferSize": 903091,
            "resourceSize": 902454,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/news-example.jpg",
            "protocol": "h2",
            "rendererStartTime": 73.80699999976059,
            "startTime": 154.44399999978486,
            "endTime": 223.4969999999521,
            "finished": true,
            "transferSize": 91436,
            "resourceSize": 91238,
            "statusCode": 200,
            "mimeType": "image/jpeg",
            "resourceType": "Image",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/post2.png",
            "protocol": "h2",
            "rendererStartTime": 73.85700000031648,
            "startTime": 154.57400000013877,
            "endTime": 300.850999999966,
            "finished": true,
            "transferSize": 1373036,
            "resourceSize": 1372141,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/post4.png",
            "protocol": "h2",
            "rendererStartTime": 73.90200000008917,
            "startTime": 154.65599999970436,
            "endTime": 281.1499999997977,
            "finished": true,
            "transferSize": 837080,
            "resourceSize": 836492,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image",
            "priority": "High",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://unpkg.com/tailwindcss@%5E2/dist/tailwind.min.css",
            "protocol": "h2",
            "rendererStartTime": 76.13800000035553,
            "startTime": 154.95499999997264,
            "endTime": 194.65500000023894,
            "finished": true,
            "transferSize": 176,
            "resourceSize": 0,
            "statusCode": 302,
            "mimeType": "text/plain",
            "priority": "VeryLow",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://www.googletagmanager.com/gtm.js?id=GTM-TGDSWZ8",
            "protocol": "h2",
            "rendererStartTime": 153.77400000033958,
            "startTime": 154.73500000007334,
            "endTime": 213.7110000003304,
            "finished": true,
            "transferSize": 39564,
            "resourceSize": 100307,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://embed.tawk.to/5fc2ba00920fc91564cb9b3c/default",
            "protocol": "h2",
            "rendererStartTime": 154.03200000037032,
            "startTime": 154.84600000036153,
            "endTime": 175.1800000001822,
            "finished": true,
            "transferSize": 734,
            "resourceSize": 2121,
            "statusCode": 200,
            "mimeType": "application/x-javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://js.stripe.com/v3/m-outer-93afeeb17bc37e711759584dbfc50d47.html",
            "protocol": "h2",
            "rendererStartTime": 157.58699999969394,
            "startTime": 158.88900000027206,
            "endTime": 193.22099999953934,
            "finished": true,
            "transferSize": 1192,
            "resourceSize": 400,
            "statusCode": 200,
            "mimeType": "text/html",
            "resourceType": "Document",
            "priority": "VeryHigh"
          },
          {
            "url": "https://use.typekit.net/af/bc719c/00000000000000000001499c/23/l?subset_id=2&fvd=n7&v=3",
            "protocol": "h2",
            "rendererStartTime": 156.97199999976874,
            "startTime": 158.70100000029197,
            "endTime": 168.10400000031223,
            "finished": true,
            "transferSize": 14838,
            "resourceSize": 14612,
            "statusCode": 200,
            "mimeType": "application/font-woff2",
            "resourceType": "Font",
            "priority": "VeryHigh",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://use.typekit.net/af/c60268/0000000000000000000148a9/23/l?subset_id=2&fvd=i7&v=3",
            "protocol": "h2",
            "rendererStartTime": 157.35399999994115,
            "startTime": 159.01000000030763,
            "endTime": 169.68499999984488,
            "finished": true,
            "transferSize": 18658,
            "resourceSize": 18424,
            "statusCode": 200,
            "mimeType": "application/font-woff2",
            "resourceType": "Font",
            "priority": "VeryHigh",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://use.typekit.net/af/42fca5/0000000000000000000148a4/23/l?subset_id=2&fvd=n4&v=3",
            "protocol": "h2",
            "rendererStartTime": 157.5670000001992,
            "startTime": 159.0729999998075,
            "endTime": 170.6560000002355,
            "finished": true,
            "transferSize": 17291,
            "resourceSize": 17056,
            "statusCode": 200,
            "mimeType": "application/font-woff2",
            "resourceType": "Font",
            "priority": "VeryHigh",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://use.typekit.net/af/37c6ec/0000000000000000000148a5/23/l?subset_id=2&fvd=i4&v=3",
            "protocol": "h2",
            "rendererStartTime": 157.7580000002854,
            "startTime": 159.13300000011077,
            "endTime": 169.039000000339,
            "finished": true,
            "transferSize": 18742,
            "resourceSize": 18508,
            "statusCode": 200,
            "mimeType": "application/font-woff2",
            "resourceType": "Font",
            "priority": "VeryHigh",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/ico-burger.svg",
            "protocol": "h2",
            "rendererStartTime": 158.73300000021118,
            "startTime": 159.22299999965617,
            "endTime": 301.8160000001444,
            "finished": true,
            "transferSize": 908,
            "resourceSize": 829,
            "statusCode": 200,
            "mimeType": "image/svg+xml",
            "resourceType": "Image",
            "priority": "High",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/bg-listings-grad.jpg",
            "protocol": "h2",
            "rendererStartTime": 158.9109999995344,
            "startTime": 174.56899999979214,
            "endTime": 305.2610000004279,
            "finished": true,
            "transferSize": 139874,
            "resourceSize": 139652,
            "statusCode": 200,
            "mimeType": "image/jpeg",
            "resourceType": "Image",
            "priority": "High",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/ico-time.svg",
            "protocol": "h2",
            "rendererStartTime": 159.15200000017649,
            "startTime": 188.78899999981513,
            "endTime": 307.37800000042625,
            "finished": true,
            "transferSize": 971,
            "resourceSize": 818,
            "statusCode": 200,
            "mimeType": "image/svg+xml",
            "resourceType": "Image",
            "priority": "High",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/btn-grad-blue.svg",
            "protocol": "h2",
            "rendererStartTime": 159.3860000002678,
            "startTime": 188.5839999995369,
            "endTime": 307.0180000004257,
            "finished": true,
            "transferSize": 1126,
            "resourceSize": 981,
            "statusCode": 200,
            "mimeType": "image/svg+xml",
            "resourceType": "Image",
            "priority": "High",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/btn-share.svg",
            "protocol": "h2",
            "rendererStartTime": 159.5530000004146,
            "startTime": 188.8310000003912,
            "endTime": 307.22100000002683,
            "finished": true,
            "transferSize": 759,
            "resourceSize": 1252,
            "statusCode": 200,
            "mimeType": "image/svg+xml",
            "resourceType": "Image",
            "priority": "High",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/ico-tiles.svg",
            "protocol": "h2",
            "rendererStartTime": 159.83299999970768,
            "startTime": 301.17799999970885,
            "endTime": 355.8309999998528,
            "finished": true,
            "transferSize": 1022,
            "resourceSize": 887,
            "statusCode": 200,
            "mimeType": "image/svg+xml",
            "resourceType": "Image",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/bg-dark-grain.png",
            "protocol": "h2",
            "rendererStartTime": 159.97499999957654,
            "startTime": 302.0280000000639,
            "endTime": 335.23200000036013,
            "finished": true,
            "transferSize": 3086,
            "resourceSize": 2948,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/ico-rss.svg",
            "protocol": "h2",
            "rendererStartTime": 160.11100000014267,
            "startTime": 306.05199999990873,
            "endTime": 340.530000000399,
            "finished": true,
            "transferSize": 874,
            "resourceSize": 740,
            "statusCode": 200,
            "mimeType": "image/svg+xml",
            "resourceType": "Image",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/link-arrow-grey.svg",
            "protocol": "h2",
            "rendererStartTime": 160.41599999971368,
            "startTime": 307.54700000034063,
            "endTime": 341.3540000001376,
            "finished": true,
            "transferSize": 904,
            "resourceSize": 772,
            "statusCode": 200,
            "mimeType": "image/svg+xml",
            "resourceType": "Image",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/link-arrow-white.svg",
            "protocol": "h2",
            "rendererStartTime": 160.6179999998858,
            "startTime": 307.6069999997344,
            "endTime": 340.71599999970203,
            "finished": true,
            "transferSize": 991,
            "resourceSize": 772,
            "statusCode": 200,
            "mimeType": "image/svg+xml",
            "resourceType": "Image",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/list-arrow-blue.svg",
            "protocol": "h2",
            "rendererStartTime": 160.79199999967386,
            "startTime": 307.8249999998661,
            "endTime": 343.02999999999884,
            "finished": true,
            "transferSize": 794,
            "resourceSize": 1039,
            "statusCode": 200,
            "mimeType": "image/svg+xml",
            "resourceType": "Image",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/btn-twitter-white.svg",
            "protocol": "h2",
            "rendererStartTime": 161.32999999990716,
            "startTime": 335.42599999964295,
            "endTime": 367.45499999960884,
            "finished": true,
            "transferSize": 801,
            "resourceSize": 1313,
            "statusCode": 200,
            "mimeType": "image/svg+xml",
            "resourceType": "Image",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/btn-gplus-white.svg",
            "protocol": "h2",
            "rendererStartTime": 161.4820000004329,
            "startTime": 340.8129999997982,
            "endTime": 372.91800000002695,
            "finished": true,
            "transferSize": 967,
            "resourceSize": 1691,
            "statusCode": 200,
            "mimeType": "image/svg+xml",
            "resourceType": "Image",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/btn-facebook-white.svg",
            "protocol": "h2",
            "rendererStartTime": 161.62999999960448,
            "startTime": 340.8849999996164,
            "endTime": 385.03399999990506,
            "finished": true,
            "transferSize": 1058,
            "resourceSize": 910,
            "statusCode": 200,
            "mimeType": "image/svg+xml",
            "resourceType": "Image",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/btn-linkedin-white.svg",
            "protocol": "h2",
            "rendererStartTime": 161.77299999981187,
            "startTime": 341.56999999959226,
            "endTime": 376.33699999969394,
            "finished": true,
            "transferSize": 741,
            "resourceSize": 1150,
            "statusCode": 200,
            "mimeType": "image/svg+xml",
            "resourceType": "Image",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2",
            "protocol": "h2",
            "rendererStartTime": 162.03800000039337,
            "startTime": 162.27600000001985,
            "endTime": 181.89900000015768,
            "finished": true,
            "transferSize": 30932,
            "resourceSize": 30856,
            "statusCode": 200,
            "mimeType": "font/woff2",
            "resourceType": "Font",
            "priority": "VeryHigh",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css",
            "protocol": "h2",
            "rendererStartTime": 194.65500000023894,
            "startTime": 194.94699999995646,
            "endTime": 267.16399999986606,
            "finished": true,
            "transferSize": 280270,
            "resourceSize": 2934019,
            "statusCode": 200,
            "mimeType": "text/css",
            "resourceType": "Stylesheet",
            "priority": "VeryLow",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/home.js",
            "protocol": "h2",
            "rendererStartTime": 197.8369999997085,
            "startTime": 343.1650000002264,
            "endTime": 375.39899999956106,
            "finished": true,
            "transferSize": 1633,
            "resourceSize": 4920,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://js.stripe.com/v3/fingerprinted/js/m-outer-8cb24ab2d649fd36a488d04d8c457933.js",
            "protocol": "h2",
            "rendererStartTime": 198.92799999979616,
            "startTime": 199.50100000005477,
            "endTime": 245.29299999994691,
            "finished": true,
            "transferSize": 1132,
            "resourceSize": 1262,
            "statusCode": 200,
            "mimeType": "text/javascript",
            "resourceType": "Script",
            "priority": "Low"
          },
          {
            "url": "https://p.typekit.net/p.gif?s=1&k=lna1ryl&ht=tk&h=frontend-optimisation-course-three.vercel.app&f=139.140.175.176&a=1094139&js=1.21.0&app=typekit&e=js&_=1677430377464",
            "protocol": "h2",
            "rendererStartTime": 216.059999999743,
            "startTime": 216.51999999994587,
            "endTime": 228.1219999995301,
            "finished": true,
            "transferSize": 228,
            "resourceSize": 35,
            "statusCode": 200,
            "mimeType": "image/gif",
            "resourceType": "Image",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://www.googletagmanager.com/gtag/js?id=G-VG76XBJDZM&l=dataLayer&cx=c",
            "protocol": "h3",
            "rendererStartTime": 239.18400000002293,
            "startTime": 239.66399999972055,
            "endTime": 308.4319999998115,
            "finished": true,
            "transferSize": 77953,
            "resourceSize": 221403,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://m.stripe.network/inner.html",
            "protocol": "h2",
            "rendererStartTime": 249.3690000001152,
            "startTime": 250.96599999960745,
            "endTime": 286.2670000004073,
            "finished": true,
            "transferSize": 649,
            "resourceSize": 1860,
            "statusCode": 200,
            "mimeType": "text/html",
            "resourceType": "Document",
            "priority": "VeryHigh"
          },
          {
            "url": "https://m.stripe.network/out-4.5.42.js",
            "protocol": "h2",
            "rendererStartTime": 292.90299999956915,
            "startTime": 293.24300000007497,
            "endTime": 318.6169999999038,
            "finished": true,
            "transferSize": 16154,
            "resourceSize": 176506,
            "statusCode": 200,
            "mimeType": "text/javascript",
            "resourceType": "Script",
            "priority": "Low"
          },
          {
            "url": "https://m.stripe.com/6",
            "protocol": "h2",
            "rendererStartTime": 338.3110000004308,
            "startTime": 338.8299999996889,
            "endTime": 524.9450000001161,
            "finished": true,
            "transferSize": 550,
            "resourceSize": 312,
            "statusCode": 200,
            "mimeType": "application/json",
            "resourceType": "XHR",
            "priority": "High"
          },
          {
            "url": "chrome-extension://ienfalfjdbdpebioblfackkekamfmbnh/app/detect_angular_for_extension_icon_bundle.js",
            "protocol": "chrome-extension",
            "rendererStartTime": 518.6180000000604,
            "startTime": 518.6180000000604,
            "endTime": 554.2999999997846,
            "finished": true,
            "transferSize": 644,
            "resourceSize": 644,
            "statusCode": 200,
            "mimeType": "text/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-main.js",
            "protocol": "h3",
            "rendererStartTime": 562.9820000003747,
            "startTime": 563.4920000002239,
            "endTime": 585.772000000361,
            "finished": true,
            "transferSize": 365,
            "resourceSize": 121,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-vendor.js",
            "protocol": "h3",
            "rendererStartTime": 563.202000000274,
            "startTime": 563.6350000004313,
            "endTime": 597.009000000071,
            "finished": true,
            "transferSize": 27830,
            "resourceSize": 77752,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-vendors.js",
            "protocol": "h3",
            "rendererStartTime": 563.4069999996427,
            "startTime": 564.249000000018,
            "endTime": 599.2260000002716,
            "finished": true,
            "transferSize": 62809,
            "resourceSize": 211329,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-common.js",
            "protocol": "h3",
            "rendererStartTime": 563.6549999999261,
            "startTime": 564.5590000003722,
            "endTime": 601.4359999999215,
            "finished": true,
            "transferSize": 41050,
            "resourceSize": 196399,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-runtime.js",
            "protocol": "h3",
            "rendererStartTime": 563.9080000000831,
            "startTime": 564.6429999997054,
            "endTime": 589.7610000001805,
            "finished": true,
            "transferSize": 1411,
            "resourceSize": 2306,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-app.js",
            "protocol": "h3",
            "rendererStartTime": 564.1539999996894,
            "startTime": 564.9279999997816,
            "endTime": 591.4800000000469,
            "finished": true,
            "transferSize": 389,
            "resourceSize": 151,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/main.js",
            "protocol": "h2",
            "rendererStartTime": 565.7860000001165,
            "startTime": 566.9500000003609,
            "endTime": 618.6630000001969,
            "finished": true,
            "transferSize": 555,
            "resourceSize": 405,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/favicon.ico",
            "protocol": "h2",
            "rendererStartTime": 568.5789999997723,
            "startTime": 568.9169999996011,
            "endTime": 601.1779999998907,
            "finished": true,
            "transferSize": 1601,
            "resourceSize": 4286,
            "statusCode": 200,
            "mimeType": "image/vnd.microsoft.icon",
            "resourceType": "Other",
            "priority": "High",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://va.tawk.to/v1/widget-settings?propertyId=5fc2ba00920fc91564cb9b3c&widgetId=default&sv=undefined",
            "protocol": "h2",
            "rendererStartTime": 628.0360000000655,
            "startTime": 628.4709999999905,
            "endTime": 651.4889999998559,
            "finished": true,
            "transferSize": 1050,
            "resourceSize": 2290,
            "statusCode": 200,
            "mimeType": "application/json",
            "resourceType": "Fetch",
            "priority": "High",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://va.tawk.to/v1/session/start",
            "protocol": "",
            "rendererStartTime": 629.1199999996024,
            "startTime": 629.1199999996024,
            "endTime": 964.7219999997105,
            "finished": true,
            "transferSize": 0,
            "resourceSize": 0,
            "statusCode": -1,
            "mimeType": "",
            "resourceType": "Fetch",
            "priority": "High",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://va.tawk.to/v1/session/start",
            "protocol": "h2",
            "rendererStartTime": 629.7420000000784,
            "startTime": 629.5300000001589,
            "endTime": 807.1019999997588,
            "finished": true,
            "transferSize": 0,
            "resourceSize": 0,
            "statusCode": 200,
            "mimeType": "",
            "resourceType": "Preflight",
            "priority": "High"
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/jquery.js",
            "protocol": "h2",
            "rendererStartTime": 635.7559999996738,
            "startTime": 636.2499999995634,
            "endTime": 667.6580000003014,
            "finished": true,
            "transferSize": 177,
            "resourceSize": 49,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/components/domReady.js",
            "protocol": "h2",
            "rendererStartTime": 636.1029999998209,
            "startTime": 636.4320000002408,
            "endTime": 669.528000000355,
            "finished": true,
            "transferSize": 899,
            "resourceSize": 769,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/TweenMax.min.js",
            "protocol": "h2",
            "rendererStartTime": 636.3869999995586,
            "startTime": 636.7659999996249,
            "endTime": 673.0630000001838,
            "finished": true,
            "transferSize": 33361,
            "resourceSize": 94935,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/components/bxslider.js",
            "protocol": "h2",
            "rendererStartTime": 636.6570000000138,
            "startTime": 637.0779999997467,
            "endTime": 669.8420000002443,
            "finished": true,
            "transferSize": 5913,
            "resourceSize": 19299,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/global.js",
            "protocol": "h2",
            "rendererStartTime": 636.9859999995242,
            "startTime": 637.4070000001666,
            "endTime": 669.6940000001632,
            "finished": true,
            "transferSize": 4464,
            "resourceSize": 12567,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/languages/en.js",
            "protocol": "h3",
            "rendererStartTime": 652.6219999996101,
            "startTime": 653.0849999999191,
            "endTime": 674.2260000000897,
            "finished": true,
            "transferSize": 4319,
            "resourceSize": 16877,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/components/waypoints.min.js",
            "protocol": "h2",
            "rendererStartTime": 668.6090000002878,
            "startTime": 669.0580000004047,
            "endTime": 708.3560000000944,
            "finished": true,
            "transferSize": 2844,
            "resourceSize": 8044,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/components/flexbox_fallback.js",
            "protocol": "h2",
            "rendererStartTime": 671.451000000161,
            "startTime": 671.8769999997676,
            "endTime": 704.0859999997338,
            "finished": true,
            "transferSize": 682,
            "resourceSize": 3011,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/components/placeholders.min.js",
            "protocol": "h2",
            "rendererStartTime": 671.769999999924,
            "startTime": 672.1950000001016,
            "endTime": 704.7270000002754,
            "finished": true,
            "transferSize": 1799,
            "resourceSize": 4266,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/components/magnific.js",
            "protocol": "h2",
            "rendererStartTime": 672.034000000167,
            "startTime": 672.4629999998797,
            "endTime": 705.2990000001955,
            "finished": true,
            "transferSize": 8201,
            "resourceSize": 20823,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script",
            "priority": "Low",
            "experimentalFromMainFrame": true
          }
        ],
        "debugData": {
          "type": "debugdata",
          "networkStartTimeTs": 4716188212
        }
      }
    },
    "network-rtt": {
      "id": "network-rtt",
      "title": "Network Round Trip Times",
      "description": "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more](https://hpbn.co/primer-on-latency-and-bandwidth/).",
      "score": null,
      "scoreDisplayMode": "informative",
      "numericValue": 0.0691,
      "numericUnit": "millisecond",
      "displayValue": "0 ms",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "origin",
            "itemType": "text",
            "text": "URL"
          },
          {
            "key": "rtt",
            "itemType": "ms",
            "granularity": 1,
            "text": "Time Spent"
          }
        ],
        "items": [
          {
            "origin": "https://fonts.googleapis.com",
            "rtt": 0.0691
          },
          {
            "origin": "https://use.typekit.net",
            "rtt": 0.0661
          },
          {
            "origin": "https://js.stripe.com",
            "rtt": 0.0624
          },
          {
            "origin": "https://embed.tawk.to",
            "rtt": 0.05769999999999999
          },
          {
            "origin": "https://www.googletagmanager.com",
            "rtt": 0.05299999999999999
          },
          {
            "origin": "https://unpkg.com",
            "rtt": 0.0493
          },
          {
            "origin": "https://p.typekit.net",
            "rtt": 0.037099999999999994
          },
          {
            "origin": "https://frontend-optimisation-course-three.vercel.app",
            "rtt": 0.034499999999999996
          },
          {
            "origin": "https://m.stripe.network",
            "rtt": 0.024999999999999998
          },
          {
            "origin": "https://va.tawk.to",
            "rtt": 0.0246
          },
          {
            "origin": "https://fonts.gstatic.com",
            "rtt": 0.014999999999999998
          },
          {
            "origin": "https://m.stripe.com",
            "rtt": 0.0091
          }
        ]
      }
    },
    "network-server-latency": {
      "id": "network-server-latency",
      "title": "Server Backend Latencies",
      "description": "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
      "score": null,
      "scoreDisplayMode": "informative",
      "numericValue": 185.61390000000003,
      "numericUnit": "millisecond",
      "displayValue": "190 ms",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "origin",
            "itemType": "text",
            "text": "URL"
          },
          {
            "key": "serverResponseTime",
            "itemType": "ms",
            "granularity": 1,
            "text": "Time Spent"
          }
        ],
        "items": [
          {
            "origin": "https://m.stripe.com",
            "serverResponseTime": 185.61390000000003
          },
          {
            "origin": "https://js.stripe.com",
            "serverResponseTime": 36.887600000000006
          },
          {
            "origin": "https://www.googletagmanager.com",
            "serverResponseTime": 33.80500000000001
          },
          {
            "origin": "https://fonts.googleapis.com",
            "serverResponseTime": 33.5069
          },
          {
            "origin": "https://frontend-optimisation-course-three.vercel.app",
            "serverResponseTime": 32.7555
          },
          {
            "origin": "https://unpkg.com",
            "serverResponseTime": 26.0597
          },
          {
            "origin": "https://embed.tawk.to",
            "serverResponseTime": 23.815299999999997
          },
          {
            "origin": "https://va.tawk.to",
            "serverResponseTime": 22.399400000000004
          },
          {
            "origin": "https://m.stripe.network",
            "serverResponseTime": 20.27
          },
          {
            "origin": "https://fonts.gstatic.com",
            "serverResponseTime": 13.062
          },
          {
            "origin": "https://p.typekit.net",
            "serverResponseTime": 10.7999
          },
          {
            "origin": "https://use.typekit.net",
            "serverResponseTime": 8.002899999999999
          }
        ]
      }
    },
    "main-thread-tasks": {
      "id": "main-thread-tasks",
      "title": "Tasks",
      "description": "Lists the toplevel main thread tasks that executed during page load.",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "startTime",
            "itemType": "ms",
            "granularity": 1,
            "text": "Start Time"
          },
          {
            "key": "duration",
            "itemType": "ms",
            "granularity": 1,
            "text": "End Time"
          }
        ],
        "items": [
          {
            "duration": 14.625,
            "startTime": 127.658
          },
          {
            "duration": 10.016,
            "startTime": 142.879
          },
          {
            "duration": 37.009,
            "startTime": 153.882
          },
          {
            "duration": 9.715,
            "startTime": 205.546
          },
          {
            "duration": 12.356,
            "startTime": 216.92
          },
          {
            "duration": 36.653,
            "startTime": 268.029
          },
          {
            "duration": 50.011,
            "startTime": 308.65
          },
          {
            "duration": 105.267,
            "startTime": 358.667
          },
          {
            "duration": 13.495,
            "startTime": 476.531
          },
          {
            "duration": 22.896,
            "startTime": 493.823
          },
          {
            "duration": 32.088,
            "startTime": 519.214
          },
          {
            "duration": 6.376,
            "startTime": 556.583
          },
          {
            "duration": 22.842,
            "startTime": 607.011
          },
          {
            "duration": 5.514,
            "startTime": 675.261
          }
        ]
      }
    },
    "metrics": {
      "id": "metrics",
      "title": "Metrics",
      "description": "Collects all available metrics.",
      "score": null,
      "scoreDisplayMode": "informative",
      "numericValue": 7702,
      "numericUnit": "millisecond",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "firstContentfulPaint": 3329,
            "firstMeaningfulPaint": 3329,
            "largestContentfulPaint": 16535,
            "interactive": 7702,
            "speedIndex": 3329,
            "totalBlockingTime": 75,
            "maxPotentialFID": 92,
            "cumulativeLayoutShift": 0.19798971093750004,
            "cumulativeLayoutShiftMainFrame": 0.19798971093750004,
            "totalCumulativeLayoutShift": 0.19798971093750004,
            "observedTimeOrigin": 0,
            "observedTimeOriginTs": 4716187827,
            "observedNavigationStart": 0,
            "observedNavigationStartTs": 4716187827,
            "observedFirstPaint": 193,
            "observedFirstPaintTs": 4716380779,
            "observedFirstContentfulPaint": 193,
            "observedFirstContentfulPaintTs": 4716380779,
            "observedFirstContentfulPaintAllFrames": 193,
            "observedFirstContentfulPaintAllFramesTs": 4716380779,
            "observedFirstMeaningfulPaint": 247,
            "observedFirstMeaningfulPaintTs": 4716434614,
            "observedLargestContentfulPaint": 514,
            "observedLargestContentfulPaintTs": 4716701514,
            "observedLargestContentfulPaintAllFrames": 514,
            "observedLargestContentfulPaintAllFramesTs": 4716701514,
            "observedTraceEnd": 3282,
            "observedTraceEndTs": 4719469989,
            "observedLoad": 565,
            "observedLoadTs": 4716752686,
            "observedDomContentLoaded": 159,
            "observedDomContentLoadedTs": 4716346593,
            "observedCumulativeLayoutShift": 0.19798971093750004,
            "observedCumulativeLayoutShiftMainFrame": 0.19798971093750004,
            "observedTotalCumulativeLayoutShift": 0.19798971093750004,
            "observedFirstVisualChange": 213,
            "observedFirstVisualChangeTs": 4716400827,
            "observedLastVisualChange": 847,
            "observedLastVisualChangeTs": 4717034827,
            "observedSpeedIndex": 431,
            "observedSpeedIndexTs": 4716618761
          },
          {
            "lcpInvalidated": false
          }
        ]
      }
    },
    "performance-budget": {
      "id": "performance-budget",
      "title": "Performance budget",
      "description": "Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "timing-budget": {
      "id": "timing-budget",
      "title": "Timing budget",
      "description": "Set a timing budget to help you keep an eye on the performance of your site. Performant sites load fast and respond to user input events quickly. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "resource-summary": {
      "id": "resource-summary",
      "title": "Keep request counts low and transfer sizes small",
      "description": "To set budgets for the quantity and size of page resources, add a budget.json file. [Learn more](https://web.dev/use-lighthouse-for-performance-budgets/).",
      "score": null,
      "scoreDisplayMode": "informative",
      "displayValue": "65 requests • 4,162 KiB",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "label",
            "itemType": "text",
            "text": "Resource Type"
          },
          {
            "key": "requestCount",
            "itemType": "numeric",
            "text": "Requests"
          },
          {
            "key": "transferSize",
            "itemType": "bytes",
            "text": "Transfer Size"
          }
        ],
        "items": [
          {
            "resourceType": "total",
            "label": "Total",
            "requestCount": 65,
            "transferSize": 4262191
          },
          {
            "resourceType": "image",
            "label": "Image",
            "requestCount": 21,
            "transferSize": 3361726
          },
          {
            "resourceType": "script",
            "label": "Script",
            "requestCount": 28,
            "transferSize": 487907
          },
          {
            "resourceType": "stylesheet",
            "label": "Stylesheet",
            "requestCount": 3,
            "transferSize": 303216
          },
          {
            "resourceType": "font",
            "label": "Font",
            "requestCount": 5,
            "transferSize": 100461
          },
          {
            "resourceType": "document",
            "label": "Document",
            "requestCount": 3,
            "transferSize": 7105
          },
          {
            "resourceType": "other",
            "label": "Other",
            "requestCount": 5,
            "transferSize": 1776
          },
          {
            "resourceType": "media",
            "label": "Media",
            "requestCount": 0,
            "transferSize": 0
          },
          {
            "resourceType": "third-party",
            "label": "Third-party",
            "requestCount": 30,
            "transferSize": 774440
          }
        ]
      }
    },
    "third-party-summary": {
      "id": "third-party-summary",
      "title": "Minimize third-party usage",
      "description": "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "displayValue": "Third-party code blocked the main thread for 130 ms",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "entity",
            "itemType": "link",
            "text": "Third-Party",
            "subItemsHeading": {
              "key": "url",
              "itemType": "url"
            }
          },
          {
            "key": "transferSize",
            "granularity": 1,
            "itemType": "bytes",
            "text": "Transfer Size",
            "subItemsHeading": {
              "key": "transferSize"
            }
          },
          {
            "key": "blockingTime",
            "granularity": 1,
            "itemType": "ms",
            "text": "Main-Thread Blocking Time",
            "subItemsHeading": {
              "key": "blockingTime"
            }
          }
        ],
        "items": [
          {
            "mainThreadTime": 146.612,
            "blockingTime": 81.096,
            "transferSize": 280446,
            "entity": {
              "type": "link",
              "text": "Unpkg",
              "url": "https://unpkg.com"
            },
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "url": "https://unpkg.com/tailwindcss@%5E2/dist/tailwind.min.css",
                  "mainThreadTime": 146.612,
                  "blockingTime": 81.096,
                  "transferSize": 176
                },
                {
                  "url": "https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css",
                  "mainThreadTime": 0,
                  "blockingTime": 0,
                  "transferSize": 280270
                }
              ]
            }
          },
          {
            "mainThreadTime": 120.73200000000006,
            "blockingTime": 28.864000000000004,
            "transferSize": 139957,
            "entity": {
              "type": "link",
              "text": "Tawk.to",
              "url": "https://www.tawk.to/"
            },
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-common.js",
                  "mainThreadTime": 95.92400000000006,
                  "blockingTime": 28.864000000000004,
                  "transferSize": 41050
                },
                {
                  "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-vendors.js",
                  "mainThreadTime": 9.008,
                  "blockingTime": 0,
                  "transferSize": 62809
                },
                {
                  "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-vendor.js",
                  "mainThreadTime": 4.004,
                  "blockingTime": 0,
                  "transferSize": 27830
                },
                {
                  "url": "Other resources",
                  "transferSize": 8268,
                  "blockingTime": 0
                }
              ]
            }
          },
          {
            "mainThreadTime": 124.81600000000009,
            "blockingTime": 20.727999999999994,
            "transferSize": 117517,
            "entity": {
              "type": "link",
              "text": "Google Tag Manager",
              "url": "https://marketingplatform.google.com/about/tag-manager/"
            },
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "url": "https://www.googletagmanager.com/gtag/js?id=G-VG76XBJDZM&l=dataLayer&cx=c",
                  "mainThreadTime": 96.22000000000008,
                  "blockingTime": 20.727999999999994,
                  "transferSize": 77953
                },
                {
                  "url": "https://www.googletagmanager.com/gtm.js?id=GTM-TGDSWZ8",
                  "mainThreadTime": 28.595999999999997,
                  "blockingTime": 0,
                  "transferSize": 39564
                }
              ]
            }
          },
          {
            "mainThreadTime": 85.58399999999999,
            "blockingTime": 0,
            "transferSize": 127326,
            "entity": {
              "type": "link",
              "text": "Stripe",
              "url": "https://stripe.com"
            },
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "url": "https://js.stripe.com/v3/",
                  "mainThreadTime": 78.704,
                  "blockingTime": 0,
                  "transferSize": 107649
                },
                {
                  "url": "https://m.stripe.network/out-4.5.42.js",
                  "mainThreadTime": 0,
                  "blockingTime": 0,
                  "transferSize": 16154
                }
              ]
            }
          },
          {
            "mainThreadTime": 9.048,
            "blockingTime": 0,
            "transferSize": 76651,
            "entity": {
              "type": "link",
              "text": "Adobe TypeKit",
              "url": "https://fonts.adobe.com/"
            },
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "url": "https://use.typekit.net/af/37c6ec/0000000000000000000148a5/23/l?subset_id=2&fvd=i4&v=3",
                  "mainThreadTime": 0,
                  "blockingTime": 0,
                  "transferSize": 18742
                },
                {
                  "url": "https://use.typekit.net/af/c60268/0000000000000000000148a9/23/l?subset_id=2&fvd=i7&v=3",
                  "mainThreadTime": 0,
                  "blockingTime": 0,
                  "transferSize": 18658
                },
                {
                  "url": "https://use.typekit.net/af/42fca5/0000000000000000000148a4/23/l?subset_id=2&fvd=n4&v=3",
                  "mainThreadTime": 0,
                  "blockingTime": 0,
                  "transferSize": 17291
                },
                {
                  "url": "https://use.typekit.net/af/bc719c/00000000000000000001499c/23/l?subset_id=2&fvd=n7&v=3",
                  "mainThreadTime": 0,
                  "blockingTime": 0,
                  "transferSize": 14838
                },
                {
                  "url": "https://use.typekit.net/lna1ryl.js",
                  "mainThreadTime": 9.048,
                  "blockingTime": 0,
                  "transferSize": 6894
                }
              ]
            }
          },
          {
            "mainThreadTime": 0,
            "blockingTime": 0,
            "transferSize": 31899,
            "entity": {
              "type": "link",
              "text": "Google Fonts",
              "url": "https://fonts.google.com/"
            },
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "url": "https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2",
                  "mainThreadTime": 0,
                  "blockingTime": 0,
                  "transferSize": 30932
                }
              ]
            }
          }
        ],
        "summary": {
          "wastedBytes": 773796,
          "wastedMs": 130.688
        }
      }
    },
    "third-party-facades": {
      "id": "third-party-facades",
      "title": "Lazy load third-party resources with facades",
      "description": "Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn more](https://web.dev/third-party-facades/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "largest-contentful-paint-element": {
      "id": "largest-contentful-paint-element",
      "title": "Largest Contentful Paint element",
      "description": "This is the largest contentful element painted within the viewport. [Learn More](https://web.dev/lighthouse-largest-contentful-paint/)",
      "score": null,
      "scoreDisplayMode": "informative",
      "displayValue": "1 element found",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": "Element"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "page-17-DIV",
              "path": "1,HTML,1,BODY,4,DIV",
              "selector": "body > div.inner-page",
              "boundingRect": {
                "top": 80,
                "bottom": 2694,
                "left": 0,
                "right": 360,
                "width": 360,
                "height": 2614
              },
              "snippet": "<div class=\"inner-page inner-page--read inner-page--blue-fill\">",
              "nodeLabel": "Jun 30, 2014  Corporate\nCum sociis natoque penatibus et ultrices volutpat\nShare…"
            }
          }
        ]
      }
    },
    "lcp-lazy-loaded": {
      "id": "lcp-lazy-loaded",
      "title": "Largest Contentful Paint image was not lazily loaded",
      "description": "Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. [Learn more](https://web.dev/lcp-lazy-loading/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": "Element"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "page-17-DIV",
              "path": "1,HTML,1,BODY,4,DIV",
              "selector": "body > div.inner-page",
              "boundingRect": {
                "top": 80,
                "bottom": 2694,
                "left": 0,
                "right": 360,
                "width": 360,
                "height": 2614
              },
              "snippet": "<div class=\"inner-page inner-page--read inner-page--blue-fill\">",
              "nodeLabel": "Jun 30, 2014  Corporate\nCum sociis natoque penatibus et ultrices volutpat\nShare…"
            }
          }
        ]
      }
    },
    "layout-shift-elements": {
      "id": "layout-shift-elements",
      "title": "Avoid large layout shifts",
      "description": "These DOM elements contribute most to the CLS of the page.",
      "score": null,
      "scoreDisplayMode": "informative",
      "displayValue": "4 elements found",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": "Element"
          },
          {
            "key": "score",
            "itemType": "numeric",
            "granularity": 0.001,
            "text": "CLS Contribution"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "page-64-HEADER",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,ARTICLE,0,DIV,1,HEADER",
              "selector": "div.news-list > article.news-list__read-item > div > header",
              "boundingRect": {
                "top": 381,
                "bottom": 621,
                "left": 27,
                "right": 333,
                "width": 306,
                "height": 240
              },
              "snippet": "<header>",
              "nodeLabel": "Jun 30, 2014  Corporate\nCum sociis natoque penatibus et ultrices volutpat\nShare"
            },
            "score": 0.1315292188351442
          },
          {
            "node": {
              "type": "node",
              "lhId": "page-65-DIV",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,ARTICLE,0,DIV,2,DIV",
              "selector": "div.news-list > article.news-list__read-item > div > div.l-main",
              "boundingRect": {
                "top": 621,
                "bottom": 1620,
                "left": 27,
                "right": 333,
                "width": 306,
                "height": 998
              },
              "snippet": "<div class=\"l-main text\">",
              "nodeLabel": "Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo vo…"
            },
            "score": 0.06588267873430025
          },
          {
            "node": {
              "type": "node",
              "lhId": "page-9-A",
              "path": "1,HTML,1,BODY,2,NAV,2,A",
              "selector": "body > nav.l-navbar > a.l-navbar__burger",
              "boundingRect": {
                "top": 20,
                "bottom": 40,
                "left": 330,
                "right": 350,
                "width": 20,
                "height": 20
              },
              "snippet": "<a class=\"l-navbar__burger\" href=\"javascript:;\">",
              "nodeLabel": "Menu"
            },
            "score": 0.0003717534722222222
          },
          {
            "node": {
              "type": "node",
              "lhId": "page-66-SPAN",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,ARTICLE,0,DIV,1,HEADER,0,DIV,1,SPAN",
              "selector": "div > header > div.item__time-cat > span.item__cat",
              "boundingRect": {
                "top": 381,
                "bottom": 400,
                "left": 158,
                "right": 251,
                "width": 93,
                "height": 19
              },
              "snippet": "<span class=\"item__cat\">",
              "nodeLabel": " Corporate"
            },
            "score": 0.00020605989583333332
          }
        ]
      }
    },
    "long-tasks": {
      "id": "long-tasks",
      "title": "Avoid long main-thread tasks",
      "description": "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn more](https://web.dev/long-tasks-devtools/)",
      "score": null,
      "scoreDisplayMode": "informative",
      "displayValue": "8 long tasks found",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "startTime",
            "itemType": "ms",
            "granularity": 1,
            "text": "Start Time"
          },
          {
            "key": "duration",
            "itemType": "ms",
            "granularity": 1,
            "text": "Duration"
          }
        ],
        "items": [
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/news-single.html",
            "duration": 211,
            "startTime": 1010.8317
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/news-single.html",
            "duration": 200,
            "startTime": 810.8317
          },
          {
            "url": "https://unpkg.com/tailwindcss@%5E2/dist/tailwind.min.css",
            "duration": 147,
            "startTime": 1559.012
          },
          {
            "url": "chrome-extension://kjacjjdnoddnpbbcjilcajfhhbdhkpgk/firefox-rafz-fix.js",
            "duration": 128,
            "startTime": 1248.8317
          },
          {
            "url": "https://www.googletagmanager.com/gtag/js?id=G-VG76XBJDZM&l=dataLayer&cx=c",
            "duration": 92,
            "startTime": 7014.283300000001
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-common.js",
            "duration": 91,
            "startTime": 8615.769300000002
          },
          {
            "url": "https://js.stripe.com/v3/",
            "duration": 74,
            "startTime": 4029.732000000001
          },
          {
            "url": "https://js.stripe.com/v3/",
            "duration": 59,
            "startTime": 3970.732000000001
          }
        ]
      }
    },
    "no-unload-listeners": {
      "id": "no-unload-listeners",
      "title": "Avoids `unload` event listeners",
      "description": "The `unload` event does not fire reliably and listening for it can prevent browser optimizations like the Back-Forward Cache. Use `pagehide` or `visibilitychange` events instead. [Learn more](https://web.dev/bfcache/#never-use-the-unload-event)",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "non-composited-animations": {
      "id": "non-composited-animations",
      "title": "Avoid non-composited animations",
      "description": "Animations which are not composited can be janky and increase CLS. [Learn more](https://web.dev/non-composited-animations)",
      "score": null,
      "scoreDisplayMode": "informative",
      "displayValue": "4 animated elements found",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "subItemsHeading": {
              "key": "failureReason",
              "itemType": "text"
            },
            "text": "Element"
          },
          {
            "key": null,
            "itemType": "text",
            "subItemsHeading": {
              "key": "animation",
              "itemType": "text"
            },
            "text": "Name"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "page-47-LI",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,1,ASIDE,0,UL,2,LI",
              "selector": "div.inner-page__container > aside.col-25 > ul.inner-page__submenu > li.active",
              "boundingRect": {
                "top": 2165,
                "bottom": 2219,
                "left": 17,
                "right": 353,
                "width": 336,
                "height": 54
              },
              "snippet": "<li class=\"active\">",
              "nodeLabel": "CORPORATE"
            },
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "failureReason": "Unsupported CSS Property: border-bottom-color",
                  "animation": "border-bottom-color"
                },
                {
                  "failureReason": "Unsupported CSS Property: tab-size",
                  "animation": "tab-size"
                },
                {
                  "failureReason": "Unsupported CSS Property: border-left-color",
                  "animation": "border-left-color"
                },
                {
                  "failureReason": "Unsupported CSS Property: border-right-color",
                  "animation": "border-right-color"
                },
                {
                  "failureReason": "Unsupported CSS Property: border-top-color",
                  "animation": "border-top-color"
                }
              ]
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "page-45-LI",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,1,ASIDE,0,UL,1,LI",
              "selector": "div.inner-page__container > aside.col-25 > ul.inner-page__submenu > li",
              "boundingRect": {
                "top": 2111,
                "bottom": 2165,
                "left": 17,
                "right": 353,
                "width": 336,
                "height": 54
              },
              "snippet": "<li>",
              "nodeLabel": "PRESS"
            },
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "failureReason": "Unsupported CSS Property: border-bottom-color",
                  "animation": "border-bottom-color"
                },
                {
                  "failureReason": "Unsupported CSS Property: tab-size",
                  "animation": "tab-size"
                },
                {
                  "failureReason": "Unsupported CSS Property: border-left-color",
                  "animation": "border-left-color"
                },
                {
                  "failureReason": "Unsupported CSS Property: border-right-color",
                  "animation": "border-right-color"
                },
                {
                  "failureReason": "Unsupported CSS Property: border-top-color",
                  "animation": "border-top-color"
                }
              ]
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "page-49-LI",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,1,ASIDE,0,UL,3,LI",
              "selector": "div.inner-page__container > aside.col-25 > ul.inner-page__submenu > li",
              "boundingRect": {
                "top": 2219,
                "bottom": 2272,
                "left": 17,
                "right": 353,
                "width": 336,
                "height": 54
              },
              "snippet": "<li>",
              "nodeLabel": "EVENTS"
            },
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "failureReason": "Unsupported CSS Property: border-bottom-color",
                  "animation": "border-bottom-color"
                },
                {
                  "failureReason": "Unsupported CSS Property: tab-size",
                  "animation": "tab-size"
                },
                {
                  "failureReason": "Unsupported CSS Property: border-left-color",
                  "animation": "border-left-color"
                },
                {
                  "failureReason": "Unsupported CSS Property: border-right-color",
                  "animation": "border-right-color"
                },
                {
                  "failureReason": "Unsupported CSS Property: border-top-color",
                  "animation": "border-top-color"
                }
              ]
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "page-43-LI",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,1,ASIDE,0,UL,0,LI",
              "selector": "div.inner-page__container > aside.col-25 > ul.inner-page__submenu > li",
              "boundingRect": {
                "top": 2057,
                "bottom": 2111,
                "left": 17,
                "right": 353,
                "width": 336,
                "height": 54
              },
              "snippet": "<li>",
              "nodeLabel": "ALL NEWS"
            },
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "failureReason": "Unsupported CSS Property: border-bottom-color",
                  "animation": "border-bottom-color"
                },
                {
                  "failureReason": "Unsupported CSS Property: tab-size",
                  "animation": "tab-size"
                },
                {
                  "failureReason": "Unsupported CSS Property: border-left-color",
                  "animation": "border-left-color"
                },
                {
                  "failureReason": "Unsupported CSS Property: border-right-color",
                  "animation": "border-right-color"
                },
                {
                  "failureReason": "Unsupported CSS Property: border-top-color",
                  "animation": "border-top-color"
                }
              ]
            }
          }
        ]
      }
    },
    "unsized-images": {
      "id": "unsized-images",
      "title": "Image elements do not have explicit `width` and `height`",
      "description": "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn more](https://web.dev/optimize-cls/#images-without-dimensions)",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": ""
          },
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          }
        ],
        "items": [
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/post4.png",
            "node": {
              "type": "node",
              "lhId": "page-4-IMG",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,ARTICLE,0,DIV,0,FIGURE,0,IMG",
              "selector": "article.news-list__read-item > div > figure > img",
              "boundingRect": {
                "top": 156,
                "bottom": 360,
                "left": 28,
                "right": 332,
                "width": 304,
                "height": 204
              },
              "snippet": "<img src=\"/assets/images/homework/post4.png\" alt=\"\">",
              "nodeLabel": "article.news-list__read-item > div > figure > img"
            }
          }
        ]
      }
    },
    "valid-source-maps": {
      "id": "valid-source-maps",
      "title": "Page has valid source maps",
      "description": "Source maps translate minified code to the original source code. This helps developers debug in production. In addition, Lighthouse is able to provide further insights. Consider deploying source maps to take advantage of these benefits. [Learn more](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "scriptUrl",
            "itemType": "url",
            "subItemsHeading": {
              "key": "error"
            },
            "text": "URL"
          },
          {
            "key": "sourceMapUrl",
            "itemType": "url",
            "text": "Map URL"
          }
        ],
        "items": [
          {
            "scriptUrl": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/jquery/dist/jquery.min.js",
            "sourceMapUrl": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/jquery/dist/jquery.min.map",
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "error": "Warning: missing 1 item in `.sourcesContent`"
                }
              ]
            }
          },
          {
            "scriptUrl": "https://js.stripe.com/v3/",
            "sourceMapUrl": "https://js.stripe.com/v3/sourcemaps/stripe-113e2b80482f503ec4bd64a724f98545.js.map",
            "subItems": {
              "type": "subitems",
              "items": []
            }
          },
          {
            "scriptUrl": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-vendor.js",
            "sourceMapUrl": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-vendor.js.map",
            "subItems": {
              "type": "subitems",
              "items": []
            }
          },
          {
            "scriptUrl": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-vendors.js",
            "sourceMapUrl": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-vendors.js.map",
            "subItems": {
              "type": "subitems",
              "items": []
            }
          },
          {
            "scriptUrl": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-common.js",
            "sourceMapUrl": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-common.js.map",
            "subItems": {
              "type": "subitems",
              "items": []
            }
          },
          {
            "scriptUrl": "chrome-extension://ienfalfjdbdpebioblfackkekamfmbnh/app/detect_angular_for_extension_icon_bundle.js",
            "sourceMapUrl": "chrome-extension://ienfalfjdbdpebioblfackkekamfmbnh/app/detect_angular_for_extension_icon_bundle.js.map",
            "subItems": {
              "type": "subitems",
              "items": []
            }
          }
        ]
      }
    },
    "preload-lcp-image": {
      "id": "preload-lcp-image",
      "title": "Preload Largest Contentful Paint image",
      "description": "Preload the image used by the LCP element in order to improve your LCP time. [Learn more](https://web.dev/optimize-lcp/#preload-important-resources).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "label": ""
          },
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "wastedMs",
            "valueType": "timespanMs",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "page-17-DIV",
              "path": "1,HTML,1,BODY,4,DIV",
              "selector": "body > div.inner-page",
              "boundingRect": {
                "top": 80,
                "bottom": 2694,
                "left": 0,
                "right": 360,
                "width": 360,
                "height": 2614
              },
              "snippet": "<div class=\"inner-page inner-page--read inner-page--blue-fill\">",
              "nodeLabel": "Jun 30, 2014  Corporate\nCum sociis natoque penatibus et ultrices volutpat\nShare…"
            },
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/bg-listings-grad.jpg",
            "wastedMs": 0
          }
        ],
        "overallSavingsMs": 0,
        "debugData": {
          "type": "debugdata",
          "initiatorPath": [
            {
              "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/bg-listings-grad.jpg",
              "initiatorType": "parser"
            },
            {
              "url": "https://frontend-optimisation-course-three.vercel.app/assets/css/homework/app.css",
              "initiatorType": "parser"
            },
            {
              "url": "https://frontend-optimisation-course-three.vercel.app/news-single.html",
              "initiatorType": "other"
            }
          ],
          "pathLength": 3
        }
      }
    },
    "csp-xss": {
      "id": "csp-xss",
      "title": "Ensure CSP is effective against XSS attacks",
      "description": "A strong Content Security Policy (CSP) significantly reduces the risk of cross-site scripting (XSS) attacks. [Learn more](https://web.dev/csp-xss/)",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "description",
            "itemType": "text",
            "subItemsHeading": {
              "key": "description"
            },
            "text": "Description"
          },
          {
            "key": "directive",
            "itemType": "code",
            "subItemsHeading": {
              "key": "directive"
            },
            "text": "Directive"
          },
          {
            "key": "severity",
            "itemType": "text",
            "subItemsHeading": {
              "key": "severity"
            },
            "text": "Severity"
          }
        ],
        "items": [
          {
            "severity": "High",
            "description": "No CSP found in enforcement mode"
          }
        ]
      }
    },
    "full-page-screenshot": {
      "id": "full-page-screenshot",
      "title": "Full-page screenshot",
      "description": "A full-height screenshot of the final rendered page",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "full-page-screenshot",
        "screenshot": {
          "data": "data:image/jpeg;base64,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BHXM1N7nUFQcL3O/HrjjOy3i2Wq1l+mXJtbW7goHhmdVep02n7X1g1GNzsgT0c+H/wATr0uova2kWMrLaCemMYl9I+otXvGtBQEgrt5lnGY2RLhVD+sxX+wP2mPXtxPbnnabU6hnoNjqy27uMYxiejOM4mJqVibIiJwpERAREQEREBERAREQEREBERAREQEREBERATj1Wo1dVu2nTd4mPrZnZEDyb+0tdRXvbRcZA6+ZxOjR6vU3ups04SthkPn4TuiAiIgIiICZaivvdO6DqRxNZlfW9igV3NUQeqgHPxBliamx83eQtThiBwRzPXp/qa/uj5SlnYossZ21VhLAg5RfHr4TRezLVUD6dbgcD0V/lNPJnzlxjjTLU1NY1bBK7AhJNdn1W4ltNWaaErY5Kjwmn6Nt/v13+lf5R+jbf79d/pX+UydOPtUgUVknA7wfnK9np3urrxyAdxPsnXZ2S9mN+tsYKcgFF6/CW0/ZbabPday1c9cIn8prh5OOMw5nG5ttrf6zTf4onHd6NljAfXuKn4gj856L0bxVvcsayDnA9IyjaNGDAsebO89hlwziIiyYmXNqspdfZTYVZQu9SoIPlLk7tYx89Pn8ZrdoktsZy7rvxuAPBxNDp1702AkEpsx6o5xRUuLTfX0P3X/OX0CP3JfvTsy3oYm9OiSp1fe7bBhQTwIp0ndH0brNvPonpzLlnE3X+7IiXFoVIt0xdiVIYoPAHJzPWnMNGi11KGbNRypnTOPJlGU3C4xRERM3RERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED5PAjaJMT2PIjaI2iTECNojaJMQI2iNokxAjaI2iTECNojaJMQI2iNokxAjaIwJMQI2iNokxAjaI2iTECNokbRLRArtEbRLRArgRtEtIgRtEbRJiBG0RtEmIVG0RtEmIEbRG0SYgRtEbRJiBGBG0SYgRtEjaJaIFdojaJaRAjaI2iTECMCJMQLRJiEJEmICIiAiIgREmIERJiBESYgREmIERJiBESZEBERAREmBEREBIkxAREQERECIkyICJMiAiIhSIiAiIgJEmIERJiBaJMQ5REmIEREQpESYERJiERERAREQpERAREQER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Z200/wBpq++PnPfng6f7RV98fOe9MfLtp4dSTxP6SddP/m/Ke3PE/pH10/8Am/KcY7aZaeLEmJsxRJiICJMQEREBJiICIiAkxEKREQiYiICIiQIiJVIiICIiEIiIERJiBERECIiIESJMQIns/wBHOuo/y/nPGns/0c66j/L+c5y06x29uIiYtnzmp+1Xffb5xJ1P2m777fOJ6408s7aaf7RV98fOe9PB0/2ir74+c96Y+XbTw6knif0j66f/ADflPbnif0j66f8AzflOMdtMtPGiImzEkxEBERASYiAiJMCJMRAREmAiIkCIkwEREBERAREQEREBIkxAiJMiAkSYgRIkxKIkSZBgQZ7P9HOuo/y/nPGns/0c66j/AC/nOctOsdvbiImLZ87qftNv32+cRqftNv32+cT1xp5Z210/2ir74+c92eFR9oq++PnPdmPl208OpJ4n9I+un/zflPbnif0j66f/ADflOMdtMtPGiImzEkxEgREmAiIhUxEQEmRJgIiICIiBMREBERAREQEREBERAREiBMiIgJEmRAREQIkSZEBPY/o511H+X85489j+jnXUf5fznOWnWO3txETJq+e1P2m375+cSNT9qt++3zieuNPLO2un+0VffHznuzwqPtFX3x857sx8u2nh1JPE/pH10/8Am/Ke3PE/pJ10/wDm/KcY7aZaeLJkSZqyJMiTASZEmAiIgTERASZEmAiX7qwjhZJocDpmQZxHQ4MQJiRJgIkqpY4E2WlR15gphE6jSnliYWVFeRyItaUiREImRE2qrGMtz6oGQBPQEwAx/sn4TsGMSYtacMTrdFfqOfOcrqUODBSsREISIiAkRECJ7P8ARzrqP8v5zxp7P9HOuo/y/nJlp1jt7cREyavntT9pt++3ziNT9pt++fnE9caeSdtaPtFX3x857k8Oj7RV98fOe5MfLtr4dSTw/wCknXT/AOb8p7k8X+ka57gjw3flOMdtMtPEibV1DGWmhqQjpiaM6c0SzqUbBlYRMRIJ6QLRIkwJiSiljgTQ0MBnIMDKb1KByesxPo9fCaI8SsOgGTmYh5PeTl0m1A49c58TYvMickmWEmFYkwekrlpWcTXdOdTxLgzmXbYtIJyJTIjcIVk4w3ErLsQZWdQ4kXrNg0wz6UsGklYbgyd0xzJDcyOmpaZ2DKwWEozZEDORJidOERJkQiIk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iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB9pofsOn/AMJflEaH7Dp/8JfkIgbxEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARJwYwfKBEScHyjB8oERJwfKMHygREnB8owfKBEScHyjB8oERJwfKMHygREnB8owfKBEScHyjB8oERJwfKMHygREnB8owfKBEScHyjB8oERJwfKMHygREnB8owfKBEScHyjB8oERJwfKMHygREnB8owfKBEScHyjB8oERJwfKMHygREnB8owfKBEScHyjB8oERJwfKMHygRERAREQLjpJkDpJgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBmesQesQEREC46SZA6SYCJnqCRp7SCQQhwR7J4vZ9Oq1tbP9OuTacYyT+cD3onjUX6nR9orpbrjcj4wT156T0tRrNPpji60KfLqfwgbxM6L6tQm6lw49XhM79bptO2220K3l1P4QOiJlRfVqE3UuHHq8JlZ2jo632Neu71An5QOqJm19S0m4uO7AzuHMwPaWjVFY3jDdODn4QOuJzWa2hdKbxaNh4DAZ5nH2T2ibs16i3dazeiNuOMeoQPViVf6h9k+d0PaV1F4N1j2VnhgxJx64H0kTzu2bmTRI9NjLlxhlOMjBnTprAuhqstfA7sEsx9UDoictfaOkts2Jeu49Mgj5zR9VSmoWhnxY3QYPPvgbRMb9VRp3RLbNrP0GDGo1NOmUNc+0E4HBPygbRML9Zp9OB3toXIyBg5+EmjU0agZpsV8dR4/CBtERAREQEREBERAREQEREBERAREQEREDM9Yg9YgIiIFx0kyB0kwMtT9mt+4flPC7OXXfRrX0liqqnJUjJJx4cT37U7yp0zjcCMzn7P0X0Ktk7zfuOc7cQPP7JrGr1Daq60vah+qR8DObSfSLrbXTTVahyfS7zBx7iZ6tXZ3c646iq3arHlNv55kX9lK9xuouehz12wObR6fWU6w3Np1qRlIYIRjpxxnzkdi01ajvrb1Wyzd/aGffPQ0ejOmLM19lrMMEseJhd2UpuNunvfTs3XbAnW016TQahtMgQt1I9s87SValtMDVodPah/ttgk/jPW0uhSip0d2t7z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6JbXgBm3495OJZg9hqOxk2scgkZHBHgYFxfUW2hxnOPafKVS9TUruQpYkAecrR3laJUaT6IwXyMe3zmfc2oK2AbKhgVUjPJ9fEDqR1ddykEeYmddtthyK0CbiM7zng46Y/OTQhVWJDAsckMRn8OJh3WXUppRU+4E2DaB156cnPsgdkREBERAREQEREBERAREQEREBERAREQEREBERAzPWIPWICIiBcdJMgdJMDLUVd9Q9YOCRwfX4StNxvpIGEuUYYEfVM3iW+krt5+i0DJa1+pIazPHj751aizA7tObH4A8vXNolnK5uU41FQqihEVR0AxLRE5dEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAzPWIPWICIiBcdJMgdJMBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQMz1iD1iAiIgXHSTIHSTAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREDM9Yg9YgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB5X6x9nfxH/0GP1j7O/iP/oM+MiB9n+sfZ38R/wDQY/WPs7+I/wDoM+MiB9n+sfZ38R/9Bj9Y+zv4j/6DPjIgfZ/rH2d/Ef8A0GP1j7O/iP8A6DPjIgfZ/rH2d/Ef/QY/WPs7+I/+gz4yIH2f6x9nfxH/ANBj9Y+zv4j/AOgz4yIH2f6x9nfxH/0GP1j7O/iP/oM+MiB9n+sfZ38R/wDQY/WPs7+I/wDoM+MiB9n+sfZ38R/9Bj9Y+zv4j/6DPjIgfZ/rH2d/Ef8A0GP1j7O/iP8A6DPjIgfZ/rH2d/Ef/QY/WPs7+I/+gz4yIH2f6x9nfxH/ANBj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H2nAZQOD44l+DkbRagW117AWt+oQwIb2EHEySp3DlRkVjc3PQZx+c9CrVUaT6JWtnfCu3vXZQQBnAwM8+Eov0XT0arbqltexQqBUYcbgecj1QQjSdmX26ilbEARyCV3qG2k9cZz+E47lCXOo6KxAnqC7SP2omubV7F3Bym1twPl0xj3zy7mDXWMpyCxI+MkkKREQpERAREQEREBERAREQEREC9V1lJY1ttLKVPHgesPY7qischBtXjoM5/OVVS7BVGWJwB5zp1+ibRWKu8WKw4ZemQcEe4wKjXagW2WbwWsGH3ICG9xGJKa/UIoUMhUEsA1attPqyOPdKnR6oIXOmuCjktsOBK1aXUXLvqotsXzVCRCdD6i162RnyrP3h46t5zU9o6ohv2i5ddrN3a7mGMcnGTK16RrdK1qBmcWBAgGScgn8plXVZa22qtnbyUZMDarX6mpEVXXCfULIrFfYSMiUGruFJp3BkJJwyhiCeuCRke6bWdnW6fVLTqUsAI4ZEJzxnjpn1zCrTX3gtTRZYB1KITiDpca3UC57e8y7jDZUEMPWOkHXag2pZ3gDVghQFACg+QAxK16TU2qWr09rgHBKoTiYkYODAulrpW9athbAAwx1wcykRCkREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA7ey3qotbU3EYpGVQEBmY8DHs6zVrdJqNDZSneI6HvUNzg58wOB16+6ebEJT121QPb9dnfjugVXdu9EDaMyujFIpocNW7hyW7y/YKufBcjM8qJbSnqajUKg1T1WJuGsDpg9QN3I9UntA1U6ctTwdYRYR+6vl/qz8J5tVjVOHTGR5qCPgZN91l9m+1tzYA6AADyAHSRa7eqzV/phdV31XdOvB7wZH7PHIzkc+c52B1Ol0govrr7oYZXsCbWzndz19086IKexSRalVepemxVdsXLqQjpk8nB6+fSeTYFFjBG3KCcE+IlYhSIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICJ1dn0V6i5xcXCJWznZjPAzNG0+lu09tmka4NUAStgByCccEe2KS3DE77NPotK3c6l73uH1+6xtU+XPWZWaaoaJ767GfF3dgkYyMZziC3LE6tLpq2pfUah2SlCF9EZZm8hD1ae4oui79rGbHdu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ERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBE0o092ps7uitrHxnCia3dnazT1Gy7TWIg6sRwIHNETqTs/VOaAtWTqATV6Q9LHXx4gcsSXVkdkYYZTgj1yICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgex/Rb/ALm3OP2Tc+XSWFVOpup047Zu1K2WBWRkZePPk4nl6XVXaSw2UPscgrnAPB9syUlWDKSCDkEeEfR9FXVpNZrtT2cdAlKVK221frDHiT4zTSf1vYP3bPlPHu7Z7QuoNNmoJRhg4UAkes4mSdo6tDQVtwdOCKvRHo56+HPvhJh6tq6fQ6I6w6WvU23Xup7zlVAJ8PdNrtBpbBZTVQK7dRpxfWh+sjDqAfX/ADnjabtXW6Uv3V5AclmBUEZ88GU/SGrOsGrNzG8dHOOPd0kiOqV7lvY9F1NGmoC/SKHQagjqQwyTPE7SemztC00IqVBtqhRgYHGYr7S1lV1tyXkWXfXOBzOWWN2Po7tHR+tNNC6dO5KglAvo/VPhGlq0fdmupNGdSbmDLqQQCNxACzzU7d7SrrVF1JwowCVUnHtxK09ta+hNld4C5J5RTgk5PhJQ59bU1OsuresVlXPoA5A9kwlrbHtsayxizscknxlZYCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIidem0feL3lp2J4eZliJnSTMRtyRPUVaK+EoU+tuZYmh+LNOhH/iMGd+v+uPZ/HkxO7UaFShs0zFgOSh6icM4mJjbuJidEROnTaQ3Dex2Vjx8/ZERM6JmI25onqKmnr4SkN625lt1R4fT1keoYnfr/AK49n8eTE9K3QVXKW0pKuP8A6bHr7J5zKVYqwII4IM4nGYdY5RKIia6fTvexxwo6segiIt1M0yieklOnq6J3h82/lNA9XRtPUR92d+tnz/jyYnqPotPqAe4PdWfuk8GebYjVuUcEMOoM5nGYdY5RKsRE5dEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREDfR0i68Bvqjk+yd1j729Q6CYdnfUvPjgD5zZDtcHOMHM2wisWOXcoIIJBBBHUGbjRapqe+FDms+IE+jt0Gj7QRbiAWYA704zOt2WihmbhEXPuEnN1wfGAvTZ4qynkGcvaNSpatqDCWjOPI+InS7tY5dzlickzPW86FCfCwgfCXKLhzj1Lj09XfXLX5nn2T0rGGQqjCLwBOXsz+uc+IQ4m8YR0ue3QmlGKzdaKu95XIzx5maans+ynUihCbGIycL4TbTqvaQoodWR6xtFgHBHlMu0b7fp2WU1msBFHqEXNp1Tmuqs01xRgVZTwfP1zHtKsWVJqlGDna/t85rda11rWOeWJPshvS7P1IPQYP4yzFwmpt5QBYgDqeJ6e0VIKl6L19ZnDoxnVV5/enaTk5nOEdW7z3S1VZttStersFGfXPW1fZOl0unZn1R70KSqkgbj7Jy9jnTjWp9IUkkju8Z4bIxPT7dbRgEXITqCn7M88SzM3SRHVvnunSTrkGo0gvx+0r4b1iRNaeaNQp6GszqYuKca7ePERPO9BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA6+zXAtas/21x750EYOD4TzVYqwZTgjkGenTcmqUchbR1HnNcJ6plnHdva0Haul0mnFZbUPjoGA49k5e0u1rNYvdIvd1eIzy3tnnsjL1BEKrMcKpPsE64xdpymkTPtFtldVP9rl29/SdDlNIu+7Bf+zWD855dtjW2NY5yzHJnOc9UYRc220FgTUjPRhtnWylWIPhPLnpUahdQoRyFtHAJ/tRhPx1nH136pm1Tq+nZVrCgBNwXZxzI7QuV6tPWXFl1akO49vAnIyMvVTICljgAn2TqnFoltW3c9nbT9a5uPYJp3aUL3mpO1fBfEzzdXqW1VxcjAHCr5CTKagxjlLOl+7tR/3SDPSsGGOOh5HsnlTt0uoUoKbTjH1W8vUZzhPxpnH126D7fp/8VfmJ6H9JPtdX+H+ZnlNWy9RkeYlQCTgAmd13bO+qJo7dzoLXPBs9BfXLLSEXvL27tB59TPP12q+k2AKNta8KsZTUERylzRETBuREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEdIlq63tbailj6oG1et1FYwLCR6xmWftHVMMd5gf+IxLr2cf/qWqh8usk9m5/q9QjHyIxNKzZ3g4iSxySST4mRNLqLaG22oVPh5GZzNpBERA3r1l9Qwthx5HmaHtLVEYFgHsAnJEvKf1zxj8Wd3sbc7Fj5k5lYiR0REQNatTdTwlhA8uom36S1WMBwP8onJEvKUnGJ+L2W2WtuscsfWZSIkUiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIFqq2tsVF6kz1AF06d1V/mbxJnN2aMNZZ4qvHvm02wiotlnNzRE9jtOrVay/S1GiutmU7cNnPGfdMB2JrSrHYvHhu6+yXlCVLiV1ZO6uG6s/EesTzdTQdPc1Z5HUHzE7iCpIIwRwQZnrxu01VnipKfmJM4uLMZqXBERMWxERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA7ezTnvU8SuR7ptPPptNNq2L1H4z0jtdRZWcofw9U2wm4plnFTb6W//uvZ/wB1/wD92c+mtsP9IbkLsVwRjPE8U6m8srG+zcn1TvOR7JUX2rYbRa4sPVgxz8ZOJyaa/wC36j/Fb5mcmuO3SVp4s5b3DibAFyzu2FHLMZwaq/v7twGFAwo8hLlNRSYxcsYiJi2IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICaU32UtlD16g9DM4i6Nu1dbUfr1MD/AOBljrKF+rU7H/ybA/CcETvnLjhDa/U2X4DEBR0VeAJjETiZt1EUREQpERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREC3dv+43wju3/cb4TpzGZ3xccnN3b/ALjfCO7f9xvhOnMZjicnN3b/ALjfCO7f9xvhOnMZjicnN3b/ALjfCO7f9xvhOnMZjicnN3b/ALjfCO7f9xvhOnMZjicnN3b/ALjfCO7f9xvhOnMZjicnN3b/ALjfCO7f9xvhOnMZjicnN3b/ALjfCO7f9xvhOnMZjicnN3b/ALjfCO7f9xvhOnMZjicnN3b/ALjfCO7f9xvhOnMZjicnN3b/ALjfCO7f9xvhOnMZjicnN3b/ALjfCO7f9xvh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",
          "width": 360,
          "height": 3894
        },
        "nodes": {
          "page-0-IMG": {
            "top": 11,
            "bottom": 66,
            "left": 20,
            "right": 140,
            "width": 120,
            "height": 55
          },
          "page-1-IMG": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-2-IMG": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-3-IMG": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-4-IMG": {
            "top": 156,
            "bottom": 360,
            "left": 28,
            "right": 332,
            "width": 304,
            "height": 204
          },
          "page-5-IMG": {
            "top": 2714,
            "bottom": 2779,
            "left": 13,
            "right": 154,
            "width": 141,
            "height": 65
          },
          "page-6-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-7-BUTTON": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-8-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-9-A": {
            "top": 20,
            "bottom": 40,
            "left": 330,
            "right": 350,
            "width": 20,
            "height": 20
          },
          "page-10-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-11-DIV": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-12-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-13-DIV": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-14-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-15-DIV": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-16-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-17-DIV": {
            "top": 80,
            "bottom": 2694,
            "left": 0,
            "right": 360,
            "width": 360,
            "height": 2614
          },
          "page-18-TIME": {
            "top": 381,
            "bottom": 399,
            "left": 27,
            "right": 148,
            "width": 121,
            "height": 18
          },
          "page-19-SPAN": {
            "top": 155,
            "bottom": 203,
            "left": 280,
            "right": 328,
            "width": 48,
            "height": 48
          },
          "page-20-SPAN": {
            "top": 164,
            "bottom": 194,
            "left": 289,
            "right": 319,
            "width": 30,
            "height": 30
          },
          "page-21-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-22-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-23-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-24-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-25-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-26-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-27-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-28-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-29-SPAN": {
            "top": 1680,
            "bottom": 1728,
            "left": 261,
            "right": 309,
            "width": 48,
            "height": 48
          },
          "page-30-SPAN": {
            "top": 1689,
            "bottom": 1719,
            "left": 270,
            "right": 300,
            "width": 30,
            "height": 30
          },
          "page-31-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-32-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-33-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-34-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-35-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-36-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-37-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-38-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "page-39-A": {
            "top": 1760,
            "bottom": 1794,
            "left": 98,
            "right": 262,
            "width": 164,
            "height": 34
          },
          "page-40-DIV": {
            "top": 1819,
            "bottom": 2027,
            "left": 7,
            "right": 353,
            "width": 346,
            "height": 208
          },
          "page-41-A": {
            "top": 1957,
            "bottom": 1980,
            "left": 53,
            "right": 76,
            "width": 23,
            "height": 23
          },
          "page-42-A": {
            "top": 1943,
            "bottom": 1989,
            "left": 121,
            "right": 307,
            "width": 187,
            "height": 47
          },
          "page-43-LI": {
            "top": 2057,
            "bottom": 2111,
            "left": 17,
            "right": 353,
            "width": 336,
            "height": 54
          },
          "page-44-A": {
            "top": 2057,
            "bottom": 2111,
            "left": 17,
            "right": 353,
            "width": 336,
            "height": 54
          },
          "page-45-LI": {
            "top": 2111,
            "bottom": 2165,
            "left": 17,
            "right": 353,
            "width": 336,
            "height": 54
          },
          "page-46-A": {
            "top": 2111,
            "bottom": 2165,
            "left": 17,
            "right": 353,
            "width": 336,
            "height": 54
          },
          "page-47-LI": {
            "top": 2165,
            "bottom": 2219,
            "left": 17,
            "right": 353,
            "width": 336,
            "height": 54
          },
          "page-48-A": {
            "top": 2165,
            "bottom": 2219,
            "left": 17,
            "right": 353,
            "width": 336,
            "height": 54
          },
          "page-49-LI": {
            "top": 2219,
            "bottom": 2272,
            "left": 17,
            "right": 353,
            "width": 336,
            "height": 54
          },
          "page-50-A": {
            "top": 2219,
            "bottom": 2272,
            "left": 17,
            "right": 353,
            "width": 336,
            "height": 54
          },
          "page-51-LI": {
            "top": 2383,
            "bottom": 2407,
            "left": 37,
            "right": 333,
            "width": 296,
            "height": 24
          },
          "page-52-LI": {
            "top": 2427,
            "bottom": 2451,
            "left": 37,
            "right": 333,
            "width": 296,
            "height": 24
          },
          "page-53-LI": {
            "top": 2471,
            "bottom": 2496,
            "left": 37,
            "right": 333,
            "width": 296,
            "height": 24
          },
          "page-54-LI": {
            "top": 2516,
            "bottom": 2540,
            "left": 37,
            "right": 333,
            "width": 296,
            "height": 24
          },
          "page-55-LI": {
            "top": 2560,
            "bottom": 2584,
            "left": 37,
            "right": 333,
            "width": 296,
            "height": 24
          },
          "page-56-SPAN": {
            "top": 3673,
            "bottom": 3714,
            "left": 180,
            "right": 221,
            "width": 41,
            "height": 41
          },
          "page-57-SPAN": {
            "top": 3682,
            "bottom": 3705,
            "left": 189,
            "right": 212,
            "width": 23,
            "height": 23
          },
          "page-58-SPAN": {
            "top": 3673,
            "bottom": 3714,
            "left": 229,
            "right": 270,
            "width": 41,
            "height": 41
          },
          "page-59-SPAN": {
            "top": 3682,
            "bottom": 3705,
            "left": 238,
            "right": 261,
            "width": 23,
            "height": 23
          },
          "page-60-SPAN": {
            "top": 3673,
            "bottom": 3714,
            "left": 278,
            "right": 319,
            "width": 41,
            "height": 41
          },
          "page-61-SPAN": {
            "top": 3682,
            "bottom": 3705,
            "left": 287,
            "right": 310,
            "width": 23,
            "height": 23
          },
          "page-62-SPAN": {
            "top": 3724,
            "bottom": 3765,
            "left": 180,
            "right": 221,
            "width": 41,
            "height": 41
          },
          "page-63-SPAN": {
            "top": 3733,
            "bottom": 3756,
            "left": 189,
            "right": 212,
            "width": 23,
            "height": 23
          },
          "page-64-HEADER": {
            "top": 381,
            "bottom": 621,
            "left": 27,
            "right": 333,
            "width": 306,
            "height": 240
          },
          "page-65-DIV": {
            "top": 621,
            "bottom": 1620,
            "left": 27,
            "right": 333,
            "width": 306,
            "height": 998
          },
          "page-66-SPAN": {
            "top": 381,
            "bottom": 400,
            "left": 158,
            "right": 251,
            "width": 93,
            "height": 19
          },
          "7-0-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-1-A": {
            "top": 11,
            "bottom": 66,
            "left": 20,
            "right": 140,
            "width": 120,
            "height": 55
          },
          "7-2-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-3-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-4-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-5-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-6-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-7-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-8-A": {
            "top": 20,
            "bottom": 40,
            "left": 330,
            "right": 350,
            "width": 20,
            "height": 20
          },
          "7-9-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-10-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-11-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-12-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-13-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-14-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-15-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-16-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-17-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-18-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-19-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-20-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-21-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-22-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-23-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-24-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-25-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-26-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-27-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-28-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-29-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-30-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-31-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-32-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-33-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-34-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-35-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-36-A": {
            "top": 381,
            "bottom": 401,
            "left": 171,
            "right": 251,
            "width": 79,
            "height": 19
          },
          "7-37-A": {
            "top": 155,
            "bottom": 203,
            "left": 280,
            "right": 328,
            "width": 48,
            "height": 48
          },
          "7-38-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-39-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-40-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-41-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-42-A": {
            "top": 1680,
            "bottom": 1728,
            "left": 261,
            "right": 309,
            "width": 48,
            "height": 48
          },
          "7-43-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-44-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-45-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-46-A": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-47-A": {
            "top": 1760,
            "bottom": 1794,
            "left": 98,
            "right": 262,
            "width": 164,
            "height": 34
          },
          "7-48-A": {
            "top": 1957,
            "bottom": 1980,
            "left": 53,
            "right": 76,
            "width": 23,
            "height": 23
          },
          "7-49-A": {
            "top": 1943,
            "bottom": 1989,
            "left": 121,
            "right": 307,
            "width": 187,
            "height": 47
          },
          "7-50-A": {
            "top": 2057,
            "bottom": 2111,
            "left": 17,
            "right": 353,
            "width": 336,
            "height": 54
          },
          "7-51-A": {
            "top": 2111,
            "bottom": 2165,
            "left": 17,
            "right": 353,
            "width": 336,
            "height": 54
          },
          "7-52-A": {
            "top": 2165,
            "bottom": 2219,
            "left": 17,
            "right": 353,
            "width": 336,
            "height": 54
          },
          "7-53-A": {
            "top": 2219,
            "bottom": 2272,
            "left": 17,
            "right": 353,
            "width": 336,
            "height": 54
          },
          "7-54-A": {
            "top": 2384,
            "bottom": 2402,
            "left": 75,
            "right": 173,
            "width": 97,
            "height": 18
          },
          "7-55-A": {
            "top": 2428,
            "bottom": 2446,
            "left": 75,
            "right": 176,
            "width": 100,
            "height": 18
          },
          "7-56-A": {
            "top": 2472,
            "bottom": 2490,
            "left": 75,
            "right": 176,
            "width": 100,
            "height": 18
          },
          "7-57-A": {
            "top": 2516,
            "bottom": 2534,
            "left": 75,
            "right": 177,
            "width": 102,
            "height": 18
          },
          "7-58-A": {
            "top": 2561,
            "bottom": 2578,
            "left": 75,
            "right": 176,
            "width": 100,
            "height": 18
          },
          "7-59-A": {
            "top": 2714,
            "bottom": 2779,
            "left": 13,
            "right": 347,
            "width": 335,
            "height": 65
          },
          "7-60-A": {
            "top": 2846,
            "bottom": 2867,
            "left": 13,
            "right": 160,
            "width": 147,
            "height": 21
          },
          "7-61-A": {
            "top": 2877,
            "bottom": 2920,
            "left": 13,
            "right": 160,
            "width": 147,
            "height": 43
          },
          "7-62-A": {
            "top": 2930,
            "bottom": 2951,
            "left": 13,
            "right": 160,
            "width": 147,
            "height": 21
          },
          "7-63-A": {
            "top": 2958,
            "bottom": 2978,
            "left": 13,
            "right": 160,
            "width": 147,
            "height": 20
          },
          "7-64-A": {
            "top": 2982,
            "bottom": 3003,
            "left": 13,
            "right": 160,
            "width": 147,
            "height": 20
          },
          "7-65-A": {
            "top": 3007,
            "bottom": 3027,
            "left": 13,
            "right": 160,
            "width": 147,
            "height": 20
          },
          "7-66-A": {
            "top": 3039,
            "bottom": 3060,
            "left": 13,
            "right": 160,
            "width": 147,
            "height": 21
          },
          "7-67-A": {
            "top": 2846,
            "bottom": 2867,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 21
          },
          "7-68-A": {
            "top": 2877,
            "bottom": 2899,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 21
          },
          "7-69-A": {
            "top": 2906,
            "bottom": 2926,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 20
          },
          "7-70-A": {
            "top": 2930,
            "bottom": 2970,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 40
          },
          "7-71-A": {
            "top": 2974,
            "bottom": 3015,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 40
          },
          "7-72-A": {
            "top": 3027,
            "bottom": 3069,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 43
          },
          "7-73-A": {
            "top": 3079,
            "bottom": 3101,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 21
          },
          "7-74-A": {
            "top": 3108,
            "bottom": 3128,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 20
          },
          "7-75-A": {
            "top": 3132,
            "bottom": 3152,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 20
          },
          "7-76-A": {
            "top": 3156,
            "bottom": 3176,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 20
          },
          "7-77-A": {
            "top": 3246,
            "bottom": 3267,
            "left": 13,
            "right": 160,
            "width": 147,
            "height": 21
          },
          "7-78-A": {
            "top": 3277,
            "bottom": 3298,
            "left": 13,
            "right": 160,
            "width": 147,
            "height": 21
          },
          "7-79-A": {
            "top": 3308,
            "bottom": 3329,
            "left": 13,
            "right": 160,
            "width": 147,
            "height": 21
          },
          "7-80-A": {
            "top": 3397,
            "bottom": 3418,
            "left": 13,
            "right": 160,
            "width": 147,
            "height": 21
          },
          "7-81-A": {
            "top": 3428,
            "bottom": 3449,
            "left": 13,
            "right": 160,
            "width": 147,
            "height": 21
          },
          "7-82-A": {
            "top": 3459,
            "bottom": 3502,
            "left": 13,
            "right": 160,
            "width": 147,
            "height": 43
          },
          "7-83-A": {
            "top": 3512,
            "bottom": 3533,
            "left": 13,
            "right": 160,
            "width": 147,
            "height": 21
          },
          "7-84-A": {
            "top": 3246,
            "bottom": 3267,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 21
          },
          "7-85-A": {
            "top": 3277,
            "bottom": 3298,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 21
          },
          "7-86-A": {
            "top": 3308,
            "bottom": 3329,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 21
          },
          "7-87-A": {
            "top": 3339,
            "bottom": 3361,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 21
          },
          "7-88-A": {
            "top": 3371,
            "bottom": 3392,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 21
          },
          "7-89-A": {
            "top": 3402,
            "bottom": 3423,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 21
          },
          "7-90-A": {
            "top": 3491,
            "bottom": 3512,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 21
          },
          "7-91-A": {
            "top": 3522,
            "bottom": 3543,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 21
          },
          "7-92-A": {
            "top": 3553,
            "bottom": 3575,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 21
          },
          "7-93-A": {
            "top": 3585,
            "bottom": 3606,
            "left": 180,
            "right": 327,
            "width": 147,
            "height": 21
          },
          "7-94-A": {
            "top": 3673,
            "bottom": 3714,
            "left": 180,
            "right": 221,
            "width": 41,
            "height": 41
          },
          "7-95-A": {
            "top": 3673,
            "bottom": 3714,
            "left": 229,
            "right": 270,
            "width": 41,
            "height": 41
          },
          "7-96-A": {
            "top": 3673,
            "bottom": 3714,
            "left": 278,
            "right": 319,
            "width": 41,
            "height": 41
          },
          "7-97-A": {
            "top": 3724,
            "bottom": 3765,
            "left": 180,
            "right": 221,
            "width": 41,
            "height": 41
          },
          "7-98-A": {
            "top": 3854,
            "bottom": 3874,
            "left": 87,
            "right": 252,
            "width": 164,
            "height": 20
          },
          "7-99-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-100-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-101-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-102-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-103-META": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-104-META": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-105-META": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-106-META": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-107-META": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-108-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-109-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-110-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-111-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-112-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-113-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-114-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-115-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-116-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-117-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-118-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-119-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-120-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-121-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-122-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-123-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-124-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-125-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-126-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-127-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-128-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-129-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-130-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-131-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-132-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-133-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-134-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-135-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-136-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-137-SPAN": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "7-138-BODY": {
            "top": 0,
            "bottom": 3894,
            "left": 0,
            "right": 360,
            "width": 360,
            "height": 3894
          },
          "7-139-SPAN": {
            "top": 3832,
            "bottom": 3853,
            "left": 20,
            "right": 340,
            "width": 321,
            "height": 21
          },
          "7-140-DIV": {
            "top": 3816,
            "bottom": 3894,
            "left": 0,
            "right": 360,
            "width": 360,
            "height": 78
          },
          "7-141-H4": {
            "top": 2322,
            "bottom": 2373,
            "left": 37,
            "right": 333,
            "width": 296,
            "height": 51
          }
        }
      }
    },
    "script-treemap-data": {
      "id": "script-treemap-data",
      "title": "Script Treemap Data",
      "description": "Used for treemap app",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "treemap-data",
        "nodes": [
          {
            "name": "https://frontend-optimisation-course-three.vercel.app/news-single.html",
            "resourceBytes": 852
          },
          {
            "name": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-main.js",
            "resourceBytes": 121,
            "unusedBytes": 0
          },
          {
            "name": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-vendor.js",
            "resourceBytes": 77744,
            "unusedBytes": 51869
          },
          {
            "name": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-vendors.js",
            "resourceBytes": 211328,
            "unusedBytes": 173257
          },
          {
            "name": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-common.js",
            "resourceBytes": 196399,
            "unusedBytes": 124887
          },
          {
            "name": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-runtime.js",
            "resourceBytes": 2306,
            "unusedBytes": 1152
          },
          {
            "name": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-app.js",
            "resourceBytes": 151,
            "unusedBytes": 0
          },
          {
            "name": "https://www.googletagmanager.com/gtag/js?id=G-VG76XBJDZM&l=dataLayer&cx=c",
            "resourceBytes": 221403,
            "unusedBytes": 90900
          },
          {
            "name": "https://embed.tawk.to/5fc2ba00920fc91564cb9b3c/default",
            "resourceBytes": 2121,
            "unusedBytes": 0
          },
          {
            "name": "https://www.googletagmanager.com/gtm.js?id=GTM-TGDSWZ8",
            "resourceBytes": 100307,
            "unusedBytes": 54394
          },
          {
            "name": "https://js.stripe.com/v3/",
            "resourceBytes": 448054,
            "unusedBytes": 352299
          },
          {
            "name": "https://use.typekit.net/lna1ryl.js",
            "resourceBytes": 17285,
            "unusedBytes": 6025
          },
          {
            "name": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/jquery/dist/jquery.min.js",
            "resourceBytes": 84280,
            "unusedBytes": 48480,
            "children": [
              {
                "name": "jquery.js",
                "resourceBytes": 84157,
                "unusedBytes": 48480
              },
              {
                "name": "(unmapped)",
                "resourceBytes": 123
              }
            ]
          },
          {
            "name": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/requirejs/require.js",
            "resourceBytes": 15106,
            "unusedBytes": 3575
          },
          {
            "name": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/home.js",
            "resourceBytes": 4920,
            "unusedBytes": 686
          },
          {
            "name": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/main.js",
            "resourceBytes": 405,
            "unusedBytes": 0
          },
          {
            "name": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/jquery.js",
            "resourceBytes": 49,
            "unusedBytes": 0
          },
          {
            "name": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/components/domReady.js",
            "resourceBytes": 769,
            "unusedBytes": 136
          },
          {
            "name": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/TweenMax.min.js",
            "resourceBytes": 94935,
            "unusedBytes": 67391
          },
          {
            "name": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/components/bxslider.js",
            "resourceBytes": 19299,
            "unusedBytes": 17566
          },
          {
            "name": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/global.js",
            "resourceBytes": 12567,
            "unusedBytes": 7810
          },
          {
            "name": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/components/waypoints.min.js",
            "resourceBytes": 8044,
            "unusedBytes": 3222
          },
          {
            "name": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/components/flexbox_fallback.js",
            "resourceBytes": 3011,
            "unusedBytes": 2046
          },
          {
            "name": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/components/placeholders.min.js",
            "resourceBytes": 4266,
            "unusedBytes": 2762
          },
          {
            "name": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/components/magnific.js",
            "resourceBytes": 20823,
            "unusedBytes": 16145
          },
          {
            "name": "https://embed.tawk.to/_s/v4/app/63b77dcd282/languages/en.js",
            "resourceBytes": 16877,
            "unusedBytes": 74
          },
          {
            "name": "chrome-extension://ienfalfjdbdpebioblfackkekamfmbnh/app/detect_angular_for_extension_icon_bundle.js",
            "resourceBytes": 644,
            "children": [
              {
                "name": "../../../../../../../../devtools/projects/shell-browser/src/app/detect-angular-for-extension-icon.ts",
                "resourceBytes": 367
              },
              {
                "name": "(unmapped)",
                "resourceBytes": 277
              }
            ]
          }
        ]
      }
    },
    "pwa-cross-browser": {
      "id": "pwa-cross-browser",
      "title": "Site works cross-browser",
      "description": "To reach the most number of users, sites should work across every major browser. [Learn more](https://web.dev/pwa-cross-browser/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "pwa-page-transitions": {
      "id": "pwa-page-transitions",
      "title": "Page transitions don't feel like they block on the network",
      "description": "Transitions should feel snappy as you tap around, even on a slow network. This experience is key to a user's perception of performance. [Learn more](https://web.dev/pwa-page-transitions/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "pwa-each-page-has-url": {
      "id": "pwa-each-page-has-url",
      "title": "Each page has a URL",
      "description": "Ensure individual pages are deep linkable via URL and that URLs are unique for the purpose of shareability on social media. [Learn more](https://web.dev/pwa-each-page-has-url/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "accesskeys": {
      "id": "accesskeys",
      "title": "`[accesskey]` values are unique",
      "description": "Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more](https://web.dev/accesskeys/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-allowed-attr": {
      "id": "aria-allowed-attr",
      "title": "`[aria-*]` attributes match their roles",
      "description": "Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn more](https://web.dev/aria-allowed-attr/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-command-name": {
      "id": "aria-command-name",
      "title": "`button`, `link`, and `menuitem` elements have accessible names",
      "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-hidden-body": {
      "id": "aria-hidden-body",
      "title": "`[aria-hidden=\"true\"]` is not present on the document `<body>`",
      "description": "Assistive technologies, like screen readers, work inconsistently when `aria-hidden=\"true\"` is set on the document `<body>`. [Learn more](https://web.dev/aria-hidden-body/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "aria-hidden-focus": {
      "id": "aria-hidden-focus",
      "title": "`[aria-hidden=\"true\"]` elements do not contain focusable descendents",
      "description": "Focusable descendents within an `[aria-hidden=\"true\"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn more](https://web.dev/aria-hidden-focus/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "aria-input-field-name": {
      "id": "aria-input-field-name",
      "title": "ARIA input fields have accessible names",
      "description": "When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-meter-name": {
      "id": "aria-meter-name",
      "title": "ARIA `meter` elements have accessible names",
      "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-progressbar-name": {
      "id": "aria-progressbar-name",
      "title": "ARIA `progressbar` elements have accessible names",
      "description": "When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-required-attr": {
      "id": "aria-required-attr",
      "title": "`[role]`s have all required `[aria-*]` attributes",
      "description": "Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more](https://web.dev/aria-required-attr/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-required-children": {
      "id": "aria-required-children",
      "title": "Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.",
      "description": "Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more](https://web.dev/aria-required-children/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-required-parent": {
      "id": "aria-required-parent",
      "title": "`[role]`s are contained by their required parent element",
      "description": "Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more](https://web.dev/aria-required-parent/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-roles": {
      "id": "aria-roles",
      "title": "`[role]` values are valid",
      "description": "ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more](https://web.dev/aria-roles/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-toggle-field-name": {
      "id": "aria-toggle-field-name",
      "title": "ARIA toggle fields have accessible names",
      "description": "When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-tooltip-name": {
      "id": "aria-tooltip-name",
      "title": "ARIA `tooltip` elements have accessible names",
      "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-treeitem-name": {
      "id": "aria-treeitem-name",
      "title": "ARIA `treeitem` elements have accessible names",
      "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-valid-attr-value": {
      "id": "aria-valid-attr-value",
      "title": "`[aria-*]` attributes have valid values",
      "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more](https://web.dev/aria-valid-attr-value/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-valid-attr": {
      "id": "aria-valid-attr",
      "title": "`[aria-*]` attributes are valid and not misspelled",
      "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more](https://web.dev/aria-valid-attr/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "button-name": {
      "id": "button-name",
      "title": "Buttons have an accessible name",
      "description": "When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn more](https://web.dev/button-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "bypass": {
      "id": "bypass",
      "title": "The page contains a heading, skip link, or landmark region",
      "description": "Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more](https://web.dev/bypass/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "color-contrast": {
      "id": "color-contrast",
      "title": "Background and foreground colors do not have a sufficient contrast ratio.",
      "description": "Low-contrast text is difficult or impossible for many users to read. [Learn more](https://web.dev/color-contrast/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "itemType": "node"
            },
            "text": "Failing Elements"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "7-139-SPAN",
              "path": "1,HTML,1,BODY,6,FOOTER,1,DIV,0,DIV,0,DIV,0,SPAN",
              "selector": "div.l-footer__bottom > div.layout > div.col-50 > span",
              "boundingRect": {
                "top": 3832,
                "bottom": 3853,
                "left": 20,
                "right": 340,
                "width": 321,
                "height": 21
              },
              "snippet": "<span>",
              "nodeLabel": "© 20XX Web Dev Insider page to optimise",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.43 (foreground color: #3082b4, background color: #022c45, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1"
            },
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "relatedNode": {
                    "type": "node",
                    "lhId": "7-140-DIV",
                    "path": "1,HTML,1,BODY,6,FOOTER,1,DIV",
                    "selector": "body > footer.l-footer > div.l-footer__bottom",
                    "boundingRect": {
                      "top": 3816,
                      "bottom": 3894,
                      "left": 0,
                      "right": 360,
                      "width": 360,
                      "height": 78
                    },
                    "snippet": "<div class=\"l-footer__bottom\">",
                    "nodeLabel": "© 20XX Web Dev Insider page to optimise Privacy & Cookie policy"
                  }
                }
              ]
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-98-A",
              "path": "1,HTML,1,BODY,6,FOOTER,1,DIV,0,DIV,0,DIV,1,SPAN,0,A",
              "selector": "div.layout > div.col-50 > span > a",
              "boundingRect": {
                "top": 3854,
                "bottom": 3874,
                "left": 87,
                "right": 252,
                "width": 164,
                "height": 20
              },
              "snippet": "<a href=\"/\">",
              "nodeLabel": "Privacy & Cookie policy",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.43 (foreground color: #3082b4, background color: #022c45, font size: 10.8pt (14.4px), font weight: normal). Expected contrast ratio of 4.5:1"
            },
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "relatedNode": {
                    "type": "node",
                    "lhId": "7-140-DIV",
                    "path": "1,HTML,1,BODY,6,FOOTER,1,DIV",
                    "selector": "body > footer.l-footer > div.l-footer__bottom",
                    "boundingRect": {
                      "top": 3816,
                      "bottom": 3894,
                      "left": 0,
                      "right": 360,
                      "width": 360,
                      "height": 78
                    },
                    "snippet": "<div class=\"l-footer__bottom\">",
                    "nodeLabel": "© 20XX Web Dev Insider page to optimise Privacy & Cookie policy"
                  }
                }
              ]
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "impact": "serious",
          "tags": [
            "cat.color",
            "wcag2aa",
            "wcag143"
          ]
        }
      }
    },
    "definition-list": {
      "id": "definition-list",
      "title": "`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>`, `<template>` or `<div>` elements.",
      "description": "When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn more](https://web.dev/definition-list/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "dlitem": {
      "id": "dlitem",
      "title": "Definition list items are wrapped in `<dl>` elements",
      "description": "Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them. [Learn more](https://web.dev/dlitem/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "document-title": {
      "id": "document-title",
      "title": "Document has a `<title>` element",
      "description": "The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more](https://web.dev/document-title/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "duplicate-id-active": {
      "id": "duplicate-id-active",
      "title": "`[id]` attributes on active, focusable elements are unique",
      "description": "All focusable elements must have a unique `id` to ensure that they're visible to assistive technologies. [Learn more](https://web.dev/duplicate-id-active/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "duplicate-id-aria": {
      "id": "duplicate-id-aria",
      "title": "ARIA IDs are unique",
      "description": "The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn more](https://web.dev/duplicate-id-aria/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "form-field-multiple-labels": {
      "id": "form-field-multiple-labels",
      "title": "No form fields have multiple labels",
      "description": "Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn more](https://web.dev/form-field-multiple-labels/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "frame-title": {
      "id": "frame-title",
      "title": "`<frame>` or `<iframe>` elements have a title",
      "description": "Screen reader users rely on frame titles to describe the contents of frames. [Learn more](https://web.dev/frame-title/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "heading-order": {
      "id": "heading-order",
      "title": "Heading elements are not in a sequentially-descending order",
      "description": "Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more](https://web.dev/heading-order/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "itemType": "node"
            },
            "text": "Failing Elements"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "7-141-H4",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,1,ASIDE,1,DIV,0,DIV,0,H4",
              "selector": "aside.col-25 > div.inner-page__box > div > h4.headline-7",
              "boundingRect": {
                "top": 2322,
                "bottom": 2373,
                "left": 37,
                "right": 333,
                "width": 296,
                "height": 51
              },
              "snippet": "<h4 class=\"headline-7\">",
              "nodeLabel": "Recent News",
              "explanation": "Fix any of the following:\n  Heading order invalid"
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "impact": "moderate",
          "tags": [
            "cat.semantics",
            "best-practice"
          ]
        }
      }
    },
    "html-has-lang": {
      "id": "html-has-lang",
      "title": "`<html>` element has a `[lang]` attribute",
      "description": "If a page doesn't specify a lang attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more](https://web.dev/html-has-lang/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "html-lang-valid": {
      "id": "html-lang-valid",
      "title": "`<html>` element has a valid value for its `[lang]` attribute",
      "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn more](https://web.dev/html-lang-valid/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "image-alt": {
      "id": "image-alt",
      "title": "Image elements have `[alt]` attributes",
      "description": "Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more](https://web.dev/image-alt/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "input-image-alt": {
      "id": "input-image-alt",
      "title": "`<input type=\"image\">` elements have `[alt]` text",
      "description": "When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn more](https://web.dev/input-image-alt/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "label": {
      "id": "label",
      "title": "Form elements have associated labels",
      "description": "Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more](https://web.dev/label/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "link-name": {
      "id": "link-name",
      "title": "Links have a discernible name",
      "description": "Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn more](https://web.dev/link-name/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "list": {
      "id": "list",
      "title": "Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).",
      "description": "Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more](https://web.dev/list/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "listitem": {
      "id": "listitem",
      "title": "List items (`<li>`) are contained within `<ul>` or `<ol>` parent elements",
      "description": "Screen readers require list items (`<li>`) to be contained within a parent `<ul>` or `<ol>` to be announced properly. [Learn more](https://web.dev/listitem/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "meta-refresh": {
      "id": "meta-refresh",
      "title": "The document does not use `<meta http-equiv=\"refresh\">`",
      "description": "Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more](https://web.dev/meta-refresh/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "meta-viewport": {
      "id": "meta-viewport",
      "title": "`[user-scalable=\"no\"]` is not used in the `<meta name=\"viewport\">` element and the `[maximum-scale]` attribute is not less than 5.",
      "description": "Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more](https://web.dev/meta-viewport/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "object-alt": {
      "id": "object-alt",
      "title": "`<object>` elements have alternate text",
      "description": "Screen readers cannot translate non-text content. Adding alternate text to `<object>` elements helps screen readers convey meaning to users. [Learn more](https://web.dev/object-alt/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "tabindex": {
      "id": "tabindex",
      "title": "No element has a `[tabindex]` value greater than 0",
      "description": "A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more](https://web.dev/tabindex/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "td-headers-attr": {
      "id": "td-headers-attr",
      "title": "Cells in a `<table>` element that use the `[headers]` attribute refer to table cells within the same table.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more](https://web.dev/td-headers-attr/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "th-has-data-cells": {
      "id": "th-has-data-cells",
      "title": "`<th>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more](https://web.dev/th-has-data-cells/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "valid-lang": {
      "id": "valid-lang",
      "title": "`[lang]` attributes have a valid value",
      "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn more](https://web.dev/valid-lang/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "video-caption": {
      "id": "video-caption",
      "title": "`<video>` elements contain a `<track>` element with `[kind=\"captions\"]`",
      "description": "When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more](https://web.dev/video-caption/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "custom-controls-labels": {
      "id": "custom-controls-labels",
      "title": "Custom controls have associated labels",
      "description": "Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more](https://web.dev/custom-controls-labels/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "custom-controls-roles": {
      "id": "custom-controls-roles",
      "title": "Custom controls have ARIA roles",
      "description": "Custom interactive controls have appropriate ARIA roles. [Learn more](https://web.dev/custom-control-roles/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "focus-traps": {
      "id": "focus-traps",
      "title": "User focus is not accidentally trapped in a region",
      "description": "A user can tab into and out of any control or region without accidentally trapping their focus. [Learn more](https://web.dev/focus-traps/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "focusable-controls": {
      "id": "focusable-controls",
      "title": "Interactive controls are keyboard focusable",
      "description": "Custom interactive controls are keyboard focusable and display a focus indicator. [Learn more](https://web.dev/focusable-controls/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "interactive-element-affordance": {
      "id": "interactive-element-affordance",
      "title": "Interactive elements indicate their purpose and state",
      "description": "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn more](https://web.dev/interactive-element-affordance/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "logical-tab-order": {
      "id": "logical-tab-order",
      "title": "The page has a logical tab order",
      "description": "Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more](https://web.dev/logical-tab-order/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "managed-focus": {
      "id": "managed-focus",
      "title": "The user's focus is directed to new content added to the page",
      "description": "If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn more](https://web.dev/managed-focus/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "offscreen-content-hidden": {
      "id": "offscreen-content-hidden",
      "title": "Offscreen content is hidden from assistive technology",
      "description": "Offscreen content is hidden with display: none or aria-hidden=true. [Learn more](https://web.dev/offscreen-content-hidden/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "use-landmarks": {
      "id": "use-landmarks",
      "title": "HTML5 landmark elements are used to improve navigation",
      "description": "Landmark elements (<main>, <nav>, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more](https://web.dev/use-landmarks/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "visual-order-follows-dom": {
      "id": "visual-order-follows-dom",
      "title": "Visual order on the page follows DOM order",
      "description": "DOM order matches the visual order, improving navigation for assistive technology. [Learn more](https://web.dev/visual-order-follows-dom/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "uses-long-cache-ttl": {
      "id": "uses-long-cache-ttl",
      "title": "Serve static assets with an efficient cache policy",
      "description": "A long cache lifetime can speed up repeat visits to your page. [Learn more](https://web.dev/uses-long-cache-ttl/).",
      "score": 0.48,
      "scoreDisplayMode": "numeric",
      "numericValue": 135735.73803538174,
      "numericUnit": "byte",
      "displayValue": "11 resources found",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "cacheLifetimeMs",
            "itemType": "ms",
            "text": "Cache TTL",
            "displayUnit": "duration"
          },
          {
            "key": "totalBytes",
            "itemType": "bytes",
            "text": "Transfer Size",
            "displayUnit": "kb",
            "granularity": 1
          }
        ],
        "items": [
          {
            "url": "https://js.stripe.com/v3/",
            "debugData": {
              "type": "debugdata",
              "max-age": 60
            },
            "cacheLifetimeMs": 60000,
            "cacheHitProbability": 0.008333333333333333,
            "totalBytes": 107649,
            "wastedBytes": 106751.925
          },
          {
            "url": "https://m.stripe.network/out-4.5.42.js",
            "debugData": {
              "type": "debugdata",
              "max-age": 300,
              "public": true
            },
            "cacheLifetimeMs": 300000,
            "cacheHitProbability": 0.041666666666666664,
            "totalBytes": 16154,
            "wastedBytes": 15480.916666666668
          },
          {
            "url": "https://embed.tawk.to/5fc2ba00920fc91564cb9b3c/default",
            "debugData": {
              "type": "debugdata",
              "public": true,
              "max-age": 7200,
              "s-maxage": "3600"
            },
            "cacheLifetimeMs": 7200000,
            "cacheHitProbability": 0.25,
            "totalBytes": 734,
            "wastedBytes": 550.5
          },
          {
            "url": "https://p.typekit.net/p.gif?s=1&k=lna1ryl&ht=tk&h=frontend-optimisation-course-three.vercel.app&f=139.140.175.176&a=1094139&js=1.21.0&app=typekit&e=js&_=1677430377464",
            "debugData": {
              "type": "debugdata",
              "public": true,
              "max-age": 604800
            },
            "cacheLifetimeMs": 604800000,
            "cacheHitProbability": 0.9,
            "totalBytes": 228,
            "wastedBytes": 22.799999999999994
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-vendors.js",
            "debugData": {
              "type": "debugdata",
              "public": true,
              "max-age": 2592000,
              "immutable": true
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 62809,
            "wastedBytes": 5877.378491620108
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-common.js",
            "debugData": {
              "type": "debugdata",
              "public": true,
              "max-age": 2592000,
              "immutable": true
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 41050,
            "wastedBytes": 3841.270949720668
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-vendor.js",
            "debugData": {
              "type": "debugdata",
              "public": true,
              "max-age": 2592000,
              "immutable": true
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 27830,
            "wastedBytes": 2604.2039106145235
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/languages/en.js",
            "debugData": {
              "type": "debugdata",
              "public": true,
              "max-age": 2592000,
              "immutable": true
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 4319,
            "wastedBytes": 404.15223463687124
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-runtime.js",
            "debugData": {
              "type": "debugdata",
              "public": true,
              "max-age": 2592000,
              "immutable": true
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 1411,
            "wastedBytes": 132.03491620111723
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-app.js",
            "debugData": {
              "type": "debugdata",
              "public": true,
              "max-age": 2592000,
              "immutable": true
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 389,
            "wastedBytes": 36.400837988826794
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-main.js",
            "debugData": {
              "type": "debugdata",
              "public": true,
              "max-age": 2592000,
              "immutable": true
            },
            "cacheLifetimeMs": 2592000000,
            "cacheHitProbability": 0.9064245810055866,
            "totalBytes": 365,
            "wastedBytes": 34.15502793296087
          }
        ],
        "summary": {
          "wastedBytes": 135735.73803538174
        }
      }
    },
    "total-byte-weight": {
      "id": "total-byte-weight",
      "title": "Avoid enormous network payloads",
      "description": "Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://web.dev/total-byte-weight/).",
      "score": 0.44,
      "scoreDisplayMode": "numeric",
      "numericValue": 4263792,
      "numericUnit": "byte",
      "displayValue": "Total size was 4,164 KiB",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "totalBytes",
            "itemType": "bytes",
            "text": "Transfer Size"
          }
        ],
        "items": [
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/post2.png",
            "totalBytes": 1373036
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/post.png",
            "totalBytes": 903091
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/post4.png",
            "totalBytes": 837080
          },
          {
            "url": "https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css",
            "totalBytes": 280270
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/bg-listings-grad.jpg",
            "totalBytes": 139874
          },
          {
            "url": "https://js.stripe.com/v3/",
            "totalBytes": 107649
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/news-example.jpg",
            "totalBytes": 91436
          },
          {
            "url": "https://www.googletagmanager.com/gtag/js?id=G-VG76XBJDZM&l=dataLayer&cx=c",
            "totalBytes": 77953
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-vendors.js",
            "totalBytes": 62809
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-common.js",
            "totalBytes": 41050
          }
        ]
      }
    },
    "offscreen-images": {
      "id": "offscreen-images",
      "title": "Defer offscreen images",
      "description": "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://web.dev/offscreen-images/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "render-blocking-resources": {
      "id": "render-blocking-resources",
      "title": "Eliminate render-blocking resources",
      "description": "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://web.dev/render-blocking-resources/).",
      "score": 0.43,
      "scoreDisplayMode": "numeric",
      "numericValue": 1383,
      "numericUnit": "millisecond",
      "displayValue": "Potential savings of 1,380 ms",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "totalBytes",
            "valueType": "bytes",
            "label": "Transfer Size"
          },
          {
            "key": "wastedMs",
            "valueType": "timespanMs",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/css/homework/app.css",
            "totalBytes": 21979,
            "wastedMs": 600
          },
          {
            "url": "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,900;1,100;1,200;1,300;1,400;1,500",
            "totalBytes": 967,
            "wastedMs": 784
          },
          {
            "url": "https://js.stripe.com/v3/",
            "totalBytes": 107649,
            "wastedMs": 2438
          },
          {
            "url": "https://use.typekit.net/lna1ryl.js",
            "totalBytes": 6894,
            "wastedMs": 150
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/jquery/dist/jquery.min.js",
            "totalBytes": 31708,
            "wastedMs": 750
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/requirejs/require.js",
            "totalBytes": 6774,
            "wastedMs": 150
          }
        ],
        "overallSavingsMs": 1383
      }
    },
    "unminified-css": {
      "id": "unminified-css",
      "title": "Minify CSS",
      "description": "Minifying CSS files can reduce network payload sizes. [Learn more](https://web.dev/unminified-css/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "Potential savings of 5 KiB",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "totalBytes",
            "valueType": "bytes",
            "label": "Transfer Size"
          },
          {
            "key": "wastedBytes",
            "valueType": "bytes",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/css/homework/app.css",
            "totalBytes": 21979,
            "wastedBytes": 4902,
            "wastedPercent": 22.301783046472355
          }
        ],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 4902
      }
    },
    "unminified-javascript": {
      "id": "unminified-javascript",
      "title": "Minify JavaScript",
      "description": "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://web.dev/unminified-javascript/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "unused-css-rules": {
      "id": "unused-css-rules",
      "title": "Reduce unused CSS",
      "description": "Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn more](https://web.dev/unused-css-rules/).",
      "score": 0.47,
      "scoreDisplayMode": "numeric",
      "numericValue": 1040,
      "numericUnit": "millisecond",
      "displayValue": "Potential savings of 274 KiB",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "totalBytes",
            "valueType": "bytes",
            "label": "Transfer Size"
          },
          {
            "key": "wastedBytes",
            "valueType": "bytes",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css",
            "wastedBytes": 280143,
            "wastedPercent": 99.95456743804317,
            "totalBytes": 280270
          }
        ],
        "overallSavingsMs": 1040,
        "overallSavingsBytes": 280143
      }
    },
    "unused-javascript": {
      "id": "unused-javascript",
      "title": "Reduce unused JavaScript",
      "description": "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn more](https://web.dev/unused-javascript/).",
      "score": 0.28,
      "scoreDisplayMode": "numeric",
      "numericValue": 2630,
      "numericUnit": "millisecond",
      "displayValue": "Potential savings of 234 KiB",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "subItemsHeading": {
              "key": "source",
              "valueType": "code"
            },
            "label": "URL"
          },
          {
            "key": "totalBytes",
            "valueType": "bytes",
            "subItemsHeading": {
              "key": "sourceBytes"
            },
            "label": "Transfer Size"
          },
          {
            "key": "wastedBytes",
            "valueType": "bytes",
            "subItemsHeading": {
              "key": "sourceWastedBytes"
            },
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "https://js.stripe.com/v3/",
            "totalBytes": 107649,
            "wastedBytes": 84643,
            "wastedPercent": 78.62869207729426
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-vendors.js",
            "totalBytes": 62809,
            "wastedBytes": 51494,
            "wastedPercent": 81.98487658994549
          },
          {
            "url": "https://www.googletagmanager.com/gtag/js?id=G-VG76XBJDZM&l=dataLayer&cx=c",
            "totalBytes": 77953,
            "wastedBytes": 32005,
            "wastedPercent": 41.05635424994241
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-common.js",
            "totalBytes": 41050,
            "wastedBytes": 26103,
            "wastedPercent": 63.5884093096197
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/js/homework/vendor/TweenMax.min.js",
            "totalBytes": 33361,
            "wastedBytes": 23682,
            "wastedPercent": 70.98646442302629
          },
          {
            "url": "https://www.googletagmanager.com/gtm.js?id=GTM-TGDSWZ8",
            "totalBytes": 39564,
            "wastedBytes": 21455,
            "wastedPercent": 54.22752150896747
          }
        ],
        "overallSavingsMs": 2630,
        "overallSavingsBytes": 239382
      }
    },
    "modern-image-formats": {
      "id": "modern-image-formats",
      "title": "Serve images in next-gen formats",
      "description": "Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://web.dev/uses-webp-images/).",
      "score": 0,
      "scoreDisplayMode": "numeric",
      "numericValue": 14870,
      "numericUnit": "millisecond",
      "displayValue": "Potential savings of 3,043 KiB",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "label": ""
          },
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "totalBytes",
            "valueType": "bytes",
            "label": "Resource Size"
          },
          {
            "key": "wastedBytes",
            "valueType": "bytes",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "page-3-IMG",
              "path": "1,HTML,1,BODY,3,DIV,0,DIV,3,DIV,1,DIV,0,DIV,2,P,0,IMG",
              "selector": "div.col-35 > div > p.small-text > img.l-megamenu__image",
              "boundingRect": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0,
                "width": 0,
                "height": 0
              },
              "snippet": "<img src=\"/assets/images/homework/post2.png\" class=\"l-megamenu__image\" alt=\"\">",
              "nodeLabel": "div.col-35 > div > p.small-text > img.l-megamenu__image"
            },
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/post2.png",
            "fromProtocol": true,
            "isCrossOrigin": false,
            "totalBytes": 1372141,
            "wastedBytes": 1319028.4,
            "wastedWebpBytes": 1329077
          },
          {
            "node": {
              "type": "node",
              "lhId": "page-1-IMG",
              "path": "1,HTML,1,BODY,3,DIV,0,DIV,1,DIV,1,DIV,0,DIV,2,P,0,IMG",
              "selector": "div.col-35 > div > p.small-text > img.l-megamenu__image",
              "boundingRect": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0,
                "width": 0,
                "height": 0
              },
              "snippet": "<img src=\"/assets/images/homework/post.png\" class=\"l-megamenu__image\" alt=\"\">",
              "nodeLabel": "div.col-35 > div > p.small-text > img.l-megamenu__image"
            },
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/post.png",
            "fromProtocol": true,
            "isCrossOrigin": false,
            "totalBytes": 902454,
            "wastedBytes": 835541.6,
            "wastedWebpBytes": 841108
          },
          {
            "node": {
              "type": "node",
              "lhId": "page-4-IMG",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,ARTICLE,0,DIV,0,FIGURE,0,IMG",
              "selector": "article.news-list__read-item > div > figure > img",
              "boundingRect": {
                "top": 156,
                "bottom": 360,
                "left": 28,
                "right": 332,
                "width": 304,
                "height": 204
              },
              "snippet": "<img src=\"/assets/images/homework/post4.png\" alt=\"\">",
              "nodeLabel": "article.news-list__read-item > div > figure > img"
            },
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/post4.png",
            "fromProtocol": true,
            "isCrossOrigin": false,
            "totalBytes": 836492,
            "wastedBytes": 806809.7,
            "wastedWebpBytes": 814160
          },
          {
            "node": {
              "type": "node",
              "lhId": "page-17-DIV",
              "path": "1,HTML,1,BODY,4,DIV",
              "selector": "body > div.inner-page",
              "boundingRect": {
                "top": 80,
                "bottom": 2694,
                "left": 0,
                "right": 360,
                "width": 360,
                "height": 2614
              },
              "snippet": "<div class=\"inner-page inner-page--read inner-page--blue-fill\">",
              "nodeLabel": "Jun 30, 2014  Corporate\nCum sociis natoque penatibus et ultrices volutpat\nShare…"
            },
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/bg-listings-grad.jpg",
            "fromProtocol": true,
            "isCrossOrigin": false,
            "totalBytes": 139652,
            "wastedBytes": 97602.95,
            "wastedWebpBytes": 112020
          },
          {
            "node": {
              "type": "node",
              "lhId": "page-2-IMG",
              "path": "1,HTML,1,BODY,3,DIV,0,DIV,2,DIV,1,DIV,0,DIV,2,P,0,IMG",
              "selector": "div.col-35 > div > p.small-text > img.l-megamenu__image",
              "boundingRect": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0,
                "width": 0,
                "height": 0
              },
              "snippet": "<img src=\"/assets/images/homework/news-example.jpg\" class=\"l-megamenu__image\" alt=\"\">",
              "nodeLabel": "div.col-35 > div > p.small-text > img.l-megamenu__image"
            },
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/news-example.jpg",
            "fromProtocol": true,
            "isCrossOrigin": false,
            "totalBytes": 91238,
            "wastedBytes": 57181.45,
            "wastedWebpBytes": 51446
          }
        ],
        "overallSavingsMs": 14870,
        "overallSavingsBytes": 3116164.1000000006
      }
    },
    "uses-optimized-images": {
      "id": "uses-optimized-images",
      "title": "Efficiently encode images",
      "description": "Optimized images load faster and consume less cellular data. [Learn more](https://web.dev/uses-optimized-images/).",
      "score": 0.78,
      "scoreDisplayMode": "numeric",
      "numericValue": 270,
      "numericUnit": "millisecond",
      "displayValue": "Potential savings of 34 KiB",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "label": ""
          },
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "totalBytes",
            "valueType": "bytes",
            "label": "Resource Size"
          },
          {
            "key": "wastedBytes",
            "valueType": "bytes",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "page-2-IMG",
              "path": "1,HTML,1,BODY,3,DIV,0,DIV,2,DIV,1,DIV,0,DIV,2,P,0,IMG",
              "selector": "div.col-35 > div > p.small-text > img.l-megamenu__image",
              "boundingRect": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0,
                "width": 0,
                "height": 0
              },
              "snippet": "<img src=\"/assets/images/homework/news-example.jpg\" class=\"l-megamenu__image\" alt=\"\">",
              "nodeLabel": "div.col-35 > div > p.small-text > img.l-megamenu__image"
            },
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/news-example.jpg",
            "fromProtocol": true,
            "isCrossOrigin": false,
            "totalBytes": 91238,
            "wastedBytes": 18679
          },
          {
            "node": {
              "type": "node",
              "lhId": "page-17-DIV",
              "path": "1,HTML,1,BODY,4,DIV",
              "selector": "body > div.inner-page",
              "boundingRect": {
                "top": 80,
                "bottom": 2694,
                "left": 0,
                "right": 360,
                "width": 360,
                "height": 2614
              },
              "snippet": "<div class=\"inner-page inner-page--read inner-page--blue-fill\">",
              "nodeLabel": "Jun 30, 2014  Corporate\nCum sociis natoque penatibus et ultrices volutpat\nShare…"
            },
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/bg-listings-grad.jpg",
            "fromProtocol": true,
            "isCrossOrigin": false,
            "totalBytes": 139652,
            "wastedBytes": 15667
          }
        ],
        "overallSavingsMs": 270,
        "overallSavingsBytes": 34346
      }
    },
    "uses-text-compression": {
      "id": "uses-text-compression",
      "title": "Enable text compression",
      "description": "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more](https://web.dev/uses-text-compression/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "uses-responsive-images": {
      "id": "uses-responsive-images",
      "title": "Properly size images",
      "description": "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://web.dev/uses-responsive-images/).",
      "score": 0.29,
      "scoreDisplayMode": "numeric",
      "numericValue": 2540,
      "numericUnit": "millisecond",
      "displayValue": "Potential savings of 521 KiB",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "label": ""
          },
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "totalBytes",
            "valueType": "bytes",
            "label": "Resource Size"
          },
          {
            "key": "wastedBytes",
            "valueType": "bytes",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "page-4-IMG",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,ARTICLE,0,DIV,0,FIGURE,0,IMG",
              "selector": "article.news-list__read-item > div > figure > img",
              "boundingRect": {
                "top": 156,
                "bottom": 360,
                "left": 28,
                "right": 332,
                "width": 304,
                "height": 204
              },
              "snippet": "<img src=\"/assets/images/homework/post4.png\" alt=\"\">",
              "nodeLabel": "article.news-list__read-item > div > figure > img"
            },
            "url": "https://frontend-optimisation-course-three.vercel.app/assets/images/homework/post4.png",
            "totalBytes": 836492,
            "wastedBytes": 533567,
            "wastedPercent": 63.78632148686258
          }
        ],
        "overallSavingsMs": 2540,
        "overallSavingsBytes": 533567
      }
    },
    "efficient-animated-content": {
      "id": "efficient-animated-content",
      "title": "Use video formats for animated content",
      "description": "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more](https://web.dev/efficient-animated-content/)",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "duplicated-javascript": {
      "id": "duplicated-javascript",
      "title": "Remove duplicate modules in JavaScript bundles",
      "description": "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "legacy-javascript": {
      "id": "legacy-javascript",
      "title": "Avoid serving legacy JavaScript to modern browsers",
      "description": "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn More](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "Potential savings of 9 KiB",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "subItemsHeading": {
              "key": "location",
              "valueType": "source-location"
            },
            "label": "URL"
          },
          {
            "key": null,
            "valueType": "code",
            "subItemsHeading": {
              "key": "signal"
            },
            "label": ""
          },
          {
            "key": "wastedBytes",
            "valueType": "bytes",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-vendors.js",
            "wastedBytes": 9459,
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "signal": "Object.values",
                  "location": {
                    "type": "source-location",
                    "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-vendors.js",
                    "urlProvider": "network",
                    "line": 1,
                    "column": 954
                  }
                },
                {
                  "signal": "Object.entries",
                  "location": {
                    "type": "source-location",
                    "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-vendors.js",
                    "urlProvider": "network",
                    "line": 1,
                    "column": 14993
                  }
                },
                {
                  "signal": "Array.prototype.find",
                  "location": {
                    "type": "source-location",
                    "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-vendors.js",
                    "urlProvider": "network",
                    "line": 1,
                    "column": 23616
                  }
                },
                {
                  "signal": "Array.prototype.findIndex",
                  "location": {
                    "type": "source-location",
                    "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-vendors.js",
                    "urlProvider": "network",
                    "line": 1,
                    "column": 30516
                  }
                },
                {
                  "signal": "Array.isArray",
                  "location": {
                    "type": "source-location",
                    "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-vendors.js",
                    "urlProvider": "network",
                    "line": 1,
                    "column": 69616
                  }
                }
              ]
            },
            "totalBytes": 0
          },
          {
            "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-common.js",
            "wastedBytes": 92,
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "signal": "@babel/plugin-transform-classes",
                  "location": {
                    "type": "source-location",
                    "url": "https://embed.tawk.to/_s/v4/app/63b77dcd282/js/twk-chunk-common.js",
                    "urlProvider": "network",
                    "line": 1,
                    "column": 1160
                  }
                }
              ]
            },
            "totalBytes": 0
          },
          {
            "url": "https://js.stripe.com/v3/",
            "wastedBytes": 40,
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "signal": "@babel/plugin-transform-classes",
                  "location": {
                    "type": "source-location",
                    "url": "https://js.stripe.com/v3/",
                    "urlProvider": "network",
                    "line": 0,
                    "column": 437880
                  }
                }
              ]
            },
            "totalBytes": 0
          }
        ],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 9591
      }
    },
    "doctype": {
      "id": "doctype",
      "title": "Page has the HTML doctype",
      "description": "Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more](https://web.dev/doctype/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "charset": {
      "id": "charset",
      "title": "Properly defines charset",
      "description": "A character encoding declaration is required. It can be done with a `<meta>` tag in the first 1024 bytes of the HTML or in the Content-Type HTTP response header. [Learn more](https://web.dev/charset/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "dom-size": {
      "id": "dom-size",
      "title": "Avoids an excessive DOM size",
      "description": "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn more](https://web.dev/dom-size/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 353,
      "numericUnit": "element",
      "displayValue": "353 elements",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "statistic",
            "itemType": "text",
            "text": "Statistic"
          },
          {
            "key": "node",
            "itemType": "node",
            "text": "Element"
          },
          {
            "key": "value",
            "itemType": "numeric",
            "text": "Value"
          }
        ],
        "items": [
          {
            "statistic": "Total DOM Elements",
            "value": 353
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-137-SPAN",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,ARTICLE,0,DIV,3,FOOTER,0,DIV,1,UL,0,LI,1,UL,0,LI,0,A,0,SPAN,0,SPAN,0,SPAN",
              "selector": "a > span.social-media__ico > span > span",
              "boundingRect": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0,
                "width": 0,
                "height": 0
              },
              "snippet": "<span>",
              "nodeLabel": "Facebook"
            },
            "statistic": "Maximum DOM Depth",
            "value": 18
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-138-BODY",
              "path": "1,HTML,1,BODY",
              "selector": "body",
              "boundingRect": {
                "top": 0,
                "bottom": 3894,
                "left": 0,
                "right": 360,
                "width": 360,
                "height": 3894
              },
              "snippet": "<body>",
              "nodeLabel": "body"
            },
            "statistic": "Maximum Child Elements",
            "value": 10
          }
        ]
      }
    },
    "geolocation-on-start": {
      "id": "geolocation-on-start",
      "title": "Avoids requesting the geolocation permission on page load",
      "description": "Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to a user action instead. [Learn more](https://web.dev/geolocation-on-start/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "inspector-issues": {
      "id": "inspector-issues",
      "title": "No issues in the `Issues` panel in Chrome Devtools",
      "description": "Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems. They can come from network request failures, insufficient security controls, and other browser concerns. Open up the Issues panel in Chrome DevTools for more details on each issue.",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "no-document-write": {
      "id": "no-document-write",
      "title": "Avoids `document.write()`",
      "description": "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn more](https://web.dev/no-document-write/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "no-vulnerable-libraries": {
      "id": "no-vulnerable-libraries",
      "title": "Includes front-end JavaScript libraries with known security vulnerabilities",
      "description": "Some third-party scripts may contain known security vulnerabilities that are easily identified and exploited by attackers. [Learn more](https://web.dev/no-vulnerable-libraries/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "displayValue": "5 vulnerabilities detected",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "detectedLib",
            "itemType": "link",
            "text": "Library Version"
          },
          {
            "key": "vulnCount",
            "itemType": "text",
            "text": "Vulnerability Count"
          },
          {
            "key": "highestSeverity",
            "itemType": "text",
            "text": "Highest Severity"
          }
        ],
        "items": [
          {
            "highestSeverity": "Medium",
            "vulnCount": 4,
            "detectedLib": {
              "text": "jQuery@2.1.1",
              "url": "https://snyk.io/vuln/npm:jquery?lh=2.1.1&utm_source=lighthouse&utm_medium=ref&utm_campaign=audit",
              "type": "link"
            }
          },
          {
            "highestSeverity": "High",
            "vulnCount": 1,
            "detectedLib": {
              "text": "GreenSock JS@1.11.6",
              "url": "https://snyk.io/vuln/npm:gsap?lh=1.11.6&utm_source=lighthouse&utm_medium=ref&utm_campaign=audit",
              "type": "link"
            }
          }
        ],
        "summary": {}
      }
    },
    "js-libraries": {
      "id": "js-libraries",
      "title": "Detected JavaScript libraries",
      "description": "All front-end JavaScript libraries detected on the page. [Learn more](https://web.dev/js-libraries/).",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "name",
            "itemType": "text",
            "text": "Name"
          },
          {
            "key": "version",
            "itemType": "text",
            "text": "Version"
          }
        ],
        "items": [
          {
            "name": "jQuery",
            "version": "2.1.1",
            "npm": "jquery"
          },
          {
            "name": "RequireJS",
            "version": "2.1.9",
            "npm": "requirejs"
          },
          {
            "name": "GreenSock JS",
            "version": "1.11.6",
            "npm": "gsap"
          },
          {
            "name": "core-js",
            "version": "core-js-global@3.22.8",
            "npm": "core-js"
          }
        ],
        "summary": {},
        "debugData": {
          "type": "debugdata",
          "stacks": [
            {
              "id": "jquery",
              "version": "2.1.1"
            },
            {
              "id": "jquery-fast"
            },
            {
              "id": "requirejs",
              "version": "2.1.9"
            },
            {
              "id": "greensock",
              "version": "1.11.6"
            },
            {
              "id": "corejs",
              "version": "core-js-global@3.22.8"
            }
          ]
        }
      }
    },
    "notification-on-start": {
      "id": "notification-on-start",
      "title": "Avoids requesting the notification permission on page load",
      "description": "Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more](https://web.dev/notification-on-start/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "password-inputs-can-be-pasted-into": {
      "id": "password-inputs-can-be-pasted-into",
      "title": "Allows users to paste into password fields",
      "description": "Preventing password pasting undermines good security policy. [Learn more](https://web.dev/password-inputs-can-be-pasted-into/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "uses-http2": {
      "id": "uses-http2",
      "title": "Use HTTP/2",
      "description": "HTTP/2 offers many benefits over HTTP/1.1, including binary headers and multiplexing. [Learn more](https://web.dev/uses-http2/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0
      }
    },
    "uses-passive-event-listeners": {
      "id": "uses-passive-event-listeners",
      "title": "Uses passive listeners to improve scrolling performance",
      "description": "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more](https://web.dev/uses-passive-event-listeners/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "meta-description": {
      "id": "meta-description",
      "title": "Document has a meta description",
      "description": "Meta descriptions may be included in search results to concisely summarize page content. [Learn more](https://web.dev/meta-description/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "http-status-code": {
      "id": "http-status-code",
      "title": "Page has successful HTTP status code",
      "description": "Pages with unsuccessful HTTP status codes may not be indexed properly. [Learn more](https://web.dev/http-status-code/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "font-size": {
      "id": "font-size",
      "title": "Document uses legible font sizes",
      "description": "Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more](https://web.dev/font-size/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "displayValue": "100% legible text",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "source",
            "itemType": "source-location",
            "text": "Source"
          },
          {
            "key": "selector",
            "itemType": "code",
            "text": "Selector"
          },
          {
            "key": "coverage",
            "itemType": "text",
            "text": "% of Page Text"
          },
          {
            "key": "fontSize",
            "itemType": "text",
            "text": "Font Size"
          }
        ],
        "items": [
          {
            "source": {
              "type": "code",
              "value": "Legible text"
            },
            "selector": "",
            "coverage": "100.00%",
            "fontSize": "≥ 12px"
          }
        ]
      }
    },
    "link-text": {
      "id": "link-text",
      "title": "Links have descriptive text",
      "description": "Descriptive link text helps search engines understand your content. [Learn more](https://web.dev/link-text/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": [],
        "summary": {}
      }
    },
    "crawlable-anchors": {
      "id": "crawlable-anchors",
      "title": "Links are not crawlable",
      "description": "Search engines may use `href` attributes on links to crawl websites. Ensure that the `href` attribute of anchor elements links to an appropriate destination, so more pages of the site can be discovered. [Learn More](https://support.google.com/webmasters/answer/9112205)",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": "Uncrawlable Link"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "7-9-A",
              "path": "1,HTML,1,BODY,3,DIV,0,DIV,0,A",
              "selector": "body > div.l-megamenu > div.layout > a.btn-close",
              "boundingRect": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0,
                "width": 0,
                "height": 0
              },
              "snippet": "<a class=\"btn-close js-close-megamenu\" href=\"\">",
              "nodeLabel": "Close"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-17-A",
              "path": "1,HTML,1,BODY,3,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,A",
              "selector": "div.col-35 > div > div.item__category > a",
              "boundingRect": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0,
                "width": 0,
                "height": 0
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "White papers"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-48-A",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,ARTICLE,1,DIV,1,DIV,0,A",
              "selector": "article.news-list__read-item > div.subscription > div.subscription__btns > a.subscription__rss",
              "boundingRect": {
                "top": 1957,
                "bottom": 1980,
                "left": 53,
                "right": 76,
                "width": 23,
                "height": 23
              },
              "snippet": "<a class=\"subscription__rss\" href=\"\">",
              "nodeLabel": "RSS"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-54-A",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,1,ASIDE,1,DIV,0,DIV,1,UL,0,LI,0,A",
              "selector": "div > ul.inner-page__recent-items__list > li > a",
              "boundingRect": {
                "top": 2384,
                "bottom": 2402,
                "left": 75,
                "right": 173,
                "width": 97,
                "height": 18
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "News article 1"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-55-A",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,1,ASIDE,1,DIV,0,DIV,1,UL,1,LI,0,A",
              "selector": "div > ul.inner-page__recent-items__list > li > a",
              "boundingRect": {
                "top": 2428,
                "bottom": 2446,
                "left": 75,
                "right": 176,
                "width": 100,
                "height": 18
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "News article 2"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-56-A",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,1,ASIDE,1,DIV,0,DIV,1,UL,2,LI,0,A",
              "selector": "div > ul.inner-page__recent-items__list > li > a",
              "boundingRect": {
                "top": 2472,
                "bottom": 2490,
                "left": 75,
                "right": 176,
                "width": 100,
                "height": 18
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "News article 3"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-57-A",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,1,ASIDE,1,DIV,0,DIV,1,UL,3,LI,0,A",
              "selector": "div > ul.inner-page__recent-items__list > li > a",
              "boundingRect": {
                "top": 2516,
                "bottom": 2534,
                "left": 75,
                "right": 177,
                "width": 102,
                "height": 18
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "News article 4"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-58-A",
              "path": "1,HTML,1,BODY,4,DIV,0,DIV,0,DIV,1,ASIDE,1,DIV,0,DIV,1,UL,4,LI,0,A",
              "selector": "div > ul.inner-page__recent-items__list > li > a",
              "boundingRect": {
                "top": 2561,
                "bottom": 2578,
                "left": 75,
                "right": 176,
                "width": 100,
                "height": 18
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "News article 5"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-60-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,0,LI,1,UL,0,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 2846,
                "bottom": 2867,
                "left": 13,
                "right": 160,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Platform Overview"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-62-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,0,LI,1,UL,2,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 2930,
                "bottom": 2951,
                "left": 13,
                "right": 160,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Modules"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-67-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,1,LI,1,UL,0,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 2846,
                "bottom": 2867,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Solution Overview"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-68-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,1,LI,1,UL,1,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 2877,
                "bottom": 2899,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Call recording"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-69-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,1,LI,1,UL,1,LI,1,UL,0,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 2906,
                "bottom": 2926,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 20
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Mobile recording"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-70-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,1,LI,1,UL,1,LI,1,UL,1,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 2930,
                "bottom": 2970,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 40
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Fixed-Line recording"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-71-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,1,LI,1,UL,1,LI,1,UL,2,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 2974,
                "bottom": 3015,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 40
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Multi-channel recording"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-72-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,1,LI,1,UL,2,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3027,
                "bottom": 3069,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 43
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Interaction Analytics"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-73-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,1,LI,1,UL,3,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3079,
                "bottom": 3101,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "PCI Compliance"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-74-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,1,LI,1,UL,3,LI,1,UL,0,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3108,
                "bottom": 3128,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 20
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Live - DTMF"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-75-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,1,LI,1,UL,3,LI,1,UL,1,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3132,
                "bottom": 3152,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 20
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Automate"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-76-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,1,LI,1,UL,3,LI,1,UL,2,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3156,
                "bottom": 3176,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 20
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Archive"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-77-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,2,LI,1,UL,0,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3246,
                "bottom": 3267,
                "left": 13,
                "right": 160,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Support"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-78-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,2,LI,1,UL,1,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3277,
                "bottom": 3298,
                "left": 13,
                "right": 160,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Training"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-79-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,2,LI,1,UL,2,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3308,
                "bottom": 3329,
                "left": 13,
                "right": 160,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Consulting"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-80-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,2,LI,3,UL,0,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3397,
                "bottom": 3418,
                "left": 13,
                "right": 160,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Partners Overview"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-81-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,2,LI,3,UL,1,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3428,
                "bottom": 3449,
                "left": 13,
                "right": 160,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Solution Partners"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-82-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,2,LI,3,UL,2,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3459,
                "bottom": 3502,
                "left": 13,
                "right": 160,
                "width": 147,
                "height": 43
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Consulting Partners"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-83-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,2,LI,3,UL,3,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3512,
                "bottom": 3533,
                "left": 13,
                "right": 160,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Resellers"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-84-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,3,LI,1,UL,0,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3246,
                "bottom": 3267,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "About"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-85-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,3,LI,1,UL,1,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3277,
                "bottom": 3298,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Leadership Team"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-86-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,3,LI,1,UL,2,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3308,
                "bottom": 3329,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "News"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-87-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,3,LI,1,UL,3,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3339,
                "bottom": 3361,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Events"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-88-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,3,LI,1,UL,4,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3371,
                "bottom": 3392,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Customers"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-89-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,3,LI,1,UL,5,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3402,
                "bottom": 3423,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Careers"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-90-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,4,LI,1,UL,0,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3491,
                "bottom": 3512,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Resources"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-91-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,4,LI,1,UL,1,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3522,
                "bottom": 3543,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "White papers"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-92-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,4,LI,1,UL,2,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3553,
                "bottom": 3575,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Datasheets"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-93-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,4,LI,1,UL,3,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": 3585,
                "bottom": 3606,
                "left": 180,
                "right": 327,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "eBooks"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-94-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,5,LI,1,UL,0,LI,0,A",
              "selector": "li > ul.social-media > li > a",
              "boundingRect": {
                "top": 3673,
                "bottom": 3714,
                "left": 180,
                "right": 221,
                "width": 41,
                "height": 41
              },
              "snippet": "<a rel=\"external\" href=\"\" target=\"_blank\">",
              "nodeLabel": "Twitter"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-95-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,5,LI,1,UL,1,LI,0,A",
              "selector": "li > ul.social-media > li > a",
              "boundingRect": {
                "top": 3673,
                "bottom": 3714,
                "left": 229,
                "right": 270,
                "width": 41,
                "height": 41
              },
              "snippet": "<a rel=\"external\" href=\"\" target=\"_blank\">",
              "nodeLabel": "Google+"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-96-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,5,LI,1,UL,2,LI,0,A",
              "selector": "li > ul.social-media > li > a",
              "boundingRect": {
                "top": 3673,
                "bottom": 3714,
                "left": 278,
                "right": 319,
                "width": 41,
                "height": 41
              },
              "snippet": "<a rel=\"external\" href=\"\" target=\"_blank\">",
              "nodeLabel": "Facebook"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-97-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,5,LI,1,UL,3,LI,0,A",
              "selector": "li > ul.social-media > li > a",
              "boundingRect": {
                "top": 3724,
                "bottom": 3765,
                "left": 180,
                "right": 221,
                "width": 41,
                "height": 41
              },
              "snippet": "<a rel=\"external\" href=\"\" target=\"_blank\">",
              "nodeLabel": "LinkedIn"
            }
          }
        ]
      }
    },
    "is-crawlable": {
      "id": "is-crawlable",
      "title": "Page is blocked from indexing",
      "description": "Search engines are unable to include your pages in search results if they don't have permission to crawl them. [Learn more](https://web.dev/is-crawable/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "source",
            "itemType": "code",
            "text": "Blocking Directive Source"
          }
        ],
        "items": [
          {
            "source": {
              "type": "node",
              "lhId": "7-107-META",
              "path": "1,HTML,0,HEAD,5,META",
              "selector": "head > meta",
              "boundingRect": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0,
                "width": 0,
                "height": 0
              },
              "snippet": "<meta name=\"robots\" content=\"noindex, nofollow\" />",
              "nodeLabel": "head > meta"
            }
          },
          {
            "source": {
              "type": "source-location",
              "url": "https://frontend-optimisation-course-three.vercel.app/robots.txt",
              "urlProvider": "network",
              "line": 1,
              "column": 0
            }
          }
        ]
      }
    },
    "robots-txt": {
      "id": "robots-txt",
      "title": "robots.txt is valid",
      "description": "If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed. [Learn more](https://web.dev/robots-txt/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": [],
        "summary": {}
      }
    },
    "tap-targets": {
      "id": "tap-targets",
      "title": "Tap targets are not sized appropriately",
      "description": "Interactive elements like buttons and links should be large enough (48x48px), and have enough space around them, to be easy enough to tap without overlapping onto other elements. [Learn more](https://web.dev/tap-targets/).",
      "score": 0.86,
      "scoreDisplayMode": "binary",
      "displayValue": "96% appropriately sized tap targets",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "tapTarget",
            "itemType": "node",
            "text": "Tap Target"
          },
          {
            "key": "size",
            "itemType": "text",
            "text": "Size"
          },
          {
            "key": "overlappingTarget",
            "itemType": "node",
            "text": "Overlapping Target"
          }
        ],
        "items": [
          {
            "tapTarget": {
              "type": "node",
              "lhId": "7-63-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,0,LI,1,UL,2,LI,1,UL,0,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": -295,
                "bottom": -275,
                "left": 13,
                "right": 160,
                "width": 147,
                "height": 20
              },
              "snippet": "<a href=\"/\">",
              "nodeLabel": "Capture"
            },
            "overlappingTarget": {
              "type": "node",
              "lhId": "7-62-A",
              "path": "1,HTML,1,BODY,6,FOOTER,0,DIV,0,DIV,1,DIV,0,UL,0,LI,1,UL,2,LI,0,A",
              "selector": "li > ul > li > a",
              "boundingRect": {
                "top": -324,
                "bottom": -302,
                "left": 13,
                "right": 160,
                "width": 147,
                "height": 21
              },
              "snippet": "<a href=\"\">",
              "nodeLabel": "Modules"
            },
            "tapTargetScore": 970.20703125,
            "overlappingTargetScore": 330.896484375,
            "overlapScoreRatio": 0.34105760287954007,
            "size": "147x20",
            "width": 147,
            "height": 20
          }
        ]
      }
    },
    "hreflang": {
      "id": "hreflang",
      "title": "Document has a valid `hreflang`",
      "description": "hreflang links tell search engines what version of a page they should list in search results for a given language or region. [Learn more](https://web.dev/hreflang/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "plugins": {
      "id": "plugins",
      "title": "Document avoids plugins",
      "description": "Search engines can't index plugin content, and many devices restrict plugins or don't support them. [Learn more](https://web.dev/plugins/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "canonical": {
      "id": "canonical",
      "title": "Document has a valid `rel=canonical`",
      "description": "Canonical links suggest which URL to show in search results. [Learn more](https://web.dev/canonical/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "structured-data": {
      "id": "structured-data",
      "title": "Structured data is valid",
      "description": "Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more](https://web.dev/structured-data/).",
      "score": null,
      "scoreDisplayMode": "manual"
    }
  },
  "configSettings": {
    "output": "json",
    "maxWaitForFcp": 30000,
    "maxWaitForLoad": 45000,
    "formFactor": "mobile",
    "throttling": {
      "rttMs": 150,
      "throughputKbps": 1638.4,
      "requestLatencyMs": 562.5,
      "downloadThroughputKbps": 1474.5600000000002,
      "uploadThroughputKbps": 675,
      "cpuSlowdownMultiplier": 4
    },
    "throttlingMethod": "simulate",
    "screenEmulation": {
      "mobile": true,
      "width": 360,
      "height": 640,
      "deviceScaleFactor": 2.625,
      "disabled": true
    },
    "emulatedUserAgent": "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4695.0 Mobile Safari/537.36 Chrome-Lighthouse",
    "auditMode": false,
    "gatherMode": false,
    "disableStorageReset": false,
    "debugNavigation": false,
    "channel": "devtools",
    "budgets": null,
    "locale": "en-US",
    "blockedUrlPatterns": null,
    "additionalTraceCategories": null,
    "extraHeaders": null,
    "precomputedLanternData": null,
    "onlyAudits": null,
    "onlyCategories": [
      "performance",
      "accessibility",
      "best-practices",
      "seo",
      "pwa"
    ],
    "skipAudits": null
  },
  "categories": {
    "performance": {
      "title": "Performance",
      "supportedModes": [
        "navigation",
        "timespan",
        "snapshot"
      ],
      "auditRefs": [
        {
          "id": "first-contentful-paint",
          "weight": 10,
          "group": "metrics",
          "acronym": "FCP",
          "relevantAudits": [
            "server-response-time",
            "render-blocking-resources",
            "redirects",
            "critical-request-chains",
            "uses-text-compression",
            "uses-rel-preconnect",
            "uses-rel-preload",
            "font-display",
            "unminified-javascript",
            "unminified-css",
            "unused-css-rules"
          ]
        },
        {
          "id": "interactive",
          "weight": 10,
          "group": "metrics",
          "acronym": "TTI"
        },
        {
          "id": "speed-index",
          "weight": 10,
          "group": "metrics",
          "acronym": "SI"
        },
        {
          "id": "total-blocking-time",
          "weight": 30,
          "group": "metrics",
          "acronym": "TBT",
          "relevantAudits": [
            "long-tasks",
            "third-party-summary",
            "third-party-facades",
            "bootup-time",
            "mainthread-work-breakdown",
            "dom-size",
            "duplicated-javascript",
            "legacy-javascript",
            "viewport"
          ]
        },
        {
          "id": "largest-contentful-paint",
          "weight": 25,
          "group": "metrics",
          "acronym": "LCP",
          "relevantAudits": [
            "server-response-time",
            "render-blocking-resources",
            "redirects",
            "critical-request-chains",
            "uses-text-compression",
            "uses-rel-preconnect",
            "uses-rel-preload",
            "font-display",
            "unminified-javascript",
            "unminified-css",
            "unused-css-rules",
            "largest-contentful-paint-element",
            "preload-lcp-image",
            "unused-javascript",
            "efficient-animated-content",
            "total-byte-weight"
          ]
        },
        {
          "id": "cumulative-layout-shift",
          "weight": 15,
          "group": "metrics",
          "acronym": "CLS",
          "relevantAudits": [
            "layout-shift-elements",
            "non-composited-animations",
            "unsized-images"
          ]
        },
        {
          "id": "max-potential-fid",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "first-meaningful-paint",
          "weight": 0,
          "acronym": "FMP",
          "group": "hidden"
        },
        {
          "id": "render-blocking-resources",
          "weight": 0
        },
        {
          "id": "uses-responsive-images",
          "weight": 0
        },
        {
          "id": "offscreen-images",
          "weight": 0
        },
        {
          "id": "unminified-css",
          "weight": 0
        },
        {
          "id": "unminified-javascript",
          "weight": 0
        },
        {
          "id": "unused-css-rules",
          "weight": 0
        },
        {
          "id": "unused-javascript",
          "weight": 0
        },
        {
          "id": "uses-optimized-images",
          "weight": 0
        },
        {
          "id": "modern-image-formats",
          "weight": 0
        },
        {
          "id": "uses-text-compression",
          "weight": 0
        },
        {
          "id": "uses-rel-preconnect",
          "weight": 0
        },
        {
          "id": "server-response-time",
          "weight": 0
        },
        {
          "id": "redirects",
          "weight": 0
        },
        {
          "id": "uses-rel-preload",
          "weight": 0
        },
        {
          "id": "uses-http2",
          "weight": 0
        },
        {
          "id": "efficient-animated-content",
          "weight": 0
        },
        {
          "id": "duplicated-javascript",
          "weight": 0
        },
        {
          "id": "legacy-javascript",
          "weight": 0
        },
        {
          "id": "preload-lcp-image",
          "weight": 0
        },
        {
          "id": "total-byte-weight",
          "weight": 0
        },
        {
          "id": "uses-long-cache-ttl",
          "weight": 0
        },
        {
          "id": "dom-size",
          "weight": 0
        },
        {
          "id": "critical-request-chains",
          "weight": 0
        },
        {
          "id": "user-timings",
          "weight": 0
        },
        {
          "id": "bootup-time",
          "weight": 0
        },
        {
          "id": "mainthread-work-breakdown",
          "weight": 0
        },
        {
          "id": "font-display",
          "weight": 0
        },
        {
          "id": "resource-summary",
          "weight": 0
        },
        {
          "id": "third-party-summary",
          "weight": 0
        },
        {
          "id": "third-party-facades",
          "weight": 0
        },
        {
          "id": "largest-contentful-paint-element",
          "weight": 0
        },
        {
          "id": "lcp-lazy-loaded",
          "weight": 0
        },
        {
          "id": "layout-shift-elements",
          "weight": 0
        },
        {
          "id": "uses-passive-event-listeners",
          "weight": 0
        },
        {
          "id": "no-document-write",
          "weight": 0
        },
        {
          "id": "long-tasks",
          "weight": 0
        },
        {
          "id": "non-composited-animations",
          "weight": 0
        },
        {
          "id": "unsized-images",
          "weight": 0
        },
        {
          "id": "viewport",
          "weight": 0
        },
        {
          "id": "no-unload-listeners",
          "weight": 0
        },
        {
          "id": "performance-budget",
          "weight": 0,
          "group": "budgets"
        },
        {
          "id": "timing-budget",
          "weight": 0,
          "group": "budgets"
        },
        {
          "id": "network-requests",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "network-rtt",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "network-server-latency",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "main-thread-tasks",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "diagnostics",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "metrics",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "screenshot-thumbnails",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "final-screenshot",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "script-treemap-data",
          "weight": 0,
          "group": "hidden"
        }
      ],
      "id": "performance",
      "score": 0.56
    },
    "accessibility": {
      "title": "Accessibility",
      "description": "These checks highlight opportunities to [improve the accessibility of your web app](https://web.dev/lighthouse-accessibility/). Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged.",
      "manualDescription": "These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://developers.google.com/web/fundamentals/accessibility/how-to-review).",
      "supportedModes": [
        "navigation",
        "snapshot"
      ],
      "auditRefs": [
        {
          "id": "accesskeys",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "aria-allowed-attr",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-command-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-hidden-body",
          "weight": 10,
          "group": "a11y-aria"
        },
        {
          "id": "aria-hidden-focus",
          "weight": 3,
          "group": "a11y-aria"
        },
        {
          "id": "aria-input-field-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-meter-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-progressbar-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-attr",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-children",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-parent",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-roles",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-toggle-field-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-tooltip-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-treeitem-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-valid-attr-value",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-valid-attr",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "button-name",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "bypass",
          "weight": 3,
          "group": "a11y-navigation"
        },
        {
          "id": "color-contrast",
          "weight": 3,
          "group": "a11y-color-contrast"
        },
        {
          "id": "definition-list",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "dlitem",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "document-title",
          "weight": 3,
          "group": "a11y-names-labels"
        },
        {
          "id": "duplicate-id-active",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "duplicate-id-aria",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "form-field-multiple-labels",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "frame-title",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "heading-order",
          "weight": 2,
          "group": "a11y-navigation"
        },
        {
          "id": "html-has-lang",
          "weight": 3,
          "group": "a11y-language"
        },
        {
          "id": "html-lang-valid",
          "weight": 3,
          "group": "a11y-language"
        },
        {
          "id": "image-alt",
          "weight": 10,
          "group": "a11y-names-labels"
        },
        {
          "id": "input-image-alt",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "label",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "link-name",
          "weight": 3,
          "group": "a11y-names-labels"
        },
        {
          "id": "list",
          "weight": 3,
          "group": "a11y-tables-lists"
        },
        {
          "id": "listitem",
          "weight": 3,
          "group": "a11y-tables-lists"
        },
        {
          "id": "meta-refresh",
          "weight": 0,
          "group": "a11y-best-practices"
        },
        {
          "id": "meta-viewport",
          "weight": 10,
          "group": "a11y-best-practices"
        },
        {
          "id": "object-alt",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "tabindex",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "td-headers-attr",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "th-has-data-cells",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "valid-lang",
          "weight": 0,
          "group": "a11y-language"
        },
        {
          "id": "video-caption",
          "weight": 0,
          "group": "a11y-audio-video"
        },
        {
          "id": "logical-tab-order",
          "weight": 0
        },
        {
          "id": "focusable-controls",
          "weight": 0
        },
        {
          "id": "interactive-element-affordance",
          "weight": 0
        },
        {
          "id": "managed-focus",
          "weight": 0
        },
        {
          "id": "focus-traps",
          "weight": 0
        },
        {
          "id": "custom-controls-labels",
          "weight": 0
        },
        {
          "id": "custom-controls-roles",
          "weight": 0
        },
        {
          "id": "visual-order-follows-dom",
          "weight": 0
        },
        {
          "id": "offscreen-content-hidden",
          "weight": 0
        },
        {
          "id": "use-landmarks",
          "weight": 0
        }
      ],
      "id": "accessibility",
      "score": 0.92
    },
    "best-practices": {
      "title": "Best Practices",
      "supportedModes": [
        "navigation",
        "timespan",
        "snapshot"
      ],
      "auditRefs": [
        {
          "id": "is-on-https",
          "weight": 1,
          "group": "best-practices-trust-safety"
        },
        {
          "id": "geolocation-on-start",
          "weight": 1,
          "group": "best-practices-trust-safety"
        },
        {
          "id": "notification-on-start",
          "weight": 1,
          "group": "best-practices-trust-safety"
        },
        {
          "id": "no-vulnerable-libraries",
          "weight": 1,
          "group": "best-practices-trust-safety"
        },
        {
          "id": "csp-xss",
          "weight": 0,
          "group": "best-practices-trust-safety"
        },
        {
          "id": "password-inputs-can-be-pasted-into",
          "weight": 1,
          "group": "best-practices-ux"
        },
        {
          "id": "image-aspect-ratio",
          "weight": 1,
          "group": "best-practices-ux"
        },
        {
          "id": "image-size-responsive",
          "weight": 1,
          "group": "best-practices-ux"
        },
        {
          "id": "preload-fonts",
          "weight": 0,
          "group": "best-practices-ux"
        },
        {
          "id": "doctype",
          "weight": 1,
          "group": "best-practices-browser-compat"
        },
        {
          "id": "charset",
          "weight": 1,
          "group": "best-practices-browser-compat"
        },
        {
          "id": "js-libraries",
          "weight": 0,
          "group": "best-practices-general"
        },
        {
          "id": "deprecations",
          "weight": 1,
          "group": "best-practices-general"
        },
        {
          "id": "errors-in-console",
          "weight": 1,
          "group": "best-practices-general"
        },
        {
          "id": "valid-source-maps",
          "weight": 0,
          "group": "best-practices-general"
        },
        {
          "id": "inspector-issues",
          "weight": 1,
          "group": "best-practices-general"
        }
      ],
      "id": "best-practices",
      "score": 0.83
    },
    "seo": {
      "title": "SEO",
      "description": "These checks ensure that your page is following basic search engine optimization advice. There are many additional factors Lighthouse does not score here that may affect your search ranking, including performance on [Core Web Vitals](https://web.dev/learn-web-vitals/). [Learn more](https://support.google.com/webmasters/answer/35769).",
      "manualDescription": "Run these additional validators on your site to check additional SEO best practices.",
      "supportedModes": [
        "navigation",
        "snapshot"
      ],
      "auditRefs": [
        {
          "id": "viewport",
          "weight": 1,
          "group": "seo-mobile"
        },
        {
          "id": "document-title",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "meta-description",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "http-status-code",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "link-text",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "crawlable-anchors",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "is-crawlable",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "robots-txt",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "image-alt",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "hreflang",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "canonical",
          "weight": 0,
          "group": "seo-content"
        },
        {
          "id": "font-size",
          "weight": 1,
          "group": "seo-mobile"
        },
        {
          "id": "plugins",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "tap-targets",
          "weight": 1,
          "group": "seo-mobile"
        },
        {
          "id": "structured-data",
          "weight": 0
        }
      ],
      "id": "seo",
      "score": 0.84
    },
    "pwa": {
      "title": "PWA",
      "description": "These checks validate the aspects of a Progressive Web App. [Learn more](https://developers.google.com/web/progressive-web-apps/checklist).",
      "manualDescription": "These checks are required by the baseline [PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist) but are not automatically checked by Lighthouse. They do not affect your score but it's important that you verify them manually.",
      "supportedModes": [
        "navigation"
      ],
      "auditRefs": [
        {
          "id": "installable-manifest",
          "weight": 2,
          "group": "pwa-installable"
        },
        {
          "id": "service-worker",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "splash-screen",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "themed-omnibox",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "content-width",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "viewport",
          "weight": 2,
          "group": "pwa-optimized"
        },
        {
          "id": "apple-touch-icon",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "maskable-icon",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "pwa-cross-browser",
          "weight": 0
        },
        {
          "id": "pwa-page-transitions",
          "weight": 0
        },
        {
          "id": "pwa-each-page-has-url",
          "weight": 0
        }
      ],
      "id": "pwa",
      "score": 0.3
    }
  },
  "categoryGroups": {
    "metrics": {
      "title": "Metrics"
    },
    "load-opportunities": {
      "title": "Opportunities",
      "description": "These suggestions can help your page load faster. They don't [directly affect](https://web.dev/performance-scoring/) the Performance score."
    },
    "budgets": {
      "title": "Budgets",
      "description": "Performance budgets set standards for the performance of your site."
    },
    "diagnostics": {
      "title": "Diagnostics",
      "description": "More information about the performance of your application. These numbers don't [directly affect](https://web.dev/performance-scoring/) the Performance score."
    },
    "pwa-installable": {
      "title": "Installable"
    },
    "pwa-optimized": {
      "title": "PWA Optimized"
    },
    "a11y-best-practices": {
      "title": "Best practices",
      "description": "These items highlight common accessibility best practices."
    },
    "a11y-color-contrast": {
      "title": "Contrast",
      "description": "These are opportunities to improve the legibility of your content."
    },
    "a11y-names-labels": {
      "title": "Names and labels",
      "description": "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."
    },
    "a11y-navigation": {
      "title": "Navigation",
      "description": "These are opportunities to improve keyboard navigation in your application."
    },
    "a11y-aria": {
      "title": "ARIA",
      "description": "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."
    },
    "a11y-language": {
      "title": "Internationalization and localization",
      "description": "These are opportunities to improve the interpretation of your content by users in different locales."
    },
    "a11y-audio-video": {
      "title": "Audio and video",
      "description": "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments."
    },
    "a11y-tables-lists": {
      "title": "Tables and lists",
      "description": "These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader."
    },
    "seo-mobile": {
      "title": "Mobile Friendly",
      "description": "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/)."
    },
    "seo-content": {
      "title": "Content Best Practices",
      "description": "Format your HTML in a way that enables crawlers to better understand your app’s content."
    },
    "seo-crawl": {
      "title": "Crawling and Indexing",
      "description": "To appear in search results, crawlers need access to your app."
    },
    "best-practices-trust-safety": {
      "title": "Trust and Safety"
    },
    "best-practices-ux": {
      "title": "User Experience"
    },
    "best-practices-browser-compat": {
      "title": "Browser Compatibility"
    },
    "best-practices-general": {
      "title": "General"
    },
    "hidden": {
      "title": ""
    },
    "lighthouse-plugin-publisher-ads-metrics": {
      "title": "Metrics"
    },
    "lighthouse-plugin-publisher-ads-ads-performance": {
      "title": "Ad Speed"
    },
    "lighthouse-plugin-publisher-ads-ads-best-practices": {
      "title": "Tag Best Practices"
    }
  },
  "stackPacks": [],
  "timing": {
    "entries": [
      {
        "startTime": 61.4,
        "name": "lh:init:config",
        "duration": 146.3,
        "entryType": "measure"
      },
      {
        "startTime": 64.3,
        "name": "lh:config:requireGatherers",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 65.1,
        "name": "lh:config:requireAudits",
        "duration": 89.5,
        "entryType": "measure"
      },
      {
        "startTime": 207.8,
        "name": "lh:runner:gather",
        "duration": 9607.6,
        "entryType": "measure"
      },
      {
        "startTime": 208.1,
        "name": "lh:init:connect",
        "duration": 2.3,
        "entryType": "measure"
      },
      {
        "startTime": 210.5,
        "name": "lh:gather:loadBlank",
        "duration": 72.9,
        "entryType": "measure"
      },
      {
        "startTime": 210.7,
        "name": "lh:driver:navigate",
        "duration": 72.6,
        "entryType": "measure"
      },
      {
        "startTime": 283.4,
        "name": "lh:gather:getVersion",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 284.2,
        "name": "lh:gather:getBenchmarkIndex",
        "duration": 1004.1,
        "entryType": "measure"
      },
      {
        "startTime": 1288.4,
        "name": "lh:gather:setupDriver",
        "duration": 22.6,
        "entryType": "measure"
      },
      {
        "startTime": 1306.9,
        "name": "lh:prepare:navigationMode",
        "duration": 4.1,
        "entryType": "measure"
      },
      {
        "startTime": 1311.2,
        "name": "lh:driver:navigate",
        "duration": 7.9,
        "entryType": "measure"
      },
      {
        "startTime": 1311.2,
        "name": "lh:gather:loadBlank",
        "duration": 8,
        "entryType": "measure"
      },
      {
        "startTime": 1311.2,
        "name": "lh:gather:runPass-defaultPass",
        "duration": 7977.9,
        "entryType": "measure"
      },
      {
        "startTime": 1319.3,
        "name": "lh:prepare:navigation",
        "duration": 33.1,
        "entryType": "measure"
      },
      {
        "startTime": 1320.1,
        "name": "lh:storage:clearDataForOrigin",
        "duration": 8.6,
        "entryType": "measure"
      },
      {
        "startTime": 1328.8,
        "name": "lh:storage:clearBrowserCaches",
        "duration": 22.7,
        "entryType": "measure"
      },
      {
        "startTime": 1351.6,
        "name": "lh:gather:prepareThrottlingAndNetwork",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 1352.5,
        "name": "lh:gather:beforePass:CSSUsage",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 1352.5,
        "name": "lh:gather:beforePass",
        "duration": 4.7,
        "entryType": "measure"
      },
      {
        "startTime": 1352.6,
        "name": "lh:gather:beforePass:JsUsage",
        "duration": 1.9,
        "entryType": "measure"
      },
      {
        "startTime": 1354.5,
        "name": "lh:gather:beforePass:ViewportDimensions",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1354.5,
        "name": "lh:gather:beforePass:ConsoleMessages",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 1355.6,
        "name": "lh:gather:beforePass:AnchorElements",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1355.6,
        "name": "lh:gather:beforePass:ImageElements",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1355.6,
        "name": "lh:gather:beforePass:LinkElements",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 1355.7,
        "name": "lh:gather:beforePass:MetaElements",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1355.7,
        "name": "lh:gather:beforePass:ScriptElements",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1355.7,
        "name": "lh:gather:beforePass:MainDocumentContent",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1355.7,
        "name": "lh:gather:beforePass:GlobalListeners",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1355.7,
        "name": "lh:gather:beforePass:Doctype",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1355.7,
        "name": "lh:gather:beforePass:DOMStats",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1355.7,
        "name": "lh:gather:beforePass:OptimizedImages",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 1355.8,
        "name": "lh:gather:beforePass:PasswordInputsWithPreventedPaste",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1355.8,
        "name": "lh:gather:beforePass:ResponseCompression",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1355.8,
        "name": "lh:gather:beforePass:TagsBlockingFirstPaint",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 1356.3,
        "name": "lh:gather:beforePass:FontSize",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1356.3,
        "name": "lh:gather:beforePass:EmbeddedContent",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1356.3,
        "name": "lh:gather:beforePass:RobotsTxt",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1356.3,
        "name": "lh:gather:beforePass:TapTargets",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1356.3,
        "name": "lh:gather:beforePass:Accessibility",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1356.4,
        "name": "lh:gather:beforePass:TraceElements",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 1356.7,
        "name": "lh:gather:beforePass:InspectorIssues",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 1357,
        "name": "lh:gather:beforePass:SourceMaps",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 1357.2,
        "name": "lh:gather:beforePass:FullPageScreenshot",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1357.2,
        "name": "lh:gather:beginRecording",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 1358.7,
        "name": "lh:gather:loadPage-defaultPass",
        "duration": 3285.4,
        "entryType": "measure"
      },
      {
        "startTime": 1358.8,
        "name": "lh:driver:navigate",
        "duration": 3285.2,
        "entryType": "measure"
      },
      {
        "startTime": 4644.1,
        "name": "lh:gather:pass",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 4644.6,
        "name": "lh:gather:getTrace",
        "duration": 259.3,
        "entryType": "measure"
      },
      {
        "startTime": 4904,
        "name": "lh:gather:getDevtoolsLog",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 4904.2,
        "name": "lh:computed:NetworkRecords$N",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 4906.4,
        "name": "lh:gather:afterPass",
        "duration": 4382.5,
        "entryType": "measure"
      },
      {
        "startTime": 4909.9,
        "name": "lh:gather:afterPass:CSSUsage",
        "duration": 314.5,
        "entryType": "measure"
      },
      {
        "startTime": 5224.5,
        "name": "lh:gather:afterPass:JsUsage",
        "duration": 40.6,
        "entryType": "measure"
      },
      {
        "startTime": 5265.1,
        "name": "lh:gather:afterPass:ViewportDimensions",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 5266.6,
        "name": "lh:gather:afterPass:ConsoleMessages",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 5268,
        "name": "lh:gather:afterPass:AnchorElements",
        "duration": 35.3,
        "entryType": "measure"
      },
      {
        "startTime": 5303.3,
        "name": "lh:gather:afterPass:ImageElements",
        "duration": 1566.9,
        "entryType": "measure"
      },
      {
        "startTime": 6870.3,
        "name": "lh:gather:afterPass:LinkElements",
        "duration": 2.9,
        "entryType": "measure"
      },
      {
        "startTime": 6873.2,
        "name": "lh:gather:afterPass:MetaElements",
        "duration": 2.3,
        "entryType": "measure"
      },
      {
        "startTime": 6875.5,
        "name": "lh:gather:afterPass:ScriptElements",
        "duration": 19.6,
        "entryType": "measure"
      },
      {
        "startTime": 6895.2,
        "name": "lh:gather:afterPass:MainDocumentContent",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 6896.9,
        "name": "lh:gather:afterPass:GlobalListeners",
        "duration": 2.3,
        "entryType": "measure"
      },
      {
        "startTime": 6899.2,
        "name": "lh:gather:afterPass:Doctype",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 6900.6,
        "name": "lh:gather:afterPass:DOMStats",
        "duration": 3.2,
        "entryType": "measure"
      },
      {
        "startTime": 6903.8,
        "name": "lh:gather:afterPass:OptimizedImages",
        "duration": 698.5,
        "entryType": "measure"
      },
      {
        "startTime": 7602.4,
        "name": "lh:gather:afterPass:PasswordInputsWithPreventedPaste",
        "duration": 1.8,
        "entryType": "measure"
      },
      {
        "startTime": 7604.2,
        "name": "lh:gather:afterPass:ResponseCompression",
        "duration": 6.7,
        "entryType": "measure"
      },
      {
        "startTime": 7610.9,
        "name": "lh:gather:afterPass:TagsBlockingFirstPaint",
        "duration": 1.9,
        "entryType": "measure"
      },
      {
        "startTime": 7612.9,
        "name": "lh:gather:afterPass:FontSize",
        "duration": 96.6,
        "entryType": "measure"
      },
      {
        "startTime": 7709.5,
        "name": "lh:gather:afterPass:EmbeddedContent",
        "duration": 1.9,
        "entryType": "measure"
      },
      {
        "startTime": 7711.4,
        "name": "lh:gather:afterPass:RobotsTxt",
        "duration": 48.9,
        "entryType": "measure"
      },
      {
        "startTime": 7711.5,
        "name": "lh:gather:getVersion",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 7712.4,
        "name": "lh:gather:getVersion",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 7760.4,
        "name": "lh:gather:afterPass:TapTargets",
        "duration": 100.9,
        "entryType": "measure"
      },
      {
        "startTime": 7861.3,
        "name": "lh:gather:afterPass:Accessibility",
        "duration": 175.7,
        "entryType": "measure"
      },
      {
        "startTime": 8037,
        "name": "lh:gather:afterPass:TraceElements",
        "duration": 63.3,
        "entryType": "measure"
      },
      {
        "startTime": 8037.7,
        "name": "lh:computed:ProcessedTrace$h",
        "duration": 20.5,
        "entryType": "measure"
      },
      {
        "startTime": 8058.3,
        "name": "lh:computed:ProcessedNavigation$7",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 8059.6,
        "name": "lh:computed:Responsiveness",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 8100.3,
        "name": "lh:gather:afterPass:InspectorIssues",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 8101.5,
        "name": "lh:gather:afterPass:SourceMaps",
        "duration": 61.7,
        "entryType": "measure"
      },
      {
        "startTime": 8102.1,
        "name": "lh:gather:getVersion",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 8102.1,
        "name": "lh:gather:getVersion",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 8102.1,
        "name": "lh:gather:getVersion",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 8102.1,
        "name": "lh:gather:getVersion",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 8102.1,
        "name": "lh:gather:getVersion",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 8102.1,
        "name": "lh:gather:getVersion",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 8102.1,
        "name": "lh:gather:getVersion",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 8163.2,
        "name": "lh:gather:afterPass:FullPageScreenshot",
        "duration": 1125.7,
        "entryType": "measure"
      },
      {
        "startTime": 9289.2,
        "name": "lh:gather:populateBaseArtifacts",
        "duration": 9.5,
        "entryType": "measure"
      },
      {
        "startTime": 9290.2,
        "name": "lh:gather:getInstallabilityErrors",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 9290.6,
        "name": "lh:gather:collectStacks",
        "duration": 8,
        "entryType": "measure"
      },
      {
        "startTime": 9299.2,
        "name": "lh:gather:runPass-offlinePass",
        "duration": 507.8,
        "entryType": "measure"
      },
      {
        "startTime": 9299.3,
        "name": "lh:driver:navigate",
        "duration": 61.8,
        "entryType": "measure"
      },
      {
        "startTime": 9299.3,
        "name": "lh:gather:loadBlank",
        "duration": 61.9,
        "entryType": "measure"
      },
      {
        "startTime": 9361.2,
        "name": "lh:prepare:navigation",
        "duration": 2.4,
        "entryType": "measure"
      },
      {
        "startTime": 9361.4,
        "name": "lh:gather:prepareThrottlingAndNetwork",
        "duration": 2.2,
        "entryType": "measure"
      },
      {
        "startTime": 9363.7,
        "name": "lh:gather:beforePass:ServiceWorker",
        "duration": 20.2,
        "entryType": "measure"
      },
      {
        "startTime": 9363.7,
        "name": "lh:gather:beforePass",
        "duration": 20.2,
        "entryType": "measure"
      },
      {
        "startTime": 9383.9,
        "name": "lh:gather:beginRecording",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 9384.1,
        "name": "lh:driver:navigate",
        "duration": 406.1,
        "entryType": "measure"
      },
      {
        "startTime": 9384.1,
        "name": "lh:gather:loadPage-offlinePass",
        "duration": 406.1,
        "entryType": "measure"
      },
      {
        "startTime": 9790.2,
        "name": "lh:gather:pass",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 9790.4,
        "name": "lh:computed:NetworkRecords$N",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 9790.4,
        "name": "lh:gather:getDevtoolsLog",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 9797.6,
        "name": "lh:gather:afterPass",
        "duration": 9.4,
        "entryType": "measure"
      },
      {
        "startTime": 9806.3,
        "name": "lh:gather:afterPass:ServiceWorker",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 9807.1,
        "name": "lh:storage:clearDataForOrigin",
        "duration": 8.1,
        "entryType": "measure"
      },
      {
        "startTime": 9807.1,
        "name": "lh:gather:disconnect",
        "duration": 8.1,
        "entryType": "measure"
      },
      {
        "startTime": 9815.6,
        "name": "lh:runner:auditing",
        "duration": 705.7,
        "entryType": "measure"
      },
      {
        "startTime": 9815.6,
        "name": "lh:runner:audit",
        "duration": 706.1,
        "entryType": "measure"
      },
      {
        "startTime": 9816.4,
        "name": "lh:audit:is-on-https",
        "duration": 1.9,
        "entryType": "measure"
      },
      {
        "startTime": 9819.5,
        "name": "lh:audit:service-worker",
        "duration": 2.2,
        "entryType": "measure"
      },
      {
        "startTime": 9822.1,
        "name": "lh:audit:viewport",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 9822.4,
        "name": "lh:computed:ViewportMeta",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 9823.5,
        "name": "lh:audit:first-contentful-paint",
        "duration": 14.8,
        "entryType": "measure"
      },
      {
        "startTime": 9823.8,
        "name": "lh:computed:FirstContentfulPaint$3",
        "duration": 13.8,
        "entryType": "measure"
      },
      {
        "startTime": 9824,
        "name": "lh:computed:LanternFirstContentfulPaint$6",
        "duration": 13.6,
        "entryType": "measure"
      },
      {
        "startTime": 9824.1,
        "name": "lh:computed:PageDependencyGraph$a",
        "duration": 7.9,
        "entryType": "measure"
      },
      {
        "startTime": 9832.1,
        "name": "lh:computed:NetworkAnalysis$1",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 9832.1,
        "name": "lh:computed:LoadSimulator$a",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 9838.5,
        "name": "lh:audit:largest-contentful-paint",
        "duration": 6.5,
        "entryType": "measure"
      },
      {
        "startTime": 9838.8,
        "name": "lh:computed:LanternLargestContentfulPaint$1",
        "duration": 5.6,
        "entryType": "measure"
      },
      {
        "startTime": 9838.8,
        "name": "lh:computed:LargestContentfulPaint$2",
        "duration": 5.6,
        "entryType": "measure"
      },
      {
        "startTime": 9845.1,
        "name": "lh:audit:first-meaningful-paint",
        "duration": 2.5,
        "entryType": "measure"
      },
      {
        "startTime": 9845.5,
        "name": "lh:computed:LanternFirstMeaningfulPaint$2",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 9845.5,
        "name": "lh:computed:FirstMeaningfulPaint$2",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 9847.7,
        "name": "lh:audit:speed-index",
        "duration": 156.6,
        "entryType": "measure"
      },
      {
        "startTime": 9848.4,
        "name": "lh:computed:Speedline$4",
        "duration": 148.3,
        "entryType": "measure"
      },
      {
        "startTime": 9848.4,
        "name": "lh:computed:LanternSpeedIndex$2",
        "duration": 155.2,
        "entryType": "measure"
      },
      {
        "startTime": 9848.4,
        "name": "lh:computed:SpeedIndex$2",
        "duration": 155.3,
        "entryType": "measure"
      },
      {
        "startTime": 10004.4,
        "name": "lh:audit:screenshot-thumbnails",
        "duration": 59.7,
        "entryType": "measure"
      },
      {
        "startTime": 10064.1,
        "name": "lh:audit:final-screenshot",
        "duration": 1.7,
        "entryType": "measure"
      },
      {
        "startTime": 10064.3,
        "name": "lh:computed:Screenshots$1",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 10066.3,
        "name": "lh:audit:total-blocking-time",
        "duration": 11,
        "entryType": "measure"
      },
      {
        "startTime": 10066.8,
        "name": "lh:computed:TotalBlockingTime$2",
        "duration": 9.3,
        "entryType": "measure"
      },
      {
        "startTime": 10066.9,
        "name": "lh:computed:LanternTotalBlockingTime$1",
        "duration": 9.1,
        "entryType": "measure"
      },
      {
        "startTime": 10067,
        "name": "lh:computed:LanternInteractive$4",
        "duration": 5,
        "entryType": "measure"
      },
      {
        "startTime": 10077.6,
        "name": "lh:audit:max-potential-fid",
        "duration": 5,
        "entryType": "measure"
      },
      {
        "startTime": 10078.1,
        "name": "lh:computed:MaxPotentialFID$2",
        "duration": 3.9,
        "entryType": "measure"
      },
      {
        "startTime": 10078.2,
        "name": "lh:computed:LanternMaxPotentialFID$1",
        "duration": 3.8,
        "entryType": "measure"
      },
      {
        "startTime": 10082.8,
        "name": "lh:audit:cumulative-layout-shift",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 10083.2,
        "name": "lh:computed:CumulativeLayoutShift$2",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10084.7,
        "name": "lh:audit:errors-in-console",
        "duration": 12.6,
        "entryType": "measure"
      },
      {
        "startTime": 10085.2,
        "name": "lh:computed:JSBundles",
        "duration": 11.1,
        "entryType": "measure"
      },
      {
        "startTime": 10097.5,
        "name": "lh:audit:server-response-time",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 10098,
        "name": "lh:computed:MainResource$h",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10099.1,
        "name": "lh:audit:interactive",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 10099.3,
        "name": "lh:computed:Interactive$4",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10100.1,
        "name": "lh:audit:user-timings",
        "duration": 2.3,
        "entryType": "measure"
      },
      {
        "startTime": 10100.3,
        "name": "lh:computed:UserTimings$1",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 10102.8,
        "name": "lh:audit:critical-request-chains",
        "duration": 2.5,
        "entryType": "measure"
      },
      {
        "startTime": 10103,
        "name": "lh:computed:CriticalRequestChains$2",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 10105.4,
        "name": "lh:audit:redirects",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 10108,
        "name": "lh:audit:installable-manifest",
        "duration": 2.2,
        "entryType": "measure"
      },
      {
        "startTime": 10111.6,
        "name": "lh:audit:apple-touch-icon",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 10112.9,
        "name": "lh:audit:splash-screen",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 10113.1,
        "name": "lh:computed:ManifestValues$4",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10114.1,
        "name": "lh:audit:themed-omnibox",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 10115.2,
        "name": "lh:audit:maskable-icon",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 10116.5,
        "name": "lh:audit:content-width",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 10117.8,
        "name": "lh:audit:image-aspect-ratio",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 10119.2,
        "name": "lh:audit:image-size-responsive",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 10120.6,
        "name": "lh:audit:preload-fonts",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 10121.4,
        "name": "lh:audit:deprecations",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 10122.4,
        "name": "lh:audit:mainthread-work-breakdown",
        "duration": 12.2,
        "entryType": "measure"
      },
      {
        "startTime": 10122.8,
        "name": "lh:computed:MainThreadTasks$8",
        "duration": 10.3,
        "entryType": "measure"
      },
      {
        "startTime": 10134.8,
        "name": "lh:audit:bootup-time",
        "duration": 3.6,
        "entryType": "measure"
      },
      {
        "startTime": 10138.6,
        "name": "lh:audit:uses-rel-preload",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 10139.5,
        "name": "lh:audit:uses-rel-preconnect",
        "duration": 3.7,
        "entryType": "measure"
      },
      {
        "startTime": 10143.4,
        "name": "lh:audit:font-display",
        "duration": 4.6,
        "entryType": "measure"
      },
      {
        "startTime": 10148,
        "name": "lh:audit:diagnostics",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 10148.5,
        "name": "lh:audit:network-requests",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 10149.1,
        "name": "lh:audit:network-rtt",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 10150.2,
        "name": "lh:audit:network-server-latency",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 10151.5,
        "name": "lh:audit:main-thread-tasks",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 10152,
        "name": "lh:audit:metrics",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 10152.1,
        "name": "lh:computed:TimingSummary$1",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 10152.3,
        "name": "lh:computed:FirstContentfulPaintAllFrames$1",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 10152.3,
        "name": "lh:computed:LargestContentfulPaintAllFrames$1",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10153.1,
        "name": "lh:audit:performance-budget",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 10153.3,
        "name": "lh:computed:ResourceSummary$2",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 10154.1,
        "name": "lh:audit:timing-budget",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 10154.9,
        "name": "lh:audit:resource-summary",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 10156.1,
        "name": "lh:audit:third-party-summary",
        "duration": 2.9,
        "entryType": "measure"
      },
      {
        "startTime": 10159.7,
        "name": "lh:audit:third-party-facades",
        "duration": 2.4,
        "entryType": "measure"
      },
      {
        "startTime": 10162.2,
        "name": "lh:audit:largest-contentful-paint-element",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 10163,
        "name": "lh:audit:lcp-lazy-loaded",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 10163.9,
        "name": "lh:audit:layout-shift-elements",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 10164.6,
        "name": "lh:audit:long-tasks",
        "duration": 2.6,
        "entryType": "measure"
      },
      {
        "startTime": 10167.6,
        "name": "lh:audit:no-unload-listeners",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 10168.7,
        "name": "lh:audit:non-composited-animations",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 10170.9,
        "name": "lh:audit:unsized-images",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 10172.1,
        "name": "lh:audit:valid-source-maps",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 10173.9,
        "name": "lh:audit:preload-lcp-image",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 10176.2,
        "name": "lh:audit:csp-xss",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 10176.9,
        "name": "lh:audit:full-page-screenshot",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10177,
        "name": "lh:audit:script-treemap-data",
        "duration": 22.5,
        "entryType": "measure"
      },
      {
        "startTime": 10177.2,
        "name": "lh:computed:ModuleDuplication$2",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 10177.5,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10177.7,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 10179.7,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 4.4,
        "entryType": "measure"
      },
      {
        "startTime": 10184.3,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 10185.2,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10185.3,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 10185.4,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 10186.4,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 10186.5,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 10187,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 1.9,
        "entryType": "measure"
      },
      {
        "startTime": 10189,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10189.2,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 6.4,
        "entryType": "measure"
      },
      {
        "startTime": 10195.9,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 10196.1,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10196.4,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 10196.5,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10196.7,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 10196.9,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 10197.4,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 10197.7,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10197.9,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 10198.2,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 10198.5,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10198.7,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 10199.1,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10199.2,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10199.7,
        "name": "lh:audit:pwa-cross-browser",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 10200.4,
        "name": "lh:audit:pwa-page-transitions",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 10201.4,
        "name": "lh:audit:pwa-each-page-has-url",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 10202.3,
        "name": "lh:audit:accesskeys",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 10203.4,
        "name": "lh:audit:aria-allowed-attr",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 10204.6,
        "name": "lh:audit:aria-command-name",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 10206.3,
        "name": "lh:audit:aria-hidden-body",
        "duration": 3.2,
        "entryType": "measure"
      },
      {
        "startTime": 10209.7,
        "name": "lh:audit:aria-hidden-focus",
        "duration": 3.5,
        "entryType": "measure"
      },
      {
        "startTime": 10213.4,
        "name": "lh:audit:aria-input-field-name",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 10214.5,
        "name": "lh:audit:aria-meter-name",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 10215.7,
        "name": "lh:audit:aria-progressbar-name",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 10216.9,
        "name": "lh:audit:aria-required-attr",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 10218.3,
        "name": "lh:audit:aria-required-children",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 10220,
        "name": "lh:audit:aria-required-parent",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 10221.8,
        "name": "lh:audit:aria-roles",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 10223,
        "name": "lh:audit:aria-toggle-field-name",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 10224.6,
        "name": "lh:audit:aria-tooltip-name",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 10226.1,
        "name": "lh:audit:aria-treeitem-name",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 10227.7,
        "name": "lh:audit:aria-valid-attr-value",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 10229.5,
        "name": "lh:audit:aria-valid-attr",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 10231.2,
        "name": "lh:audit:button-name",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 10233.1,
        "name": "lh:audit:bypass",
        "duration": 3.6,
        "entryType": "measure"
      },
      {
        "startTime": 10236.8,
        "name": "lh:audit:color-contrast",
        "duration": 3.1,
        "entryType": "measure"
      },
      {
        "startTime": 10240.1,
        "name": "lh:audit:definition-list",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 10242.4,
        "name": "lh:audit:dlitem",
        "duration": 2.3,
        "entryType": "measure"
      },
      {
        "startTime": 10244.9,
        "name": "lh:audit:document-title",
        "duration": 3.2,
        "entryType": "measure"
      },
      {
        "startTime": 10248.3,
        "name": "lh:audit:duplicate-id-active",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 10250.6,
        "name": "lh:audit:duplicate-id-aria",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 10253.1,
        "name": "lh:audit:form-field-multiple-labels",
        "duration": 2.2,
        "entryType": "measure"
      },
      {
        "startTime": 10255.5,
        "name": "lh:audit:frame-title",
        "duration": 1.9,
        "entryType": "measure"
      },
      {
        "startTime": 10257.6,
        "name": "lh:audit:heading-order",
        "duration": 4,
        "entryType": "measure"
      },
      {
        "startTime": 10261.9,
        "name": "lh:audit:html-has-lang",
        "duration": 4.5,
        "entryType": "measure"
      },
      {
        "startTime": 10266.6,
        "name": "lh:audit:html-lang-valid",
        "duration": 4.1,
        "entryType": "measure"
      },
      {
        "startTime": 10270.9,
        "name": "lh:audit:image-alt",
        "duration": 2.9,
        "entryType": "measure"
      },
      {
        "startTime": 10274.1,
        "name": "lh:audit:input-image-alt",
        "duration": 2.4,
        "entryType": "measure"
      },
      {
        "startTime": 10276.7,
        "name": "lh:audit:label",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 10278.9,
        "name": "lh:audit:link-name",
        "duration": 3.2,
        "entryType": "measure"
      },
      {
        "startTime": 10282.3,
        "name": "lh:audit:list",
        "duration": 4.3,
        "entryType": "measure"
      },
      {
        "startTime": 10286.9,
        "name": "lh:audit:listitem",
        "duration": 3.4,
        "entryType": "measure"
      },
      {
        "startTime": 10290.5,
        "name": "lh:audit:meta-refresh",
        "duration": 2.7,
        "entryType": "measure"
      },
      {
        "startTime": 10293.5,
        "name": "lh:audit:meta-viewport",
        "duration": 4.1,
        "entryType": "measure"
      },
      {
        "startTime": 10297.8,
        "name": "lh:audit:object-alt",
        "duration": 2.7,
        "entryType": "measure"
      },
      {
        "startTime": 10300.8,
        "name": "lh:audit:tabindex",
        "duration": 3.1,
        "entryType": "measure"
      },
      {
        "startTime": 10304.2,
        "name": "lh:audit:td-headers-attr",
        "duration": 4.3,
        "entryType": "measure"
      },
      {
        "startTime": 10308.8,
        "name": "lh:audit:th-has-data-cells",
        "duration": 3.4,
        "entryType": "measure"
      },
      {
        "startTime": 10312.4,
        "name": "lh:audit:valid-lang",
        "duration": 3,
        "entryType": "measure"
      },
      {
        "startTime": 10315.6,
        "name": "lh:audit:video-caption",
        "duration": 3.2,
        "entryType": "measure"
      },
      {
        "startTime": 10318.8,
        "name": "lh:audit:custom-controls-labels",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10318.9,
        "name": "lh:audit:custom-controls-roles",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10319,
        "name": "lh:audit:focus-traps",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 10319,
        "name": "lh:audit:focusable-controls",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 10319,
        "name": "lh:audit:interactive-element-affordance",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10319.1,
        "name": "lh:audit:logical-tab-order",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 10319.1,
        "name": "lh:audit:managed-focus",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 10319.1,
        "name": "lh:audit:offscreen-content-hidden",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10319.2,
        "name": "lh:audit:use-landmarks",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 10319.2,
        "name": "lh:audit:visual-order-follows-dom",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 10319.4,
        "name": "lh:audit:uses-long-cache-ttl",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 10321.6,
        "name": "lh:audit:total-byte-weight",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 10322.6,
        "name": "lh:audit:offscreen-images",
        "duration": 3.4,
        "entryType": "measure"
      },
      {
        "startTime": 10326.1,
        "name": "lh:audit:render-blocking-resources",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 10326.5,
        "name": "lh:computed:UnusedCSS$3",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 10327.1,
        "name": "lh:computed:FirstContentfulPaint$3",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 10328.5,
        "name": "lh:audit:unminified-css",
        "duration": 58.6,
        "entryType": "measure"
      },
      {
        "startTime": 10387.4,
        "name": "lh:audit:unminified-javascript",
        "duration": 38.6,
        "entryType": "measure"
      },
      {
        "startTime": 10426.2,
        "name": "lh:audit:unused-css-rules",
        "duration": 2.5,
        "entryType": "measure"
      },
      {
        "startTime": 10428.9,
        "name": "lh:audit:unused-javascript",
        "duration": 3.4,
        "entryType": "measure"
      },
      {
        "startTime": 10429.4,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10432.6,
        "name": "lh:audit:modern-image-formats",
        "duration": 5.1,
        "entryType": "measure"
      },
      {
        "startTime": 10437.8,
        "name": "lh:audit:uses-optimized-images",
        "duration": 5.2,
        "entryType": "measure"
      },
      {
        "startTime": 10443.2,
        "name": "lh:audit:uses-text-compression",
        "duration": 3.3,
        "entryType": "measure"
      },
      {
        "startTime": 10446.6,
        "name": "lh:audit:uses-responsive-images",
        "duration": 4,
        "entryType": "measure"
      },
      {
        "startTime": 10446.9,
        "name": "lh:computed:ImageRecords$1",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 10451,
        "name": "lh:audit:efficient-animated-content",
        "duration": 4.1,
        "entryType": "measure"
      },
      {
        "startTime": 10455.3,
        "name": "lh:audit:duplicated-javascript",
        "duration": 2.8,
        "entryType": "measure"
      },
      {
        "startTime": 10458.5,
        "name": "lh:audit:legacy-javascript",
        "duration": 35.5,
        "entryType": "measure"
      },
      {
        "startTime": 10494.2,
        "name": "lh:audit:doctype",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 10494.9,
        "name": "lh:audit:charset",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 10496.4,
        "name": "lh:audit:dom-size",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 10497.4,
        "name": "lh:audit:geolocation-on-start",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 10498.4,
        "name": "lh:audit:inspector-issues",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 10499.3,
        "name": "lh:audit:no-document-write",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 10500,
        "name": "lh:audit:no-vulnerable-libraries",
        "duration": 3.6,
        "entryType": "measure"
      },
      {
        "startTime": 10503.7,
        "name": "lh:audit:js-libraries",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 10504.3,
        "name": "lh:audit:notification-on-start",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 10505.1,
        "name": "lh:audit:password-inputs-can-be-pasted-into",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 10505.7,
        "name": "lh:audit:uses-http2",
        "duration": 2.5,
        "entryType": "measure"
      },
      {
        "startTime": 10508.5,
        "name": "lh:audit:uses-passive-event-listeners",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 10509.2,
        "name": "lh:audit:meta-description",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 10509.8,
        "name": "lh:audit:http-status-code",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 10510.6,
        "name": "lh:audit:font-size",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 10511.7,
        "name": "lh:audit:link-text",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 10512.7,
        "name": "lh:audit:crawlable-anchors",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 10513.9,
        "name": "lh:audit:is-crawlable",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 10515.1,
        "name": "lh:audit:robots-txt",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 10516.1,
        "name": "lh:audit:tap-targets",
        "duration": 2.2,
        "entryType": "measure"
      },
      {
        "startTime": 10518.6,
        "name": "lh:audit:hreflang",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 10519.5,
        "name": "lh:audit:plugins",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 10520.2,
        "name": "lh:audit:canonical",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 10521,
        "name": "lh:audit:structured-data",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 10521.3,
        "name": "lh:runner:generate",
        "duration": 0.3,
        "entryType": "measure"
      }
    ],
    "total": 10313.7
  },
  "i18n": {
    "rendererFormattedStrings": {},
    "icuMessagePaths": {
      "lighthouse-core/audits/bootup-time.js | chromeExtensionsWarning": [
        "runWarnings[0]"
      ],
      "lighthouse-core/audits/is-on-https.js | title": [
        "audits[is-on-https].title"
      ],
      "lighthouse-core/audits/is-on-https.js | description": [
        "audits[is-on-https].description"
      ],
      "lighthouse-core/audits/service-worker.js | failureTitle": [
        "audits[service-worker].title"
      ],
      "lighthouse-core/audits/service-worker.js | description": [
        "audits[service-worker].description"
      ],
      "lighthouse-core/audits/viewport.js | title": [
        "audits.viewport.title"
      ],
      "lighthouse-core/audits/viewport.js | description": [
        "audits.viewport.description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | firstContentfulPaintMetric": [
        "audits[first-contentful-paint].title"
      ],
      "lighthouse-core/audits/metrics/first-contentful-paint.js | description": [
        "audits[first-contentful-paint].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | seconds": [
        {
          "values": {
            "timeInMs": 3328.99215
          },
          "path": "audits[first-contentful-paint].displayValue"
        },
        {
          "values": {
            "timeInMs": 16535.498700000004
          },
          "path": "audits[largest-contentful-paint].displayValue"
        },
        {
          "values": {
            "timeInMs": 3328.99215
          },
          "path": "audits[first-meaningful-paint].displayValue"
        },
        {
          "values": {
            "timeInMs": 3328.99215
          },
          "path": "audits[speed-index].displayValue"
        },
        {
          "values": {
            "timeInMs": 7701.958100000002
          },
          "path": "audits.interactive.displayValue"
        },
        {
          "values": {
            "timeInMs": 2143.0079999999925
          },
          "path": "audits[mainthread-work-breakdown].displayValue"
        },
        {
          "values": {
            "timeInMs": 724.3639999999998
          },
          "path": "audits[bootup-time].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | largestContentfulPaintMetric": [
        "audits[largest-contentful-paint].title"
      ],
      "lighthouse-core/audits/metrics/largest-contentful-paint.js | description": [
        "audits[largest-contentful-paint].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | firstMeaningfulPaintMetric": [
        "audits[first-meaningful-paint].title"
      ],
      "lighthouse-core/audits/metrics/first-meaningful-paint.js | description": [
        "audits[first-meaningful-paint].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | speedIndexMetric": [
        "audits[speed-index].title"
      ],
      "lighthouse-core/audits/metrics/speed-index.js | description": [
        "audits[speed-index].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | totalBlockingTimeMetric": [
        "audits[total-blocking-time].title"
      ],
      "lighthouse-core/audits/metrics/total-blocking-time.js | description": [
        "audits[total-blocking-time].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | ms": [
        {
          "values": {
            "timeInMs": 74.5
          },
          "path": "audits[total-blocking-time].displayValue"
        },
        {
          "values": {
            "timeInMs": 92
          },
          "path": "audits[max-potential-fid].displayValue"
        },
        {
          "values": {
            "timeInMs": 0.0691
          },
          "path": "audits[network-rtt].displayValue"
        },
        {
          "values": {
            "timeInMs": 185.61390000000003
          },
          "path": "audits[network-server-latency].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | maxPotentialFIDMetric": [
        "audits[max-potential-fid].title"
      ],
      "lighthouse-core/audits/metrics/max-potential-fid.js | description": [
        "audits[max-potential-fid].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | cumulativeLayoutShiftMetric": [
        "audits[cumulative-layout-shift].title"
      ],
      "lighthouse-core/audits/metrics/cumulative-layout-shift.js | description": [
        "audits[cumulative-layout-shift].description"
      ],
      "lighthouse-core/audits/errors-in-console.js | failureTitle": [
        "audits[errors-in-console].title"
      ],
      "lighthouse-core/audits/errors-in-console.js | description": [
        "audits[errors-in-console].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnSource": [
        "audits[errors-in-console].details.headings[0].text",
        "audits[font-size].details.headings[0].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnDescription": [
        "audits[errors-in-console].details.headings[1].text",
        "audits[csp-xss].details.headings[0].text"
      ],
      "lighthouse-core/audits/server-response-time.js | title": [
        "audits[server-response-time].title"
      ],
      "lighthouse-core/audits/server-response-time.js | description": [
        "audits[server-response-time].description"
      ],
      "lighthouse-core/audits/server-response-time.js | displayValue": [
        {
          "values": {
            "timeInMs": 68.273
          },
          "path": "audits[server-response-time].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnURL": [
        "audits[server-response-time].details.headings[0].label",
        "audits[bootup-time].details.headings[0].text",
        "audits[font-display].details.headings[0].text",
        "audits[network-rtt].details.headings[0].text",
        "audits[network-server-latency].details.headings[0].text",
        "audits[long-tasks].details.headings[0].text",
        "audits[unsized-images].details.headings[1].text",
        "audits[valid-source-maps].details.headings[0].text",
        "audits[preload-lcp-image].details.headings[1].label",
        "audits[uses-long-cache-ttl].details.headings[0].text",
        "audits[total-byte-weight].details.headings[0].text",
        "audits[render-blocking-resources].details.headings[0].label",
        "audits[unminified-css].details.headings[0].label",
        "audits[unused-css-rules].details.headings[0].label",
        "audits[unused-javascript].details.headings[0].label",
        "audits[modern-image-formats].details.headings[1].label",
        "audits[uses-optimized-images].details.headings[1].label",
        "audits[uses-responsive-images].details.headings[1].label",
        "audits[legacy-javascript].details.headings[0].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnTimeSpent": [
        "audits[server-response-time].details.headings[1].label",
        "audits[mainthread-work-breakdown].details.headings[1].text",
        "audits[network-rtt].details.headings[1].text",
        "audits[network-server-latency].details.headings[1].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | interactiveMetric": [
        "audits.interactive.title"
      ],
      "lighthouse-core/audits/metrics/interactive.js | description": [
        "audits.interactive.description"
      ],
      "lighthouse-core/audits/user-timings.js | title": [
        "audits[user-timings].title"
      ],
      "lighthouse-core/audits/user-timings.js | description": [
        "audits[user-timings].description"
      ],
      "lighthouse-core/audits/critical-request-chains.js | title": [
        "audits[critical-request-chains].title"
      ],
      "lighthouse-core/audits/critical-request-chains.js | description": [
        "audits[critical-request-chains].description"
      ],
      "lighthouse-core/audits/critical-request-chains.js | displayValue": [
        {
          "values": {
            "itemCount": 10
          },
          "path": "audits[critical-request-chains].displayValue"
        }
      ],
      "lighthouse-core/audits/redirects.js | title": [
        "audits.redirects.title"
      ],
      "lighthouse-core/audits/redirects.js | description": [
        "audits.redirects.description"
      ],
      "lighthouse-core/audits/installable-manifest.js | failureTitle": [
        "audits[installable-manifest].title"
      ],
      "lighthouse-core/audits/installable-manifest.js | description": [
        "audits[installable-manifest].description"
      ],
      "lighthouse-core/audits/installable-manifest.js | displayValue": [
        {
          "values": {
            "itemCount": 1
          },
          "path": "audits[installable-manifest].displayValue"
        }
      ],
      "lighthouse-core/audits/installable-manifest.js | columnValue": [
        "audits[installable-manifest].details.headings[0].text"
      ],
      "lighthouse-core/audits/installable-manifest.js | no-manifest": [
        "audits[installable-manifest].details.items[0].reason"
      ],
      "lighthouse-core/audits/apple-touch-icon.js | failureTitle": [
        "audits[apple-touch-icon].title"
      ],
      "lighthouse-core/audits/apple-touch-icon.js | description": [
        "audits[apple-touch-icon].description"
      ],
      "lighthouse-core/audits/splash-screen.js | failureTitle": [
        "audits[splash-screen].title"
      ],
      "lighthouse-core/audits/splash-screen.js | description": [
        "audits[splash-screen].description"
      ],
      "lighthouse-core/audits/themed-omnibox.js | failureTitle": [
        "audits[themed-omnibox].title"
      ],
      "lighthouse-core/audits/themed-omnibox.js | description": [
        "audits[themed-omnibox].description"
      ],
      "lighthouse-core/audits/maskable-icon.js | failureTitle": [
        "audits[maskable-icon].title"
      ],
      "lighthouse-core/audits/maskable-icon.js | description": [
        "audits[maskable-icon].description"
      ],
      "lighthouse-core/audits/content-width.js | title": [
        "audits[content-width].title"
      ],
      "lighthouse-core/audits/content-width.js | description": [
        "audits[content-width].description"
      ],
      "lighthouse-core/audits/image-aspect-ratio.js | title": [
        "audits[image-aspect-ratio].title"
      ],
      "lighthouse-core/audits/image-aspect-ratio.js | description": [
        "audits[image-aspect-ratio].description"
      ],
      "lighthouse-core/audits/image-size-responsive.js | title": [
        "audits[image-size-responsive].title"
      ],
      "lighthouse-core/audits/image-size-responsive.js | description": [
        "audits[image-size-responsive].description"
      ],
      "lighthouse-core/audits/preload-fonts.js | title": [
        "audits[preload-fonts].title"
      ],
      "lighthouse-core/audits/preload-fonts.js | description": [
        "audits[preload-fonts].description"
      ],
      "lighthouse-core/audits/deprecations.js | title": [
        "audits.deprecations.title"
      ],
      "lighthouse-core/audits/deprecations.js | description": [
        "audits.deprecations.description"
      ],
      "lighthouse-core/audits/mainthread-work-breakdown.js | failureTitle": [
        "audits[mainthread-work-breakdown].title"
      ],
      "lighthouse-core/audits/mainthread-work-breakdown.js | description": [
        "audits[mainthread-work-breakdown].description"
      ],
      "lighthouse-core/audits/mainthread-work-breakdown.js | columnCategory": [
        "audits[mainthread-work-breakdown].details.headings[0].text"
      ],
      "lighthouse-core/audits/bootup-time.js | title": [
        "audits[bootup-time].title"
      ],
      "lighthouse-core/audits/bootup-time.js | description": [
        "audits[bootup-time].description"
      ],
      "lighthouse-core/audits/bootup-time.js | columnTotal": [
        "audits[bootup-time].details.headings[1].text"
      ],
      "lighthouse-core/audits/bootup-time.js | columnScriptEval": [
        "audits[bootup-time].details.headings[2].text"
      ],
      "lighthouse-core/audits/bootup-time.js | columnScriptParse": [
        "audits[bootup-time].details.headings[3].text"
      ],
      "lighthouse-core/audits/uses-rel-preload.js | title": [
        "audits[uses-rel-preload].title"
      ],
      "lighthouse-core/audits/uses-rel-preload.js | description": [
        "audits[uses-rel-preload].description"
      ],
      "lighthouse-core/audits/uses-rel-preconnect.js | title": [
        "audits[uses-rel-preconnect].title"
      ],
      "lighthouse-core/audits/uses-rel-preconnect.js | description": [
        "audits[uses-rel-preconnect].description"
      ],
      "lighthouse-core/audits/font-display.js | failureTitle": [
        "audits[font-display].title"
      ],
      "lighthouse-core/audits/font-display.js | description": [
        "audits[font-display].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnWastedBytes": [
        "audits[font-display].details.headings[1].text",
        "audits[preload-lcp-image].details.headings[2].label",
        "audits[render-blocking-resources].details.headings[2].label",
        "audits[unminified-css].details.headings[2].label",
        "audits[unused-css-rules].details.headings[2].label",
        "audits[unused-javascript].details.headings[2].label",
        "audits[modern-image-formats].details.headings[3].label",
        "audits[uses-optimized-images].details.headings[3].label",
        "audits[uses-responsive-images].details.headings[3].label",
        "audits[legacy-javascript].details.headings[2].label"
      ],
      "lighthouse-core/audits/network-rtt.js | title": [
        "audits[network-rtt].title"
      ],
      "lighthouse-core/audits/network-rtt.js | description": [
        "audits[network-rtt].description"
      ],
      "lighthouse-core/audits/network-server-latency.js | title": [
        "audits[network-server-latency].title"
      ],
      "lighthouse-core/audits/network-server-latency.js | description": [
        "audits[network-server-latency].description"
      ],
      "lighthouse-core/audits/performance-budget.js | title": [
        "audits[performance-budget].title"
      ],
      "lighthouse-core/audits/performance-budget.js | description": [
        "audits[performance-budget].description"
      ],
      "lighthouse-core/audits/timing-budget.js | title": [
        "audits[timing-budget].title"
      ],
      "lighthouse-core/audits/timing-budget.js | description": [
        "audits[timing-budget].description"
      ],
      "lighthouse-core/audits/resource-summary.js | title": [
        "audits[resource-summary].title"
      ],
      "lighthouse-core/audits/resource-summary.js | description": [
        "audits[resource-summary].description"
      ],
      "lighthouse-core/audits/resource-summary.js | displayValue": [
        {
          "values": {
            "requestCount": 65,
            "byteCount": 4262191
          },
          "path": "audits[resource-summary].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnResourceType": [
        "audits[resource-summary].details.headings[0].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnRequests": [
        "audits[resource-summary].details.headings[1].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnTransferSize": [
        "audits[resource-summary].details.headings[2].text",
        "audits[third-party-summary].details.headings[1].text",
        "audits[uses-long-cache-ttl].details.headings[2].text",
        "audits[total-byte-weight].details.headings[1].text",
        "audits[render-blocking-resources].details.headings[1].label",
        "audits[unminified-css].details.headings[1].label",
        "audits[unused-css-rules].details.headings[1].label",
        "audits[unused-javascript].details.headings[1].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | totalResourceType": [
        "audits[resource-summary].details.items[0].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | imageResourceType": [
        "audits[resource-summary].details.items[1].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | scriptResourceType": [
        "audits[resource-summary].details.items[2].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | stylesheetResourceType": [
        "audits[resource-summary].details.items[3].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | fontResourceType": [
        "audits[resource-summary].details.items[4].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | documentResourceType": [
        "audits[resource-summary].details.items[5].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | otherResourceType": [
        "audits[resource-summary].details.items[6].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | mediaResourceType": [
        "audits[resource-summary].details.items[7].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | thirdPartyResourceType": [
        "audits[resource-summary].details.items[8].label"
      ],
      "lighthouse-core/audits/third-party-summary.js | title": [
        "audits[third-party-summary].title"
      ],
      "lighthouse-core/audits/third-party-summary.js | description": [
        "audits[third-party-summary].description"
      ],
      "lighthouse-core/audits/third-party-summary.js | displayValue": [
        {
          "values": {
            "timeInMs": 130.688
          },
          "path": "audits[third-party-summary].displayValue"
        }
      ],
      "lighthouse-core/audits/third-party-summary.js | columnThirdParty": [
        "audits[third-party-summary].details.headings[0].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnBlockingTime": [
        "audits[third-party-summary].details.headings[2].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | otherResourcesLabel": [
        "audits[third-party-summary].details.items[1].subItems.items[3].url"
      ],
      "lighthouse-core/audits/third-party-facades.js | title": [
        "audits[third-party-facades].title"
      ],
      "lighthouse-core/audits/third-party-facades.js | description": [
        "audits[third-party-facades].description"
      ],
      "lighthouse-core/audits/largest-contentful-paint-element.js | title": [
        "audits[largest-contentful-paint-element].title"
      ],
      "lighthouse-core/audits/largest-contentful-paint-element.js | description": [
        "audits[largest-contentful-paint-element].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | displayValueElementsFound": [
        {
          "values": {
            "nodeCount": 1
          },
          "path": "audits[largest-contentful-paint-element].displayValue"
        },
        {
          "values": {
            "nodeCount": 4
          },
          "path": "audits[layout-shift-elements].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnElement": [
        "audits[largest-contentful-paint-element].details.headings[0].text",
        "audits[lcp-lazy-loaded].details.headings[0].text",
        "audits[layout-shift-elements].details.headings[0].text",
        "audits[non-composited-animations].details.headings[0].text",
        "audits[dom-size].details.headings[1].text"
      ],
      "lighthouse-core/audits/lcp-lazy-loaded.js | title": [
        "audits[lcp-lazy-loaded].title"
      ],
      "lighthouse-core/audits/lcp-lazy-loaded.js | description": [
        "audits[lcp-lazy-loaded].description"
      ],
      "lighthouse-core/audits/layout-shift-elements.js | title": [
        "audits[layout-shift-elements].title"
      ],
      "lighthouse-core/audits/layout-shift-elements.js | description": [
        "audits[layout-shift-elements].description"
      ],
      "lighthouse-core/audits/layout-shift-elements.js | columnContribution": [
        "audits[layout-shift-elements].details.headings[1].text"
      ],
      "lighthouse-core/audits/long-tasks.js | title": [
        "audits[long-tasks].title"
      ],
      "lighthouse-core/audits/long-tasks.js | description": [
        "audits[long-tasks].description"
      ],
      "lighthouse-core/audits/long-tasks.js | displayValue": [
        {
          "values": {
            "itemCount": 8
          },
          "path": "audits[long-tasks].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnStartTime": [
        "audits[long-tasks].details.headings[1].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnDuration": [
        "audits[long-tasks].details.headings[2].text"
      ],
      "lighthouse-core/audits/no-unload-listeners.js | title": [
        "audits[no-unload-listeners].title"
      ],
      "lighthouse-core/audits/no-unload-listeners.js | description": [
        "audits[no-unload-listeners].description"
      ],
      "lighthouse-core/audits/non-composited-animations.js | title": [
        "audits[non-composited-animations].title"
      ],
      "lighthouse-core/audits/non-composited-animations.js | description": [
        "audits[non-composited-animations].description"
      ],
      "lighthouse-core/audits/non-composited-animations.js | displayValue": [
        {
          "values": {
            "itemCount": 4
          },
          "path": "audits[non-composited-animations].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnName": [
        "audits[non-composited-animations].details.headings[1].text",
        "audits[js-libraries].details.headings[0].text"
      ],
      "lighthouse-core/audits/non-composited-animations.js | unsupportedCSSProperty": [
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-bottom-color"
          },
          "path": "audits[non-composited-animations].details.items[0].subItems.items[0].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "tab-size"
          },
          "path": "audits[non-composited-animations].details.items[0].subItems.items[1].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-left-color"
          },
          "path": "audits[non-composited-animations].details.items[0].subItems.items[2].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-right-color"
          },
          "path": "audits[non-composited-animations].details.items[0].subItems.items[3].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-top-color"
          },
          "path": "audits[non-composited-animations].details.items[0].subItems.items[4].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-bottom-color"
          },
          "path": "audits[non-composited-animations].details.items[1].subItems.items[0].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "tab-size"
          },
          "path": "audits[non-composited-animations].details.items[1].subItems.items[1].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-left-color"
          },
          "path": "audits[non-composited-animations].details.items[1].subItems.items[2].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-right-color"
          },
          "path": "audits[non-composited-animations].details.items[1].subItems.items[3].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-top-color"
          },
          "path": "audits[non-composited-animations].details.items[1].subItems.items[4].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-bottom-color"
          },
          "path": "audits[non-composited-animations].details.items[2].subItems.items[0].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "tab-size"
          },
          "path": "audits[non-composited-animations].details.items[2].subItems.items[1].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-left-color"
          },
          "path": "audits[non-composited-animations].details.items[2].subItems.items[2].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-right-color"
          },
          "path": "audits[non-composited-animations].details.items[2].subItems.items[3].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-top-color"
          },
          "path": "audits[non-composited-animations].details.items[2].subItems.items[4].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-bottom-color"
          },
          "path": "audits[non-composited-animations].details.items[3].subItems.items[0].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "tab-size"
          },
          "path": "audits[non-composited-animations].details.items[3].subItems.items[1].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-left-color"
          },
          "path": "audits[non-composited-animations].details.items[3].subItems.items[2].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-right-color"
          },
          "path": "audits[non-composited-animations].details.items[3].subItems.items[3].failureReason"
        },
        {
          "values": {
            "propertyCount": 1,
            "properties": "border-top-color"
          },
          "path": "audits[non-composited-animations].details.items[3].subItems.items[4].failureReason"
        }
      ],
      "lighthouse-core/audits/unsized-images.js | failureTitle": [
        "audits[unsized-images].title"
      ],
      "lighthouse-core/audits/unsized-images.js | description": [
        "audits[unsized-images].description"
      ],
      "lighthouse-core/audits/valid-source-maps.js | title": [
        "audits[valid-source-maps].title"
      ],
      "lighthouse-core/audits/valid-source-maps.js | description": [
        "audits[valid-source-maps].description"
      ],
      "lighthouse-core/audits/valid-source-maps.js | columnMapURL": [
        "audits[valid-source-maps].details.headings[1].text"
      ],
      "lighthouse-core/audits/valid-source-maps.js | missingSourceMapItemsWarningMesssage": [
        {
          "values": {
            "missingItems": 1
          },
          "path": "audits[valid-source-maps].details.items[0].subItems.items[0].error"
        }
      ],
      "lighthouse-core/audits/preload-lcp-image.js | title": [
        "audits[preload-lcp-image].title"
      ],
      "lighthouse-core/audits/preload-lcp-image.js | description": [
        "audits[preload-lcp-image].description"
      ],
      "lighthouse-core/audits/csp-xss.js | title": [
        "audits[csp-xss].title"
      ],
      "lighthouse-core/audits/csp-xss.js | description": [
        "audits[csp-xss].description"
      ],
      "lighthouse-core/audits/csp-xss.js | columnDirective": [
        "audits[csp-xss].details.headings[1].text"
      ],
      "lighthouse-core/audits/csp-xss.js | columnSeverity": [
        "audits[csp-xss].details.headings[2].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | itemSeverityHigh": [
        "audits[csp-xss].details.items[0].severity",
        "audits[no-vulnerable-libraries].details.items[1].highestSeverity"
      ],
      "lighthouse-core/audits/csp-xss.js | noCsp": [
        "audits[csp-xss].details.items[0].description"
      ],
      "lighthouse-core/audits/manual/pwa-cross-browser.js | title": [
        "audits[pwa-cross-browser].title"
      ],
      "lighthouse-core/audits/manual/pwa-cross-browser.js | description": [
        "audits[pwa-cross-browser].description"
      ],
      "lighthouse-core/audits/manual/pwa-page-transitions.js | title": [
        "audits[pwa-page-transitions].title"
      ],
      "lighthouse-core/audits/manual/pwa-page-transitions.js | description": [
        "audits[pwa-page-transitions].description"
      ],
      "lighthouse-core/audits/manual/pwa-each-page-has-url.js | title": [
        "audits[pwa-each-page-has-url].title"
      ],
      "lighthouse-core/audits/manual/pwa-each-page-has-url.js | description": [
        "audits[pwa-each-page-has-url].description"
      ],
      "lighthouse-core/audits/accessibility/accesskeys.js | title": [
        "audits.accesskeys.title"
      ],
      "lighthouse-core/audits/accessibility/accesskeys.js | description": [
        "audits.accesskeys.description"
      ],
      "lighthouse-core/audits/accessibility/aria-allowed-attr.js | title": [
        "audits[aria-allowed-attr].title"
      ],
      "lighthouse-core/audits/accessibility/aria-allowed-attr.js | description": [
        "audits[aria-allowed-attr].description"
      ],
      "lighthouse-core/audits/accessibility/aria-command-name.js | title": [
        "audits[aria-command-name].title"
      ],
      "lighthouse-core/audits/accessibility/aria-command-name.js | description": [
        "audits[aria-command-name].description"
      ],
      "lighthouse-core/audits/accessibility/aria-hidden-body.js | title": [
        "audits[aria-hidden-body].title"
      ],
      "lighthouse-core/audits/accessibility/aria-hidden-body.js | description": [
        "audits[aria-hidden-body].description"
      ],
      "lighthouse-core/audits/accessibility/aria-hidden-focus.js | title": [
        "audits[aria-hidden-focus].title"
      ],
      "lighthouse-core/audits/accessibility/aria-hidden-focus.js | description": [
        "audits[aria-hidden-focus].description"
      ],
      "lighthouse-core/audits/accessibility/aria-input-field-name.js | title": [
        "audits[aria-input-field-name].title"
      ],
      "lighthouse-core/audits/accessibility/aria-input-field-name.js | description": [
        "audits[aria-input-field-name].description"
      ],
      "lighthouse-core/audits/accessibility/aria-meter-name.js | title": [
        "audits[aria-meter-name].title"
      ],
      "lighthouse-core/audits/accessibility/aria-meter-name.js | description": [
        "audits[aria-meter-name].description"
      ],
      "lighthouse-core/audits/accessibility/aria-progressbar-name.js | title": [
        "audits[aria-progressbar-name].title"
      ],
      "lighthouse-core/audits/accessibility/aria-progressbar-name.js | description": [
        "audits[aria-progressbar-name].description"
      ],
      "lighthouse-core/audits/accessibility/aria-required-attr.js | title": [
        "audits[aria-required-attr].title"
      ],
      "lighthouse-core/audits/accessibility/aria-required-attr.js | description": [
        "audits[aria-required-attr].description"
      ],
      "lighthouse-core/audits/accessibility/aria-required-children.js | title": [
        "audits[aria-required-children].title"
      ],
      "lighthouse-core/audits/accessibility/aria-required-children.js | description": [
        "audits[aria-required-children].description"
      ],
      "lighthouse-core/audits/accessibility/aria-required-parent.js | title": [
        "audits[aria-required-parent].title"
      ],
      "lighthouse-core/audits/accessibility/aria-required-parent.js | description": [
        "audits[aria-required-parent].description"
      ],
      "lighthouse-core/audits/accessibility/aria-roles.js | title": [
        "audits[aria-roles].title"
      ],
      "lighthouse-core/audits/accessibility/aria-roles.js | description": [
        "audits[aria-roles].description"
      ],
      "lighthouse-core/audits/accessibility/aria-toggle-field-name.js | title": [
        "audits[aria-toggle-field-name].title"
      ],
      "lighthouse-core/audits/accessibility/aria-toggle-field-name.js | description": [
        "audits[aria-toggle-field-name].description"
      ],
      "lighthouse-core/audits/accessibility/aria-tooltip-name.js | title": [
        "audits[aria-tooltip-name].title"
      ],
      "lighthouse-core/audits/accessibility/aria-tooltip-name.js | description": [
        "audits[aria-tooltip-name].description"
      ],
      "lighthouse-core/audits/accessibility/aria-treeitem-name.js | title": [
        "audits[aria-treeitem-name].title"
      ],
      "lighthouse-core/audits/accessibility/aria-treeitem-name.js | description": [
        "audits[aria-treeitem-name].description"
      ],
      "lighthouse-core/audits/accessibility/aria-valid-attr-value.js | title": [
        "audits[aria-valid-attr-value].title"
      ],
      "lighthouse-core/audits/accessibility/aria-valid-attr-value.js | description": [
        "audits[aria-valid-attr-value].description"
      ],
      "lighthouse-core/audits/accessibility/aria-valid-attr.js | title": [
        "audits[aria-valid-attr].title"
      ],
      "lighthouse-core/audits/accessibility/aria-valid-attr.js | description": [
        "audits[aria-valid-attr].description"
      ],
      "lighthouse-core/audits/accessibility/button-name.js | title": [
        "audits[button-name].title"
      ],
      "lighthouse-core/audits/accessibility/button-name.js | description": [
        "audits[button-name].description"
      ],
      "lighthouse-core/audits/accessibility/bypass.js | title": [
        "audits.bypass.title"
      ],
      "lighthouse-core/audits/accessibility/bypass.js | description": [
        "audits.bypass.description"
      ],
      "lighthouse-core/audits/accessibility/color-contrast.js | failureTitle": [
        "audits[color-contrast].title"
      ],
      "lighthouse-core/audits/accessibility/color-contrast.js | description": [
        "audits[color-contrast].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnFailingElem": [
        "audits[color-contrast].details.headings[0].text",
        "audits[heading-order].details.headings[0].text"
      ],
      "lighthouse-core/audits/accessibility/definition-list.js | title": [
        "audits[definition-list].title"
      ],
      "lighthouse-core/audits/accessibility/definition-list.js | description": [
        "audits[definition-list].description"
      ],
      "lighthouse-core/audits/accessibility/dlitem.js | title": [
        "audits.dlitem.title"
      ],
      "lighthouse-core/audits/accessibility/dlitem.js | description": [
        "audits.dlitem.description"
      ],
      "lighthouse-core/audits/accessibility/document-title.js | title": [
        "audits[document-title].title"
      ],
      "lighthouse-core/audits/accessibility/document-title.js | description": [
        "audits[document-title].description"
      ],
      "lighthouse-core/audits/accessibility/duplicate-id-active.js | title": [
        "audits[duplicate-id-active].title"
      ],
      "lighthouse-core/audits/accessibility/duplicate-id-active.js | description": [
        "audits[duplicate-id-active].description"
      ],
      "lighthouse-core/audits/accessibility/duplicate-id-aria.js | title": [
        "audits[duplicate-id-aria].title"
      ],
      "lighthouse-core/audits/accessibility/duplicate-id-aria.js | description": [
        "audits[duplicate-id-aria].description"
      ],
      "lighthouse-core/audits/accessibility/form-field-multiple-labels.js | title": [
        "audits[form-field-multiple-labels].title"
      ],
      "lighthouse-core/audits/accessibility/form-field-multiple-labels.js | description": [
        "audits[form-field-multiple-labels].description"
      ],
      "lighthouse-core/audits/accessibility/frame-title.js | title": [
        "audits[frame-title].title"
      ],
      "lighthouse-core/audits/accessibility/frame-title.js | description": [
        "audits[frame-title].description"
      ],
      "lighthouse-core/audits/accessibility/heading-order.js | failureTitle": [
        "audits[heading-order].title"
      ],
      "lighthouse-core/audits/accessibility/heading-order.js | description": [
        "audits[heading-order].description"
      ],
      "lighthouse-core/audits/accessibility/html-has-lang.js | title": [
        "audits[html-has-lang].title"
      ],
      "lighthouse-core/audits/accessibility/html-has-lang.js | description": [
        "audits[html-has-lang].description"
      ],
      "lighthouse-core/audits/accessibility/html-lang-valid.js | title": [
        "audits[html-lang-valid].title"
      ],
      "lighthouse-core/audits/accessibility/html-lang-valid.js | description": [
        "audits[html-lang-valid].description"
      ],
      "lighthouse-core/audits/accessibility/image-alt.js | title": [
        "audits[image-alt].title"
      ],
      "lighthouse-core/audits/accessibility/image-alt.js | description": [
        "audits[image-alt].description"
      ],
      "lighthouse-core/audits/accessibility/input-image-alt.js | title": [
        "audits[input-image-alt].title"
      ],
      "lighthouse-core/audits/accessibility/input-image-alt.js | description": [
        "audits[input-image-alt].description"
      ],
      "lighthouse-core/audits/accessibility/label.js | title": [
        "audits.label.title"
      ],
      "lighthouse-core/audits/accessibility/label.js | description": [
        "audits.label.description"
      ],
      "lighthouse-core/audits/accessibility/link-name.js | title": [
        "audits[link-name].title"
      ],
      "lighthouse-core/audits/accessibility/link-name.js | description": [
        "audits[link-name].description"
      ],
      "lighthouse-core/audits/accessibility/list.js | title": [
        "audits.list.title"
      ],
      "lighthouse-core/audits/accessibility/list.js | description": [
        "audits.list.description"
      ],
      "lighthouse-core/audits/accessibility/listitem.js | title": [
        "audits.listitem.title"
      ],
      "lighthouse-core/audits/accessibility/listitem.js | description": [
        "audits.listitem.description"
      ],
      "lighthouse-core/audits/accessibility/meta-refresh.js | title": [
        "audits[meta-refresh].title"
      ],
      "lighthouse-core/audits/accessibility/meta-refresh.js | description": [
        "audits[meta-refresh].description"
      ],
      "lighthouse-core/audits/accessibility/meta-viewport.js | title": [
        "audits[meta-viewport].title"
      ],
      "lighthouse-core/audits/accessibility/meta-viewport.js | description": [
        "audits[meta-viewport].description"
      ],
      "lighthouse-core/audits/accessibility/object-alt.js | title": [
        "audits[object-alt].title"
      ],
      "lighthouse-core/audits/accessibility/object-alt.js | description": [
        "audits[object-alt].description"
      ],
      "lighthouse-core/audits/accessibility/tabindex.js | title": [
        "audits.tabindex.title"
      ],
      "lighthouse-core/audits/accessibility/tabindex.js | description": [
        "audits.tabindex.description"
      ],
      "lighthouse-core/audits/accessibility/td-headers-attr.js | title": [
        "audits[td-headers-attr].title"
      ],
      "lighthouse-core/audits/accessibility/td-headers-attr.js | description": [
        "audits[td-headers-attr].description"
      ],
      "lighthouse-core/audits/accessibility/th-has-data-cells.js | title": [
        "audits[th-has-data-cells].title"
      ],
      "lighthouse-core/audits/accessibility/th-has-data-cells.js | description": [
        "audits[th-has-data-cells].description"
      ],
      "lighthouse-core/audits/accessibility/valid-lang.js | title": [
        "audits[valid-lang].title"
      ],
      "lighthouse-core/audits/accessibility/valid-lang.js | description": [
        "audits[valid-lang].description"
      ],
      "lighthouse-core/audits/accessibility/video-caption.js | title": [
        "audits[video-caption].title"
      ],
      "lighthouse-core/audits/accessibility/video-caption.js | description": [
        "audits[video-caption].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | failureTitle": [
        "audits[uses-long-cache-ttl].title"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | description": [
        "audits[uses-long-cache-ttl].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | displayValue": [
        {
          "values": {
            "itemCount": 11
          },
          "path": "audits[uses-long-cache-ttl].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnCacheTTL": [
        "audits[uses-long-cache-ttl].details.headings[1].text"
      ],
      "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | failureTitle": [
        "audits[total-byte-weight].title"
      ],
      "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | description": [
        "audits[total-byte-weight].description"
      ],
      "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | displayValue": [
        {
          "values": {
            "totalBytes": 4263792
          },
          "path": "audits[total-byte-weight].displayValue"
        }
      ],
      "lighthouse-core/audits/byte-efficiency/offscreen-images.js | title": [
        "audits[offscreen-images].title"
      ],
      "lighthouse-core/audits/byte-efficiency/offscreen-images.js | description": [
        "audits[offscreen-images].description"
      ],
      "lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | title": [
        "audits[render-blocking-resources].title"
      ],
      "lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | description": [
        "audits[render-blocking-resources].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | displayValueMsSavings": [
        {
          "values": {
            "wastedMs": 1383
          },
          "path": "audits[render-blocking-resources].displayValue"
        }
      ],
      "lighthouse-core/audits/byte-efficiency/unminified-css.js | title": [
        "audits[unminified-css].title"
      ],
      "lighthouse-core/audits/byte-efficiency/unminified-css.js | description": [
        "audits[unminified-css].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | displayValueByteSavings": [
        {
          "values": {
            "wastedBytes": 4902
          },
          "path": "audits[unminified-css].displayValue"
        },
        {
          "values": {
            "wastedBytes": 280143
          },
          "path": "audits[unused-css-rules].displayValue"
        },
        {
          "values": {
            "wastedBytes": 239382
          },
          "path": "audits[unused-javascript].displayValue"
        },
        {
          "values": {
            "wastedBytes": 3116164.1000000006
          },
          "path": "audits[modern-image-formats].displayValue"
        },
        {
          "values": {
            "wastedBytes": 34346
          },
          "path": "audits[uses-optimized-images].displayValue"
        },
        {
          "values": {
            "wastedBytes": 533567
          },
          "path": "audits[uses-responsive-images].displayValue"
        },
        {
          "values": {
            "wastedBytes": 9591
          },
          "path": "audits[legacy-javascript].displayValue"
        }
      ],
      "lighthouse-core/audits/byte-efficiency/unminified-javascript.js | title": [
        "audits[unminified-javascript].title"
      ],
      "lighthouse-core/audits/byte-efficiency/unminified-javascript.js | description": [
        "audits[unminified-javascript].description"
      ],
      "lighthouse-core/audits/byte-efficiency/unused-css-rules.js | title": [
        "audits[unused-css-rules].title"
      ],
      "lighthouse-core/audits/byte-efficiency/unused-css-rules.js | description": [
        "audits[unused-css-rules].description"
      ],
      "lighthouse-core/audits/byte-efficiency/unused-javascript.js | title": [
        "audits[unused-javascript].title"
      ],
      "lighthouse-core/audits/byte-efficiency/unused-javascript.js | description": [
        "audits[unused-javascript].description"
      ],
      "lighthouse-core/audits/byte-efficiency/modern-image-formats.js | title": [
        "audits[modern-image-formats].title"
      ],
      "lighthouse-core/audits/byte-efficiency/modern-image-formats.js | description": [
        "audits[modern-image-formats].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnResourceSize": [
        "audits[modern-image-formats].details.headings[2].label",
        "audits[uses-optimized-images].details.headings[2].label",
        "audits[uses-responsive-images].details.headings[2].label"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | title": [
        "audits[uses-optimized-images].title"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | description": [
        "audits[uses-optimized-images].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-text-compression.js | title": [
        "audits[uses-text-compression].title"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-text-compression.js | description": [
        "audits[uses-text-compression].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | title": [
        "audits[uses-responsive-images].title"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | description": [
        "audits[uses-responsive-images].description"
      ],
      "lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | title": [
        "audits[efficient-animated-content].title"
      ],
      "lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | description": [
        "audits[efficient-animated-content].description"
      ],
      "lighthouse-core/audits/byte-efficiency/duplicated-javascript.js | title": [
        "audits[duplicated-javascript].title"
      ],
      "lighthouse-core/audits/byte-efficiency/duplicated-javascript.js | description": [
        "audits[duplicated-javascript].description"
      ],
      "lighthouse-core/audits/byte-efficiency/legacy-javascript.js | title": [
        "audits[legacy-javascript].title"
      ],
      "lighthouse-core/audits/byte-efficiency/legacy-javascript.js | description": [
        "audits[legacy-javascript].description"
      ],
      "lighthouse-core/audits/dobetterweb/doctype.js | title": [
        "audits.doctype.title"
      ],
      "lighthouse-core/audits/dobetterweb/doctype.js | description": [
        "audits.doctype.description"
      ],
      "lighthouse-core/audits/dobetterweb/charset.js | title": [
        "audits.charset.title"
      ],
      "lighthouse-core/audits/dobetterweb/charset.js | description": [
        "audits.charset.description"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | title": [
        "audits[dom-size].title"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | description": [
        "audits[dom-size].description"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | displayValue": [
        {
          "values": {
            "itemCount": 353
          },
          "path": "audits[dom-size].displayValue"
        }
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | columnStatistic": [
        "audits[dom-size].details.headings[0].text"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | columnValue": [
        "audits[dom-size].details.headings[2].text"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMElements": [
        "audits[dom-size].details.items[0].statistic"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMDepth": [
        "audits[dom-size].details.items[1].statistic"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMWidth": [
        "audits[dom-size].details.items[2].statistic"
      ],
      "lighthouse-core/audits/dobetterweb/geolocation-on-start.js | title": [
        "audits[geolocation-on-start].title"
      ],
      "lighthouse-core/audits/dobetterweb/geolocation-on-start.js | description": [
        "audits[geolocation-on-start].description"
      ],
      "lighthouse-core/audits/dobetterweb/inspector-issues.js | title": [
        "audits[inspector-issues].title"
      ],
      "lighthouse-core/audits/dobetterweb/inspector-issues.js | description": [
        "audits[inspector-issues].description"
      ],
      "lighthouse-core/audits/dobetterweb/no-document-write.js | title": [
        "audits[no-document-write].title"
      ],
      "lighthouse-core/audits/dobetterweb/no-document-write.js | description": [
        "audits[no-document-write].description"
      ],
      "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | failureTitle": [
        "audits[no-vulnerable-libraries].title"
      ],
      "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | description": [
        "audits[no-vulnerable-libraries].description"
      ],
      "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | displayValue": [
        {
          "values": {
            "itemCount": 5
          },
          "path": "audits[no-vulnerable-libraries].displayValue"
        }
      ],
      "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | columnVersion": [
        "audits[no-vulnerable-libraries].details.headings[0].text"
      ],
      "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | columnVuln": [
        "audits[no-vulnerable-libraries].details.headings[1].text"
      ],
      "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | columnSeverity": [
        "audits[no-vulnerable-libraries].details.headings[2].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | itemSeverityMedium": [
        "audits[no-vulnerable-libraries].details.items[0].highestSeverity"
      ],
      "lighthouse-core/audits/dobetterweb/js-libraries.js | title": [
        "audits[js-libraries].title"
      ],
      "lighthouse-core/audits/dobetterweb/js-libraries.js | description": [
        "audits[js-libraries].description"
      ],
      "lighthouse-core/audits/dobetterweb/js-libraries.js | columnVersion": [
        "audits[js-libraries].details.headings[1].text"
      ],
      "lighthouse-core/audits/dobetterweb/notification-on-start.js | title": [
        "audits[notification-on-start].title"
      ],
      "lighthouse-core/audits/dobetterweb/notification-on-start.js | description": [
        "audits[notification-on-start].description"
      ],
      "lighthouse-core/audits/dobetterweb/password-inputs-can-be-pasted-into.js | title": [
        "audits[password-inputs-can-be-pasted-into].title"
      ],
      "lighthouse-core/audits/dobetterweb/password-inputs-can-be-pasted-into.js | description": [
        "audits[password-inputs-can-be-pasted-into].description"
      ],
      "lighthouse-core/audits/dobetterweb/uses-http2.js | title": [
        "audits[uses-http2].title"
      ],
      "lighthouse-core/audits/dobetterweb/uses-http2.js | description": [
        "audits[uses-http2].description"
      ],
      "lighthouse-core/audits/dobetterweb/uses-passive-event-listeners.js | title": [
        "audits[uses-passive-event-listeners].title"
      ],
      "lighthouse-core/audits/dobetterweb/uses-passive-event-listeners.js | description": [
        "audits[uses-passive-event-listeners].description"
      ],
      "lighthouse-core/audits/seo/meta-description.js | title": [
        "audits[meta-description].title"
      ],
      "lighthouse-core/audits/seo/meta-description.js | description": [
        "audits[meta-description].description"
      ],
      "lighthouse-core/audits/seo/http-status-code.js | title": [
        "audits[http-status-code].title"
      ],
      "lighthouse-core/audits/seo/http-status-code.js | description": [
        "audits[http-status-code].description"
      ],
      "lighthouse-core/audits/seo/font-size.js | title": [
        "audits[font-size].title"
      ],
      "lighthouse-core/audits/seo/font-size.js | description": [
        "audits[font-size].description"
      ],
      "lighthouse-core/audits/seo/font-size.js | displayValue": [
        {
          "values": {
            "decimalProportion": 1
          },
          "path": "audits[font-size].displayValue"
        }
      ],
      "lighthouse-core/audits/seo/font-size.js | columnSelector": [
        "audits[font-size].details.headings[1].text"
      ],
      "lighthouse-core/audits/seo/font-size.js | columnPercentPageText": [
        "audits[font-size].details.headings[2].text"
      ],
      "lighthouse-core/audits/seo/font-size.js | columnFontSize": [
        "audits[font-size].details.headings[3].text"
      ],
      "lighthouse-core/audits/seo/font-size.js | legibleText": [
        "audits[font-size].details.items[0].source.value"
      ],
      "lighthouse-core/audits/seo/link-text.js | title": [
        "audits[link-text].title"
      ],
      "lighthouse-core/audits/seo/link-text.js | description": [
        "audits[link-text].description"
      ],
      "lighthouse-core/audits/seo/crawlable-anchors.js | failureTitle": [
        "audits[crawlable-anchors].title"
      ],
      "lighthouse-core/audits/seo/crawlable-anchors.js | description": [
        "audits[crawlable-anchors].description"
      ],
      "lighthouse-core/audits/seo/crawlable-anchors.js | columnFailingLink": [
        "audits[crawlable-anchors].details.headings[0].text"
      ],
      "lighthouse-core/audits/seo/is-crawlable.js | failureTitle": [
        "audits[is-crawlable].title"
      ],
      "lighthouse-core/audits/seo/is-crawlable.js | description": [
        "audits[is-crawlable].description"
      ],
      "lighthouse-core/audits/seo/robots-txt.js | title": [
        "audits[robots-txt].title"
      ],
      "lighthouse-core/audits/seo/robots-txt.js | description": [
        "audits[robots-txt].description"
      ],
      "lighthouse-core/audits/seo/tap-targets.js | failureTitle": [
        "audits[tap-targets].title"
      ],
      "lighthouse-core/audits/seo/tap-targets.js | description": [
        "audits[tap-targets].description"
      ],
      "lighthouse-core/audits/seo/tap-targets.js | displayValue": [
        {
          "values": {
            "decimalProportion": 0.9649122807017544
          },
          "path": "audits[tap-targets].displayValue"
        }
      ],
      "lighthouse-core/audits/seo/tap-targets.js | tapTargetHeader": [
        "audits[tap-targets].details.headings[0].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnSize": [
        "audits[tap-targets].details.headings[1].text"
      ],
      "lighthouse-core/audits/seo/tap-targets.js | overlappingTargetHeader": [
        "audits[tap-targets].details.headings[2].text"
      ],
      "lighthouse-core/audits/seo/hreflang.js | title": [
        "audits.hreflang.title"
      ],
      "lighthouse-core/audits/seo/hreflang.js | description": [
        "audits.hreflang.description"
      ],
      "lighthouse-core/audits/seo/plugins.js | title": [
        "audits.plugins.title"
      ],
      "lighthouse-core/audits/seo/plugins.js | description": [
        "audits.plugins.description"
      ],
      "lighthouse-core/audits/seo/canonical.js | title": [
        "audits.canonical.title"
      ],
      "lighthouse-core/audits/seo/canonical.js | description": [
        "audits.canonical.description"
      ],
      "lighthouse-core/audits/seo/manual/structured-data.js | title": [
        "audits[structured-data].title"
      ],
      "lighthouse-core/audits/seo/manual/structured-data.js | description": [
        "audits[structured-data].description"
      ],
      "lighthouse-core/config/default-config.js | performanceCategoryTitle": [
        "categories.performance.title"
      ],
      "lighthouse-core/config/default-config.js | a11yCategoryTitle": [
        "categories.accessibility.title"
      ],
      "lighthouse-core/config/default-config.js | a11yCategoryDescription": [
        "categories.accessibility.description"
      ],
      "lighthouse-core/config/default-config.js | a11yCategoryManualDescription": [
        "categories.accessibility.manualDescription"
      ],
      "lighthouse-core/config/default-config.js | bestPracticesCategoryTitle": [
        "categories[best-practices].title"
      ],
      "lighthouse-core/config/default-config.js | seoCategoryTitle": [
        "categories.seo.title"
      ],
      "lighthouse-core/config/default-config.js | seoCategoryDescription": [
        "categories.seo.description"
      ],
      "lighthouse-core/config/default-config.js | seoCategoryManualDescription": [
        "categories.seo.manualDescription"
      ],
      "lighthouse-core/config/default-config.js | pwaCategoryTitle": [
        "categories.pwa.title"
      ],
      "lighthouse-core/config/default-config.js | pwaCategoryDescription": [
        "categories.pwa.description"
      ],
      "lighthouse-core/config/default-config.js | pwaCategoryManualDescription": [
        "categories.pwa.manualDescription"
      ],
      "lighthouse-core/config/default-config.js | metricGroupTitle": [
        "categoryGroups.metrics.title"
      ],
      "lighthouse-core/config/default-config.js | loadOpportunitiesGroupTitle": [
        "categoryGroups[load-opportunities].title"
      ],
      "lighthouse-core/config/default-config.js | loadOpportunitiesGroupDescription": [
        "categoryGroups[load-opportunities].description"
      ],
      "lighthouse-core/config/default-config.js | budgetsGroupTitle": [
        "categoryGroups.budgets.title"
      ],
      "lighthouse-core/config/default-config.js | budgetsGroupDescription": [
        "categoryGroups.budgets.description"
      ],
      "lighthouse-core/config/default-config.js | diagnosticsGroupTitle": [
        "categoryGroups.diagnostics.title"
      ],
      "lighthouse-core/config/default-config.js | diagnosticsGroupDescription": [
        "categoryGroups.diagnostics.description"
      ],
      "lighthouse-core/config/default-config.js | pwaInstallableGroupTitle": [
        "categoryGroups[pwa-installable].title"
      ],
      "lighthouse-core/config/default-config.js | pwaOptimizedGroupTitle": [
        "categoryGroups[pwa-optimized].title"
      ],
      "lighthouse-core/config/default-config.js | a11yBestPracticesGroupTitle": [
        "categoryGroups[a11y-best-practices].title"
      ],
      "lighthouse-core/config/default-config.js | a11yBestPracticesGroupDescription": [
        "categoryGroups[a11y-best-practices].description"
      ],
      "lighthouse-core/config/default-config.js | a11yColorContrastGroupTitle": [
        "categoryGroups[a11y-color-contrast].title"
      ],
      "lighthouse-core/config/default-config.js | a11yColorContrastGroupDescription": [
        "categoryGroups[a11y-color-contrast].description"
      ],
      "lighthouse-core/config/default-config.js | a11yNamesLabelsGroupTitle": [
        "categoryGroups[a11y-names-labels].title"
      ],
      "lighthouse-core/config/default-config.js | a11yNamesLabelsGroupDescription": [
        "categoryGroups[a11y-names-labels].description"
      ],
      "lighthouse-core/config/default-config.js | a11yNavigationGroupTitle": [
        "categoryGroups[a11y-navigation].title"
      ],
      "lighthouse-core/config/default-config.js | a11yNavigationGroupDescription": [
        "categoryGroups[a11y-navigation].description"
      ],
      "lighthouse-core/config/default-config.js | a11yAriaGroupTitle": [
        "categoryGroups[a11y-aria].title"
      ],
      "lighthouse-core/config/default-config.js | a11yAriaGroupDescription": [
        "categoryGroups[a11y-aria].description"
      ],
      "lighthouse-core/config/default-config.js | a11yLanguageGroupTitle": [
        "categoryGroups[a11y-language].title"
      ],
      "lighthouse-core/config/default-config.js | a11yLanguageGroupDescription": [
        "categoryGroups[a11y-language].description"
      ],
      "lighthouse-core/config/default-config.js | a11yAudioVideoGroupTitle": [
        "categoryGroups[a11y-audio-video].title"
      ],
      "lighthouse-core/config/default-config.js | a11yAudioVideoGroupDescription": [
        "categoryGroups[a11y-audio-video].description"
      ],
      "lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupTitle": [
        "categoryGroups[a11y-tables-lists].title"
      ],
      "lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupDescription": [
        "categoryGroups[a11y-tables-lists].description"
      ],
      "lighthouse-core/config/default-config.js | seoMobileGroupTitle": [
        "categoryGroups[seo-mobile].title"
      ],
      "lighthouse-core/config/default-config.js | seoMobileGroupDescription": [
        "categoryGroups[seo-mobile].description"
      ],
      "lighthouse-core/config/default-config.js | seoContentGroupTitle": [
        "categoryGroups[seo-content].title"
      ],
      "lighthouse-core/config/default-config.js | seoContentGroupDescription": [
        "categoryGroups[seo-content].description"
      ],
      "lighthouse-core/config/default-config.js | seoCrawlingGroupTitle": [
        "categoryGroups[seo-crawl].title"
      ],
      "lighthouse-core/config/default-config.js | seoCrawlingGroupDescription": [
        "categoryGroups[seo-crawl].description"
      ],
      "lighthouse-core/config/default-config.js | bestPracticesTrustSafetyGroupTitle": [
        "categoryGroups[best-practices-trust-safety].title"
      ],
      "lighthouse-core/config/default-config.js | bestPracticesUXGroupTitle": [
        "categoryGroups[best-practices-ux].title"
      ],
      "lighthouse-core/config/default-config.js | bestPracticesBrowserCompatGroupTitle": [
        "categoryGroups[best-practices-browser-compat].title"
      ],
      "lighthouse-core/config/default-config.js | bestPracticesGeneralGroupTitle": [
        "categoryGroups[best-practices-general].title"
      ],
      "node_modules/lighthouse-plugin-publisher-ads/messages/common-strings.js | GROUPS__METRICS": [
        "categoryGroups[lighthouse-plugin-publisher-ads-metrics].title"
      ],
      "node_modules/lighthouse-plugin-publisher-ads/messages/common-strings.js | GROUPS__ADS_PERFORMANCE": [
        "categoryGroups[lighthouse-plugin-publisher-ads-ads-performance].title"
      ],
      "node_modules/lighthouse-plugin-publisher-ads/messages/common-strings.js | GROUPS__ADS_BEST_PRACTICES": [
        "categoryGroups[lighthouse-plugin-publisher-ads-ads-best-practices].title"
      ]
    }
  }
}