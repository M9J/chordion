import {
  fluentButton,
  fluentTab,
  fluentTabPanel,
  fluentTabs,
  provideFluentDesignSystem,
} from '@fluentui/web-components';

export default () =>
  provideFluentDesignSystem().register(
    fluentButton(),
    fluentTab(),
    fluentTabPanel(),
    fluentTabs()
  );
