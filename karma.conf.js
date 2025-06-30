// Karma configuration file
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false,
      /* Empêcher les redirections et rechargements de page */
      useIframe: true,
      /* Éviter que les erreurs ne provoquent un rechargement complet */
      captureConsole: true,
      jasmine: {
        /* Augmenter le timeout pour éviter les erreurs de timeout */
        timeoutInterval: 30000, /* Augmenté à 30 secondes */
        /* Désactiver les tests aléatoires pour plus de stabilité */
        random: false,
        /* Empêcher les tests de faire des redirections */
        failFast: false
      }
    },
    jasmineHtmlReporter: {
      suppressAll: true
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessNoSandbox'],
    /* Définir un navigateur personnalisé pour plus de stabilité */
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-web-security',
          '--disable-dev-shm-usage',
          '--disable-extensions',
          '--remote-debugging-port=9222',
          '--disable-background-timer-throttling',
          '--disable-renderer-backgrounding',
          '--disable-backgrounding-occluded-windows',
          '--js-flags="--max_old_space_size=4096"',
          '--window-size=1920,1080'
        ]
      }
    },
    /* Augmenter les timeouts pour éviter les déconnexions */
    browserDisconnectTimeout: 30000,
    browserDisconnectTolerance: 5,
    browserNoActivityTimeout: 120000,
    captureTimeout: 120000,
    /* Limiter le nombre de tentatives de redémarrage du navigateur */
    retryLimit: 3,
    /* Exécuter les tests une seule fois et quitter */
    singleRun: true,
    /* Ne pas redémarrer automatiquement lors des changements de fichiers */
    restartOnFileChange: false,
    /* Limiter le nombre de navigateurs à démarrer simultanément */
    concurrency: 1
  });
};
