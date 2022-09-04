import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { ThemeProvider } from "next-themes";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </NotificationsProvider>
        </MantineProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
