import {
  fluentButton,
  fluentCard,
  fluentTab,
  fluentTabPanel,
  fluentTabs,
  fluentTextField,
  provideFluentDesignSystem,
} from '@fluentui/web-components';

export default () =>
  provideFluentDesignSystem().register(
    fluentButton(),
    fluentTab(),
    fluentTabPanel(),
    fluentTabs(),
    fluentTextField(),
    fluentCard()
  );
