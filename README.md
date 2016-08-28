# Meteor 1.4 Mantra React Bootstrap boilerplate
Simple Meteor 1.4 boilerplate (Meteor.js + Mantra + ReactBootstrap + Logging + authentication)

### Features
- Simple admin template (powered by Bootswatch SpaceLab theme)
- Created with Mantra application architecture
- Using React Bootstrap
- Basic Meteor account password for user authentication
- Users roles integration (alanning:roles)
- User management
- Roles definition
- React Formsy integration (with validation examples)
- Custom Mantra CLI yaml (different method definition)
- Validated methods integration (mdg:validated-method)
- Logging to Loggly from client and server
- Cron jobs (percolate:synced-cron)
- Syncing time between server and client (mizzao:timesync)

### How to install

Clone GIT repo and call install command
```
npm install --save
```

### How to run

You can run with meteor command or edit ./run.sh
```
meteor
```

### Configuration

Default username and password : admin / admin
Delete folder /server/deleteAfterInstall (using for initial creating admin)
