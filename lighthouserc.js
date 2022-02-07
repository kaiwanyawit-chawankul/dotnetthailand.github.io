module.exports = {
    ci: {
      collect: {
            startServerCommand: "NODE_ENV=production yarn start",
            url: [
                "http://localhost:3000/"
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
