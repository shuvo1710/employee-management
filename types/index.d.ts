import { ReactNode } from 'react';
import {
    AppBreadcrumbProps,
    AppMenuItem,
    AppMenuItemProps,
    AppTopbarRef,
    Breadcrumb,
    BreadcrumbItem,
    ChatContextProps,
    LayoutConfig,
    LayoutContextProps,
    LayoutState,
    MailContextProps,
    MenuContextProps,
    MenuModel,
    MenuProps,
    NodeRef,
    Page,
    TaskContextProps
} from './layout';
import { AppMailProps, AppMailReplyProps, AppMailSidebarItem, ChartDataState, ChartOptionsState, CustomEvent, Demo, LayoutType, SortOrderType } from './demo';

type ChildContainerProps = {
    children: ReactNode;
};

export type {
    Page,
    AppBreadcrumbProps,
    Breadcrumb,
    BreadcrumbItem,
    MenuProps,
    MenuModel,
    LayoutConfig,
    LayoutState,
    Breadcrumb,
    LayoutContextProps,
    MailContextProps,
    MenuContextProps,
    ChatContextProps,
    TaskContextProps,
    AppConfigProps,
    NodeRef,
    AppTopbarRef,
    AppMenuItemProps,
    ChildContainerProps,
    Demo,
    LayoutType,
    SortOrderType,
    CustomEvent,
    ChartDataState,
    ChartOptionsState,
    AppMailSidebarItem,
    AppMailReplyProps,
    AppMailProps,
    AppMenuItem
};
