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
      // parser is a later.parse object
      return parser.text('every 1 minutes');
    },
    job() {


    }
  });


//  SyncedCron.start();

});
