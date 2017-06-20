export default function renderFullPage(html,initialState) {
    let cssLink='<link rel="stylesheet" href="/css/listing.css" >';
    return `
        <html lang="en">
            <title>React V4</title>
            ${cssLink}
            <body>
                <div id="app">${html}</div>
           <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
            <script src='/static/bundle.js'></script>
            </body>
        </html>
        `
    }


