function runSandbox() {
  const code = document.getElementById("code-input").value;
  const iframe = document.getElementById("sandbox");

  const wrappedCode = `
    <body>
      <pre id="output"></pre>
      <script>
        const log = (...args) => {
          document.getElementById('output').textContent += args.join(' ') + '\\n';
        };
        console.log = log;

        try {
          ${code}
        } catch (e) {
          log('Error:', e.message);
        }
      <\/script>
    </body>
  `;

  iframe.srcdoc = wrappedCode;
}
