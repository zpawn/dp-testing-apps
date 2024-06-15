import { createElement } from "react";
import {
  RenderResult,
  render as testingLibraryRender,
  RenderOptions as TestingLibraryRenderOptions,
} from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { lightTheme, ThemeProvider } from "@deskpro/deskpro-ui";
import { DeskproAppProvider } from "@deskpro/app-sdk";
import type { FC, ReactElement, PropsWithChildren } from "react";
import type { ThemeProviderProps } from "@deskpro/deskpro-ui";

interface WrapperOptions {
  appSdk?: boolean;
  query?: boolean;
  theme?: boolean;
  router?: boolean|string;
}

interface RenderOptions extends TestingLibraryRenderOptions {
  wrappers: WrapperOptions;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry: 1,
      retryDelay: 1500,
    },
  },
});

const deskproAppProvider = {
  component: DeskproAppProvider,
};

const themeProvider = {
  component: ThemeProvider as FC<PropsWithChildren<unknown>>,
  props: {
    theme: lightTheme,
  } as ThemeProviderProps,
};

const routerProvider = {
  component: HashRouter,
};

const queryProvider = {
  component: QueryClientProvider,
  props: {
    client: queryClient,
  },
};

const wrap = <P>(node: ReactElement<P>, options?: WrapperOptions): ReactElement<P> => {
  let children = node;

  if (options?.appSdk) {
    children = createElement(deskproAppProvider.component, { children }) as ReactElement;
  }

  if (options?.theme) {
    children = createElement(themeProvider.component, themeProvider.props, children) as ReactElement;
  }

  if (options?.router) {
    if (typeof options?.router == "string") {
      window.history.pushState({}, "", `#${options.router}`)
    }

    children = createElement(routerProvider.component, {}, children) as ReactElement;
  }

  if (options?.query) {
    children = createElement(queryProvider.component, queryProvider.props, children) as ReactElement;
  }

  return children;
}

const render = (node: ReactElement, options?: RenderOptions): RenderResult => {
  return testingLibraryRender(wrap(node, options?.wrappers), options);
};

export { render, wrap };
