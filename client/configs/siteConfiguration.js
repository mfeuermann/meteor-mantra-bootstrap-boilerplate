
import {DocHead} from 'meteor/kadira:dochead';

export default class siteConfiguration {

  // pridame titulek a popis
  addTitleDescription(title, description) {

    DocHead.setTitle(title);

    const metaInfo = {name: 'description', content: description};
    DocHead.addMeta(metaInfo);

  }
  addDefaultLoader() {

    const LoadingComponent = () => (<div><img src='reload.gif' width='16'/></div>);
    return LoadingComponent;

  }
}
