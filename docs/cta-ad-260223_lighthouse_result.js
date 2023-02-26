{
  "lighthouseVersion": "9.6.8",
  "requestedUrl": "https://frontend-optimisation-course-three.vercel.app/cta-ad.html",
  "finalUrl": "https://frontend-optimisation-course-three.vercel.app/cta-ad.html",
  "fetchTime": "2023-02-26T16:54:20.326Z",
  "gatherMode": "navigation",
  "runWarnings": [
    "Chrome extensions negatively affected this page's load performance. Try auditing the page in incognito mode or from a Chrome profile without extensions."
  ],
  "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
  "environment": {
    "networkUserAgent": "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4695.0 Mobile Safari/537.36 Chrome-Lighthouse",
    "hostUserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
    "benchmarkIndex": 2964.5,
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
      "title": "Does not have a `<meta name=\"viewport\">` tag with `width` or `initial-scale`",
      "description": "A `<meta name=\"viewport\">` not only optimizes your app for mobile screen sizes, but also prevents [a 300 millisecond delay to user input](https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away). [Learn more](https://web.dev/viewport/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "explanation": "No `<meta name=\"viewport\">` tag found"
    },
    "first-contentful-paint": {
      "id": "first-contentful-paint",
      "title": "First Contentful Paint",
      "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://web.dev/first-contentful-paint/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 804.3862,
      "numericUnit": "millisecond",
      "displayValue": "0.8 s"
    },
    "largest-contentful-paint": {
      "id": "largest-contentful-paint",
      "title": "Largest Contentful Paint",
      "description": "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more](https://web.dev/lighthouse-largest-contentful-paint/)",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 804.3862,
      "numericUnit": "millisecond",
      "displayValue": "0.8 s"
    },
    "first-meaningful-paint": {
      "id": "first-meaningful-paint",
      "title": "First Meaningful Paint",
      "description": "First Meaningful Paint measures when the primary content of a page is visible. [Learn more](https://web.dev/first-meaningful-paint/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 804.3862,
      "numericUnit": "millisecond",
      "displayValue": "0.8 s"
    },
    "speed-index": {
      "id": "speed-index",
      "title": "Speed Index",
      "description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://web.dev/speed-index/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 804.3862,
      "numericUnit": "millisecond",
      "displayValue": "0.8 s"
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
            "timestamp": 4800646234,
            "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP0Y8deHPGur6Rq9r4Y8XWPh67vYXjt7+90f7e9gxUBXjQSxqxXlgJAw3YyGX5acHomyJKV7oiv9H+IGt6PGY/Eej+HL+Q2crraaW199mKgG5hWSSRRKrtlVfykKpnjcQVl6F63Nz7B4hm060S41a0S4UxNczWmnMnmFXDOEVpH2hlBXncRnIOaFfqLXoZy6f43sJb54dX0vWIY7GYWdrfWL20kl3nMRmuI5GUR4IRgkGc5YH+CmtiPe5vIng0jxbIb9b/X9O2tfRSWL6dpLwSQ2gnDPDKZJ5RKzxrsMiiPGSwUHGE73VjTToOXTfFsdiVXWdKF4YMJI2kSmJZ8SYYp9pJ2f6r5AwOUY7/n+WFzaX+YEmrWvilrHU10zUdMS/kjYWDXWnSvFDJklTLidS642ghSh4J7gC3fm02EtI6/EdFbLIsS+aQ0mPmKggH8yap76CXmTUigoAKACgAoAKACgDLvfDWlalcRT3em2t1PEd0cs0Ku0ZznKkjjnnitI1asVyqTsVzMu2lnDYxCKCJYkH8KAAdMdvYAfhUyk5O7ET1IgoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/AP/Z"
          },
          {
            "timing": 600,
            "timestamp": 4800946234,
            "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP0Y8deHPGur6Rq9r4Y8XWPh67vYXjt7+90f7e9gxUBXjQSxqxXlgJAw3YyGX5acHomyJKV7oiv9H+IGt6PGY/Eej+HL+Q2crraaW199mKgG5hWSSRRKrtlVfykKpnjcQVl6F63Nz7B4hm060S41a0S4UxNczWmnMnmFXDOEVpH2hlBXncRnIOaFfqLXoZy6f43sJb54dX0vWIY7GYWdrfWL20kl3nMRmuI5GUR4IRgkGc5YH+CmtiPe5vIng0jxbIb9b/X9O2tfRSWL6dpLwSQ2gnDPDKZJ5RKzxrsMiiPGSwUHGE73VjTToOXTfFsdiVXWdKF4YMJI2kSmJZ8SYYp9pJ2f6r5AwOUY7/n+WFzaX+YEmrWvilrHU10zUdMS/kjYWDXWnSvFDJklTLidS642ghSh4J7gC3fm02EtI6/EdFbLIsS+aQ0mPmKggH8yap76CXmTUigoAKACgAoAKACgDLvfDWlalcRT3em2t1PEd0cs0Ku0ZznKkjjnnitI1asVyqTsVzMu2lnDYxCKCJYkH8KAAdMdvYAfhUyk5O7ET1IgoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/AP/Z"
          },
          {
            "timing": 900,
            "timestamp": 4801246234,
            "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP0Y8deHPGur6Rq9r4Y8XWPh67vYXjt7+90f7e9gxUBXjQSxqxXlgJAw3YyGX5acHomyJKV7oiv9H+IGt6PGY/Eej+HL+Q2crraaW199mKgG5hWSSRRKrtlVfykKpnjcQVl6F63Nz7B4hm060S41a0S4UxNczWmnMnmFXDOEVpH2hlBXncRnIOaFfqLXoZy6f43sJb54dX0vWIY7GYWdrfWL20kl3nMRmuI5GUR4IRgkGc5YH+CmtiPe5vIng0jxbIb9b/X9O2tfRSWL6dpLwSQ2gnDPDKZJ5RKzxrsMiiPGSwUHGE73VjTToOXTfFsdiVXWdKF4YMJI2kSmJZ8SYYp9pJ2f6r5AwOUY7/n+WFzaX+YEmrWvilrHU10zUdMS/kjYWDXWnSvFDJklTLidS642ghSh4J7gC3fm02EtI6/EdFbLIsS+aQ0mPmKggH8yap76CXmTUigoAKACgAoAKACgDLvfDWlalcRT3em2t1PEd0cs0Ku0ZznKkjjnnitI1asVyqTsVzMu2lnDYxCKCJYkH8KAAdMdvYAfhUyk5O7ET1IgoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/AP/Z"
          },
          {
            "timing": 1200,
            "timestamp": 4801546234,
            "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP0Y8deHPGur6Rq9r4Y8XWPh67vYXjt7+90f7e9gxUBXjQSxqxXlgJAw3YyGX5acHomyJKV7oiv9H+IGt6PGY/Eej+HL+Q2crraaW199mKgG5hWSSRRKrtlVfykKpnjcQVl6F63Nz7B4hm060S41a0S4UxNczWmnMnmFXDOEVpH2hlBXncRnIOaFfqLXoZy6f43sJb54dX0vWIY7GYWdrfWL20kl3nMRmuI5GUR4IRgkGc5YH+CmtiPe5vIng0jxbIb9b/X9O2tfRSWL6dpLwSQ2gnDPDKZJ5RKzxrsMiiPGSwUHGE73VjTToOXTfFsdiVXWdKF4YMJI2kSmJZ8SYYp9pJ2f6r5AwOUY7/n+WFzaX+YEmrWvilrHU10zUdMS/kjYWDXWnSvFDJklTLidS642ghSh4J7gC3fm02EtI6/EdFbLIsS+aQ0mPmKggH8yap76CXmTUigoAKACgAoAKACgDLvfDWlalcRT3em2t1PEd0cs0Ku0ZznKkjjnnitI1asVyqTsVzMu2lnDYxCKCJYkH8KAAdMdvYAfhUyk5O7ET1IgoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/AP/Z"
          },
          {
            "timing": 1500,
            "timestamp": 4801846234,
            "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP0Y8deHPGur6Rq9r4Y8XWPh67vYXjt7+90f7e9gxUBXjQSxqxXlgJAw3YyGX5acHomyJKV7oiv9H+IGt6PGY/Eej+HL+Q2crraaW199mKgG5hWSSRRKrtlVfykKpnjcQVl6F63Nz7B4hm060S41a0S4UxNczWmnMnmFXDOEVpH2hlBXncRnIOaFfqLXoZy6f43sJb54dX0vWIY7GYWdrfWL20kl3nMRmuI5GUR4IRgkGc5YH+CmtiPe5vIng0jxbIb9b/X9O2tfRSWL6dpLwSQ2gnDPDKZJ5RKzxrsMiiPGSwUHGE73VjTToOXTfFsdiVXWdKF4YMJI2kSmJZ8SYYp9pJ2f6r5AwOUY7/n+WFzaX+YEmrWvilrHU10zUdMS/kjYWDXWnSvFDJklTLidS642ghSh4J7gC3fm02EtI6/EdFbLIsS+aQ0mPmKggH8yap76CXmTUigoAKACgAoAKACgDLvfDWlalcRT3em2t1PEd0cs0Ku0ZznKkjjnnitI1asVyqTsVzMu2lnDYxCKCJYkH8KAAdMdvYAfhUyk5O7ET1IgoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/AP/Z"
          },
          {
            "timing": 1800,
            "timestamp": 4802146234,
            "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP0Y8deHPGur6Rq9r4Y8XWPh67vYXjt7+90f7e9gxUBXjQSxqxXlgJAw3YyGX5acHomyJKV7oiv9H+IGt6PGY/Eej+HL+Q2crraaW199mKgG5hWSSRRKrtlVfykKpnjcQVl6F63Nz7B4hm060S41a0S4UxNczWmnMnmFXDOEVpH2hlBXncRnIOaFfqLXoZy6f43sJb54dX0vWIY7GYWdrfWL20kl3nMRmuI5GUR4IRgkGc5YH+CmtiPe5vIng0jxbIb9b/X9O2tfRSWL6dpLwSQ2gnDPDKZJ5RKzxrsMiiPGSwUHGE73VjTToOXTfFsdiVXWdKF4YMJI2kSmJZ8SYYp9pJ2f6r5AwOUY7/n+WFzaX+YEmrWvilrHU10zUdMS/kjYWDXWnSvFDJklTLidS642ghSh4J7gC3fm02EtI6/EdFbLIsS+aQ0mPmKggH8yap76CXmTUigoAKACgAoAKACgDLvfDWlalcRT3em2t1PEd0cs0Ku0ZznKkjjnnitI1asVyqTsVzMu2lnDYxCKCJYkH8KAAdMdvYAfhUyk5O7ET1IgoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/AP/Z"
          },
          {
            "timing": 2100,
            "timestamp": 4802446234,
            "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP0Y8deHPGur6Rq9r4Y8XWPh67vYXjt7+90f7e9gxUBXjQSxqxXlgJAw3YyGX5acHomyJKV7oiv9H+IGt6PGY/Eej+HL+Q2crraaW199mKgG5hWSSRRKrtlVfykKpnjcQVl6F63Nz7B4hm060S41a0S4UxNczWmnMnmFXDOEVpH2hlBXncRnIOaFfqLXoZy6f43sJb54dX0vWIY7GYWdrfWL20kl3nMRmuI5GUR4IRgkGc5YH+CmtiPe5vIng0jxbIb9b/X9O2tfRSWL6dpLwSQ2gnDPDKZJ5RKzxrsMiiPGSwUHGE73VjTToOXTfFsdiVXWdKF4YMJI2kSmJZ8SYYp9pJ2f6r5AwOUY7/n+WFzaX+YEmrWvilrHU10zUdMS/kjYWDXWnSvFDJklTLidS642ghSh4J7gC3fm02EtI6/EdFbLIsS+aQ0mPmKggH8yap76CXmTUigoAKACgAoAKACgDLvfDWlalcRT3em2t1PEd0cs0Ku0ZznKkjjnnitI1asVyqTsVzMu2lnDYxCKCJYkH8KAAdMdvYAfhUyk5O7ET1IgoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/AP/Z"
          },
          {
            "timing": 2400,
            "timestamp": 4802746234,
            "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP0Y8deHPGur6Rq9r4Y8XWPh67vYXjt7+90f7e9gxUBXjQSxqxXlgJAw3YyGX5acHomyJKV7oiv9H+IGt6PGY/Eej+HL+Q2crraaW199mKgG5hWSSRRKrtlVfykKpnjcQVl6F63Nz7B4hm060S41a0S4UxNczWmnMnmFXDOEVpH2hlBXncRnIOaFfqLXoZy6f43sJb54dX0vWIY7GYWdrfWL20kl3nMRmuI5GUR4IRgkGc5YH+CmtiPe5vIng0jxbIb9b/X9O2tfRSWL6dpLwSQ2gnDPDKZJ5RKzxrsMiiPGSwUHGE73VjTToOXTfFsdiVXWdKF4YMJI2kSmJZ8SYYp9pJ2f6r5AwOUY7/n+WFzaX+YEmrWvilrHU10zUdMS/kjYWDXWnSvFDJklTLidS642ghSh4J7gC3fm02EtI6/EdFbLIsS+aQ0mPmKggH8yap76CXmTUigoAKACgAoAKACgDLvfDWlalcRT3em2t1PEd0cs0Ku0ZznKkjjnnitI1asVyqTsVzMu2lnDYxCKCJYkH8KAAdMdvYAfhUyk5O7ET1IgoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/AP/Z"
          },
          {
            "timing": 2700,
            "timestamp": 4803046234,
            "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP0Y8deHPGur6Rq9r4Y8XWPh67vYXjt7+90f7e9gxUBXjQSxqxXlgJAw3YyGX5acHomyJKV7oiv9H+IGt6PGY/Eej+HL+Q2crraaW199mKgG5hWSSRRKrtlVfykKpnjcQVl6F63Nz7B4hm060S41a0S4UxNczWmnMnmFXDOEVpH2hlBXncRnIOaFfqLXoZy6f43sJb54dX0vWIY7GYWdrfWL20kl3nMRmuI5GUR4IRgkGc5YH+CmtiPe5vIng0jxbIb9b/X9O2tfRSWL6dpLwSQ2gnDPDKZJ5RKzxrsMiiPGSwUHGE73VjTToOXTfFsdiVXWdKF4YMJI2kSmJZ8SYYp9pJ2f6r5AwOUY7/n+WFzaX+YEmrWvilrHU10zUdMS/kjYWDXWnSvFDJklTLidS642ghSh4J7gC3fm02EtI6/EdFbLIsS+aQ0mPmKggH8yap76CXmTUigoAKACgAoAKACgDLvfDWlalcRT3em2t1PEd0cs0Ku0ZznKkjjnnitI1asVyqTsVzMu2lnDYxCKCJYkH8KAAdMdvYAfhUyk5O7ET1IgoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/AP/Z"
          },
          {
            "timing": 3000,
            "timestamp": 4803346234,
            "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP0Y8deHPGur6Rq9r4Y8XWPh67vYXjt7+90f7e9gxUBXjQSxqxXlgJAw3YyGX5acHomyJKV7oiv9H+IGt6PGY/Eej+HL+Q2crraaW199mKgG5hWSSRRKrtlVfykKpnjcQVl6F63Nz7B4hm060S41a0S4UxNczWmnMnmFXDOEVpH2hlBXncRnIOaFfqLXoZy6f43sJb54dX0vWIY7GYWdrfWL20kl3nMRmuI5GUR4IRgkGc5YH+CmtiPe5vIng0jxbIb9b/X9O2tfRSWL6dpLwSQ2gnDPDKZJ5RKzxrsMiiPGSwUHGE73VjTToOXTfFsdiVXWdKF4YMJI2kSmJZ8SYYp9pJ2f6r5AwOUY7/n+WFzaX+YEmrWvilrHU10zUdMS/kjYWDXWnSvFDJklTLidS642ghSh4J7gC3fm02EtI6/EdFbLIsS+aQ0mPmKggH8yap76CXmTUigoAKACgAoAKACgDLvfDWlalcRT3em2t1PEd0cs0Ku0ZznKkjjnnitI1asVyqTsVzMu2lnDYxCKCJYkH8KAAdMdvYAfhUyk5O7ET1IgoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/AP/Z"
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
        "timing": 124,
        "timestamp": 4800470505,
        "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAHyARgDASIAAhEBAxEB/8QAGwABAAMAAwEAAAAAAAAAAAAAAAQFBgECAwf/xAAsEAEAAgICAQMDBAEFAQAAAAAAAQIDBAURIQYSEyIxQQcUMlFxFjNhgaFT/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EAB4RAQACAgIDAQAAAAAAAAAAAAABESFhAkEDEjGR/9oADAMBAAIRAxEAPwD7tzfrTJxfrbFwVtLHbDfFgyzs2yzWI+Sc3cT9MxExGG0x3P1TPX3+/TH+pvp3Nr4cmtnzXnPhjNgicNo+XvLXFWI/ze9PP26tE9tNs8HxO1t5NrZ4zRzbWSK1vmyYK2vaK2i1YmZjuYi0RMf1MRKHT0j6bpSaU9P8RWk45xTWNPHETSZmZr9vt3Mz1/zJHzKTd3Cs9O+udTlvStOYy62XBkpxuPkc+vH1TSt8UZIis+PdHmYieoiZrb7dJeD1lxWbV3M3uzUnUrS2THan1fVktjiI68TPyY71/wA1/qYmbTQ4XjtDDnw6mpjx4M0RW2GO5xxWKxWKVrPiteo/jWIjzM9dzPfGHguJw6uzrYeL0cevtVimfFXXpFctYr7Yi8ddWj2x11P48LNXJnDMemf1C1OW19W+3r31cmfFjyRWJm8Vm1PfMTMxH2juf8Vt/Sxy+teMjiuP5PFOW+jt2yRW3x2930RbvqsR5/j4/Ex5iZ8d2nH8Bw3GzWeO4nj9Sa2i8Tg1qY+rRWaxPiPvFbWj/EzH5db+m+DvqYNW/DcbbVwe74sM6tJpj938vbXrqO/z192cqganqHa3bZc2jx+PLx86X7vBlnZil8kzWJpWazH09z747mfHs/5Vev8AqNx2PX2b8rg2NO+rj+TYicdo+L6rR1Puis9/RafETEx11NvdHer1OJ47T1519TQ1cGCccYfjxYa1r7ImZivUR17e7W8fb6p/tD/0t6f/AG2PXjg+LjXx1mlMUamP2VrNvdMRHXUR7pmev78r2k3W0fjfVmjyXK/sNPDt3vH7mJyWxTWneDJXHeImevd9VuvHf2Vux+pXp3Ww48uxm2cUXw/PEXwWi0V9mS/Ux94nrDm7ifMTjmJ6nrvSYuG4zDatsGhq4b1nJatsWKKWrOT+cxMeYm35mPMvOeA4m+LBTPoa+x8OG2vS+zX5r/HeOr1m9+7T7o/l3M+789hG1fp+r+P3o240se1lya2tOzePimse33Xp17p8e6bYrx13+O/t0q+G/UXjNnTw25Kt9PataKXxxS9qVmaxbxeax7uq3pNvbE9e7+omWl0uA4fRwZcOjxWhrYcuP4cmPDr0pW9PP0zER5r9VvH2+qf7cYfT3DYKYqYeI4/HTFmjYx1prUiKZYrFYvHjxaIiI7+/UdJN5pVPs+vOHwcdqb8/ur6mzhz7EXphmfbTD1F56+8+ZjrrvvvuO4Q+Y/ULR47R37zhvO7hx574de8WpOScWCc01tMx9M+2tvxPXjvzMQ0VvTnCW0cOlbh+OnSwxaMevOtT46Rbv3dV66jvue/77cZvTXBZ8mTJn4Xjcl8k3m9r6tJm03jq0zMx57jxP9wvehW8h634vjeYz8du/Pjy4oxTN4p3WffW9vHXnxXHMz/nx3KHx36hcZt2vM0y/Fk2fg07Y6zadmP2+LNFoj8TMZeojz313/fWkz8JxWxmpm2OM0suWk47VvfBW1onHMzSYmY+9Zmev67npGt6W4Ga5Irw+hite9ss3xYK47xe3XuvFqxExefbWfdExPdYnvxCTd4IxGfqXwnK6vNcbg3tDJGTWz0jJjt3Hmsx3E/9x5TnjqamvqY4x62GmKsVrX6Y+8RHUdz+eojp7NTpI2AIoAAAAAAAAAAAAAAACn5HFzM7eW3H5NauG0V9vyXt3Ex3349sx57/APETHr+pa1t79nUtM1iIn39dTFu5n/b/ADX6f/WjHSPJMRVR+Lahri9Q/LM2y6nsm3isZPtHcT/8/M9dx/2vgZ5cvbpABkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z"
      }
    },
    "total-blocking-time": {
      "id": "total-blocking-time",
      "title": "Total Blocking Time",
      "description": "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more](https://web.dev/lighthouse-total-blocking-time/).",
      "score": 0.99,
      "scoreDisplayMode": "numeric",
      "numericValue": 67.5,
      "numericUnit": "millisecond",
      "displayValue": "70 ms"
    },
    "max-potential-fid": {
      "id": "max-potential-fid",
      "title": "Max Potential First Input Delay",
      "description": "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more](https://web.dev/lighthouse-max-potential-fid/).",
      "score": 0.9,
      "scoreDisplayMode": "numeric",
      "numericValue": 129,
      "numericUnit": "millisecond",
      "displayValue": "130 ms"
    },
    "cumulative-layout-shift": {
      "id": "cumulative-layout-shift",
      "title": "Cumulative Layout Shift",
      "description": "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more](https://web.dev/cls/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "unitless",
      "displayValue": "0",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "cumulativeLayoutShiftMainFrame": 0,
            "totalCumulativeLayoutShift": 0
          }
        ]
      }
    },
    "errors-in-console": {
      "id": "errors-in-console",
      "title": "No browser errors logged to the console",
      "description": "Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more](https://web.dev/errors-in-console/)",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "server-response-time": {
      "id": "server-response-time",
      "title": "Initial server response time was short",
      "description": "Keep the server response time for the main document short because all other requests depend on it. [Learn more](https://web.dev/time-to-first-byte/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "numericValue": 31.418,
      "numericUnit": "millisecond",
      "displayValue": "Root document took 30 ms",
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
            "url": "https://frontend-optimisation-course-three.vercel.app/cta-ad.html",
            "responseTime": 31.418
          }
        ],
        "overallSavingsMs": -68.582
      }
    },
    "interactive": {
      "id": "interactive",
      "title": "Time to Interactive",
      "description": "Time to interactive is the amount of time it takes for the page to become fully interactive. [Learn more](https://web.dev/interactive/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 921.8862,
      "numericUnit": "millisecond",
      "displayValue": "0.9 s"
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
      "scoreDisplayMode": "notApplicable",
      "displayValue": "",
      "details": {
        "type": "criticalrequestchain",
        "chains": {
          "D1F0CA0225A81CBBBF392AE3A8E9393C": {
            "request": {
              "url": "https://frontend-optimisation-course-three.vercel.app/cta-ad.html",
              "startTime": 4800.347481,
              "endTime": 4800.379934,
              "responseReceivedTime": 4800.37942,
              "transferSize": 832
            }
          }
        },
        "longestChain": {
          "duration": 32.45299999980489,
          "length": 1,
          "transferSize": 832
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
      "title": "Content is not sized correctly for the viewport",
      "description": "If the width of your app's content doesn't match the width of the viewport, your app might not be optimized for mobile screens. [Learn more](https://web.dev/content-width/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "explanation": "The viewport size of 980px does not match the window size of 360px."
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
      "title": "Minimizes main-thread work",
      "description": "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/mainthread-work-breakdown/)",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 317.1680000000001,
      "numericUnit": "millisecond",
      "displayValue": "0.3 s",
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
            "group": "scriptEvaluation",
            "groupLabel": "Script Evaluation",
            "duration": 170.50800000000024
          },
          {
            "group": "other",
            "groupLabel": "Other",
            "duration": 68.84399999999995
          },
          {
            "group": "scriptParseCompile",
            "groupLabel": "Script Parsing & Compilation",
            "duration": 42.339999999999996
          },
          {
            "group": "styleLayout",
            "groupLabel": "Style & Layout",
            "duration": 21.52
          },
          {
            "group": "paintCompositeRender",
            "groupLabel": "Rendering",
            "duration": 13.399999999999984
          },
          {
            "group": "parseHTML",
            "groupLabel": "Parse HTML & CSS",
            "duration": 0.556
          }
        ]
      }
    },
    "bootup-time": {
      "id": "bootup-time",
      "title": "JavaScript execution time",
      "description": "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/bootup-time/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 196.55600000000018,
      "numericUnit": "millisecond",
      "displayValue": "0.2 s",
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
            "url": "chrome-extension://kjacjjdnoddnpbbcjilcajfhhbdhkpgk/content.js",
            "total": 208.8400000000002,
            "scripting": 152.87200000000018,
            "scriptParseCompile": 38.156
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/cta-ad.html",
            "total": 54.58,
            "scripting": 4.488,
            "scriptParseCompile": 1.04
          }
        ],
        "summary": {
          "wastedMs": 196.55600000000018
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
      "title": "All text remains visible during webfont loads",
      "description": "Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://web.dev/font-display/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "warnings": [],
      "details": {
        "type": "table",
        "headings": [],
        "items": []
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
            "numRequests": 3,
            "numScripts": 1,
            "numStylesheets": 0,
            "numFonts": 0,
            "numTasks": 156,
            "numTasksOver10ms": 1,
            "numTasksOver25ms": 1,
            "numTasksOver50ms": 0,
            "numTasksOver100ms": 0,
            "numTasksOver500ms": 0,
            "rtt": 0.031799999999999995,
            "throughput": 25774919.657238457,
            "maxRtt": 0.031799999999999995,
            "maxServerLatency": 31.3862,
            "totalByteWeight": 3006,
            "totalTaskTime": 79.29200000000006,
            "mainDocumentTransferSize": 832
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
            "url": "https://frontend-optimisation-course-three.vercel.app/cta-ad.html",
            "protocol": "h2",
            "rendererStartTime": 0,
            "startTime": 0.8879999995770049,
            "endTime": 33.34099999938189,
            "finished": true,
            "transferSize": 832,
            "resourceSize": 731,
            "statusCode": 200,
            "mimeType": "text/html",
            "resourceType": "Document",
            "priority": "VeryHigh",
            "experimentalFromMainFrame": true
          },
          {
            "url": "chrome-extension://ienfalfjdbdpebioblfackkekamfmbnh/app/detect_angular_for_extension_icon_bundle.js",
            "protocol": "chrome-extension",
            "rendererStartTime": 52.64999999963038,
            "startTime": 52.64999999963038,
            "endTime": 85.42399999987538,
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
            "url": "https://frontend-optimisation-course-three.vercel.app/favicon.ico",
            "protocol": "h2",
            "rendererStartTime": 95.71199999936653,
            "startTime": 96.24100000019098,
            "endTime": 128.54199999947014,
            "finished": true,
            "transferSize": 1530,
            "resourceSize": 4286,
            "statusCode": 200,
            "mimeType": "image/vnd.microsoft.icon",
            "resourceType": "Other",
            "priority": "High",
            "experimentalFromMainFrame": true
          }
        ],
        "debugData": {
          "type": "debugdata",
          "networkStartTimeTs": 4800346593
        }
      }
    },
    "network-rtt": {
      "id": "network-rtt",
      "title": "Network Round Trip Times",
      "description": "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more](https://hpbn.co/primer-on-latency-and-bandwidth/).",
      "score": null,
      "scoreDisplayMode": "informative",
      "numericValue": 0.031799999999999995,
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
            "origin": "https://frontend-optimisation-course-three.vercel.app",
            "rtt": 0.031799999999999995
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
      "numericValue": 31.3862,
      "numericUnit": "millisecond",
      "displayValue": "30 ms",
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
            "origin": "https://frontend-optimisation-course-three.vercel.app",
            "serverResponseTime": 31.3862
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
            "duration": 7.101,
            "startTime": 42.167
          },
          {
            "duration": 32.252,
            "startTime": 53.273
          },
          {
            "duration": 6.812,
            "startTime": 87.886
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
      "numericValue": 922,
      "numericUnit": "millisecond",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "firstContentfulPaint": 804,
            "firstMeaningfulPaint": 804,
            "largestContentfulPaint": 804,
            "interactive": 922,
            "speedIndex": 804,
            "totalBlockingTime": 68,
            "maxPotentialFID": 129,
            "cumulativeLayoutShift": 0,
            "cumulativeLayoutShiftMainFrame": 0,
            "totalCumulativeLayoutShift": 0,
            "observedTimeOrigin": 0,
            "observedTimeOriginTs": 4800346234,
            "observedNavigationStart": 0,
            "observedNavigationStartTs": 4800346234,
            "observedFirstPaint": 49,
            "observedFirstPaintTs": 4800395371,
            "observedFirstContentfulPaint": 49,
            "observedFirstContentfulPaintTs": 4800395371,
            "observedFirstContentfulPaintAllFrames": 49,
            "observedFirstContentfulPaintAllFramesTs": 4800395371,
            "observedFirstMeaningfulPaint": 49,
            "observedFirstMeaningfulPaintTs": 4800395371,
            "observedLargestContentfulPaint": 49,
            "observedLargestContentfulPaintTs": 4800395371,
            "observedLargestContentfulPaintAllFrames": 49,
            "observedLargestContentfulPaintAllFramesTs": 4800395371,
            "observedTraceEnd": 2463,
            "observedTraceEndTs": 4802809229,
            "observedLoad": 88,
            "observedLoadTs": 4800433966,
            "observedDomContentLoaded": 39,
            "observedDomContentLoadedTs": 4800385087,
            "observedCumulativeLayoutShift": 0,
            "observedCumulativeLayoutShiftMainFrame": 0,
            "observedTotalCumulativeLayoutShift": 0,
            "observedFirstVisualChange": 107,
            "observedFirstVisualChangeTs": 4800453234,
            "observedLastVisualChange": 107,
            "observedLastVisualChangeTs": 4800453234,
            "observedSpeedIndex": 108,
            "observedSpeedIndexTs": 4800453898
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
      "displayValue": "2 requests • 1 KiB",
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
            "requestCount": 2,
            "transferSize": 1476
          },
          {
            "resourceType": "document",
            "label": "Document",
            "requestCount": 1,
            "transferSize": 832
          },
          {
            "resourceType": "script",
            "label": "Script",
            "requestCount": 1,
            "transferSize": 644
          },
          {
            "resourceType": "stylesheet",
            "label": "Stylesheet",
            "requestCount": 0,
            "transferSize": 0
          },
          {
            "resourceType": "image",
            "label": "Image",
            "requestCount": 0,
            "transferSize": 0
          },
          {
            "resourceType": "media",
            "label": "Media",
            "requestCount": 0,
            "transferSize": 0
          },
          {
            "resourceType": "font",
            "label": "Font",
            "requestCount": 0,
            "transferSize": 0
          },
          {
            "resourceType": "other",
            "label": "Other",
            "requestCount": 0,
            "transferSize": 0
          },
          {
            "resourceType": "third-party",
            "label": "Third-party",
            "requestCount": 1,
            "transferSize": 644
          }
        ]
      }
    },
    "third-party-summary": {
      "id": "third-party-summary",
      "title": "Minimize third-party usage",
      "description": "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
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
              "lhId": "page-0-H2",
              "path": "0,HTML,1,BODY,0,DIV,0,DIV,0,H2",
              "selector": "body > div.bg-gray-50 > div.max-w-7xl > h2.text-3xl",
              "boundingRect": {
                "top": 8,
                "bottom": 35,
                "left": 8,
                "right": 972,
                "width": 964,
                "height": 27
              },
              "snippet": "<h2 class=\"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl\">",
              "nodeLabel": "Ready to dive in? Start your free trial today."
            }
          }
        ]
      }
    },
    "lcp-lazy-loaded": {
      "id": "lcp-lazy-loaded",
      "title": "Largest Contentful Paint image was not lazily loaded",
      "description": "Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. [Learn more](https://web.dev/lcp-lazy-loading/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "layout-shift-elements": {
      "id": "layout-shift-elements",
      "title": "Avoid large layout shifts",
      "description": "These DOM elements contribute most to the CLS of the page.",
      "score": null,
      "scoreDisplayMode": "notApplicable",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "long-tasks": {
      "id": "long-tasks",
      "title": "Avoid long main-thread tasks",
      "description": "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn more](https://web.dev/long-tasks-devtools/)",
      "score": null,
      "scoreDisplayMode": "informative",
      "displayValue": "1 long task found",
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
            "url": "chrome-extension://kjacjjdnoddnpbbcjilcajfhhbdhkpgk/firefox-rafz-fix.js",
            "duration": 129,
            "startTime": 804.3862
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
      "scoreDisplayMode": "notApplicable",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "unsized-images": {
      "id": "unsized-images",
      "title": "Image elements have explicit `width` and `height`",
      "description": "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn more](https://web.dev/optimize-cls/#images-without-dimensions)",
      "score": null,
      "scoreDisplayMode": "notApplicable",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
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
      "score": null,
      "scoreDisplayMode": "notApplicable"
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
          "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABR3dHB0AAABoAAAABRyVFJDAAABtAAAAChnVFJDAAABtAAAAChiVFJDAAABtAAAAChjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAEcAbwBvAGcAbABlAC8AUwBrAGkAYQAvADgAOAAzADgARQBDADIARAAzAEUARgA4ADAAQQA1ADAAMgA2AEQANAA2ADMANwA5AEIAOQBBAEEAQQA1ADUAOFhZWiAAAAAAAAB5JAAAOroAAAC4WFlaIAAAAAAAAFsjAAC2lAAAFLZYWVogAAAAAAAAIokAAA6yAAC9xlhZWiAAAAAAAAD21gABAAAAANMtcGFyYQAAAAAABAAAAAJmZgAA8qcAAA1ZAAAT0AAAClsAAAAAAAAAAG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAGxIUFxQRGxcWFx4cGyAoQisoJSUoUTo9MEJgVWVkX1VdW2p4mYFqcZBzW12FtYaQnqOrratngLzJuqbHmairpP/bAEMBHB4eKCMoTisrTqRuXW6kpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpP/AABEIBs4BaAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAwIEAQX/xAArEAEAAgIBAwMDAwUBAAAAAAAAAQIDERIEITEFQVETImEUMoEVIzNxkdH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABkRAQEAAwEAAAAAAAAAAAAAAAABEUFRYf/aAAwDAQACEQMRAD8A+z13XX6TNjx1x4rfUiZib5eG5jXaO07mdqT1/T13F7TW9axNq8ZmY3rt28z3jtHzDzquhx9VkrbLa+q1mvCNanf8b32j39krek4bWyWtkyTbJERe0xXdta8zx99d48fgGsvqeGl8MV3euTvMxE9o4zMT47z28eVMnW4sfTTn++aRMR2pO53rWu3fzCFfTKYfp2w5MkziiONLWiK2mImI3PGZ8Trsv+jpPRV6bvSsamOM74zE77bj5BvF1WHNz4X/AMf7txMa/PfzHae/4ctfVsM3vyia0pM/dxtMzERE71x/K+HosWL6v3XvGSOOrTHavftGvbvKOP0rHS02tnzZNxMTF+Op3WK+0fEQDojq8M5a4ucxe29RNZjxv/yf96Tj1Hp4vwvfjabTWI4276mI+PmYI9Pwx1GHPuZvipwiZis7j+Y3E9/bSeT0rHkyc5z5onlNu3H3tFtePmINitOpyzOeL9PNZxRuIrblyjv2/wB9vH5hLF6njtSlsvCIvymLY7TeuojczM6jX8uucW6ZK87Rz33jUTXtrt2c0+nUmJmc+bnPKbXiaxM7iI9o14iPHwDf9Q6aYrq9pm0TMRGO29ROp7a7al7XrcM4sOSecRmjdY4WmfG/j4/6n0/puHp5rwvfVa3rFe2tWnc+I/Dc9LrFgwa548cxPK1tWjXjxHf49ge/r+m3aOc/baKz9lvMzr479409wdb0/UX4Yr2tPGLfst4mNx7J29Oxzz1kyRNrRasxr7Pu5du3z87b6PoqdJvhkyWia1r92u0RGo8QCWD1PFkifqxOPfKaxq0/bE63PaNeFsXWdPmvWlMm7WjcRxmP4n4ntPbz2Sr6biitq2yZL1tjtjmLa7xM7nxHk6b0vB02auWn7q14/spG/PxWNefbQNR6j0+5j74nlakR9O07mvnWoTv6pir01slNXyVxfV4RuImNRP7tfmPz3UjoKVyc4y5I+69ojtqOXn2Q/ouDWvq5v8X0t7rvjqI14/BPR1ZetxYcv08nKJinOZiszHnUR29/wnk9Rw1yYa0nlGWe8944xqZ3Pb8ePLefoqZr85vetuMV7a9p3E+PMSlPpeLnS1c2as11M6mPumN957ee8+AVp1/T3is1teeW9f27e3n2dLhwenY+n+njpHLHS85OU21MW1rtERrXl2Via1iJtNpiPM63P/AaAAAAAAAAAAAAAAAAAAAAAAABmbRFuMz31t5OTHHm9f8ArOXBXLbc3vHbX2zpj9HTe/qZN+P3KkgtzpvXKu/jZF6TOotEz/tGejpPnJk8a8vadLWl4vF7zO5nvJidFwEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==",
          "width": 980,
          "height": 1742
        },
        "nodes": {
          "page-0-H2": {
            "top": 8,
            "bottom": 35,
            "left": 8,
            "right": 972,
            "width": 964,
            "height": 27
          },
          "7-0-A": {
            "top": 55,
            "bottom": 73,
            "left": 8,
            "right": 82,
            "width": 74,
            "height": 18
          },
          "7-1-BODY": {
            "top": 8,
            "bottom": 4735,
            "left": 8,
            "right": 972,
            "width": 964,
            "height": 4727
          },
          "7-2-HTML": {
            "top": 0,
            "bottom": 4743,
            "left": 0,
            "right": 980,
            "width": 980,
            "height": 4743
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
      "score": null,
      "scoreDisplayMode": "notApplicable"
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
      "title": "Background and foreground colors have a sufficient contrast ratio",
      "description": "Low-contrast text is difficult or impossible for many users to read. [Learn more](https://web.dev/color-contrast/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
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
      "title": "Document doesn't have a `<title>` element",
      "description": "The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more](https://web.dev/document-title/).",
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
              "lhId": "7-2-HTML",
              "path": "0,HTML",
              "selector": "html",
              "boundingRect": {
                "top": 0,
                "bottom": 1742,
                "left": 0,
                "right": 980,
                "width": 980,
                "height": 1742
              },
              "snippet": "<html>",
              "nodeLabel": "html",
              "explanation": "Fix any of the following:\n  Document does not have a non-empty <title> element"
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "impact": "serious",
          "tags": [
            "cat.text-alternatives",
            "wcag2a",
            "wcag242",
            "ACT"
          ]
        }
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
      "title": "Heading elements appear in a sequentially-descending order",
      "description": "Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more](https://web.dev/heading-order/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "html-has-lang": {
      "id": "html-has-lang",
      "title": "`<html>` element does not have a `[lang]` attribute",
      "description": "If a page doesn't specify a lang attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more](https://web.dev/html-has-lang/).",
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
              "lhId": "7-2-HTML",
              "path": "0,HTML",
              "selector": "html",
              "boundingRect": {
                "top": 0,
                "bottom": 1742,
                "left": 0,
                "right": 980,
                "width": 980,
                "height": 1742
              },
              "snippet": "<html>",
              "nodeLabel": "html",
              "explanation": "Fix any of the following:\n  The <html> element does not have a lang attribute"
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "impact": "serious",
          "tags": [
            "cat.language",
            "wcag2a",
            "wcag311",
            "ACT"
          ]
        }
      }
    },
    "html-lang-valid": {
      "id": "html-lang-valid",
      "title": "`<html>` element has a valid value for its `[lang]` attribute",
      "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn more](https://web.dev/html-lang-valid/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "image-alt": {
      "id": "image-alt",
      "title": "Image elements have `[alt]` attributes",
      "description": "Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more](https://web.dev/image-alt/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
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
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "listitem": {
      "id": "listitem",
      "title": "List items (`<li>`) are contained within `<ul>` or `<ol>` parent elements",
      "description": "Screen readers require list items (`<li>`) to be contained within a parent `<ul>` or `<ol>` to be announced properly. [Learn more](https://web.dev/listitem/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
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
      "score": null,
      "scoreDisplayMode": "notApplicable"
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
      "title": "Uses efficient cache policy on static assets",
      "description": "A long cache lifetime can speed up repeat visits to your page. [Learn more](https://web.dev/uses-long-cache-ttl/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "byte",
      "displayValue": "0 resources found",
      "details": {
        "type": "table",
        "headings": [],
        "items": [],
        "summary": {
          "wastedBytes": 0
        }
      }
    },
    "total-byte-weight": {
      "id": "total-byte-weight",
      "title": "Avoids enormous network payloads",
      "description": "Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://web.dev/total-byte-weight/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 3006,
      "numericUnit": "byte",
      "displayValue": "Total size was 3 KiB",
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
            "url": "https://frontend-optimisation-course-three.vercel.app/favicon.ico",
            "totalBytes": 1530
          },
          {
            "url": "https://frontend-optimisation-course-three.vercel.app/cta-ad.html",
            "totalBytes": 832
          },
          {
            "url": "chrome-extension://ienfalfjdbdpebioblfackkekamfmbnh/app/detect_angular_for_extension_icon_bundle.js",
            "totalBytes": 644
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
    "unminified-css": {
      "id": "unminified-css",
      "title": "Minify CSS",
      "description": "Minifying CSS files can reduce network payload sizes. [Learn more](https://web.dev/unminified-css/).",
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
    "unused-javascript": {
      "id": "unused-javascript",
      "title": "Reduce unused JavaScript",
      "description": "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn more](https://web.dev/unused-javascript/).",
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
    "modern-image-formats": {
      "id": "modern-image-formats",
      "title": "Serve images in next-gen formats",
      "description": "Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://web.dev/uses-webp-images/).",
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
    "uses-optimized-images": {
      "id": "uses-optimized-images",
      "title": "Efficiently encode images",
      "description": "Optimized images load faster and consume less cellular data. [Learn more](https://web.dev/uses-optimized-images/).",
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
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "doctype": {
      "id": "doctype",
      "title": "Page lacks the HTML doctype, thus triggering quirks-mode",
      "description": "Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more](https://web.dev/doctype/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "explanation": "Document must contain a doctype"
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
      "numericValue": 11,
      "numericUnit": "element",
      "displayValue": "11 elements",
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
            "value": 11
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-0-A",
              "path": "0,HTML,1,BODY,0,DIV,0,DIV,1,DIV,0,DIV,0,A",
              "selector": "div.max-w-7xl > div.mt-8 > div.ml-3 > a.inline-flex",
              "boundingRect": {
                "top": 55,
                "bottom": 73,
                "left": 8,
                "right": 82,
                "width": 74,
                "height": 18
              },
              "snippet": "<a href=\"#\" class=\"inline-flex items-center justify-center px-5 py-3 border border-transparen…\">",
              "nodeLabel": "Learn more"
            },
            "statistic": "Maximum DOM Depth",
            "value": 6
          },
          {
            "node": {
              "type": "node",
              "lhId": "7-1-BODY",
              "path": "0,HTML,1,BODY",
              "selector": "body",
              "boundingRect": {
                "top": 8,
                "bottom": 1734,
                "left": 8,
                "right": 972,
                "width": 964,
                "height": 1726
              },
              "snippet": "<body>",
              "nodeLabel": "body"
            },
            "statistic": "Maximum Child Elements",
            "value": 2
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
      "title": "Avoids front-end JavaScript libraries with known security vulnerabilities",
      "description": "Some third-party scripts may contain known security vulnerabilities that are easily identified and exploited by attackers. [Learn more](https://web.dev/no-vulnerable-libraries/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "js-libraries": {
      "id": "js-libraries",
      "title": "Detected JavaScript libraries",
      "description": "All front-end JavaScript libraries detected on the page. [Learn more](https://web.dev/js-libraries/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
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
      "title": "Document does not have a meta description",
      "description": "Meta descriptions may be included in search results to concisely summarize page content. [Learn more](https://web.dev/meta-description/).",
      "score": 0,
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
      "title": "Document doesn't use legible font sizes",
      "description": "Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more](https://web.dev/font-size/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "explanation": "Text is illegible because there's no viewport meta tag optimized for mobile screens."
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
      "title": "Links are crawlable",
      "description": "Search engines may use `href` attributes on links to crawl websites. Ensure that the `href` attribute of anchor elements links to an appropriate destination, so more pages of the site can be discovered. [Learn More](https://support.google.com/webmasters/answer/9112205)",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
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
      "score": 0,
      "scoreDisplayMode": "binary",
      "explanation": "Tap targets are too small because there's no viewport meta tag optimized for mobile screens"
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
      "score": 1
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
          "weight": 0,
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
          "weight": 0,
          "group": "a11y-language"
        },
        {
          "id": "image-alt",
          "weight": 0,
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
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "listitem",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "meta-refresh",
          "weight": 0,
          "group": "a11y-best-practices"
        },
        {
          "id": "meta-viewport",
          "weight": 0,
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
      "score": 0.78
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
      "score": 0.92
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
          "weight": 0,
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
      "score": 0.5
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
      "score": 0
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
        "startTime": 65.4,
        "name": "lh:init:config",
        "duration": 151.1,
        "entryType": "measure"
      },
      {
        "startTime": 68.4,
        "name": "lh:config:requireGatherers",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 69.2,
        "name": "lh:config:requireAudits",
        "duration": 90.6,
        "entryType": "measure"
      },
      {
        "startTime": 216.7,
        "name": "lh:runner:gather",
        "duration": 9201.4,
        "entryType": "measure"
      },
      {
        "startTime": 217,
        "name": "lh:init:connect",
        "duration": 2.3,
        "entryType": "measure"
      },
      {
        "startTime": 219.3,
        "name": "lh:gather:loadBlank",
        "duration": 64.3,
        "entryType": "measure"
      },
      {
        "startTime": 219.5,
        "name": "lh:driver:navigate",
        "duration": 64,
        "entryType": "measure"
      },
      {
        "startTime": 283.8,
        "name": "lh:gather:getVersion",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 284.5,
        "name": "lh:gather:getBenchmarkIndex",
        "duration": 1004.5,
        "entryType": "measure"
      },
      {
        "startTime": 1289.1,
        "name": "lh:gather:setupDriver",
        "duration": 21.7,
        "entryType": "measure"
      },
      {
        "startTime": 1306.3,
        "name": "lh:prepare:navigationMode",
        "duration": 4.4,
        "entryType": "measure"
      },
      {
        "startTime": 1310.9,
        "name": "lh:driver:navigate",
        "duration": 7.2,
        "entryType": "measure"
      },
      {
        "startTime": 1310.9,
        "name": "lh:gather:loadBlank",
        "duration": 7.2,
        "entryType": "measure"
      },
      {
        "startTime": 1310.9,
        "name": "lh:gather:runPass-defaultPass",
        "duration": 7899.3,
        "entryType": "measure"
      },
      {
        "startTime": 1318.2,
        "name": "lh:prepare:navigation",
        "duration": 34.9,
        "entryType": "measure"
      },
      {
        "startTime": 1319,
        "name": "lh:storage:clearDataForOrigin",
        "duration": 10.4,
        "entryType": "measure"
      },
      {
        "startTime": 1329.5,
        "name": "lh:storage:clearBrowserCaches",
        "duration": 22.7,
        "entryType": "measure"
      },
      {
        "startTime": 1352.3,
        "name": "lh:gather:prepareThrottlingAndNetwork",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 1353.2,
        "name": "lh:gather:beforePass:CSSUsage",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 1353.2,
        "name": "lh:gather:beforePass",
        "duration": 7.2,
        "entryType": "measure"
      },
      {
        "startTime": 1353.3,
        "name": "lh:gather:beforePass:JsUsage",
        "duration": 3.8,
        "entryType": "measure"
      },
      {
        "startTime": 1357.2,
        "name": "lh:gather:beforePass:ViewportDimensions",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1357.2,
        "name": "lh:gather:beforePass:ConsoleMessages",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 1358.4,
        "name": "lh:gather:beforePass:AnchorElements",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1358.4,
        "name": "lh:gather:beforePass:ImageElements",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1358.4,
        "name": "lh:gather:beforePass:LinkElements",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 1358.5,
        "name": "lh:gather:beforePass:MetaElements",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1358.5,
        "name": "lh:gather:beforePass:ScriptElements",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1358.5,
        "name": "lh:gather:beforePass:MainDocumentContent",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1358.5,
        "name": "lh:gather:beforePass:GlobalListeners",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1358.5,
        "name": "lh:gather:beforePass:Doctype",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1358.6,
        "name": "lh:gather:beforePass:DOMStats",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1358.6,
        "name": "lh:gather:beforePass:OptimizedImages",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1358.6,
        "name": "lh:gather:beforePass:PasswordInputsWithPreventedPaste",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1358.6,
        "name": "lh:gather:beforePass:ResponseCompression",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1358.6,
        "name": "lh:gather:beforePass:TagsBlockingFirstPaint",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 1359.1,
        "name": "lh:gather:beforePass:FontSize",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1359.1,
        "name": "lh:gather:beforePass:EmbeddedContent",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 1359.2,
        "name": "lh:gather:beforePass:RobotsTxt",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1359.2,
        "name": "lh:gather:beforePass:TapTargets",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1359.2,
        "name": "lh:gather:beforePass:Accessibility",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1359.2,
        "name": "lh:gather:beforePass:TraceElements",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 1359.6,
        "name": "lh:gather:beforePass:InspectorIssues",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 1360.2,
        "name": "lh:gather:beforePass:SourceMaps",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 1360.4,
        "name": "lh:gather:beforePass:FullPageScreenshot",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 1360.4,
        "name": "lh:gather:beginRecording",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 1362.1,
        "name": "lh:driver:navigate",
        "duration": 2464.2,
        "entryType": "measure"
      },
      {
        "startTime": 1362.1,
        "name": "lh:gather:loadPage-defaultPass",
        "duration": 2464.3,
        "entryType": "measure"
      },
      {
        "startTime": 3826.4,
        "name": "lh:gather:pass",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 3827.1,
        "name": "lh:gather:getTrace",
        "duration": 87.6,
        "entryType": "measure"
      },
      {
        "startTime": 3914.7,
        "name": "lh:gather:getDevtoolsLog",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 3915,
        "name": "lh:computed:NetworkRecords$N",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 3916.2,
        "name": "lh:gather:afterPass",
        "duration": 5293.9,
        "entryType": "measure"
      },
      {
        "startTime": 3919.2,
        "name": "lh:gather:afterPass:CSSUsage",
        "duration": 7.3,
        "entryType": "measure"
      },
      {
        "startTime": 3926.5,
        "name": "lh:gather:afterPass:JsUsage",
        "duration": 9.7,
        "entryType": "measure"
      },
      {
        "startTime": 3936.3,
        "name": "lh:gather:afterPass:ViewportDimensions",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 3937.4,
        "name": "lh:gather:afterPass:ConsoleMessages",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 3938.7,
        "name": "lh:gather:afterPass:AnchorElements",
        "duration": 5.7,
        "entryType": "measure"
      },
      {
        "startTime": 3944.4,
        "name": "lh:gather:afterPass:ImageElements",
        "duration": 3.1,
        "entryType": "measure"
      },
      {
        "startTime": 3947.5,
        "name": "lh:gather:afterPass:LinkElements",
        "duration": 1.7,
        "entryType": "measure"
      },
      {
        "startTime": 3949.2,
        "name": "lh:gather:afterPass:MetaElements",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 3950.7,
        "name": "lh:gather:afterPass:ScriptElements",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 3952.7,
        "name": "lh:gather:afterPass:MainDocumentContent",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 3953.8,
        "name": "lh:gather:afterPass:GlobalListeners",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 3955,
        "name": "lh:gather:afterPass:Doctype",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 3956.1,
        "name": "lh:gather:afterPass:DOMStats",
        "duration": 3.5,
        "entryType": "measure"
      },
      {
        "startTime": 3959.7,
        "name": "lh:gather:afterPass:OptimizedImages",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 3960.4,
        "name": "lh:gather:afterPass:PasswordInputsWithPreventedPaste",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 3961.9,
        "name": "lh:gather:afterPass:ResponseCompression",
        "duration": 5.5,
        "entryType": "measure"
      },
      {
        "startTime": 3967.4,
        "name": "lh:gather:afterPass:TagsBlockingFirstPaint",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 3969,
        "name": "lh:gather:afterPass:FontSize",
        "duration": 3.2,
        "entryType": "measure"
      },
      {
        "startTime": 3972.2,
        "name": "lh:gather:afterPass:EmbeddedContent",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 3973.8,
        "name": "lh:gather:afterPass:RobotsTxt",
        "duration": 45.3,
        "entryType": "measure"
      },
      {
        "startTime": 3973.9,
        "name": "lh:gather:getVersion",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 3975.4,
        "name": "lh:gather:getVersion",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 4019.1,
        "name": "lh:gather:afterPass:TapTargets",
        "duration": 7.4,
        "entryType": "measure"
      },
      {
        "startTime": 4026.5,
        "name": "lh:gather:afterPass:Accessibility",
        "duration": 63.3,
        "entryType": "measure"
      },
      {
        "startTime": 4089.8,
        "name": "lh:gather:afterPass:TraceElements",
        "duration": 12.9,
        "entryType": "measure"
      },
      {
        "startTime": 4090.4,
        "name": "lh:computed:ProcessedTrace$h",
        "duration": 7.1,
        "entryType": "measure"
      },
      {
        "startTime": 4097.5,
        "name": "lh:computed:ProcessedNavigation$7",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 4098.1,
        "name": "lh:computed:Responsiveness",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 4102.7,
        "name": "lh:gather:afterPass:InspectorIssues",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 4104,
        "name": "lh:gather:afterPass:SourceMaps",
        "duration": 16.6,
        "entryType": "measure"
      },
      {
        "startTime": 4104.3,
        "name": "lh:gather:getVersion",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 4104.3,
        "name": "lh:gather:getVersion",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 4104.3,
        "name": "lh:gather:getVersion",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 4120.6,
        "name": "lh:gather:afterPass:FullPageScreenshot",
        "duration": 5089.4,
        "entryType": "measure"
      },
      {
        "startTime": 9210.3,
        "name": "lh:gather:populateBaseArtifacts",
        "duration": 8.3,
        "entryType": "measure"
      },
      {
        "startTime": 9210.9,
        "name": "lh:gather:getInstallabilityErrors",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 9211.6,
        "name": "lh:gather:collectStacks",
        "duration": 6.9,
        "entryType": "measure"
      },
      {
        "startTime": 9219.3,
        "name": "lh:driver:navigate",
        "duration": 55.4,
        "entryType": "measure"
      },
      {
        "startTime": 9219.3,
        "name": "lh:gather:loadBlank",
        "duration": 55.5,
        "entryType": "measure"
      },
      {
        "startTime": 9219.3,
        "name": "lh:gather:runPass-offlinePass",
        "duration": 179.8,
        "entryType": "measure"
      },
      {
        "startTime": 9274.9,
        "name": "lh:gather:prepareThrottlingAndNetwork",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 9274.9,
        "name": "lh:prepare:navigation",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 9275.9,
        "name": "lh:gather:beforePass:ServiceWorker",
        "duration": 18,
        "entryType": "measure"
      },
      {
        "startTime": 9275.9,
        "name": "lh:gather:beforePass",
        "duration": 18,
        "entryType": "measure"
      },
      {
        "startTime": 9293.9,
        "name": "lh:gather:beginRecording",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 9294,
        "name": "lh:driver:navigate",
        "duration": 99.6,
        "entryType": "measure"
      },
      {
        "startTime": 9294,
        "name": "lh:gather:loadPage-offlinePass",
        "duration": 99.7,
        "entryType": "measure"
      },
      {
        "startTime": 9393.7,
        "name": "lh:gather:pass",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 9393.8,
        "name": "lh:gather:getDevtoolsLog",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 9394,
        "name": "lh:computed:NetworkRecords$N",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 9394.7,
        "name": "lh:gather:afterPass",
        "duration": 4.4,
        "entryType": "measure"
      },
      {
        "startTime": 9398.4,
        "name": "lh:gather:afterPass:ServiceWorker",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 9399.2,
        "name": "lh:gather:disconnect",
        "duration": 18.8,
        "entryType": "measure"
      },
      {
        "startTime": 9399.3,
        "name": "lh:storage:clearDataForOrigin",
        "duration": 18.6,
        "entryType": "measure"
      },
      {
        "startTime": 9418.3,
        "name": "lh:runner:audit",
        "duration": 357.6,
        "entryType": "measure"
      },
      {
        "startTime": 9418.4,
        "name": "lh:runner:auditing",
        "duration": 357.2,
        "entryType": "measure"
      },
      {
        "startTime": 9419,
        "name": "lh:audit:is-on-https",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 9420.7,
        "name": "lh:audit:service-worker",
        "duration": 1.8,
        "entryType": "measure"
      },
      {
        "startTime": 9423.5,
        "name": "lh:audit:viewport",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 9423.9,
        "name": "lh:computed:ViewportMeta",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 9424.8,
        "name": "lh:audit:first-contentful-paint",
        "duration": 5,
        "entryType": "measure"
      },
      {
        "startTime": 9425.1,
        "name": "lh:computed:FirstContentfulPaint$3",
        "duration": 4.1,
        "entryType": "measure"
      },
      {
        "startTime": 9425.2,
        "name": "lh:computed:PageDependencyGraph$a",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 9425.2,
        "name": "lh:computed:LanternFirstContentfulPaint$6",
        "duration": 3.9,
        "entryType": "measure"
      },
      {
        "startTime": 9426.8,
        "name": "lh:computed:NetworkAnalysis$1",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 9426.8,
        "name": "lh:computed:LoadSimulator$a",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 9430,
        "name": "lh:audit:largest-contentful-paint",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 9430.2,
        "name": "lh:computed:LargestContentfulPaint$2",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 9430.3,
        "name": "lh:computed:LanternLargestContentfulPaint$1",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 9431.8,
        "name": "lh:audit:first-meaningful-paint",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 9432,
        "name": "lh:computed:LanternFirstMeaningfulPaint$2",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 9432,
        "name": "lh:computed:FirstMeaningfulPaint$2",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 9433.2,
        "name": "lh:audit:speed-index",
        "duration": 73.5,
        "entryType": "measure"
      },
      {
        "startTime": 9433.4,
        "name": "lh:computed:Speedline$4",
        "duration": 70.1,
        "entryType": "measure"
      },
      {
        "startTime": 9433.4,
        "name": "lh:computed:LanternSpeedIndex$2",
        "duration": 72.4,
        "entryType": "measure"
      },
      {
        "startTime": 9433.4,
        "name": "lh:computed:SpeedIndex$2",
        "duration": 72.5,
        "entryType": "measure"
      },
      {
        "startTime": 9506.8,
        "name": "lh:audit:screenshot-thumbnails",
        "duration": 27.6,
        "entryType": "measure"
      },
      {
        "startTime": 9534.4,
        "name": "lh:audit:final-screenshot",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 9534.5,
        "name": "lh:computed:Screenshots$1",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 9535.4,
        "name": "lh:audit:total-blocking-time",
        "duration": 3.1,
        "entryType": "measure"
      },
      {
        "startTime": 9536.5,
        "name": "lh:computed:TotalBlockingTime$2",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 9536.6,
        "name": "lh:computed:LanternTotalBlockingTime$1",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 9536.7,
        "name": "lh:computed:LanternInteractive$4",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 9538.8,
        "name": "lh:audit:max-potential-fid",
        "duration": 1.8,
        "entryType": "measure"
      },
      {
        "startTime": 9539.3,
        "name": "lh:computed:LanternMaxPotentialFID$1",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 9539.3,
        "name": "lh:computed:MaxPotentialFID$2",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 9540.9,
        "name": "lh:audit:cumulative-layout-shift",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 9541.2,
        "name": "lh:computed:CumulativeLayoutShift$2",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 9542.4,
        "name": "lh:audit:errors-in-console",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 9542.9,
        "name": "lh:computed:JSBundles",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 9544.8,
        "name": "lh:audit:server-response-time",
        "duration": 1.8,
        "entryType": "measure"
      },
      {
        "startTime": 9545.3,
        "name": "lh:computed:MainResource$h",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 9546.9,
        "name": "lh:audit:interactive",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 9547.5,
        "name": "lh:computed:Interactive$4",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 9548.5,
        "name": "lh:audit:user-timings",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 9548.9,
        "name": "lh:computed:UserTimings$1",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 9550.5,
        "name": "lh:audit:critical-request-chains",
        "duration": 1.8,
        "entryType": "measure"
      },
      {
        "startTime": 9551,
        "name": "lh:computed:CriticalRequestChains$2",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 9552.5,
        "name": "lh:audit:redirects",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 9554.4,
        "name": "lh:audit:installable-manifest",
        "duration": 5,
        "entryType": "measure"
      },
      {
        "startTime": 9559.9,
        "name": "lh:audit:apple-touch-icon",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 9561.3,
        "name": "lh:audit:splash-screen",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 9561.6,
        "name": "lh:computed:ManifestValues$4",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 9562.6,
        "name": "lh:audit:themed-omnibox",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 9564,
        "name": "lh:audit:maskable-icon",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 9565.2,
        "name": "lh:audit:content-width",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 9566.4,
        "name": "lh:audit:image-aspect-ratio",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 9567.4,
        "name": "lh:audit:image-size-responsive",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 9568.5,
        "name": "lh:audit:preload-fonts",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 9569.5,
        "name": "lh:audit:deprecations",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 9570.4,
        "name": "lh:audit:mainthread-work-breakdown",
        "duration": 3.6,
        "entryType": "measure"
      },
      {
        "startTime": 9570.7,
        "name": "lh:computed:MainThreadTasks$8",
        "duration": 2.6,
        "entryType": "measure"
      },
      {
        "startTime": 9574.2,
        "name": "lh:audit:bootup-time",
        "duration": 2.2,
        "entryType": "measure"
      },
      {
        "startTime": 9576.5,
        "name": "lh:audit:uses-rel-preload",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 9577.1,
        "name": "lh:audit:uses-rel-preconnect",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 9578.3,
        "name": "lh:audit:font-display",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 9579.4,
        "name": "lh:audit:diagnostics",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 9579.8,
        "name": "lh:audit:network-requests",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 9580.9,
        "name": "lh:audit:network-rtt",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 9582.9,
        "name": "lh:audit:network-server-latency",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 9584.5,
        "name": "lh:audit:main-thread-tasks",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 9584.7,
        "name": "lh:audit:metrics",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 9584.8,
        "name": "lh:computed:TimingSummary$1",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 9585.1,
        "name": "lh:computed:FirstContentfulPaintAllFrames$1",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 9585.2,
        "name": "lh:computed:LargestContentfulPaintAllFrames$1",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 9586.3,
        "name": "lh:audit:performance-budget",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 9587,
        "name": "lh:computed:ResourceSummary$2",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 9587.8,
        "name": "lh:audit:timing-budget",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 9588.9,
        "name": "lh:audit:resource-summary",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 9590.5,
        "name": "lh:audit:third-party-summary",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 9592.7,
        "name": "lh:audit:third-party-facades",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 9593.9,
        "name": "lh:audit:largest-contentful-paint-element",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 9594.8,
        "name": "lh:audit:lcp-lazy-loaded",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 9595.6,
        "name": "lh:audit:layout-shift-elements",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 9596.3,
        "name": "lh:audit:long-tasks",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 9597.7,
        "name": "lh:audit:no-unload-listeners",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 9598.6,
        "name": "lh:audit:non-composited-animations",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 9599.4,
        "name": "lh:audit:unsized-images",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 9600.2,
        "name": "lh:audit:valid-source-maps",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 9601.2,
        "name": "lh:audit:preload-lcp-image",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 9602.2,
        "name": "lh:audit:csp-xss",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 9602.9,
        "name": "lh:audit:full-page-screenshot",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 9603,
        "name": "lh:audit:script-treemap-data",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 9603.3,
        "name": "lh:computed:ModuleDuplication$2",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 9603.4,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 9604.1,
        "name": "lh:audit:pwa-cross-browser",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 9604.7,
        "name": "lh:audit:pwa-page-transitions",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 9605.4,
        "name": "lh:audit:pwa-each-page-has-url",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 9606.1,
        "name": "lh:audit:accesskeys",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 9607,
        "name": "lh:audit:aria-allowed-attr",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 9607.8,
        "name": "lh:audit:aria-command-name",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 9609,
        "name": "lh:audit:aria-hidden-body",
        "duration": 3.6,
        "entryType": "measure"
      },
      {
        "startTime": 9613,
        "name": "lh:audit:aria-hidden-focus",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 9614.4,
        "name": "lh:audit:aria-input-field-name",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 9615.7,
        "name": "lh:audit:aria-meter-name",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 9617,
        "name": "lh:audit:aria-progressbar-name",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 9618.3,
        "name": "lh:audit:aria-required-attr",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 9619.9,
        "name": "lh:audit:aria-required-children",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 9621.7,
        "name": "lh:audit:aria-required-parent",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 9623.3,
        "name": "lh:audit:aria-roles",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 9624.7,
        "name": "lh:audit:aria-toggle-field-name",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 9626.5,
        "name": "lh:audit:aria-tooltip-name",
        "duration": 1.8,
        "entryType": "measure"
      },
      {
        "startTime": 9628.6,
        "name": "lh:audit:aria-treeitem-name",
        "duration": 1.8,
        "entryType": "measure"
      },
      {
        "startTime": 9630.6,
        "name": "lh:audit:aria-valid-attr-value",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 9632.2,
        "name": "lh:audit:aria-valid-attr",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 9634.1,
        "name": "lh:audit:button-name",
        "duration": 1.7,
        "entryType": "measure"
      },
      {
        "startTime": 9636.2,
        "name": "lh:audit:bypass",
        "duration": 3.6,
        "entryType": "measure"
      },
      {
        "startTime": 9640.1,
        "name": "lh:audit:color-contrast",
        "duration": 3.4,
        "entryType": "measure"
      },
      {
        "startTime": 9643.8,
        "name": "lh:audit:definition-list",
        "duration": 2.4,
        "entryType": "measure"
      },
      {
        "startTime": 9646.6,
        "name": "lh:audit:dlitem",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 9648.9,
        "name": "lh:audit:document-title",
        "duration": 4,
        "entryType": "measure"
      },
      {
        "startTime": 9653.2,
        "name": "lh:audit:duplicate-id-active",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 9655.4,
        "name": "lh:audit:duplicate-id-aria",
        "duration": 1.9,
        "entryType": "measure"
      },
      {
        "startTime": 9657.5,
        "name": "lh:audit:form-field-multiple-labels",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 9659.8,
        "name": "lh:audit:frame-title",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 9662.1,
        "name": "lh:audit:heading-order",
        "duration": 4.3,
        "entryType": "measure"
      },
      {
        "startTime": 9666.8,
        "name": "lh:audit:html-has-lang",
        "duration": 5.4,
        "entryType": "measure"
      },
      {
        "startTime": 9672.4,
        "name": "lh:audit:html-lang-valid",
        "duration": 2.4,
        "entryType": "measure"
      },
      {
        "startTime": 9674.9,
        "name": "lh:audit:image-alt",
        "duration": 2.3,
        "entryType": "measure"
      },
      {
        "startTime": 9677.5,
        "name": "lh:audit:input-image-alt",
        "duration": 2.5,
        "entryType": "measure"
      },
      {
        "startTime": 9680.2,
        "name": "lh:audit:label",
        "duration": 2.2,
        "entryType": "measure"
      },
      {
        "startTime": 9682.6,
        "name": "lh:audit:link-name",
        "duration": 3.8,
        "entryType": "measure"
      },
      {
        "startTime": 9686.6,
        "name": "lh:audit:list",
        "duration": 2.8,
        "entryType": "measure"
      },
      {
        "startTime": 9689.7,
        "name": "lh:audit:listitem",
        "duration": 3,
        "entryType": "measure"
      },
      {
        "startTime": 9693,
        "name": "lh:audit:meta-refresh",
        "duration": 3,
        "entryType": "measure"
      },
      {
        "startTime": 9696.5,
        "name": "lh:audit:meta-viewport",
        "duration": 4.2,
        "entryType": "measure"
      },
      {
        "startTime": 9700.9,
        "name": "lh:audit:object-alt",
        "duration": 2.7,
        "entryType": "measure"
      },
      {
        "startTime": 9703.9,
        "name": "lh:audit:tabindex",
        "duration": 3.6,
        "entryType": "measure"
      },
      {
        "startTime": 9707.9,
        "name": "lh:audit:td-headers-attr",
        "duration": 4.8,
        "entryType": "measure"
      },
      {
        "startTime": 9713.1,
        "name": "lh:audit:th-has-data-cells",
        "duration": 4.5,
        "entryType": "measure"
      },
      {
        "startTime": 9717.9,
        "name": "lh:audit:valid-lang",
        "duration": 3.3,
        "entryType": "measure"
      },
      {
        "startTime": 9721.4,
        "name": "lh:audit:video-caption",
        "duration": 3.9,
        "entryType": "measure"
      },
      {
        "startTime": 9725.3,
        "name": "lh:audit:custom-controls-labels",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 9725.3,
        "name": "lh:audit:custom-controls-roles",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 9725.4,
        "name": "lh:audit:focus-traps",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 9725.4,
        "name": "lh:audit:focusable-controls",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 9725.5,
        "name": "lh:audit:interactive-element-affordance",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 9725.5,
        "name": "lh:audit:logical-tab-order",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 9725.6,
        "name": "lh:audit:managed-focus",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 9725.6,
        "name": "lh:audit:offscreen-content-hidden",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 9725.6,
        "name": "lh:audit:use-landmarks",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 9725.6,
        "name": "lh:audit:visual-order-follows-dom",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 9725.8,
        "name": "lh:audit:uses-long-cache-ttl",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 9727.2,
        "name": "lh:audit:total-byte-weight",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 9728.2,
        "name": "lh:audit:offscreen-images",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 9729.6,
        "name": "lh:audit:render-blocking-resources",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 9730.1,
        "name": "lh:computed:UnusedCSS$3",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 9730.3,
        "name": "lh:computed:FirstContentfulPaint$3",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 9730.9,
        "name": "lh:audit:unminified-css",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 9731.8,
        "name": "lh:audit:unminified-javascript",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 9733.2,
        "name": "lh:audit:unused-css-rules",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 9734.3,
        "name": "lh:audit:unused-javascript",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 9735.8,
        "name": "lh:audit:modern-image-formats",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 9737,
        "name": "lh:audit:uses-optimized-images",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 9737.9,
        "name": "lh:audit:uses-text-compression",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 9738.8,
        "name": "lh:audit:uses-responsive-images",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 9739,
        "name": "lh:computed:ImageRecords$1",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 9740.1,
        "name": "lh:audit:efficient-animated-content",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 9741.2,
        "name": "lh:audit:duplicated-javascript",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 9742.4,
        "name": "lh:audit:legacy-javascript",
        "duration": 9.7,
        "entryType": "measure"
      },
      {
        "startTime": 9752.3,
        "name": "lh:audit:doctype",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 9753.3,
        "name": "lh:audit:charset",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 9754.4,
        "name": "lh:audit:dom-size",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 9756.1,
        "name": "lh:audit:geolocation-on-start",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 9757.1,
        "name": "lh:audit:inspector-issues",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 9758.1,
        "name": "lh:audit:no-document-write",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 9758.9,
        "name": "lh:audit:no-vulnerable-libraries",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 9759.7,
        "name": "lh:audit:js-libraries",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 9760.3,
        "name": "lh:audit:notification-on-start",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 9761.2,
        "name": "lh:audit:password-inputs-can-be-pasted-into",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 9761.9,
        "name": "lh:audit:uses-http2",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 9763.3,
        "name": "lh:audit:uses-passive-event-listeners",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 9764.2,
        "name": "lh:audit:meta-description",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 9765.3,
        "name": "lh:audit:http-status-code",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 9766.1,
        "name": "lh:audit:font-size",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 9767.2,
        "name": "lh:audit:link-text",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 9767.9,
        "name": "lh:audit:crawlable-anchors",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 9769,
        "name": "lh:audit:is-crawlable",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 9770.3,
        "name": "lh:audit:robots-txt",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 9771.2,
        "name": "lh:audit:tap-targets",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 9772.2,
        "name": "lh:audit:hreflang",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 9773.2,
        "name": "lh:audit:plugins",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 9774,
        "name": "lh:audit:canonical",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 9775,
        "name": "lh:audit:structured-data",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 9775.6,
        "name": "lh:runner:generate",
        "duration": 0.3,
        "entryType": "measure"
      }
    ],
    "total": 9559
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
      "lighthouse-core/audits/viewport.js | failureTitle": [
        "audits.viewport.title"
      ],
      "lighthouse-core/audits/viewport.js | description": [
        "audits.viewport.description"
      ],
      "lighthouse-core/audits/viewport.js | explanationNoTag": [
        "audits.viewport.explanation"
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
            "timeInMs": 804.3862
          },
          "path": "audits[first-contentful-paint].displayValue"
        },
        {
          "values": {
            "timeInMs": 804.3862
          },
          "path": "audits[largest-contentful-paint].displayValue"
        },
        {
          "values": {
            "timeInMs": 804.3862
          },
          "path": "audits[first-meaningful-paint].displayValue"
        },
        {
          "values": {
            "timeInMs": 804.3862
          },
          "path": "audits[speed-index].displayValue"
        },
        {
          "values": {
            "timeInMs": 921.8862
          },
          "path": "audits.interactive.displayValue"
        },
        {
          "values": {
            "timeInMs": 317.1680000000001
          },
          "path": "audits[mainthread-work-breakdown].displayValue"
        },
        {
          "values": {
            "timeInMs": 196.55600000000018
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
            "timeInMs": 67.5
          },
          "path": "audits[total-blocking-time].displayValue"
        },
        {
          "values": {
            "timeInMs": 129
          },
          "path": "audits[max-potential-fid].displayValue"
        },
        {
          "values": {
            "timeInMs": 0.031799999999999995
          },
          "path": "audits[network-rtt].displayValue"
        },
        {
          "values": {
            "timeInMs": 31.3862
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
      "lighthouse-core/audits/errors-in-console.js | title": [
        "audits[errors-in-console].title"
      ],
      "lighthouse-core/audits/errors-in-console.js | description": [
        "audits[errors-in-console].description"
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
            "timeInMs": 31.418
          },
          "path": "audits[server-response-time].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnURL": [
        "audits[server-response-time].details.headings[0].label",
        "audits[bootup-time].details.headings[0].text",
        "audits[network-rtt].details.headings[0].text",
        "audits[network-server-latency].details.headings[0].text",
        "audits[long-tasks].details.headings[0].text",
        "audits[valid-source-maps].details.headings[0].text",
        "audits[total-byte-weight].details.headings[0].text"
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
      "lighthouse-core/audits/content-width.js | failureTitle": [
        "audits[content-width].title"
      ],
      "lighthouse-core/audits/content-width.js | description": [
        "audits[content-width].description"
      ],
      "lighthouse-core/audits/content-width.js | explanation": [
        {
          "values": {
            "innerWidth": 980,
            "outerWidth": 360
          },
          "path": "audits[content-width].explanation"
        }
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
      "lighthouse-core/audits/mainthread-work-breakdown.js | title": [
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
      "lighthouse-core/audits/font-display.js | title": [
        "audits[font-display].title"
      ],
      "lighthouse-core/audits/font-display.js | description": [
        "audits[font-display].description"
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
            "requestCount": 2,
            "byteCount": 1476
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
        "audits[total-byte-weight].details.headings[1].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | totalResourceType": [
        "audits[resource-summary].details.items[0].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | documentResourceType": [
        "audits[resource-summary].details.items[1].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | scriptResourceType": [
        "audits[resource-summary].details.items[2].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | stylesheetResourceType": [
        "audits[resource-summary].details.items[3].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | imageResourceType": [
        "audits[resource-summary].details.items[4].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | mediaResourceType": [
        "audits[resource-summary].details.items[5].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | fontResourceType": [
        "audits[resource-summary].details.items[6].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | otherResourceType": [
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
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnElement": [
        "audits[largest-contentful-paint-element].details.headings[0].text",
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
      "lighthouse-core/audits/long-tasks.js | title": [
        "audits[long-tasks].title"
      ],
      "lighthouse-core/audits/long-tasks.js | description": [
        "audits[long-tasks].description"
      ],
      "lighthouse-core/audits/long-tasks.js | displayValue": [
        {
          "values": {
            "itemCount": 1
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
      "lighthouse-core/audits/unsized-images.js | title": [
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
      "lighthouse-core/lib/i18n/i18n.js | columnDescription": [
        "audits[csp-xss].details.headings[0].text"
      ],
      "lighthouse-core/audits/csp-xss.js | columnDirective": [
        "audits[csp-xss].details.headings[1].text"
      ],
      "lighthouse-core/audits/csp-xss.js | columnSeverity": [
        "audits[csp-xss].details.headings[2].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | itemSeverityHigh": [
        "audits[csp-xss].details.items[0].severity"
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
      "lighthouse-core/audits/accessibility/color-contrast.js | title": [
        "audits[color-contrast].title"
      ],
      "lighthouse-core/audits/accessibility/color-contrast.js | description": [
        "audits[color-contrast].description"
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
      "lighthouse-core/audits/accessibility/document-title.js | failureTitle": [
        "audits[document-title].title"
      ],
      "lighthouse-core/audits/accessibility/document-title.js | description": [
        "audits[document-title].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnFailingElem": [
        "audits[document-title].details.headings[0].text",
        "audits[html-has-lang].details.headings[0].text"
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
      "lighthouse-core/audits/accessibility/heading-order.js | title": [
        "audits[heading-order].title"
      ],
      "lighthouse-core/audits/accessibility/heading-order.js | description": [
        "audits[heading-order].description"
      ],
      "lighthouse-core/audits/accessibility/html-has-lang.js | failureTitle": [
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
      "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | title": [
        "audits[uses-long-cache-ttl].title"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | description": [
        "audits[uses-long-cache-ttl].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | displayValue": [
        {
          "values": {
            "itemCount": 0
          },
          "path": "audits[uses-long-cache-ttl].displayValue"
        }
      ],
      "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | title": [
        "audits[total-byte-weight].title"
      ],
      "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | description": [
        "audits[total-byte-weight].description"
      ],
      "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | displayValue": [
        {
          "values": {
            "totalBytes": 3006
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
      "lighthouse-core/audits/byte-efficiency/unminified-css.js | title": [
        "audits[unminified-css].title"
      ],
      "lighthouse-core/audits/byte-efficiency/unminified-css.js | description": [
        "audits[unminified-css].description"
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
      "lighthouse-core/audits/dobetterweb/doctype.js | failureTitle": [
        "audits.doctype.title"
      ],
      "lighthouse-core/audits/dobetterweb/doctype.js | description": [
        "audits.doctype.description"
      ],
      "lighthouse-core/audits/dobetterweb/doctype.js | explanationNoDoctype": [
        "audits.doctype.explanation"
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
            "itemCount": 11
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
      "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | title": [
        "audits[no-vulnerable-libraries].title"
      ],
      "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | description": [
        "audits[no-vulnerable-libraries].description"
      ],
      "lighthouse-core/audits/dobetterweb/js-libraries.js | title": [
        "audits[js-libraries].title"
      ],
      "lighthouse-core/audits/dobetterweb/js-libraries.js | description": [
        "audits[js-libraries].description"
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
      "lighthouse-core/audits/seo/meta-description.js | failureTitle": [
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
      "lighthouse-core/audits/seo/font-size.js | failureTitle": [
        "audits[font-size].title"
      ],
      "lighthouse-core/audits/seo/font-size.js | description": [
        "audits[font-size].description"
      ],
      "lighthouse-core/audits/seo/font-size.js | explanationViewport": [
        "audits[font-size].explanation"
      ],
      "lighthouse-core/audits/seo/link-text.js | title": [
        "audits[link-text].title"
      ],
      "lighthouse-core/audits/seo/link-text.js | description": [
        "audits[link-text].description"
      ],
      "lighthouse-core/audits/seo/crawlable-anchors.js | title": [
        "audits[crawlable-anchors].title"
      ],
      "lighthouse-core/audits/seo/crawlable-anchors.js | description": [
        "audits[crawlable-anchors].description"
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
      "lighthouse-core/audits/seo/tap-targets.js | explanationViewportMetaNotOptimized": [
        "audits[tap-targets].explanation"
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