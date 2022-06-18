import {
  fluentBadge,
  fluentButton,
  fluentCard,
  fluentDivider,
  fluentSwitch,
  fluentTab,
  fluentTabPanel,
  fluentTabs,
  fluentTextArea,
  fluentTextField,
  provideFluentDesignSystem
} from '@fluentui/web-components';

export default () => provideFluentDesignSystem().register(fluentComponents);

const fluentComponents = [
  fluentBadge(),
  fluentButton(),
  fluentCard(),
  fluentDivider(),
  fluentSwitch(),
  fluentTab(),
  fluentTabPanel(),
  fluentTabs(),
  fluentTextArea(),
  fluentTextField(),
];
