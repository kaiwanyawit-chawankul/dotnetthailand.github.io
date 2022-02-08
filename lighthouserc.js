module.exports = {
    ci: {
      collect: {
            startServerCommand: "yarn start",
            startServerReadyPattern:"You can now view dotnet-thailand in the browser.",
            startServerReadyTimeout:30000,
            url: [
                "http://localhost:8000/"
            ],
            numberOfRuns: 1
      },
      assert: {
        assertions: {
          'categories:performance': ['warn', {minScore: 0.3}],
          'categories:accessibility': ['error', {minScore: 0.9}]
        }
      },
      upload: {
        /* Add configuration here */
        target: 'lhci',
        token: 'LHCI_TOKEN', // could also use LHCI_TOKEN variable instead
      },
    },
  };
