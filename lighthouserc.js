module.exports = {
    ci: {
      collect: {
            startServerCommand: "NODE_ENV=production yarn start",
            startServerReadyPattern:"You can now view",
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
