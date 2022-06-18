import {
  fluentBadge,
  fluentButton,
  fluentCard,
  fluentSwitch,
  fluentTab,
  fluentTabPanel,
  fluentTabs,
  fluentTextField,
  provideFluentDesignSystem
} from '@fluentui/web-components';

export default () =>
  provideFluentDesignSystem().register(
    fluentBadge(),
    fluentButton(),
    fluentCard(),
    fluentSwitch(),
    fluentTab(),
    fluentTabPanel(),
    fluentTabs(),
    fluentTextField()
  );
