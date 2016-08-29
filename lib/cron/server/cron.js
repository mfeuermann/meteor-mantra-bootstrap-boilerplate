import {SyncedCron} from 'meteor/percolate:synced-cron';

Meteor.startup(function () {

  // konfigurace cronu
  SyncedCron.config({
    log: false,
    utc: false,
    collectionTTL: 3000
  });

  SyncedCron.add({
    name: 'Simple cron function',
    schedule(parser) {
      return parser.text('every 1 seconds');
    },
    job() {
       // airportWorkerClassInstance.getFlightsInfo();
    }
  });

  // SyncedCron.start();

});
