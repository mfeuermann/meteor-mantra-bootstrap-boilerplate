export default {

  coords(Logger) {
    let parm = {};
    parm.file = Logger.f || null;
    parm.action = Logger.a || null;
    parm.user = Logger.u || null;
    parm.o1 = Logger.o1 || null;
//    parm.level = Logger.l || null;

    parm.ip = Meteor.isServer ?
                '127.0.0.1' :
                Logger.myIp || null;
    return parm;
  }

};
