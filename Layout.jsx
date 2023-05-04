const React = require("react");
const Navbar = require("./Navbar");

module.exports = function Layout({ title, children, peremennay }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
      </head>
      <body>
        <Navbar peremennay={peremennay} />
        {children}
      </body>
    </html>
  );
};
