import React from 'react';
import {
  ColorModeProvider,
  TabGroupChoiceProvider,
  AnnouncementBarProvider,
  DocsPreferredVersionContextProvider,
  ScrollControllerProvider,
  NavbarProvider,
  PluginHtmlClassNameProvider,
} from '@docusaurus/theme-common';
export default function LayoutProviders({children}) {
  return (
    <ColorModeProvider>
      <AnnouncementBarProvider>
        <TabGroupChoiceProvider>
          <ScrollControllerProvider>
            <DocsPreferredVersionContextProvider>
              <PluginHtmlClassNameProvider>
                <NavbarProvider>{children}</NavbarProvider>
              </PluginHtmlClassNameProvider>
            </DocsPreferredVersionContextProvider>
          </ScrollControllerProvider>
        </TabGroupChoiceProvider>
      </AnnouncementBarProvider>
    </ColorModeProvider>
  );
}
