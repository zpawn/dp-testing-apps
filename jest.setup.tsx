import "regenerator-runtime/runtime";
import "@testing-library/jest-dom";
import "intersection-observer";
import ResizeObserver from "resize-observer-polyfill";
import { useQuery } from "@tanstack/react-query";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TextDecoder, TextEncoder } from "util";
import * as React from "react";
import { lightTheme } from "@deskpro/deskpro-ui";
import { mockTicketContext, mockClient } from "./mocks";
import type { IDeskproClient } from "@deskpro/app-sdk";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
global.TextEncoder = TextEncoder;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
global.TextDecoder = TextDecoder;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
global.React = React;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
global.ResizeObserver = ResizeObserver;

let currentContext: any = mockTicketContext;

export const setCurrentContext = (context: any) => {
  currentContext = context;
};

jest.mock("@deskpro/app-sdk", () => ({
  ...jest.requireActual("@deskpro/app-sdk"),
  useDeskproAppClient: () => ({ client: mockClient }),
  useDeskproAppEvents: (
    hooks: { [key: string]: (param: Record<string, unknown>) => void },
    deps: [] = []
  ) => {
    React.useEffect(() => {
      !!hooks.onChange && hooks.onChange(currentContext);
      !!hooks.onShow && hooks.onShow(currentContext);
      !!hooks.onReady && hooks.onReady(currentContext);
      !!hooks.onAdminSettingsChange && hooks.onAdminSettingsChange(currentContext.settings);
      /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, deps);
  },
  useInitialisedDeskproAppClient: (callback: (param: typeof mockClient) => void) => {
    callback(mockClient);
  },
  useDeskproLatestAppContext: () => ({ context: currentContext }),
  useDeskproAppTheme: () => ({ theme: lightTheme }),
  proxyFetch: async () => fetch,
  LoadingSpinner: () => <>Loading...</>,
  useQueryWithClient: (
    queryKey: string[],
    queryFn: (client: IDeskproClient) => Promise<void>,
    options: object,
  ) => useQuery(queryKey, () => queryFn(mockClient as never), options),
}));
