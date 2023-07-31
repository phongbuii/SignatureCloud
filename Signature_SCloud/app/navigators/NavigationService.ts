import {
    StackActions,
    NavigationAction,
    createNavigationContainerRef,
    DrawerActions,
} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params = {}): void {
    navigationRef?.navigate<never>(name, params);
}
export function dispatch(action: NavigationAction): void {
    navigationRef?.dispatch(action);
}
export function replace(name: string, params = {}): void {
    navigationRef?.dispatch(StackActions.replace(name, params));
}
export function push(name: string, params = {}): void {
    navigationRef?.dispatch(StackActions.push(name, params));
}
export function openDrawer() {
    navigationRef.dispatch(DrawerActions.openDrawer());
}
export function closeDrawer() {
    navigationRef.dispatch(DrawerActions.closeDrawer());
}
export function goBack(): void {
    console.log('GO_BACK', navigationRef?.canGoBack());
    if (navigationRef?.canGoBack()) {
        navigationRef.current?.goBack();
    } else {
        navigationRef?.dispatch(StackActions.replace('MainTabNavigator', {}));
    }
}
export default {
    navigate,
    dispatch,
    replace,
    push,
    goBack,
};
